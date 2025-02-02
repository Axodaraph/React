import { useEffect, useState } from "react";

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState();
  // efecto para recuperar la imagen
  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ").slice(0, 3).join(" ");
    console.log(threeFirstWords);

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50`, {
      method: "GET",
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error en al solicitud: ${res.status}`);
        }
        return res.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
        console.log(blob);
      })
      .catch((error) => {
        console.error("Error al cargar la imagen: ", error);
      });
  }, [fact]);

  return { imageUrl };
};
