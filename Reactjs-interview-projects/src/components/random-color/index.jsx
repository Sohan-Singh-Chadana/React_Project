import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #7879778
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    let rbgColor = `rgb(${r},${g},${b})`;

    setColor(rbgColor);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <>
      <div
        className={`w-screen h-screen`}
        style={{
          background: color,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="mt-10">
          <button
            className="border border-white p-3 m-2 bg-slate-600"
            onClick={() => setTypeOfColor("hex")}
          >
            Generate HEX Color
          </button>
          <button
            className="border border-white p-3 m-2 bg-slate-600"
            onClick={() => setTypeOfColor("rgb")}
          >
            Create RGB Color
          </button>
          <button
            className="border border-white p-3 m-2 bg-slate-600"
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor
            }
          >
            Generate Random Color
          </button>
        </div>
        <div className="felx justify-center items-center text-white text-6xl mt-12 flex-col gap-10 ">
          <h3 className="mb-20">
            {typeOfColor === "rgb" ? "RBG Color" : "HEX Color"}
          </h3>
          <h1 className="text-9xl">{color}</h1>
        </div>
      </div>
    </>
  );
}
