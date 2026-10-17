import logo from "../assets/images/myteam.svg";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { SlSocialPintarest } from "react-icons/sl";
import printerest from "../assets/images/printerest.svg";

export default function Footer() {
  return (
    <div className=" bg-DarkGreen flex justify-center px-41.5 py-12">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex w-[60%] gap-[125px]">
            <div>
              <img src={logo} className="w-40 h-10" alt="" />
              <div className="pt-6.25 flex gap-10">
                <a href="#" className="text-white font-semibold text-lg">
                  home
                </a>

                <a href="#" className="text-white font-semibold text-lg">
                  about
                </a>
              </div>
            </div>
            <div className="opacity-60 font-semibold text-[15px] leading-6.25">
              <p> 987 Hillcrest Lane</p>
              <p>Irvine,CA</p>
              <p>California 92714</p>
              <p>Call Us : 949-833-7432</p>
            </div>
          </div>
          <div className="flex w-[40%] justify-between text-end flex-col items-end">
            <div className="flex gap-4">
              <RiFacebookBoxFill className="text-white w-6 h-6" />

             <img src={printerest} className="w-6 h-6" alt="" />

              <FaTwitter className="text-white w-6 h-6" />
            </div>

            <p className="font-semibold text-[15px] leading-6.25 opacity-60">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
