import { NextResponse, type NextRequest } from "next/server";
import { User } from "@/models/user.model";
import { connectMongoDB } from "@/lib/mongodb.config";
import { getCurrentUser, withApiAuth } from "@/lib/server-helper-functions";

interface UpdateUsernameBody {
    email: string;
    username: string;
}

export const POST = withApiAuth(async (req: NextRequest) => {
    try {
        const { email, username } = (await req.json()) as UpdateUsernameBody;
        const user = await getCurrentUser();
        if (user?.email?.toLowerCase() !== email.toLowerCase()) {
            return NextResponse.json({ success: false, error: "Not authorized" }, { status: 403 });
        }

        await connectMongoDB();
        const userDatabase = await User.findOne({ email });
        if (!userDatabase) {
            return NextResponse.json({ success: false, error: "User not found in the DB" });
        }
        userDatabase.name = username;
        userDatabase.emailVerified = true;
        const updatedUser = await userDatabase.save();
        return NextResponse.json({ success: true, data: updatedUser });
    } catch (err) {
        console.error("Error: ", err);
        return NextResponse.json(
            { success: false, error: err instanceof Error ? err.message : "Unknown error" },
            { status: 500 },
        );
    }
});
