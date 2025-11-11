import React from 'react'
import {Button} from "@/components/ui/button";
import {signOut} from "@/lib/actions/auth-actions";

const SignoutButton = () => {

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div><Button onClick={handleSignOut}>Logout</Button></div>
    )
}
export default SignoutButton
