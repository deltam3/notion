"use client";

import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

import Image from "next/image";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <section className="py-20">
      <div className="max-w-[45rem] sm:max-w-[78rem] lg:px-[2.4rem]">
        <div className="space-y-3">
          <h1 className="text-[4.5rem] lg:text-[6.1rem] font-bold leading-[4.9rem] lg:leading-[6.5rem]">
            <span className="max-[700px]:block">함께쓰고,</span>
            <span>계획하고,</span>
            <span>즐기세요</span>
          </h1>
          <p className="lg:max-w-[31.7rem] text-[2.4rem] mx-auto leading-[3rem] pb-[1.6rem]">
            Notion의 AI 기반 워크스페이스로 아이디어를 액션으로 옮기세요
          </p>
          {isLoading && (
            <div className="w-full flex items-center justify-center">
              <Spinner size="icon" />
            </div>
          )}
          {isAuthenticated && !isLoading && (
            <div className="flex gap-2 align-middle justify-center">
              <div className="">
                <Button className="hero-btn px-[1.4rem] py-[.4rem] w-[15rem] h-full">
                  <Link href="/documents" className="">
                    <span className="text-[1.6rem] px-[1.4rem] py-[0.4rem text-white">
                      노션 사용하기
                    </span>
                  </Link>
                </Button>
              </div>
              <div>
                <Button
                  asChild
                  className="bg-white text-[#0081f2] px-[2rem] py-[2rem]"
                >
                  <Link href="#">
                    <span className="text-[1.6rem]">영업팀 문의하기</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
          {!isAuthenticated && !isLoading && (
            <div className="flex gap-2 justify-center text-[1.6rem]">
              <SignInButton mode="modal">
                <Button className="hero-btn px-[2rem] py-[2rem] rounded-lg">
                  {/* <span className="text-[1.6rem]">무료로 Notion 사용하기</span> */}
                  <Link href="/documents" className="">
                    <span className="text-[1.6rem] px-[1.4rem] py-[0.4rem text-white">
                      무료로 노션 사용하기
                    </span>
                  </Link>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </SignInButton>
              <Button
                className="bg-white text-black px-[2rem] py-[2rem]"
                asChild
              >
                <Link href="#">
                  <span className="text-[1.6rem]">영업팀 문의하기</span>

                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

//
