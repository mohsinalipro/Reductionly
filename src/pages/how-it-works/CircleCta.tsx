"use client";
import Image from "next/image";
import GlobalBtn from "@/pages/_components/GlobalBtn";
import CardImg1 from "../../_assets/pngs/profile-mock-img-1.png";
import CardImg2 from "../../_assets/pngs/profile-mock-img-2.png";
import CardImg3 from "../../_assets/pngs/profile-mock-img-3.png";
import CardImg4 from "../../_assets/pngs/profile-mock-img-4.png";

export default function CircleCta() {
  return (
    <section className="bg-[#00391F] text-white pb-16 md:pb-24">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="relative mx-auto w-full max-w-[720px] aspect-square flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,#0E5734_0%,#0A462B_35%,#083A23_60%,transparent_65%)] shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]" />
          <div className="relative z-10 text-center max-w-[360px]">
            <h3 className="text-xl md:text-2xl font-bold mb-3">READY TO MAKE YOUR STUDENT LOANS MANAGEABLE?</h3>
            <p className="text-[19px] md:text-lg leading-7 opacity-90 mb-5">Take the first step today — it’s fast and easy.</p>
            <GlobalBtn
              className="h-12 w-[156px] bg-[#BADA50] !text-[#062014] justify-center rounded-xl text-center text-sm uppercase font-semibold shadow-[5px_5px_0px_#062014] mx-auto"
              text="Get Started"
            />
          </div>

          {/* Floating avatars */}
          <div className="absolute -top-3 left-[12%] w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/70">
            <Image src={CardImg1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-[14%] -right-2 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/70">
            <Image src={CardImg2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-[10%] right-[16%] w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/70">
            <Image src={CardImg3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-[6%] w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/70">
            <Image src={CardImg4} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

