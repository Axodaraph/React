export const saveGameStorage = ({ board, turn }) => {
  // guardar aqui partida
  globalThis.localStorage.setItem("board", JSON.stringify(board));
  globalThis.localStorage.setItem("turn", turn);
};

export const resetGameStorage = () => {
  globalThis.localStorage.removeItem("board");
  globalThis.localStorage.removeItem("turn");
};
