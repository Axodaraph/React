import { getRandomFact } from "../services/facts";
import { useState, useEffect } from "react";

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshRandomFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };
  //efecto para recuperar la cita al cargar la pagina
  useEffect(refreshRandomFact, []);

  return { fact, refreshRandomFact };
};
