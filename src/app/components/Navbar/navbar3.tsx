import Link from "next/link";

const Navbar3 = () => {
  return (
    <nav className="w-[1270px] bg-[#F5F5F5] mb-4">
      <div>
        <h3 className="text-[15px] font-medium leading-[16px] text-center p-2">Hello Nike App</h3>
        <p className="text-[15px] font-medium leading-[16px] text-center">
          Download the app to access everything Nike.{" "}
          <a href="/#" className=" font-medium leading-[24px] text-center underline decoration-solid font-normal: 400">
            Get Your Great
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar3;
