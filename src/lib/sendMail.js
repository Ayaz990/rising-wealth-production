const nodemailer = require("nodemailer");

const sendMail = async (formData, emailReceivers = [], path = '', pageUrl = '') => {
  try {
    // Validate formData
    if (!formData || Object.keys(formData).length === 0) {
      throw new Error("Invalid or empty formData provided");
    }

    // Validate emailReceivers
    if (!Array.isArray(emailReceivers) || emailReceivers.length === 0) {
      throw new Error("Invalid or empty emailReceivers provided");
    }

    // Validate path
    if (!path) {
      throw new Error("Path is required");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    let html = "";

    // Generate HTML content from formData
    Object.keys(formData).forEach((item) => {
      if (formData[item] && formData[item].label && formData[item].data !== undefined) {
        html += `<p><b>${formData[item].label}</b> : ${formData[item].data}</p>`;
      } else {
        console.warn(`formData item is missing label or data: ${item}`);
      }
    });

    // Here you can add more HTML content
    html += `...`;

    const pathTitle = path.split("/");
    const title = pathTitle[pathTitle.length - 1]
      .split("-")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");

    // Construct the email
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: emailReceivers.join(", "), // Convert array to string
      subject: `New submission from ${title}`,
      html: html,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info.response; // Return the response if needed
  } catch (error) {
    console.error("sendMail error =====> ", error.message);
    throw error;
  }
};

module.exports = sendMail;
