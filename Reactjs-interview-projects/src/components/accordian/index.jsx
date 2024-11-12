// single selection
// multiple selection
import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentID) {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  }

  function handleMultiSelection(getCurrentID) {
    let cpyMutiple = [...multiple];
    const findIndexofCurrentId = cpyMutiple.indexOf(getCurrentID);

    if (findIndexofCurrentId === -1) cpyMutiple.push(getCurrentID);
    else cpyMutiple.splice(findIndexofCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  return (
    <>
      <div className="flex h-screen w-full justify-center items-center flex-col gap-5 box-border">
        <button
          className="bg-yellow-500 p-2  text-black border-2 border-black border-solid font-medium"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          Enable Multi Selection
        </button>
        <div className="w-[500px]">
          {data && data.length > 0 ? (
            data.map((dataItme) => (
              <div key={dataItme.id} className="bg-yellow-500 mb-3 py-3 px-5">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItme.id)
                      : () => handleSingleSelection(dataItme.id)
                  }
                  className="text-white flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-xl font-medium">{dataItme.question}</h3>
                  <span>
                    {selected === dataItme.id ||
                    multiple.indexOf(dataItme.id) !== -1
                      ? "-"
                      : "+"}
                  </span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItme.id) !== -1 && (
                      <div className="text-white h-auto py-3 px-2">
                        {dataItme.answer}
                      </div>
                    )
                  : selected === dataItme.id && (
                      <div className="text-white h-auto py-3 px-2">
                        {dataItme.answer}
                      </div>
                    )}
                {/* {selected === dataItme.id ||
                multiple.indexOf(dataItme.id) !== -1 ? (
                  <div className="text-white h-auto py-3 px-2">
                    {dataItme.answer}
                  </div>
                ) : null} */}
              </div>
            ))
          ) : (
            <div>No Data Found !</div>
          )}
        </div>
      </div>
    </>
  );
}
