export default function policies2() {
  return (
    <div className="flex py-5 justify-around items-center  bg-blue-500 text-white md:justify-center">
      <div className="flex md:mx-[100px]">
        <div>
          <img
            src="src\assets\plane.png"
            className="h-[28px] md:h-[50px]"
            alt=""
          />
        </div>
        <div className="text-[13px] flex flex-col justify-center items-center md:text-[20px] md:mx-5">
          <div className="uppercase">Free Shipping</div>
          <div className="text-[9px] md:text-[12px]">In Order min $200</div>
        </div>
      </div>
      <div className="flex md:mx-[80px]">
        <div>
          <img
            src="src\assets\stopwatch.png"
            className="h-[28px] md:h-[50px] bg-white"
            alt=""
          />
        </div>
        <div className="text-[13px] flex flex-col justify-center items-center md:text-[20px] md:mx-5">
          <div className="uppercase">30-Days Returns</div>
          <div className="text-[9px] md:text-[12px]">Money Back Guarantee</div>
        </div>
      </div>
      <div className="flex md:mx-[100px]">
        <div>
          <img
            src="src\assets\customer-service.png"
            className="h-[28px] md:h-[50px]"
            alt=""
          />
        </div>
        <div className="text-[13px] flex flex-col justify-center items-center md:text-[20px] md:mx-5">
          <div className="uppercase">24/7 Support</div>
          <div className="text-[9px] md:text-[12px]">Lifetime Support</div>
        </div>
      </div>
    </div>
  );
}
