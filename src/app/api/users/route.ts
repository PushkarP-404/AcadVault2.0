import { NextResponse, type NextRequest } from "next/server";
import { User } from "@/models/user.model";
import { connectMongoDB } from "@/lib/mongodb.config";
import { withApiAuth } from "@/lib/server-helper-functions";

export const GET = withApiAuth(async (_req: NextRequest) => {
    try {
        await connectMongoDB();
        const users = await User.countDocuments();
        return NextResponse.json({ success: true, data: users });
    } catch (err) {
        console.error("Error: ", err);
        return NextResponse.json(
            { success: false, error: err instanceof Error ? err.message : "Unknown error" },
            { status: 500 },
        );
    }
});
