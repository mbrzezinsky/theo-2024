import "server-only";
import {db} from "~/server/db";

export async function getImages() {
    return await db.query.images.findMany({
        orderBy: (model, {desc}) => desc(model.id),
    });
}