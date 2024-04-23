import {db} from "~/server/db";
import {getImages} from "~/server/queries";

export default async function Images() {
    const images = await getImages();

    return (
        <div className="flex flex-wrap gap-4">
            {images.map((image) => (
                <div key={image.id} className="w-48 flex flex-col">
                    <img src={image.url} alt="iamge"/>
                    <div>{image.name}</div>
                </div>
            ))}
        </div>
    )
}