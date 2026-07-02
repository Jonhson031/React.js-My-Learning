// * Storing uploaded images

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

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.creator) ||
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.image ||
    isInvalidText(meal.creator_email) ||
    isInvalidEmail(meal.creator_email)
  ) {
    return { error: "Invalid input data." };
  }

  await saveMeal(meal);
  redirect("/meals");
}
