import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { PrismaClient } from "@/src/generated/prisma/client";
import {nextCookies} from "better-auth/next-js";

const prisma = new PrismaClient();
export const auth = betterAuth({

    emailAndPassword: {
        enabled: true,
        minPasswordLength: 6,
    },
    
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),



    plugins: [nextCookies()]
});

