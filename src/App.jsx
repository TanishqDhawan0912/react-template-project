import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./header.jsx";
import Navbar from "./navbar.jsx";
import Itemsection from "./itemsection.jsx";
import Policies from "./policies.jsx";
import Todaydeal from "./todaydeal.jsx";
import Categories from "./categories.jsx";
import Greatdeals from "./greatdeals.jsx";
import Productsection from "./productsection.jsx";
import Productsection2 from "./productsection2.jsx";
import Policies2 from "./policies2.jsx";
import Bottomsection from "./bottomsection.jsx";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Itemsection />
      <Policies />
      <div className="bg-gray-300 pt-4 flex flex-col justify-center pb-4 items-center md:pb-10">
        <Todaydeal />
        <Categories />
        <Greatdeals />
        <div className="ml-2 my-2 text-3xl font-bold md:text-left md:my-5">
          Latest Products
        </div>
        <Productsection />
        <div className="ml-2 my-4 text-3xl font-bold md:text-left md:my-5">
          Clearance Sale
        </div>
        <Productsection />
        <div className="ml-2 my-4 text-3xl font-bold md:text-left md:my-5">
          Your Recently Viewed Items
        </div>
        <Productsection />
      </div>
      <Policies2 />
      <Bottomsection />
    </>
  );
}

export default App;
