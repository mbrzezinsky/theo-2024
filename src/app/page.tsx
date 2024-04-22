import {db} from "~/server/db";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import Images from "~/app/_components/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
    const images = await db.query.images.findMany({
        orderBy: (model, {desc}) => desc(model.id),
    });

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
            {/*<div className="flex flex-wrap gap-4">*/}
            {/*    {[...images, ...images, ...images].map((image, index) => (*/}
            {/*        <div key={image.id + "-" + index} className="w-48 flex flex-col">*/}
            {/*            <img src={image.url}/>*/}
            {/*            <div>{image.name}</div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </main>
    );
}
