"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:Text-6xl font-bold">
        어떤 일이든 AI로 커넥트하세요.
      </h1>
      <p>
        하나의 워크스페이스에서 문서를 작성하고, 지식을 정리하고, 프로젝트를
        관리하세요.
      </p>
      <Button>
        무료로 Notion 사용하기
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
