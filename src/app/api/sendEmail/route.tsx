import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        // Parse incoming JSON data from the request
        const { subject, message, mail } = await request.json();
        console.log("Received subject:", subject);
        console.log("Received message:", message);
        console.log("Received message:", mail);

        // Check if environment variable for email password is set
        if (!process.env.EMAIL_PASSWORD) {
            console.error("EMAIL_PASSWORD environment variable is not defined");
            return NextResponse.json({ message: "Email password not configured" }, { status: 500 });
        }

        // Configure the nodemailer transporter with Zoho SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.in', // Correct SMTP server for Zoho
            port: 465,            // Use port 465 for SSL, or 587 for TLS
            secure: true,         // true for port 465, false for port 587
            auth: {
                user: 'vinryde44@zohomail.in',  // Your Zoho email address
                pass: process.env.EMAIL_PASSWORD // Use non-public environment variable
            }
        });

        // Mail options configuration
        const mailOption = {
            from: 'vinryde44@zohomail.in',  // Must match the `auth.user` email
            to: 'vinryde33@gmail.com',       // Recipient email
            subject: "Send Email Tutorial",
            html: `
                <h3>Hello, National Gulf!</h3>
                <li>Subject: ${subject}</li>
                <li> E-mail: ${mail}</li>
                 <li>Message: ${message}</li>

            `
        };

        // Attempt to send the email
        await transporter.sendMail(mailOption);

        // Return a success response
        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        // Log detailed error information
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to Send Email", error: (error as Error).message }, { status: 500 });
    }
}
