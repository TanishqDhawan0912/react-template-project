export default function Productsection() {
  return (
    <div className="bg-white flex justify-evenly md:p-5 md:w-[80%]">
      <div className="flex flex-col justify-evenly items-center ">
        <img src="src\assets\trimmer.jpeg" alt="" className="md:my-3" />
        <div className=" text-lg font-semibold md:my-3 md:text-2xl">
          Nova Trimmer
        </div>
        <div className="text-sm md:text-lg md:mb-3">
          <span className="line-through">Rs.499</span>[30% OFF]
        </div>
        <div className="text-3xl text-blue-500 font-semibold md:text-4xl">
          Rs 350
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center ">
        <img src="src\assets\laptop.jpeg" alt="" className="md:my-3" />
        <div className=" text-lg font-semibold md:my-3 md:text-2xl">
          Acer Laptops
        </div>
        <div className="text-sm md:text-lg md:mb-3">
          <span className="line-through">Rs.70k</span>[20% OFF]
        </div>
        <div className="text-3xl text-blue-500 font-semibold md:text-4xl">
          Rs 55k
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center ">
        <img
          src="src\assets\earphones.png"
          alt=""
          className="md:my-3 h-[146px]"
        />
        <div className=" text-lg font-semibold md:my-3 md:text-2xl">
          Boat earphones
        </div>
        <div className="text-sm md:text-lg md:mb-3">
          <span className="line-through">Rs.2500</span>[50% OFF]
        </div>
        <div className="text-3xl text-blue-500 font-semibold md:text-4xl">
          Rs 1250
        </div>
      </div>
      <div className="md:flex flex-col justify-evenly items-center hidden ">
        <img src="src\assets\watch.jpeg" alt="" className="md:my-3 h-[146px]" />
        <div className=" text-lg font-semibold md:my-3 md:text-2xl">
         Noise Smartwatch 
        </div>
        <div className="text-sm md:text-lg md:mb-3">
          <span className="line-through">Rs.3500</span>[60% OFF]
        </div>
        <div className="text-3xl text-blue-500 font-semibold md:text-4xl">
          Rs 1500
        </div>
      </div>
      <div className="md:flex flex-col justify-evenly items-center hidden ">
        <img src="src\shoes.jpeg" alt="" className="md:my-3 h-[146px]" />
        <div className=" text-lg font-semibold md:my-3 md:text-2xl">
          Trending Shoes
        </div>
        <div className="text-sm md:text-lg md:mb-3">
          <span className="line-through">Rs.5000</span>[50% OFF]
        </div>
        <div className="text-3xl text-blue-500 font-semibold md:text-4xl">
          Rs 2500
        </div>
      </div>
    </div>
  );
}
