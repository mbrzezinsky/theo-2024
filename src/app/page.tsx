import {db} from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
    "https://utfs.io/f/c59a076d-d7fc-4abf-978e-1233c4ddd8ba-c3f0v5.jpg",
    "https://utfs.io/f/db6a622d-57b7-4911-b741-b8591cc76156-xdlva9.jpg",
    "https://utfs.io/f/d9f50511-1640-4fc8-a11c-cbfc87230262-xdlva6.jpg",
    "https://utfs.io/f/044aa41a-8510-4648-9e84-57d600acdbd6-c3f0w0.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
}));

export default async function HomePage() {
    const images = await db.query.posts.findMany();
    console.log(images);

    return (
        <main className="">
            <div className="flex flex-wrap gap-4">
                {images.map((image) => (<div key={image.id}>{image.name}</div>))}
                {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
                    <div key={image.id + "-" + index} className="w-48">
                        <img src={image.url} alt="" className="w-full"/>
                    </div>
                ))
                }
            </div>
        </main>
    );
}
