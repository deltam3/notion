"use client";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";

import { ArrowDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import * as React from "react";

import {
  Sparkle,
  FileText,
  BookOpenText,
  Target,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Eye,
  Palette,
} from "lucide-react";

import { StringValidation } from "zod";
import Image from "next/image";

import teamPersonal from "../../../public/latest/team-size-personal.png";
import teamBusiness from "../../../public/latest/team-size-small-business.png";
import teamEnterprise from "../../../public/latest/team-size-enterprise.png";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "AI",
    href: "/docs/primitives/alert-dialog",
    description: "최적의 AI 어시스턴트",
  },
  {
    title: "문서",
    href: "/docs/primitives/hover-card",
    description: "심플하지만 강력한 툴",
  },
  {
    title: "위키",
    href: "/docs/primitives/progress",
    description: "모든 지식을 모으는 지식 허브",
  },
  {
    title: "프로젝트",
    href: "/docs/primitives/scroll-area",
    description: "모든 규모의 팀을 위한 툴",
  },
  {
    title: "캘린더",
    href: "/docs/primitives/tabs",
    description: "일과 시간을 함께 관리하기",
  },
];
const productSublist: { title: string; href: string; description: string }[] = [
  { title: "템플릿 갤러리", href: "#", description: "시작에 필요한 템플릿" },
  {
    title: "고객 스토리",
    href: "#",
    description: "다양한 팀의 Notion 활용 사례",
  },
  { title: "연결", href: "#", description: "자주 사용하는 툴 연결" },
];

const downloadMenuList: { title: string; href: string }[] = [
  {
    title: "Notion(노션)",
    href: "#",
  },
  {
    title: "캘린더",
    href: "#",
  },
  {
    title: "Web Clipper",
    href: "#",
  },
];

const solutionMenuList: {
  title: string;
  href: string;
  description: string;
  icon: string;
}[] = [
  {
    title: "회사",
    href: "#",
    description: "조작 운영에 필요한 고급 기능",
    icon: "../../../public/latest/team-size-enterprise.png",
  },
  {
    title: "팀",
    href: "#",
    description: "팀 운영에 필요한 단 한나의 툴",
    icon: "../../../public/latest/team-size-small-business.png",
  },
  {
    title: "개인",
    href: "#",
    description: "개인 사용자에게 무료 제공",
    icon: "../../../public/latest/team-size-personal.png",
  },
];

const solutionSublist: { title: string; href: string }[] = [
  { title: "스타트업", href: "#" },
  { title: "원격 근무", href: "#" },
  { title: "교육", href: "#" },
  { title: "비영리단체", href: "#" },
];

const resourcesList: { title: string; href: string }[] = [
  { title: "블로그", href: "#" },
  { title: "Notion 아카데미", href: "#" },
  { title: "가이드와 튜토리얼", href: "#" },
  { title: "웨비나", href: "#" },
  { title: "도움말 센터", href: "#" },
  { title: "API 문서", href: "#" },
  { title: "커뮤니티", href: "#" },
  { title: "컨설턴트 고용", href: "#" },
  { title: "파트너 되기", href: "#" },
];

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <header
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <nav className="hidden md:flex gap-20">
        <Logo />

        <NavigationMenu>
          <NavigationMenu>
            <NavigationMenuItem>
              {/* <NavigationMenuItem> */}
              <NavigationMenuTrigger>
                <span className="text-[1.5rem]">프로덕트</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-[48rem]">
                  <ul className="grid border-r-[1px] w-[50%] gap-3 grid-cols-1 py-[1rem] px-[2rem]">
                    <li>
                      <NavigationMenuLink>
                        <Link
                          href="#"
                          // className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          className="flex gap-2"
                        >
                          <div>
                            <Sparkle fill="purple" />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[1.5rem]">AI</p>
                            <p className="text-[1.3rem]">
                              최적의 AI 어시스턴트
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link
                          href="#"
                          // className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          className="flex gap-2"
                        >
                          <div>
                            <FileText fill="orange" />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[1.5rem]">문서</p>
                            <p className="text-[1.3rem]">
                              심플하지만 강력한 툴
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link
                          href="#"
                          // className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          className="flex gap-2"
                        >
                          <div>
                            <BookOpenText fill="red" />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[1.5rem]">워키</p>
                            <p className="text-[1.3rem]">
                              모든 지식을 모으는 지식 허브
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link
                          href="#"
                          // className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          className="flex gap-2"
                        >
                          <div>
                            <Target fill="blue" />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[1.5rem]">프로젝트</p>
                            <p className="text-[1.5rem]">
                              모든 규모의 팀을 위한 툴
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link
                          href="#"
                          // className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          className="flex gap-2"
                        >
                          <div>
                            <Calendar fill="red" />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[1.5rem]">캘린더</p>
                            <p className="text-[1.3rem]">
                              일과 시간을 함께 관리하기
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                  <ul className="w-[50%] py-[1rem] px-[2rem] flex flex-col gap-2">
                    <li>
                      <NavigationMenuLink>
                        <Link href="#" className="flex gap-2">
                          <div className="flex flex-col">
                            <p className="text-[1.5rem] font-medium text-[rgb(5, 5, 5)]">
                              템플릿 갤러리
                            </p>
                            <p className="text-[1.3rem] text-[rgba(0, 0, 0, 0.6)]">
                              시작에 필요한 템플릿
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link href="#" className="flex gap-2">
                          <div className="flex flex-col">
                            <p className="text-[1.5rem] font-medium text-[rgb(5, 5, 5)]">
                              고객 스토리
                            </p>
                            <p className="text-[1.3rem] text-[rgba(0, 0, 0, 0.6)]">
                              다양한 팀의 Notion 활용 사례
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link href="#" className="flex gap-2">
                          <div className="flex flex-col">
                            <p className="text-[1.5rem] font-medium text-[rgb(5, 5, 5)]">
                              연결
                            </p>
                            <p className="text-[1.3rem] text-[rgba(0, 0, 0, 0.6)]">
                              자주 사용하는 툴 연결
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
              {/* </NavigationMenuItem> */}
            </NavigationMenuItem>
          </NavigationMenu>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className="text-[1.5rem]">다운로드</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[22rem] md:grid-cols-1">
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem] font-medium text-[rgb(5, 5, 5)]">
                          Notion(노션)
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem] font-medium text-[rgb(5, 5, 5)]">
                          캘린더
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem] font-medium text-[rgb(5, 5, 5)]">
                          Web Clipper
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
              <hr />
              <p className="md:text-[1.35rem] text-gray-700 px-4 py-4">
                Notion (노션)은{" "}
                <span className="underline underline-offset-4">
                  사용 중인 브라우저
                </span>
                에서 언제든지 사용할 수 있습니다.
              </p>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className="text-[1.5rem]">솔루션</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex max-w-[48.1rem]">
                <div className="border-r-[1px]">
                  <p className="text-[1.1rem] text-[rgba(0,0,0,.6)] tracking-[0.06rem] px-[0.8rem] my-[0.8rem]">
                    팀 규모별 솔루션
                  </p>
                  {/* <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[300px]"> */}
                  <ul className="grid grid-cols-1 gap-3 p-4 w-[30rem] ">
                    <li>
                      <NavigationMenuLink>
                        <Link href="#" className="flex gap-2">
                          <div>
                            <Image
                              src={teamPersonal}
                              width={40}
                              height={40}
                              alt="personal icon"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[1.5rem]">회사</p>
                            <p className="text-[1.3rem]">
                              조직 운영에 필요한 고급 기능
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link href="#" className="flex gap-2">
                          <div>
                            <Image
                              src={teamBusiness}
                              width={40}
                              height={40}
                              alt="personal icon"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[1.5rem]">회사</p>
                            <p className="text-[1.3rem]">
                              조직 운영에 필요한 고급 기능
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link href="#" className="flex gap-2">
                          <div>
                            <Image
                              src={teamEnterprise}
                              width={40}
                              height={40}
                              alt="personal icon"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[1.5rem]">회사</p>
                            <p className="text-[1.3rem]">
                              조직 운영에 필요한 고급 기능
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <p className="text-[1.1rem] text-[rgba(0,0,0,.6)] tracking-[0.06rem] px-[0.8rem] my-[0.8rem]">
                    NOTION 이용대상
                  </p>
                  <ul className="grid w-[200px] gap-2 p-4 md:w-[500px] md:grid-cols-1 lg:w-[300px]">
                    {/* {solutionSublist.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        ></ListItem>
                      ))} */}
                    <li>
                      <NavigationMenuLink>
                        <Link href="#" className="flex gap-1">
                          <div className="flex flex-col py-[0.4rem] px-[0.8rem]">
                            <p className="text-[1.5rem] font-medium text-[rgb(5, 5, 5)]">
                              스타트업
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link href="#" className="flex gap-1">
                          <div className="flex flex-col py-[0.4rem] px-[0.8rem]">
                            <p className="text-[1.5rem] font-medium text-[rgb(5, 5, 5)]">
                              원격 근무
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link href="#" className="flex gap-1">
                          <div className="flex flex-col py-[0.4rem] px-[0.8rem]">
                            <p className="text-[1.5rem] font-medium text-[rgb(5, 5, 5)]">
                              교육
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink>
                        <Link href="#" className="flex gap-1">
                          <div className="flex flex-col py-[0.4rem] px-[0.8rem]">
                            <p className="text-[1.5rem] font-medium text-[rgb(5, 5, 5)]">
                              비영리단체
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className="text-[1.5rem]">자료</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 grid-cols-1 w-[15.6rem]">
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem]">블로그</p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem]">Notion 아카데미</p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem]">가이드와 튜토리얼</p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem]">웨비나</p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem]">도움말 센터</p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem]">API 문서</p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem]">커뮤니티</p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem]">컨설턴트 고용</p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>
                    <Link href="#" className="flex gap-2">
                      <div className="flex flex-col">
                        <p className="text-[1.5rem]">파트너 되기</p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-[1.5rem]">요금제</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenu>
      </nav>

      <div className="hidden md:flex md:ml-auto md:justify-end justify-between w-full items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <Link href="#" className="text-[1.5rem]">
              영업팀 문의하기
            </Link>
            <span className="divider">|</span>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                <span className="text-[1.5rem]">로그인</span>
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button
                size="md"
                className="py-[0.4rem] px-[1.1rem] text-[1.5rem]"
              >
                <span className="">무료로 Notion 사용하기</span>
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">노션 사용하기</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        {/* <ModeToggle /> */}
      </div>
    </header>
  );
};

// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <Icons.logo className="h-6 w-6" />
//                     <div className="mb-2 mt-4 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components that you can copy and
//                       paste into your apps. Accessible. Customizable. Open
//                       Source.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
