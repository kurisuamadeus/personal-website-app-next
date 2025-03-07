import axios from "axios";

export async function POST(req) {
    try {
        const body = await req.json();

        // Forward the request to backend
        const backendResponse = await axios.post(`${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}/sendmessage`, body, {
            headers: { "Content-Type": "application/json" },
        });

        return Response.json(backendResponse.data, { status: backendResponse.status });
    } catch (error) {
        return Response.json({
            code: error.response?.status || 500,
            error: "Failed to submit contact form"

        }, { status: error.response?.status || 500 });
    }
}