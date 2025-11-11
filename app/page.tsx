

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import {Button} from "@/components/ui/button";
import {signOut} from "@/lib/actions/auth-actions";
import SignoutButton from "@/components/signout-button";

export default async function Page() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });



    return (
        <div>
            {session ? (
                <p>Logado como: {session.user?.email || session.user?.name}</p>
            ) : (
                <p>Não está logado</p>
            )}



        </div>
    );
}
