import { useState } from "react";
import questions from "./data";
import Accordion from "./Accordion";
function App() {
  const [multiple, setMultiple] = useState(true);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const setIdofOpenAccordion = (id = null) => {
    setOpenAccordionId(multiple ? null : id);
  };

  const onMultipleChange = () => {
    if (multiple) {
      setOpenAccordionId(-1);
    }
    setMultiple(!multiple);
  };

  return (
    <div className="text-center container mx-auto mt-12">
      <h4>
        <label htmlFor="max-open">Is multiple open accordion allowed ? </label>
        <input
          type="checkbox"
          checked={multiple}
          id="max-open"
          onChange={onMultipleChange}
          className="cursor-pointer"
        />
      </h4>
      <div className="mt-10">
        {questions.map((question) => (
          <Accordion
            key={question.id}
            openAccordionId={openAccordionId}
            setIdofOpenAccordion={setIdofOpenAccordion}
            {...question}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
