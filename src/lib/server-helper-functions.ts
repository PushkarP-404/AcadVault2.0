import { getServerSession, type Session } from "next-auth";
import { NextResponse, type NextRequest } from "next/server";
import { authOptions } from "@/lib/next-auth.config";
import type { FilenameInput } from "@/types";

export const generateFilename = ({
    courseName,
    materialType,
    year,
    exam,
    number,
    referenceBookName,
}: FilenameInput): string => {
    if (referenceBookName) return referenceBookName;
    if (exam) {
        return `${courseName} ${exam} ${year} ${materialType.split(" ")[1]} ${materialType.split(" ")[2]}`;
    }
    return `${courseName} Assignment-${number} ${materialType.split(" ")[1]} ${year}`;
};

export const getExtention = (fileName: string): string => {
    const arr = fileName.split(".");
    return arr[arr.length - 1];
};

export const getSession = async (): Promise<Session | null> => {
    const session = await getServerSession(authOptions);
    return session;
};

export const getCurrentUser = async (): Promise<Session["user"] | null> => {
    const session = await getSession();
    if (!session) return null;
    return session.user;
};

type ApiRouteHandler = (request: NextRequest) => Promise<Response>;

export const withApiAuth = (
    handler: ApiRouteHandler,
    options: { resourceManager?: boolean } = {},
): ApiRouteHandler =>
    async (request: NextRequest) => {
        const user = await getCurrentUser();
        if (!user) {
            return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 });
        }

        if (options.resourceManager && !(await isResourceManager(user.id))) {
            return NextResponse.json({ success: false, error: "Not authorized" }, { status: 403 });
        }

        return handler(request);
    };

export const isResourceManager = async (id: string | undefined | null): Promise<boolean> => {
    if (!id) return false;
    return (process.env.RESOURCE_MANAGERS ?? "")
        .split(",")
        .map((managerID) => managerID.trim())
        .includes(id);
};
