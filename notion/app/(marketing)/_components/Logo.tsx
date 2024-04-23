import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <div className="max-w-[3rem] max-h-[3.2rem]">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={30}
          height={32}
          className="dark:hidden max-w-[3rem] max-h-[3.2rem] "
        />
      </div>

      <p className="font-semibold w-10 text-[1.4rem]">Notion</p>
    </div>
  );
};
