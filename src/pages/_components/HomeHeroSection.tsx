import Image from "next/image";
import HeroImg from "../../_assets/pngs/hero-img.png";
import GlobalBtn from "./GlobalBtn";

const HomeHeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-9 items-center gap-10 text-white max-w-screen-xl mx-auto px-5">
      <div className="col-span-1 md:col-span-4 mb-14 md:mb-0 md:py-10 order-2 md:order-1">
        <p className="text-lime-300 font-semibold mb-2 md:text-lg">
          SMARTER STUDENT LOAN SOLUTIONS. REAL RESULTS.
        </p>
        <h1 className="text-[40px] md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-[#F8FDE9]">
          TAKE CONTROL OF YOUR STUDENT LOANS TODAY
        </h1>
        <p className="mb-6 text-[#F8FDE9] text-lg">
          At Reductionly, we believe that your student loans shouldn&apos;t hold
          you back from achieving your goals. That&apos;s why we built powerful
          software designed to help you reduce your monthly payments, avoid
          default, and finally put your loans on a manageable path forward.
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <GlobalBtn
            className='h-14 w-full md:w-[150px] bg-[#F8FDE9] !text-[#062014] justify-center rounded-xl text-center text-sm md:h-12 md:max-w-[148px] uppercase font-semibold shadow-[6px_6px_0px_#BADA50]'
            text='GET STARTED'
          />
          <GlobalBtn
            className='h-14 w-full md:w-[115px] bg-[#BADA50] !text-[#062014] justify-center rounded-xl text-center text-sm md:h-12 md:max-w-[148px] uppercase font-semibold shadow-[6px_6px_0px_#062014]'
            text='Login'
          />
        </div>
      </div>

      <div className="flex justify-center md:justify-end relative col-span-1 md:col-span-5 h-[450px] md:h-[600px] lg:h-[750px] order-1 md:order-2  -mt-10 md:mt-0">
        <Image
          src={HeroImg}
          alt="Student"
          className="rounded-lg max-w-[422px] md:max-w-full h-full md:h-[600px] lg:h-[750px] w-full md:absolute md:bottom-0 right-0 mx-auto"
        />
      </div>
    </section>
  );
};

export default HomeHeroSection;
