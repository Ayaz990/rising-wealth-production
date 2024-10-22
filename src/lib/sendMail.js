const nodemailer = require("nodemailer");
const date = require("date-and-time");
require('dotenv').config(); // Load environment variables from .env file

// Function to escape HTML to prevent injection attacks
const escapeHtml = (unsafe) => {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

// Function to validate email format
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Main function to send email
const sendMail = async (formData, emailReceivers, path, pageUrl, title) => {
    console.log("Received formData:", formData);
    
    // Validate input
    if (!formData || typeof formData !== 'object' || Array.isArray(formData)) {
        console.error("Invalid formData:", formData);
        throw new Error("formData must be a valid object");
    }

    // Check environment variables
    if (!process.env.FROM_EMAIL || !process.env.EMAIL_PASS) {
        throw new Error("Email configuration is missing. Please check your environment variables.");
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.EMAIL_PASS,
            },
        });

        let html = "<h2>Form Submission Details</h2>";

        for (const [key, value] of Object.entries(formData)) {
            console.log(`Processing key: ${key}, value: ${JSON.stringify(value)}`);
            if (value.label && value.data) {
                html += `<p><b>${escapeHtml(value.label)}</b>: ${escapeHtml(value.data)}</p>`;
            } else {
                console.warn(`Missing label or data for key: ${key}`);
            }
        }

        html += `
        <br/>
        <p><b>Date</b>: ${date.format(new Date(), "MMMM D, YYYY")}</p>
        <p><b>Time</b>: ${date.format(new Date(), "hh:mm A")}</p>
        <p><b>Page URL</b>: ${escapeHtml(pageUrl)}</p>
        <p><b>Path</b>: ${escapeHtml(path)}</p>
        `;

        console.log("HTML content to be sent:", html);

        if (!validateEmail(emailReceivers)) {
            throw new Error("Invalid email address provided.");
        }

        const message = {
            from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
            to: emailReceivers,
            subject: `New Form Submission for ${title}`,
            html: html,
        };

        const info = await transporter.sendMail(message);
        console.log("Message sent:", info.messageId);
        return { response: info.response };
    } catch (error) {
        console.error(`sendMail error for subject "${title}":`, error.message);
        throw error;
    }
};

module.exports = sendMail;