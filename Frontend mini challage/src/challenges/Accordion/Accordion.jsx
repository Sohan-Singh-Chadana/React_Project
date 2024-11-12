import React, { useEffect, useState } from "react";

function Accordion({ openAccordionId, setIdofOpenAccordion, title, id, info }) {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((prevState) => !prevState);
    setIdofOpenAccordion(id);
  };

  useEffect(() => {
    if (openAccordionId) {
      setShow(openAccordionId === id);
    }
  }, [id, openAccordionId]);

  return (
    <>
      <div
        key={id}
        className="p-2.5 mb-3 text-sm text-center border border-gray-400 cursor-pointer rounded  "
        onClick={toggle}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{title}</h3>
          <button className="flex  justify-center w-8 min-w-8 h-8 ml-4 text-xl text-white cursor-pointer  bg-[rgb(209,209,209)] border-transparent rounded-full">
            {show ? "-" : "+"}
          </button>
        </div>
        {show && (
          <p className="text-left my-2.5 duration-200 ease-in-out">{info}</p>
        )}
      </div>
    </>
  );
}

export default Accordion;
