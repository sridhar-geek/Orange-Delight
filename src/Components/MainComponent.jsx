import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
// Imports from another file
import {categories} from '../Data/Categories'
import Card from "./Card";
import items from '../Data/Items'

const Main = () => {
const [localCategory, setLocalCategory] = useState("Sweets")
  return (
    <div className="bg-mainBackground p-2 rounded-md">
      {/* Search Component*/}
      <article className="flex justify-between mb-4">
        <div>
          <input
            type="text"
            placeholder="Search all products here"
            className="p-2 rounded-md outline-none focus:outline-primary-light mr-1"
          />
          <button className="bg-primary-light hover:bg-primary-dark text-white p-2 rounded-md font-bold">
            Search
          </button>
        </div>
        <RiMenu3Fill className="icons bg-white rounded-md text-4xl p-1 " />
      </article>
      {/* Categories */}
      <div className="flex flex-row overflow-x-auto gap-3 mb-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${localCategory === category.name ? "bg-btnColor-light" : "bg-white"} rounded-md px-4 py-1 flex-nowrap`}
          >
            <button
              onClick={() => setLocalCategory(category.name)}
              className="text-nowrap font-medium"
            >
              {category.name}{" "}
            </button>
          </div>
        ))}
      </div>
      {/* Card Items */}
      <section className="flex flex-wrap items-center justify-around">
        {items[localCategory].map((item, index) => (
          <div key={index}>
            <Card item={item} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Main;
