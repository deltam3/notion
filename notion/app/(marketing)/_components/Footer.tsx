import { Button } from "@/components/ui/button";

import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full justify-between p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          개인정보 보호정책
        </Button>
        <Button variant="ghost" size="sm">
          이용약관
        </Button>
      </div>
    </div>
  );
};
