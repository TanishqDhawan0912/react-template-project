export default function navbar() {
  return (
    <div className="bg-[#2b5f85] py-[5px] flex justify-between items-center md:p-3 md:justify-center">
      <div className="logo ml-5 flex items-center">
        <span className=" mo text-xl font-bold text-white md:text-4xl">MO</span>
        <span className="cart text-2xl font-extrabold text-yellow-400 md:text-5xl">
          Cart
        </span>
      </div>
      <div className="flex md:mx-[100px]">
        <select
          name="categories"
          id="categories"
          className="md:w-[150px] lg:w-[250px]  hidden md:block md:p-2"
        >
          <option value="volvo">All categories</option>
          <option value="volvo">Mobiles</option>
          <option value="saab">Laptops</option>
          <option value="opel">Trimmers</option>
          <option value="audi">Earphones</option>
        </select>
        <div className="flex items-center ">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="md:w-[250px] lg:w-[350px] border md:p-2"
          />
          <img
            src="src\assets\search.svg"
            alt=""
            className="h-[18px] ml-1 md:bg-blue-400  md:px-[7px] md:py-[4px] md:m-0 md:h-[40px]"
          />
        </div>
      </div>
      <div className=" text-white uppercase text-center  hidden md:flex  ">
        <div className="flex flex-col justify-center items-center">
          <img
            src="src\assets\user.png"
            alt=""
            className="bg-white h-[30px] w-[30px] mb-1"
          />
          <div className="font-semibold text-[11px]">my account</div>
        </div>
        <span className="mx-3">|</span>
        <div className="flex flex-col justify-center items-center">
          <img
            src="src\assets\tracking.png"
            alt=""
            className="bg-white h-[30px] w-[30px] mb-1"
          />
          <div className="font-semibold text-[11px]">track order</div>
        </div>
        <span className="mx-3 mr-6">|</span>
        <div className="flex flex-col justify-center items-center">
          <img
            src="src\assets\lock.png"
            alt=""
            className="bg-white h-[30px] w-[30px] mb-1"
          />
          <div className="font-semibold text-[11px]">login</div>
        </div>
        <div className="cartbutton flex items-center bg-orange-500 ml-[50px] px-1 rounded-md">
          <div>
            <img
              src="src\assets\shopping-cart.png"
              alt=""
              className="h-[25px] w-[25px]"
            />
          </div>
          <span className="text-xl mx-2 text-black font-semibold">0</span>
          <span className="text-xl mx-2 text-black font-semibold">^</span>
        </div>
      </div>
    </div>
  );
}
