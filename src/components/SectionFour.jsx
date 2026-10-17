import pattern from "./../assets/images/four-pattern.svg";
export default function SectionFour() {
  return (
    <div className="bg-LightCoral py-19 flex justify-center items-center relative">
      <div className="container flex justify-between items-center max-w-229.25">

        <img src={pattern} className="absolute bottom-0 left-0" alt="" />

          <p className=" text-SacramentoStateGreen font-bold text-[48px] leading-12">
            Ready to get started?
          </p>
          <button className=" border-2 border-SacramentoStateGreen text-SacramentoStateGreen font-semibold text-lg  leading-7 rounded-3xl px-8 py-2.25">
            contact us
          </button>
      </div>
    </div>
  );
}
