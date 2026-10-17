import person from "../assets/images/person.svg";
import implement from "../assets/images/settings.svg";
import chart from "../assets/images/chart.svg";
import section2circle from "../assets/images/section2circle.svg";
export default function SectionTwo() {
  return (
    <div className="bg-SacramentoStateGreen flex justify-center relative overflow-hidden">
      <div className="container max-w-360 py-35 px-41.25">
        <div className="w-12.5 h-1 bg-LightCoral"></div>
        <div className="pt-13.5 flex gap-31.25 w-full">
          <div className="w-[47%]">
            <p className="text-white font-bold text-[48px] max-w- leading-12">
              Build & manage distributed teams like no one else.
            </p>
          </div>

          <div className="flex flex-col gap-8 w-[53%]">
            <div className="flex gap-5.75">
              <div className="relative ">
                <img src={person} className="absolute -top-4 right-4" alt="" />
                <div className="w-14 h-14 bg-PoliceBlue rounded-full"></div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-LightCoral font-bold text-lg leading-7">
                  Experienced Individuals
                </p>
                <p className="text-white text-[15px] font-semibold leading-6.25">
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </div>

            <div className="flex gap-5.75">
              <div className="relative ">
                <img
                  src={implement}
                  className="absolute -top-4 right-4"
                  alt=""
                />
                <div className="w-14 h-14 bg-PoliceBlue rounded-full"></div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-LightCoral font-bold text-lg leading-7">
                  Easy to Implement
                </p>
                <p className="text-white text-[15px] font-semibold leading-6.25">
                  Our processes have been refined over years of implementation
                  meaning our teams always deliver.
                </p>
              </div>
            </div>

            <div className="flex gap-5.75">
              <div className="relative ">
                <img src={chart} className="absolute -top-4 right-4" alt="" />
                <div className="w-14 h-14 bg-PoliceBlue rounded-full"></div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-LightCoral font-bold text-lg leading-7">
                  Enhanced Productivity
                </p>
                <p className="text-white text-[15px] font-semibold leading-6.25">
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={section2circle} className="absolute bottom-0 -right-12 w-50 h-61" alt="" />
    </div>
  );
}
