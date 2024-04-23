"use client";

import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <section className="py-20">
      <div className="max-w-[99rem] px-[3.2rem]">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-[6.1rem] font-bold">
            함께쓰고,계획하고,즐기세요
          </h1>
          <p className="text-[2.4rem]">
            Notion의 AI 기반 워크스페이스로 아이디어를 액션으로 옮기세요
          </p>
          {isLoading && (
            <div className="w-full flex items-center justify-center">
              <Spinner size="lg" />
            </div>
          )}
          {isAuthenticated && !isLoading && (
            <div className="flex gap-2 justify-center">
              <Button
                className="hero-btn text-[1.6rem] px-[2rem] py-[1rem]"
                asChild
              >
                <Link href="/documents" className="text-[1.6rem]">
                  노션 사용하기
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild>
                <Link href="#">
                  영업팀 문의하기
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          )}
          {!isAuthenticated && !isLoading && (
            <div className="flex gap-2 justify-center text-[1.6rem]">
              <SignInButton mode="modal">
                <Button className="hero-btn px-[2rem] py-[2rem]">
                  <span className="text-[1.6rem]">노션 무료로 다운받기</span>
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
