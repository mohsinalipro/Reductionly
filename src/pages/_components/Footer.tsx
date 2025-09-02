"use client";
import Image from "next/image";
import { FC } from "react";
import Logo from "../../_assets/svgs/logo.svg"
import PhoneIcon from "../../_assets/svgs/phone-icon.svg"
import MailIcon from "../../_assets/svgs/mail-icon.svg"
import { useRouter } from "next/navigation";

const Footer: FC = () => {
  const router = useRouter();
  return (
    <footer className="max-w-screen-xl mx-auto px-5 pt-20 py-11">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-[350px_repeat(auto-fit,minmax(140px,1fr))]">
        <div className="max-w-[350px]">
          <div className="text-2xl font-bold tracking-wide flex justify-center md:justify-start" onClick={() => router.push("/home")}>
            <Image src={Logo} alt="Brand Logo" className="w-32 lg:w-[160px]" />
          </div>
          <p className="text-sm md:text-base leading-relaxed text-[#F8FDE9] mt-3 md:mt-4 md:text-left text-center">
            At Reductionly, we believe that your student loans shouldn’t hold you back
            from achieving your goals. That’s why we built powerful software designed to
            help you reduce your monthly payments, avoid default, and finally put your
            loans on a manageable path forward.
          </p>
        </div>

        <div className="hidden md:block"></div>

        <div>
          <h4 className="font-semibold text-[#F8FDE9] mb-4 md:mb-6">MENU</h4>
          <ul className="space-y-4 text-sm text-[#F8FDE9]">
            <li>HOME</li>
            <li>HOW IT WORKS</li>
            <li>ABOUT US</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#F8FDE9] mb-4 md:mb-6">OTHER LINKS</h4>
          <ul className="space-y-4 text-sm text-[#F8FDE9]">
            <li>PRIVACY POLICY</li>
            <li>TERMS & CONDITIONS</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#F8FDE9] mb-4 md:mb-6">CONTACT INFO</h4>
          <ul className="space-y-4 text-sm text-[#F8FDE9]">
            <li className="flex items-center gap-2">
              455 West Orchard Street Kings Mountain, NC 280867
            </li>
            <li className="flex items-center gap-2">
              <Image src={PhoneIcon} alt="" />
              +088 (246) 642-27-10
            </li>
            <li className="flex items-center gap-2">
              <Image src={MailIcon} alt="" />
              support@reductionly.com
            </li>
          </ul>
        </div>
      </div>


      <div className="mt-8 md:mt-20 lg:mt-28 text-center text-[#F8FDE9] md:opacity-55 text-sm pt-7 md:pt-9 border-t-[1px] border-[#195939]">
        © 2025 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
