import React, { useState } from "react";

const randoms = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
];

const Random = (children) => {
  const [random, setRandom] = useState();
  const hanldeRandom = () => {
    setRandom(Math.floor(Math.random() * randoms.length));
  };
  return (
    <>
      <article className="mx-4 text-center">
        <h1 className="mx-4 my-2 border-2 rounded">{random || "Chưa có số"}</h1>
        <button
          className="px-4 py-3 border-2 text-slate-950  rounded"
          onClick={hanldeRandom}
        >
          Random
        </button>
      </article>
    </>
  );
};

export default Random;
