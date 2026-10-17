import CombinedShap from "../assets/images/Group 8.svg";
import bottomPattern from "../assets/images/Group 7.svg";
export default function SectionOne() {
  return (
    <div className="pb-62.5 bg-MidnightGreen relative flex justify-center overflow-hidden">
      <div className="container max-w-360 ">
         <div className=" px-41.25 flex justify-between items-center">
        <div className="w-[50%]">
          <h1 className="text-white font-bold text-[100px] leading-[100%] ">
            Find the best <span className="text-LightCoral"> talent</span>
          </h1>
        </div>

        <div className="w-[40%] ">
          <div className="h-1 w-12.5 bg-RaptureBlue"></div>
          <div className="pt-20.75 font-semibold text-white text-lg leading-7">
            <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
          </div>

           <img src={bottomPattern}  className="absolute -bottom-14 right-[13%] w-89.5 h-50" alt="" />
        </div>
      </div>
      </div>
     
      <img
        src={CombinedShap}
        className="w-50 h-50 absolute -left-12 top-0"
        alt=""
      />

     
    </div>
  );
}
