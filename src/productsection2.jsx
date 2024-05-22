export default function Productsection2() {
  return (
    <div className="bg-white flex justify-evenly">
      <div className="flex flex-col justify-evenly items-center ">
        <img src="src\assets\trimmer.jpeg" alt="" />
        <div>TNova Trimmer</div>
        <div>
          <span className="line-through">Rs.2500</span>[30% OFF]
        </div>
        <div className="text-2xl text-blue-500 font-semibold">350</div>
      </div>
      <div className="flex flex-col justify-evenly items-center ">
        <img src="src\assets\laptop.jpeg" alt="" />
        <div>Nova Trimmer</div>
        <div>
          <span className="line-through">Rs.30k</span>[10% OFF]
        </div>
        <div className="text-2xl text-blue-500 font-semibold">27k</div>
      </div>
      <div className="flex flex-col justify-evenly items-center ">
        <img src="src\assets\earphones.png" alt="" className="h-[140px]" />
        <div>Nova Trimmer</div>
        <div>
          <span className="line-through">Rs.499</span>[30% OFF]
        </div>
        <div className="text-2xl text-blue-500 font-semibold">350</div>
      </div>
    </div>
  );
}
