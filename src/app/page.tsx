import {db} from "~/server/db";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import Images from "~/app/_components/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {

    return (
        <main className="">
            <SignedOut>
                <div className = "w-full text-center h-full text-2xl">
                    Please sign in to view this page
                </div>
            </SignedOut>
            <SignedIn>
                <Images/>
            </SignedIn>
        </main>
    );
}
