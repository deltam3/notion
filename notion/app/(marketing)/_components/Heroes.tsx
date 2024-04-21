"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

import {
  Sparkle,
  FileText,
  BookOpenText,
  Target,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import featureAi from "../../../public/latest/features-ai.webp";
import featureDoc from "../../../public/latest/features-document.webp";
import featureWiki from "../../../public/latest/features-wiki.png";
import featureProject from "../../../public/latest/features-project.webp";
import featureCalendar from "../../../public/latest/features1-calendar.webp";
import Link from "next/link";

export const Heroes = () => {
  const [features, setFeatures] = useState<Number>(0);

  const featureHandler = (action: string) => {
    if (action === "prev") {
      if (+features === 0) {
        setFeatures(4);
      } else {
        setFeatures(+features - 1);
      }
    }
    if (action === "next") {
      if (+features === 4) {
        setFeatures(0);
      } else {
        setFeatures(+features + 1);
      }
    }
  };
  return (
    <main>
      <section className="section-testimonial">
        <figure className="flex flex-col justify-center align-middle">
          <blockquote>&quot;AI의 모든 것을 담은 앱&quot;</blockquote>
          <figcaption>
            <a href="#" className="flex justify-center">
              <div className="relative h-[50px] w-[100px] md:block">
                <Image
                  src="/latest/forbes.png"
                  alt="forbes"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </figcaption>
        </figure>
      </section>
      <section className="py-20">
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-4 justify-center align-middle">
            <button
              className="flex flex-col gap-4 justify-center align-middle"
              onClick={() => setFeatures(0)}
            >
              {features === 0 ? (
                <Sparkle fill="purple" className="my-0 mx-auto" />
              ) : (
                <Sparkle className="my-0 mx-auto" />
              )}
              <p>AI</p>
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-center align-middle">
            <button
              className="flex flex-col gap-4 justify-center align-middle"
              onClick={() => setFeatures(1)}
            >
              {features === 1 ? (
                <FileText fill="yellow" className="my-0 mx-auto" />
              ) : (
                <FileText className="my-0 mx-auto" />
              )}
              <p>문서</p>
            </button>
          </div>
          <div>
            <button
              className="flex flex-col gap-4 justify-center align-middle"
              onClick={() => setFeatures(2)}
            >
              <button className="flex flex-col gap-4 justify-center align-middle">
                {features === 2 ? (
                  <BookOpenText fill="orange" className="my-0 mx-auto" />
                ) : (
                  <BookOpenText className="my-0 mx-auto" />
                )}
                <p>위키</p>
              </button>
            </button>
          </div>
          <div
            className="flex flex-col gap-4 justify-center align-middle"
            onClick={() => setFeatures(3)}
          >
            <button className="flex flex-col gap-4 justify-center align-middle">
              {features === 3 ? (
                <Target fill="blue" className="my-0 mx-auto" />
              ) : (
                <FileText className="my-0 mx-auto" />
              )}
              <p>프로젝트</p>
            </button>
          </div>
          <div
            className="flex flex-col gap-4 justify-center align-middle"
            onClick={() => setFeatures(4)}
          >
            <button className="flex flex-col gap-4 justify-center align-middle">
              {features === 4 ? (
                <Calendar fill="red" className="my-0 mx-auto" />
              ) : (
                <Calendar className="my-0 mx-auto" />
              )}
              <p>캘린더</p>
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-4">
            {features === 0 && (
              <>
                <span>무엇이든 물어보세요. Notion이 대답해 드려요.</span>
                <Link href="#" className="flex">
                  <span className="text-purple-600">자세히 알아보기</span>
                  <ArrowRight />
                </Link>
              </>
            )}
            {features === 1 && (
              <>
                <span>심플하고 파워풀한 차세대 메모와 문서.</span>
                <Link href="#" className="flex">
                  <span className="text-yellow-600">자세히 알아보기</span>
                  <ArrowRight />
                </Link>
              </>
            )}

            {features === 2 && (
              <>
                <span>지식을 한 곳에 모으고더 이상 찾아 헤매지 마세요</span>
                <Link href="#" className="flex">
                  <span className="text-orange-600">자세히 알아보기</span>
                  <ArrowRight />
                </Link>
              </>
            )}

            {features === 3 && (
              <>
                <span>복잡한 프로젝트를 깔끔하게 관리하세요.</span>
                <Link href="#" className="flex">
                  <span className="text-blue-600">자세히 알아보기</span>
                  <ArrowRight />
                </Link>
              </>
            )}

            {features === 4 && (
              <>
                <span>시간과 프로젝트를 함께 관리하세요.</span>
                <Link href="#" className="flex">
                  <span className="text-red-600">자세히 알아보기</span>
                  <ArrowRight />
                </Link>
              </>
            )}
          </div>
          <div>
            <div className="relative w-[800px] h-[500px]">
              <button
                className="absolute z-10 left-0 w-1/2 h-full opacity-0 hover:opacity-100"
                onClick={() => featureHandler("prev")}
              >
                <div className="absolute left-7 z-20">
                  <ChevronLeft className="feature-carousel-btn" />
                </div>
              </button>

              {features === 0 && (
                <Image src={featureAi} fill alt="ai feature" />
              )}

              {features === 1 && (
                <Image src={featureDoc} fill alt="document feature" />
              )}
              {features === 2 && (
                <Image src={featureWiki} fill alt="wiki feature" />
              )}
              {features === 3 && (
                <Image src={featureProject} fill alt="project feature" />
              )}
              {features === 4 && (
                <Image src={featureCalendar} fill alt="calendar feature" />
              )}

              <button
                className="absolute right-0 w-1/2 h-full opacity-0 hover:opacity-100"
                onClick={() => featureHandler("next")}
              >
                <div className="absolute right-7 z-10 top-2/2 h-full">
                  <ChevronRight className="feature-carousel-btn" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
