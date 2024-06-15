import { IoMdMenu } from "react-icons/io";
const Header = () => {
  return (
    <header className="header py-1 mx-4 lg:mx-8 ">
      <nav className="header gap-10">
        <img
          src="/orange delight.jpg"
          alt="logo"
          className="select-none cursor-pointer w-28"
        />
        <h2 className="md:hidden text-3xl sm:text-5xl font-bold text-primary-dark ">Orange Delight</h2>
        <div className="header gap-6">
          <p className="navigation">Features</p>
          <p className="navigation">Pricing</p>
          <p className="navigation">Resources</p>
        </div>
      </nav>
      <div className="header gap-10">
        <button className="navBtn">
          Login
        </button>
        <button className="navBtn">Sign Up</button>
        <button className="md:hidden text-4xl text-textColor font-medium">
          <IoMdMenu />{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
