"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Logo from "../../_assets/svgs/logo.svg"
import PhoneIcon from "../../_assets/svgs/phone-icon.svg"
import MailIcon from "../../_assets/svgs/mail-icon.svg"
import { useRouter } from "next/navigation";

const Footer: FC = () => {
  const router = useRouter();
  return (
    <footer className="max-w-screen-xl mx-auto px-8 pt-14 md:pt-20 pb-10 md:pb-11">
      <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-[350px_1fr_1fr] lg:grid-cols-[350px_1fr_1fr_1fr]">
        <div className="md:col-span-1 sm:col-span-2 col-span-1 mx-auto md:mx-0 text-center md:text-left min-w-0">
          <div className="text-2xl font-bold tracking-wide flex justify-center md:justify-start" onClick={() => router.push("/home")}> 
            <Image src={Logo} alt="Brand Logo" className="w-32 lg:w-[160px]" />
          </div>
          <p className="text-[19px] md:text-base leading-7 text-[#F8FDE9] mt-4 md:mt-4">
            At Reductionly, we believe that your student loans shouldn’t hold you back
            from achieving your goals. That’s why we built powerful software designed to
            help you reduce your monthly payments, avoid default, and finally put your
            loans on a manageable path forward.
          </p>
        </div>

        <div className="col-span-1 min-w-[220px]">
          <h4 className="font-semibold text-[#F8FDE9] mb-4 md:mb-6 uppercase tracking-wide">MENU</h4>
          <ul className="space-y-4 text-base text-[#F8FDE9]">
            <li><Link href="/home">HOME</Link></li>
            <li><Link href="/how-it-works">HOW IT WORKS</Link></li>
            <li><Link href="#">ABOUT US</Link></li>
            <li><Link href="/faqs">FAQ</Link></li>
          </ul>
        </div>

        <div className="col-span-1 min-w-[220px]">
          <h4 className="font-semibold text-[#F8FDE9] mb-4 md:mb-6 uppercase tracking-wide">OTHER LINKS</h4>
          <ul className="space-y-4 text-base text-[#F8FDE9]">
            <li><Link href="#">PRIVACY POLICY</Link></li>
            <li><Link href="#">TERMS & CONDITIONS</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3 lg:col-span-1 sm:col-span-2 col-span-1 min-w-0">
          <h4 className="font-semibold text-[#F8FDE9] mb-4 md:mb-6 uppercase tracking-wide">CONTACT INFO</h4>
          <ul className="space-y-4 text-base text-[#F8FDE9]">
            <li className="flex items-start gap-3">
              455 West Orchard Street Kings Mountain, NC 280867
            </li>
            <li className="flex items-center gap-3">
              <Image src={PhoneIcon} alt="" className="w-5 h-5" />
              <a href="tel:+0882466422710">+088 (246) 642-27-10</a>
            </li>
            <li className="flex items-center gap-3">
              <Image src={MailIcon} alt="" className="w-5 h-5" />
              <a href="mailto:support@reductionly.com">support@reductionly.com</a>
            </li>
          </ul>
        </div>
      </div>


      <div className="mt-10 md:mt-20 lg:mt-28 text-center text-[#F8FDE9] md:opacity-55 text-sm pt-7 md:pt-9 border-t-[1px] border-[#195939]">
        © 2025 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
