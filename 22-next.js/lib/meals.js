import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export default async function getMeals() {
  await new Promise((timeout) => setTimeout(timeout, 100));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // * Save image to disk
  // ! We don't save images directly in db, but in public folder
  // * Save instead path of the image instead
  const extension = meal.image.name.split(".").pop(); // get file extension
  const fileName = `${meal.slug}-${Date.now()}.${extension}`; // create filename for the image

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) throw new Error("Saving image failed");
  });
  meal.image = `/images/${fileName}`;

  return db
    .prepare(
      `
    INSERT INTO meals (
      slug,
      title,
      summary,
      instructions,
      image,
      creator,
      creator_email
    )
    VALUES (
      @slug,
      @title,
      @summary,
      @instructions,
      @image,
      @creator,
      @creator_email
    )
  `,
    )
    .run(meal);
}
