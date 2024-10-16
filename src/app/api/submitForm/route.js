import sendMail from "@/lib/sendMail"; // Ensure correct import based on export
import jsonData from "../../data.json";

export async function POST(request) {
  try {
    let body = await request.json();
    let webhookUrl;
    let formData = {};
    let pageUrl = body.pageUrl;
    let emailReceivers = jsonData.emailReceivers;

    // Check if body contains path
    if (!body.path) {
      throw new Error("Path is required in request body");
    }

    switch (body.path) {
      case "/video-sequence":
      case "/manufacturing-video-sequence":
        console.log(`${body.path} path`);
        webhookUrl = process.env[`${body.path.toUpperCase().replace(/\//g, "_")}_WEBHOOK_URL`];
        formData = {
          fullName: { label: "Name", data: body.fullName },
          phone: { label: "Phone", data: body.phone },
        };
        emailReceivers = jsonData.sequenceEmailReceivers; // Ensure email receivers are set
        break;

      case "/contact-us":
        console.log("contact-us path");
        webhookUrl = process.env.CONTACT_WEBHOOK_URL;
        formData = {
          fullName: { label: "Name", data: body.fullName },
          phone: { label: "Phone", data: body.phone },
          email: { label: "Email", data: body.email },
          city: { label: "City", data: body.city },
          query: { label: "Query", data: body.query },
        };
        break;

      case "/free-strategy-blueprint":
        console.log("strategy blueprint path");
        // Implement the required logic here
        break;

      default:
        webhookUrl = process.env.CONTACT_WEBHOOK_URL;
        break;
    }

    console.log("body ===> ", body);
    console.log("formData ===> ", formData); // Log formData to inspect

    // Use await to handle sendMail
    try {
      const sendMailResponse = await sendMail(formData, emailReceivers, body.path, pageUrl);
      console.log(sendMailResponse);
    } catch (error) {
      console.error("Error sending mail:", error);
    }

    delete body["path"];
    delete body["pageUrl"];

    const webHookData = await fetch(webhookUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await webHookData.json();
    console.log("api response", res);

    return Response.json(res);
  } catch (error) {
    console.log("server error", error);
    return Response.error("Server error: " + error.message);
  }
}
