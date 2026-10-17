import halfCircle from "./../assets/images/half-circle.svg";
import qutation from "./../assets/images/quote.svg";
import squares from "./../assets/images/square.svg";
import girl1 from "./../assets/images/girl1.png";
import girl2 from "./../assets/images/girl2.png";
import man from "./../assets/images/man.png";

export default function SectionThree() {
  return (
    <div className="bg-DeepJungleGreen flex justify-center relative overflow-hidden px-41.25 py-35">
      <img
        src={squares}
        className="absolute top-0 left-0 w-36.75 h-25"
        alt=""
      />

      <img
        src={halfCircle}
        className="absolute -bottom-12 right-0 w-50 h-50"
        alt=""
      />

      <div className="container max-w-360 flex flex-col justify-center items-center">
        <p className="text-center font-bold text-[48px] leading-12 w-[85%] max-w-233">
          Delivering real results for top companies. Some of our
          <span className="text-RaptureBlue"> success stories</span> .
        </p>

        <div className="grid grid-cols-3 gap-7.5 pt-14">
          <div className="flex flex-col justify-center items-center text-center relative">
            <img
              src={qutation}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-16.75 h-14"
              alt=""
            />

            <q className="pt-9 z-1 max-w-87.5">
              The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.
            </q>

            <div className="pt-6">
              <p className="text-RaptureBlue font-bold text-lg leading-7">
                Kady Baker
              </p>
              <i className="font-medium text-[13px] leading-4.5">
                Product Manager at Bookmark
              </i>
            </div>

            <div className="pt-8">
              <img
                src={girl1}
                className="w-15.5 h-15.5 rounded-full border-2 border-[#c4fffe]"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center relative">
            <img
              src={qutation}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-16.75 h-14"
              alt=""
            />

            <q className="pt-9 z-1 max-w-87.5">
              We needed to automate our entire onboarding process. The team came
              in and built out the whole journey. Since going live, user
              retention has gone through the roof!
            </q>

            <div className="pt-6">
              <p className="text-RaptureBlue font-bold text-lg leading-7">
                Aiysha Reese
              </p>
              <i className="font-medium text-[13px] leading-4.5">
                Founder of Manage
              </i>
            </div>

            <div className="pt-8">
              <img
                src={girl2}
                className="w-15.5 h-15.5 rounded-full border-2 border-[#c4fffe]"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center relative">
            <img
              src={qutation}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-16.75 h-14"
              alt=""
            />

            <q className="pt-9 z-1 max-w-87.5">
              Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.
            </q>

            <div className="pt-6">
              <p className="text-RaptureBlue font-bold text-lg leading-7">
                Arthur Clarke
              </p>
              <i className="font-medium text-[13px] leading-4.5">
                Co-founder of MyPhysio
              </i>
            </div>

            <div className="pt-8">
              <img
                src={man}
                className="w-15.5 h-15.5 rounded-full border-2 border-[#c4fffe]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
