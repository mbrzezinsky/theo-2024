import {getMyImages} from "~/server/queries";
import Image from "next/image";

export default async function Images() {
    const images = await getMyImages();

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {images.map((image) => (
                <div key={image.id} className="w-48 h-48 flex flex-col">
                    <Image src={image.url} style={{objectFit: "contain"}} alt={image.name} width={192} height={192}/>
                    <div>{image.name}</div>
                </div>
            ))}
        </div>
    )
}