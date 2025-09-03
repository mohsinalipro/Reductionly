"use client";
import { FC } from "react";
import MailIcon from "../../_assets/svgs/white-mail-icon.svg"
import PhoneIcon from "../../_assets/svgs/white-phone-icon.svg"
import Image from "next/image";
import GlobalBtn from "./GlobalBtn";

const ContactSection: FC = () => {
  return (
    <section className="bg-[#F8FDE9] pt-12 md:pt-16 pb-16 md:pb-28 px-6 rounded-t-[40px] md:rounded-t-[50px] md:mx-3 text-[#062014]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 lg:gap-12">
        <div className="md:mt-10 text-center md:text-left">
          <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight mb-6 leading-snug">
            GOT A QUESTION? <br /> NEED HELP GETTING STARTED?
          </h2>
          <p className="text-[19px] md:text-lg leading-6 md:leading-7 mb-4 md:mb-10 max-w-[442px] mx-auto md:mx-0">
            Whether you’re exploring your repayment options or you’re already
            working with Reductionly, our team is ready to support you every
            step of the way.
          </p>
          <div className="hidden md:block">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-14">
              <div className="bg-[#004725] w-12 h-12 flex items-center justify-center rounded-full">
                <Image src={MailIcon} alt="Mail Icon" />
              </div>
              <div>
                <p className="font-semibold text-xl">EMAIL US</p>
                <p className="text-[#062014] text-sm mb-1">
                  Prefer email? No problem
                </p>
                <p className="font-bold">support@reductionly.com</p>
                <p className="text-[#062014] text-sm">
                  We typically respond within 1 business day.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-14">
              <div className="bg-[#004725] w-12 h-12 flex items-center justify-center rounded-full">
                <Image src={PhoneIcon} alt="Phone Icon" />
              </div>
              <div>
                <p className="font-semibold">CALL US</p>
                <p className="text-[#062014] text-sm mb-1">
                  Speak directly with a student loan expert.
                </p>
                <p className="font-bold">(XXX) XXX-XXXX</p>
                <p className="text-[#062014] text-sm">
                  Monday – Friday | 9:00 AM – 6:00 PM (Your Time Zone)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#004725] text-white py-9 md:py-11 lg:py-14 px-5 md:px-11 rounded-[14px] md:rounded-[32px]">
          <p className="mb-6 text-lg">
            Have a quick question? Use our contact form below, and we’ll get
            back to you shortly.
          </p>
          <form className="space-y-4">
            <div>
              <label className="text-base md:text-xl font-semibold block mb-2">
                FULL NAME
              </label>
              <input
                type="text"
                className="w-full px-3 py-3 h-[47px] md:h-[60px] rounded-md bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label className="text-base md:text-xl font-semibold block mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                className="w-full px-3 py-3 h-[47px] md:h-[60px] rounded-md bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label className="text-base md:text-xl font-semibold block mb-2">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                className="w-full px-3 py-3 h-[47px] md:h-[60px] rounded-md bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label className="text-base md:text-xl font-semibold block mb-2">
                HOW CAN WE HELP?
              </label>
              <textarea
                rows={5}
                className="w-full px-3 py-3 rounded-md bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-white max-h-[126px]"
              ></textarea>
            </div>
            <GlobalBtn
              className='h-14 w-full !mb-1 md:w-[190px] bg-white !text-[#062014] justify-center rounded-xl text-center text-sm md:h-12 uppercase font-semibold shadow-[6px_6px_0px_#BADA50]'
              text='SUBMIT MESSAGE'
            />
          </form>
        </div>

        <div className="text-center md:hidden mt-14">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-14">
            <div className="bg-[#004725] w-12 h-12 flex items-center justify-center rounded-full">
              <Image src={MailIcon} alt="Mail Icon" />
            </div>
            <div>
              <p className="font-semibold text-xl">EMAIL US</p>
              <p className="text-[#062014] text-sm mb-1">
                Prefer email? No problem
              </p>
              <p className="font-bold">support@reductionly.com</p>
              <p className="text-[#062014] text-sm">
                We typically respond within 1 business day.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-14">
            <div className="bg-[#004725] w-12 h-12 flex items-center justify-center rounded-full">
              <Image src={PhoneIcon} alt="Phone Icon" />
            </div>
            <div>
              <p className="font-semibold">CALL US</p>
              <p className="text-[#062014] text-sm mb-1">
                Speak directly with a student loan expert.
              </p>
              <p className="font-bold">(XXX) XXX-XXXX</p>
              <p className="text-[#062014] text-sm">
                Monday – Friday | 9:00 AM – 6:00 PM (Your Time Zone)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
