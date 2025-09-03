"use client";
import { FC } from "react";
import Image from "next/image";
import BgImg from "../../_assets/pngs/get-started-bg.png";
import GlobalBtn from "./GlobalBtn";
import CardImg1 from "../../_assets/pngs/profile-mock-img-1.png";
import CardImg2 from "../../_assets/pngs/profile-mock-img-2.png";
import CardImg3 from "../../_assets/pngs/profile-mock-img-3.png";
import CardImg4 from "../../_assets/pngs/profile-mock-img-4.png";
import CardImg5 from "../../_assets/pngs/profile-mock-img-5.png";

type GetStartedSectionProps = {
  title?: string;
  description?: string;
  contentWidth?: string
};

const testimonials = [
  {
    id: 1,
    text: "Highly Recommended!",
    name: "Louis Patridge",
    img: CardImg3,
    position: "left-[7%] md:left-8 top-[85%] md:top-[20%]",
  },
  {
    id: 2,
    text: "That was amazing! Great job!",
    name: "Louis Patridge",
    img: CardImg4,
    position: "left-[20%] md:left-[2%] bottom-[85%] md:bottom-12",
  },
  {
    id: 3,
    text: "Nice work, love it! 🔥",
    name: "Louis Patridge",
    img: CardImg5,
    position: "right-[3%] bottom-[2%] md:bottom-[20%]",
  },
  {
    id: 4,
    text: "",
    name: "",
    img: CardImg2,
    position: "right-[5%] top-[6%] md:top-[35%]",
  },
  {
    id: 5,
    text: "",
    name: "",
    img: CardImg1,
    position: "left-[10%] bottom-[78%] md:bottom-[25%]",
  },
];

const GetStartedSection: FC<GetStartedSectionProps> = ({
  title = "READY TO GET STARTED?",
  description = "Don’t let student debt hold you back another day. Start your journey toward financial freedom with Reductionly today.",
  contentWidth = "382px"
}) => {
  return (
    <div
      style={{
        backgroundImage: `url("${BgImg.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative md:w-[70%] mx-auto min-h-[600px] md:min-h-[800px] lg:min-h-[800px] text-center py-20 overflow-hidden flex justify-center items-center">
        <div
          className="relative z-10 text-[#F8FDE9]"
          style={{ maxWidth: contentWidth }}
        >
          <h2 className="text-[36px] md:text-[44px] font-semibold mb-4 leading-[34px] md:leading-[48px]">
            {title}
          </h2>
          <p className="text-[19px] md:text-lg leading-6 md:leading-7 max-w-md mx-auto mb-6 px-5">
            {description}
          </p>
          <GlobalBtn
            className="h-14 mx-auto w-[70%] md:w-[156px] bg-[#BADA50] !text-[#062014] justify-center rounded-xl text-center text-sm md:h-12 uppercase font-semibold shadow-[5px_5px_0px_#062014]"
            text="GET STARTED"
          />
        </div>

        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`absolute p-2 md:p-3 rounded-full border-t-[1px] border-[#3C574F] ${t.position} ${t.text
                ? "bg-[linear-gradient(180deg,rgba(14,12,24,0.5)_0%,rgba(14,12,24,0.4)_100%)]"
                : ""
              } flex items-center gap-2`}
          >
            <div className="w-[27px] h-[27px] md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-white">
              <Image src={t.img} alt={t.name} className="w-full" />
              {[4, 5].includes(t.id) && (
                <div className="w-1 h-1 md:w-2 md:h-2 bg-[#F8FDE9] rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2" />
              )}
            </div>
            {t.text && (
              <div className=" text-[#F8FDE9] text-left pr-1 flex flex-col">
                <div className="font-bold text-[9px] md:text-base leading-[10px]">
                  {t.text}
                </div>
                <span className="text-[9px] md:text-base opacity-55 leading-[10px]">
                  {t.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStartedSection;
