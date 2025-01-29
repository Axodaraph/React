import { useEffect, useState } from "react";

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState();
  // efecto para recuperar la imagen
  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ").slice(0, 3).join(" ");
    console.log(threeFirstWords);

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50`).then(
      (data) => {
        const { url } = data;
        setImageUrl(url);
        console.log(data);
      }
    );
  }, [fact]);

  return { imageUrl };
};
