export default function todaydeal() {
  return (
    <div className="flex justify-center  md:h-[400px] md:w-[95%]">
      <div className="hidden md:w-[50%] h- bg-white mr-5 md:block"></div>
      <div className="flex flex-col justify-center text-center bg-white p-3 md:w-[40%] ">
        <div className="text-4xl font-extrabold text-blue-400">
          TODAY'S DEAL
        </div>
        <div className="text-[12px] font-bold md:text-[15px]">END IN</div>
        <div className="timer"></div>
        <div className="flex justify-center">
          <img src="src\assets\mobiles.png" alt="" />
        </div>
        <div className="relative font-bold text-sm bottom-4 md:text-lg">
          Samsung 16GB MicroSD Class 6
        </div>
        <div className="flex justify-between px-7 items-center">
          <div className="text-lg md:text-xl">
            <span className="line-through md:mr-2">Rs 499 </span>[30% OFF]
          </div>
          <div className="text-3xl text-blue-500 md:text-4xl md:font-semibold">
            Rs 350
          </div>
        </div>
      </div>
    </div>
  );
}
