import { NextResponse, NextRequest } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export async function GET(request: NextRequest) {
    // Get the next_cursor token from the frontend URL query parameters
    const { searchParams } = new URL(request.url);
    const cursor = searchParams.get("cursor") || undefined;

    try {
        const response = await cloudinary.search
            .expression("resource_type:image")
            // Sort by oldest first or newest first, but keep it STRICTLY consistent
            .sort_by("created_at", "desc")
            .max_results(40) // Load 40 images per batch
            .next_cursor(cursor)
            .execute();

        const urls = response.resources.map((res: any) => res.secure_url);

        return NextResponse.json({
            photos: urls,
            nextCursor: response.next_cursor || null, // Send back the next token
        });
    } catch (error) {
        console.error("Cloudinary Fetch Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch images from Cloudinary" },
            { status: 500 },
        );
    }
}
