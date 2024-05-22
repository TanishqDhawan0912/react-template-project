export default function Categories() {
  return (
    <div className="bg-white mt-2 flex items-center py-3  mx-auto md:w-[87%]">
      <div className="ml-3 font-bold">Go quickly to</div>
      <img src="src\assets\arrow.png" alt="" className="h-[18px] ml-2" />
      <div className="flex items-center ml-5 font-medium">
        <div>Mobiles</div>
        <div className="mx-4">:</div>
        <div>Sports</div>
        <div className="mx-4">:</div>
        <div>Tablets</div>
        <div className=" hidden md:flex">
          <div className="mx-4">:</div>
          <div>Bath Towels</div>
          <div className="mx-4">:</div>
          <div>LED Bulbs</div>
          <div className="mx-4">:</div>
          <div>TV</div>
          <div className="mx-4">:</div>
          <div>Washing Machine</div>
          <div className="mx-4">:</div>
          <div>Laptops</div>
          <div className="mx-4">:</div>
          <div>Headphones</div>
          <div className="mx-4">:</div>
          <div>Fans</div>
          <div className="mx-4">:</div>
          <div>Travel</div>
          <div className="mx-4">:</div>
          <div>Books</div>
        </div>
        <img
          src="src\assets\fast-forward.png"
          alt=""
          className="h-[14px] mx-4 hover md:hidden"
        />
      </div>
    </div>
  );
}
