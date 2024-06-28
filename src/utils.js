export async function getPokemonCardInfo(id) {
  return {
    id,
    imgUrl:
      "https://picsum.photos/seed/" + Math.random().toString() + "/250.webp",
  };
}
