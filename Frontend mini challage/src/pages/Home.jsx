import { useContext } from "react";
import Card from "../components/Card";
import ComponentContext from "../context/ComponentContext";

function Home() {
  const { cardComponent } = useContext(ComponentContext);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {cardComponent.map(({ title, type }) => (
          <Card title={title} type={type} key={title} />
        ))}
      </div>
    </div>
  );
}

export default Home;
