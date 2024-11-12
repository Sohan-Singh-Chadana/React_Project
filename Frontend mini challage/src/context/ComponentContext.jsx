import { createContext } from "react";
import ImageGallery from "../challenges/image-gallery/index";
import Accordion from "../challenges/Accordion/App";
import ImageSlider from "../challenges/image-slider/App";
import LoadMoreData from "../challenges/loadMore-data/index";

const ComponentContext = createContext();

const cardComponent = [
  { title: "ImageGallery", component: <ImageGallery />, type: "Easy" },
  { title: "Accordion", component: <Accordion />, type: "Easy" },
  { title: "ImageSlider", component: <ImageSlider />, type: "Easy" },
  { title: "LoadMoreData", component: <LoadMoreData />, type: "Easy" },
];

function ComponentProvider({ children }) {
  return (
    <ComponentContext.Provider value={{ cardComponent }}>
      {children}
    </ComponentContext.Provider>
  );
}

export { ComponentProvider };
export default ComponentContext;
