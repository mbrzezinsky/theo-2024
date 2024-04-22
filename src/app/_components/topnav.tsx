import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

export default function Topnav() {
    return (
        <nav className={"flex items-center justify-between w-full p-4 text-xl font-semibold border-b"}>
            <div>Gallery</div>
            <div>
                <SignedOut>
                    <SignInButton></SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton></UserButton>
                </SignedIn>
            </div>
        </nav>
    )
}