"use client";
import { useState } from "react";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";

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
  ChevronDown,
  Shuffle,
  Eye,
  Palette,
  Menu,
  X,
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

  const [isMobileOn, setIsMobileOn] = useState<boolean>(false);

  const [isWhichMobileMenuOpened, setIsWhichMobileMenuOpened] = useState([
    { id: 0, name: "product", isOpened: false },
    { id: 1, name: "solution", isOpened: false },
    { id: 2, name: "resources", isOpened: false },
    { id: 3, name: "download", isOpened: false },
  ]);

  const mobileMenuHandler = (id: number) => {
    const menus: any = isWhichMobileMenuOpened.map((menu) => {
      console.log("log");
      if (menu.id === id) {
        return { ...menu, isOpened: !menu.isOpened };
      }
      return menu;
    });
    setIsWhichMobileMenuOpened(menus);
  };

  return (
    <header
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full px-[1.6rem] py-[1.5rem] max-[1024px]:flex-col",
        scrolled && "border-b shadow-sm"
      )}
    >
      <nav className="hidden lg:flex">
        <Logo />

        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className="text-[1.5rem]">프로덕트</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-[48rem]">
                <ul className="grid border-r-[1px] w-[50%] gap-3 grid-cols-1 py-[1rem] px-[2rem]">
                  <li>
                    <NavigationMenuLink>
                      <Link href="#" className="flex gap-2">
                        <div>
                          <Sparkle fill="purple" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[1.5rem]">AI</p>
                          <p className="text-[1.3rem]">최적의 AI 어시스턴트</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <Link href="#" className="flex gap-2">
                        <div>
                          <FileText fill="orange" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[1.5rem]">문서</p>
                          <p className="text-[1.3rem]">심플하지만 강력한 툴</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <Link href="#" className="flex gap-2">
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
                      <Link href="#" className="flex gap-2">
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
                      <Link href="#" className="flex gap-2">
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
          </NavigationMenuItem>
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

      <div className="hidden lg:flex md:ml-auto md:justify-end justify-between w-full items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <Link href="#" className="text-[1.5rem]">
              영업팀 문의하기
            </Link>
            <span className="divider">|</span>
            <SignInButton mode="modal">
              <Button className="bg-white text-[black] hover:bg-gray">
                <span className="text-[1.5rem]">로그인</span>
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button className="py-[0.4rem] px-[1.1rem] lg:h-[3rem] hover:bg-gray-600 rounded-md">
                <span className="w-[13.2rem] text-[1.35rem]">
                  무료로 Notion 사용하기
                </span>
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button className="px-[1.1rem] py-[0.4rem] text-white hover:bg-gray-600 rounded-md min-w-[10rem]">
              <Link href="/documents">
                <span className="text-[1.35rem]">노션 사용하기</span>
              </Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
      <div className="hidden max-[1024px]:flex justify-between align-middle w-full mb-[1rem]">
        <Logo />
        <div>
          <button onClick={() => setIsMobileOn(!isMobileOn)} className="">
            {isMobileOn ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMobileOn && (
        <nav className="w-full h-screen overflow-y-auto pb-[14rem] overflow-hidden">
          <div>
            <ul>
              <li
                className="w-full border-t-[1px] my-[1rem]"
                onClick={() => mobileMenuHandler(0)}
              >
                <div className="flex align-middle justify-between h-[6rem]">
                  <p className="text-[1.6rem] font-bold my-auto">프로덕트</p>
                  <div className="my-auto">
                    {isWhichMobileMenuOpened[0].isOpened ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </div>
                </div>
                {isWhichMobileMenuOpened[0].isOpened && (
                  <nav>
                    <ul className="flex flex-col gap-[0.8rem] pb-[1rem] text-[1.6rem]">
                      <li>
                        <Link href="#" className="flex gap-2 align-middle">
                          <div>
                            <Sparkle fill="purple"></Sparkle>
                          </div>
                          <div className="my-auto">
                            <p>AI</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex gap-2 align-middle">
                          <div>
                            <FileText fill="orange"></FileText>
                          </div>
                          <div className="my-auto">
                            <p>문서</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex gap-2 align-middle">
                          <div>
                            <BookOpenText fill="red"></BookOpenText>
                          </div>
                          <div className="my-auto">
                            <p>위키</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex gap-2 align-middle">
                          <div>
                            <Target fill="blue"></Target>
                          </div>
                          <div className="my-auto">
                            <p>프로젝트</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex gap-2 align-middle">
                          <div>
                            <Calendar fill="red"></Calendar>
                          </div>
                          <div className="my-auto">
                            <p>캘린더</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-[0.4rem] text-[1.6rem]">
                      <li>
                        <Link href="#" className="flex gap-2 align-middle">
                          <div className="px-[0.4rem]">
                            <p>템플릿 갤러리</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex gap-2 align-middle">
                          <div className="px-[0.4rem]">
                            <p>고객 스토리</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="flex gap-2 align-middle">
                          <div className="px-[0.4rem]">
                            <p>연결</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                )}
              </li>

              <li
                className="w-full border-t-[1px] my-[1rem]"
                onClick={() => mobileMenuHandler(1)}
              >
                <div className="flex align-middle justify-between h-[6rem]">
                  <p className="text-[1.6rem] font-bold my-auto">솔루션</p>
                  <div className="my-auto">
                    {isWhichMobileMenuOpened[1].isOpened ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </div>
                </div>
                {isWhichMobileMenuOpened[1].isOpened && (
                  <nav className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <span className="text-[1.1rem] text-[rgba(0,0,0,.6)]">
                        팀 규모별 솔류션
                      </span>
                      <ul className="flex flex-col gap-[0.4rem] text-[1.6rem]">
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>회사</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>팀</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>개인</p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-[1.1rem] text-[rgba(0,0,0,.6)]">
                        NOTION 이용대상
                      </span>
                      <ul className="flex flex-col gap-[0.4rem] text-[1.6rem]">
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>스타트업</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>원격 근무</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>교육</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>비영리단체</p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                )}
              </li>
              <li
                className="w-full border-t-[1px] my-[1rem]"
                onClick={() => mobileMenuHandler(2)}
              >
                <div className="flex align-middle justify-between h-[6rem]">
                  <p className="text-[1.6rem] font-bold my-auto">자료</p>
                  <div className="my-auto">
                    {isWhichMobileMenuOpened[2].isOpened ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </div>
                </div>
                {isWhichMobileMenuOpened[2].isOpened && (
                  <nav className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <ul className="flex flex-col gap-[0.4rem] text-[1.6rem]">
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>블로그</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>Notion 아카데미</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>가이드와 튜토리얼</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>웨비나</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>도움말 센터</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>API 문서</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>커뮤니티</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>컨설턴트 고용</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>파트너 되기</p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                )}
              </li>
              <li
                className="w-full border-t-[1px] my-[1rem]"
                onClick={() => mobileMenuHandler(3)}
              >
                <div className="flex align-middle justify-between h-[6rem]">
                  <p className="text-[1.6rem] font-bold my-auto">다운로드</p>
                  <div className="my-auto">
                    {isWhichMobileMenuOpened[3].isOpened ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </div>
                </div>
                {isWhichMobileMenuOpened[3].isOpened && (
                  <nav className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <ul className="flex flex-col gap-[0.4rem] text-[1.6rem]">
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>Notion (노션)</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>Notion 캘린더</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="flex gap-2 align-middle">
                            <div className="px-[0.4rem]">
                              <p>Web Clipper</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <p>
                            <span className="text-[1.35rem] text-[rgba(0,0,0,.6)] px-[0.4rem]">
                              Notion (노션)은{" "}
                              <span className="underline ">
                                사용 중인 브라우저
                              </span>
                              에서 언제든지 사용할 수 있습니다.
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </nav>
                )}
              </li>

              <li className="w-full border-t-[1px] my-[1rem]">
                <div className="flex align-middle justify-between h-[6rem]">
                  <p className="text-[1.6rem] font-bold my-auto">
                    <Link href="#">요금제</Link>
                  </p>
                </div>
              </li>

              <li className="w-full border-t-[1px] border-b-[1px] my-[1rem]">
                <div className="flex align-middle justify-between h-[6rem]">
                  <p className="text-[1.6rem] font-bold my-auto">
                    <Link href="#">영업팀 문의하기</Link>
                  </p>
                </div>
              </li>

              <li className="w-full mt-[2rem] ">
                <div className="flex flex-col gap-4">
                  <button className="text-[white] bg-black text-[1.6rem] py-[1rem] !hover:bg-black w-full">
                    {isAuthenticated ? (
                      <Link href="/documents" className="">
                        <span className="text-[1.6rem] px-[1.4rem] py-[0.4rem text-white hover:bg-black">
                          노션 사용하기
                        </span>
                      </Link>
                    ) : (
                      <SignInButton mode="modal">
                        <Button className="hover:bg-black w-full">
                          <span className="text-[1.5rem]">로그인하기</span>
                        </Button>
                      </SignInButton>
                    )}
                  </button>
                  {isAuthenticated && (
                    <button className="text-black bg-white text-[1.6rem] py-[1rem] border-[1px]">
                      <Link href="/documents" className="">
                        <span className="text-[1.6rem] px-[1.4rem] py-[0.4rem text-black">
                          로그인
                        </span>
                      </Link>
                    </button>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

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
