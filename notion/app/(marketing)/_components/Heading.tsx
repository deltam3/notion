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
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:Text-6xl font-bold">
        어떤 일이든 AI로 커넥트하세요.
      </h1>
      <p>
        하나의 워크스페이스에서 문서를 작성하고, 지식을 정리하고, 프로젝트를
        관리하세요.
      </p>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            노션 사용하기
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            노션 무료로 다운받기
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
