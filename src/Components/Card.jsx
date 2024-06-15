import { Suspense } from "react";

const Card = ({item}) => {
  return (
    <div className="m-2 flex flex-col gap-2">
      <div className="bg-white rounded-md w-44 p-1 hover:scale-110 duration-500">
        <Suspense fallback={<h2 className="text-xl font-bold">Loading.....</h2>}>

        <img
          src={item.url}
          alt="product Image"
          className="bg-mainBackground rounded-lg px-3 py-2 "
          />
          </Suspense>
        <h5 className="text-nowrap font-medium ml-1">{item.name}</h5>
        <p className="font-bold text-primary-light ml-3">₹ {item.price}</p>
      </div>
      <button className="bg-btnColor-light hover:bg-btnColor-dark rounded-lg px-3 py-1 ">
        Add to Card
      </button>
    </div>
  );
}

export default Card