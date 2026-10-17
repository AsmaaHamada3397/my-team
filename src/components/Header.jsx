import logo from "./../assets/images/myteam.svg";

export default function Header() {
  return (
    <div className="bg-MidnightGreen flex justify-center">
      <div className="container max-w-360 px-41.25 pt-18.25 pb-32.25 flex justify-between items-center">
        <div className="flex items-center gap-20">
          <img src={logo} className="w-40" alt="" />
          <nav className="flex gap-10">
            <a href="#" className="text-white font-semibold text-lg leading-7">
              home
            </a>

            <a href="#" className="text-white font-semibold text-lg leading-7">
              about
            </a>
          </nav>
        </div>

        <button className=" border-2 border-white text-white font-semibold text-lg leading-7 rounded-3xl px-8 py-2.25">
          contact us
        </button>
      </div>
    </div>
  );
}
