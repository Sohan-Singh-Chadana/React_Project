import { Link } from "react-router-dom";

function Card({ title, type }) {
  return (
    <>
      <Link to={`/${title}`}>
        <div className="p-4 shadow-lg bg-[#fafafa] rounded-xl">
          <div className="flex items-center justify-between  py-1 px-2">
            <h2 className="font-medium text-xl">{title}</h2>
            <div className=" flex items-center gap-2 border-2 rounded-[5rem] text-green-500 border-green-500 py-0.5 px-2.5">
              <div className="w-2 h-2 border rounded-full border-solid bg-green-500 "></div>
              <h4 className="text-lg capitalize">{type}</h4>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
