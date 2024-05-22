export default function policies() {
  return (
    <div className="flex justify-center md:py-2">
      <div className="flex mx-3 justify-around items-center mt-2 md:w-[70%] ">
        <div className="flex">
          <div>
            <img
              src="src\assets\plane.png"
              className="h-[28px] md:h-[40px]"
              alt=""
            />
          </div>
          <div className="text-[13px] ml-1 flex flex-col justify-center items-center md:text-[20px] md:font-semibold">
            <div>Free Shipping</div>
            <div className="text-[9px] md:text-[11px]">In Order min $200</div>
          </div>
        </div>
        <div className="flex mx-1">
          <div>
            <img
              src="src\assets\stopwatch.png"
              className="h-[28px] md:h-[40px]"
              alt=""
            />
          </div>
          <div className="text-[13px] ml-1 flex flex-col justify-center items-center md:text-[20px] md:font-semibold">
            <div>30-Days Returns</div>
            <div className="text-[9px] md:text-[11px]">
              Money Back Guarantee
            </div>
          </div>
        </div>
        <div className="flex mx-1">
          <div>
            <img
              src="src\assets\customer-service.png"
              className="h-[28px] md:h-[40px]"
              alt=""
            />
          </div>
          <div className="text-[13px] ml-1 flex flex-col justify-center items-center md:text-[20px] md:font-semibold">
            <div>24/7 Support</div>
            <div className="text-[9px] md:text-[11px]">Lifetime Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}
