import { FiEdit } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Cart = () => {
  return (
    <section className="flex flex-col px-2 gap-4">
      {/* Profile */}
      <div className="bg-mainBackground rounded-md p-3 flex justify-between">
        <div className="flex items-center gap-3">
          <CgProfile className="text-xl" />
          <h3 className="text-2xl font-medium">John Doe</h3>
        </div>
        <button className="bg-btnColor-light p-2 rounded-md shadow-md shadow-orange-300 hover:bg-btnColor-dark">
          <FiEdit />
        </button>
      </div>
      {/* Calculation */}
      <article className="divide-y-2 min-h-80 ">
        {/* Single Products */}
        <div className="prices py-3 mb-1">
          <div>
            <h4>Black Coffe</h4>
            <div className="flex items-center gap-2 bg-white rounded-md">
              <button className="addBtn">-</button>
              <p className="text-xl">3</p>
              <button className="addBtn">+</button>
            </div>
          </div>
          <p>₹ 3,000</p>
        </div>
 
      {/* Total Calculations */}
        <div>
          <div className="prices mt-4">
            <h4 className="text-xl font-medium">Sub Total</h4>
            <p className="text-xl font-medium">₹ 3,000</p>
          </div>
          <div className="prices">
            <h4 className="text-textColor font-medium">Discount (10%)</h4>
            <p className="text-lg text-textColor">₹ 3,000</p>
          </div>
          <div className="prices">
            <h4 className="text-textColor font-medium">Deliver</h4>
            <p className="text-lg text-textColor">₹ 100</p>
          </div>
          <div className="prices">
            <h4 className="text-3xl font-medium">Total</h4>
            <p className="text-3xl font-medium">₹ 3,000</p>
          </div>
        </div>
      </article>
      {/* Buttons */}
      <button className="btn outline-dashed text-textColor">
        Add Vocher Code
      </button>
      <button className="btn bg-primary-light hover:bg-primary-dark">
        Print Receipt
      </button>
    </section>
  );
};

export default Cart;
