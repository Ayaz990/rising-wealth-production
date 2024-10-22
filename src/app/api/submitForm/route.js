import sendMail from "@/lib/sendMail";
import jsonData from "../../data.json";

export async function POST(request) {
    try {
        let body = await request.json();
        let webhookUrl;
        let formData = {}; // Initialize formData to ensure it's always defined
        let pageUrl = body.pageUrl;
        let emailReceivers = jsonData.emailReceivers;
        let title; // Declare title variable

        switch (body.path) {
            case "/video-sequence":
                console.log("video path");
                webhookUrl = process.env.VIDEO_SEQUENCE_WEBHOOK_URL;
                formData = {
                    fullName: { label: "Name", data: body.fullName },
                    phone: { label: "Phone", data: body.phone },
                };
                emailReceivers = jsonData.sequenceEmailReceivers;
                title = "Video Sequence"; // Set title for this case
                break;

            case "/manufacturing-video-sequence":
                console.log("manufacturing path");
                webhookUrl = process.env.MANUFACTURING_VIDEO_SEQUENCE_URL;
                formData = {
                    fullName: { label: "Name", data: body.fullName },
                    phone: { label: "Phone", data: body.phone },
                };
                emailReceivers = jsonData.sequenceEmailReceivers;
                title = "Manufacturing Video Sequence"; // Set title for this case
                break;

            case "/contact-us":
                console.log("contact-us path");
                webhookUrl = process.env.CONTACT_WEBHOOK_URL;
                formData = {
                    fullName: { label: "Name", data: body.fullName },
                    phone: { label: "Phone", data: body.phone },
                    email: { label: "Email", data: body.email },
                    city: { label: "City", data: body.city },
                };
                title = "Contact Us"; // Set title for this case
                break;

            case "/free-strategy-blueprint":
                console.log("strategy blueprint path");
                webhookUrl = process.env.STRATEGY_BLUE_PRINT_URL;
                formData = {
                    fullName: { label: "Name", data: body.fullName },
                    phone: { label: "Phone", data: body.phone },
                    email: { label: "Email", data: body.email },
                    company: { label: "Company", data: body.company },
                    city: { label: "City", data: body.city },
                    designation: { label: "Designation", data: body.designation },
                    companyWebsite: {
                        label: "Company Website",
                        data: body.companyWebsite,
                    },
                    facebookPageLink: {
                        label: "Facebook Page Link",
                        data: body.facebookPageLink,
                    },
                    instagramProfileLink: {
                        label: "Instagram Profile Link",
                        data: body.instagramProfileLink,
                    },
                    howGenerateLeadsNow: {
                        label: "How do you generate leads right now?",
                        data: body.howGenerateLeadsNow,
                    },
                    whatElseTried: {
                        label: "What else tried in past?",
                        data: body.whatElseTried,
                    },
                    didUseSocialMedia: {
                        label: "Did use social media to generate leads?",
                        data: body.didUseSocialMedia,
                    },
                    yourCompetition: {
                        label: "Who is Competition?",
                        data: body.yourCompetition,
                    },
                };
                title = "Free Strategy Blueprint"; // Set title for this case
                break;

            case "/digital-marketing-for-real-estate":
                console.log("real-estate path");
                webhookUrl = process.env.REAL_ESTATE_WEBHOOK_URL;
                formData = {
                    fullName: { label: "Name", data: body.fullName },
                    phone: { label: "Phone", data: body.phone },
                    email: { label: "Email", data: body.email },
                    city: { label: "City", data: body.city },
                };
                title = "Digital Marketing for Real Estate"; // Set title for this case
                break;

            case "/digital-marketing-consultation":
                console.log("consultation path");
                webhookUrl = process.env.CONSULTATION_WEBHOOK_URL;
                formData = {
                    fullName: { label: "Name", data: body.fullName },
                    phone: { label: "Phone", data: body.phone },
                    email: { label: "Email", data: body.email },
                    city: { label: "City", data: body.city },
                };
                title = "Digital Marketing Consultation"; // Set title for this case
                break;

            default:
                webhookUrl = process .env.CONTACT_WEBHOOK_URL;
                title = "Default"; // Set default title
                break;
        }

        console.log("body ===> ", body);

        if (!formData || typeof formData !== 'object' || Array.isArray(formData)) {
            console.error("Invalid formData:", formData);
            throw new Error("formData must be a valid object");
        }

        try {
            await sendMail(formData, emailReceivers, body.path, pageUrl, title); // Pass title to sendMail
        } catch (error) {
            console.error("Error sending mail:", error);
            // Handle the error accordingly
        }

        delete body["path"];
        delete body["pageUrl"];

        const webHookData = await fetch(webhookUrl, {
            method: "POST",
            body: JSON.stringify(body),
        });
        const res = await webHookData.json();

        console.log("api response", res);

        return Response.json(res);
    } catch (error) {
        console.log("seercer", error);
        throw error;
    }
}
