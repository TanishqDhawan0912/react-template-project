export default function Bottomsection() {
  return (
    <div className="bg-[#37454d] text-white px-[90px] py-[30px] md:flex justify-between">
      <div className="hidden md:flex md:w-[60%]">
        <div className="hidden md:flex flex-col  mx-9">
          <div className="text-xl ">Help</div>
          <ul className="list-disc  text-[12px] my-8 ml-4">
            <li className="mobilelist my-2">Contact Customer Service</li>
            <li className="mobilelist my-2">ScoreCard</li>
            <li className="mobilelist my-2">Product availability</li>
            <li className="mobilelist my-2">Recalls</li>
            <li className="mobilelist my-2">Return Policy</li>
            <li className="mobilelist my-2">Shipping Rates</li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col  mx-9">
          <div className="text-xl ">Comapny</div>
          <ul className="list-disc  text-[12px] my-8 ml-4">
            <li className="mobilelist my-2">Contact Customer Service</li>
            <li className="mobilelist my-2">ScoreCard</li>
            <li className="mobilelist my-2">Product availability</li>
            <li className="mobilelist my-2">Recalls</li>
            <li className="mobilelist my-2">Return Policy</li>
            <li className="mobilelist my-2">Shipping Rates</li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col  mx-9">
          <div className="text-xl ">My Account</div>
          <ul className="list-disc  text-[12px] my-8 ml-4">
            <li className="mobilelist my-2">Contact Customer Service</li>
            <li className="mobilelist my-2">ScoreCard</li>
            <li className="mobilelist my-2">Product availability</li>
            <li className="mobilelist my-2">Recalls</li>
            <li className="mobilelist my-2">Return Policy</li>
            <li className="mobilelist my-2">Shipping Rates</li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col  mx-9">
          <div className="text-xl ">Informations</div>
          <ul className="list-disc  text-[12px] my-8 ml-4">
            <li className="mobilelist my-2">Contact Customer Service</li>
            <li className="mobilelist my-2">ScoreCard</li>
            <li className="mobilelist my-2">Product availability</li>
            <li className="mobilelist my-2">Recalls</li>
            <li className="mobilelist my-2">Return Policy</li>
            <li className="mobilelist my-2">Shipping Rates</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="heading mb-3 text-xl">Sale News</div>
        <div className="mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
        <div className=" flex border w-[300px]  justify-between">
          <input
            type="text"
            placeholder="Sign Up for Newsletter!"
            className="bg-[#37454d] placeholder-white p-3 text-[12px] w-[300px] "
          />
          <img
            src="src\add-friend.png"
            className="h-[37px] bg-cyan-500"
            alt=""
          />
        </div>
        <div className=" mt-6 font-semibold text-2xl"> Follow Us</div>
        <div className="flex items-center mt-5 ">
          <img
            src="src\facebook.png"
            alt=""
            className="h-[35px] mx-3 bg-white"
          />
          <img
            src="src\youtube.png"
            alt=""
            className="h-[35px] mx-3 bg-white"
          />
          <img
            src="src\twitter-sign.png"
            alt=""
            className="h-[35px] mx-3 bg-white"
          />
          <img
            src="src\linkedin.png"
            alt=""
            className="h-[35px] mx-3 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
