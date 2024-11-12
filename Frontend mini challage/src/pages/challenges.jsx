import { useContext } from "react";
import NavTitleContext from "../context/NavTitleContext";
import ComponentContext from "../context/ComponentContext";

function challenges() {
  const { navTitle } = useContext(NavTitleContext);
  const { cardComponent } = useContext(ComponentContext);

  const reactChallengesMap = cardComponent.reduce((map, card) => {
    map[card.title] = card.component;
    return map;
  }, {});

  const componentToRender =
    reactChallengesMap[navTitle] || reactChallengesMap[navTitle];

  return (
    <>
      {componentToRender || (
        <p className="container mx-auto text-center  flex items-center justify-center my-40 text-lg font-medium">
          Component not found 😟😟
        </p>
      )}
    </>
  );
}

export default challenges;
