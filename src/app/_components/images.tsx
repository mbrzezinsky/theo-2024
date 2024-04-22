import {db} from "~/server/db";

export default async function Images() {
    const images = await db.query.images.findMany({
        orderBy: (model, {desc}) => desc(model.id),
    });

    return (
        <div className="flex flex-wrap gap-4">
            {[...images, ...images, ...images].map((image, index) => (
                <div key={image.id + "-" + index} className="w-48 flex flex-col">
                    <img src={image.url}/>
                    <div>{image.name}</div>
                </div>
            ))}
        </div>
    )
}