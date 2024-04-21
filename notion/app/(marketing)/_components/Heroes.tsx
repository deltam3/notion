"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

import testimonialLg from "../../../public/latest/LG_AI_Research_logo.png";
import testimonialSendbird from "../../../public/latest/sendbird.png";
import testimonialHyosung from "../../../public/latest/hyosung.png";
import testimonialGs from "../../../public/latest/GS_logo.svg.png";
import testimonialDg from "../../../public/latest/Daangn_Signature_RGB.png";
import testimonialSocar from "../../../public/latest/socar.png";
import testimonialKakao from "../../../public/latest/KakaoStyle_Logo.png";
import testimonialFF from "../../../public/latest/FandF-Logo.png";

import testimonialPencil from "../../../public/latest/giant-pencil-illustration.png";
import testimonialPencilmark from "../../../public/latest/tools-strikethrough-V2.png";
import testimonialBeforeTools from "../../../public/latest/tools-before-notion-V2.png";

import testimonialMetalab from "../../../public/latest/metalab.png";

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
            <div className="relative w-[800px] h-[500px] mx-auto">
              <button
                className="absolute z-10 left-0 w-1/2 h-full opacity-0 hover:opacity-100"
                onClick={() => featureHandler("prev")}
              >
                <div className="absolute left-7 z-20">
                  <ChevronLeft className="feature-carousel-btn" />
                </div>
              </button>
              <div>
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
              </div>
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
      <section className="py-20">
        <div className="flex flex-col justify-center align-middle text-center">
          <h2 className="">수백만 명이 매일 사용하는 Notion</h2>
          <h3 className="">
            차세대 스타트업부터 기존 기업에 이르기까지 세계 최고의 팀들을
            지원합니다
          </h3>
          <div className="flex justify-center">
            <Link href="#" className="text-blue-600 flex">
              <span>고객 스토리 읽어보기</span>
              <ArrowRight />
            </Link>
          </div>
          <div className="flex gap-10 flex-row justify-center align-middle flex-wrap max-w-[820px] py-20 my-0 mx-auto">
            <div className="w-[128px] h-[20px]">
              <Image
                src={testimonialLg}
                alt="lg ai research"
                className="object-contain"
              />
            </div>
            <div className="w-[121px] h-[20px] ">
              <Image
                src={testimonialSendbird}
                alt="lg ai research"
                className="object-contain"
              />
            </div>
            <div className="w-[136px] h-[20px]">
              <Image
                src={testimonialHyosung}
                alt="lg ai research"
                className="object-contain"
              />
            </div>
            <div className="w-[70px] h-[30px]">
              <Image
                src={testimonialGs}
                alt="lg ai research"
                className="object-contain"
              />
            </div>
            <div className="w-[62px] h-[40px]">
              <Image
                src={testimonialDg}
                alt="lg ai research"
                className="object-contain"
              />
            </div>
            <div className="w-[92px] h-[27px]">
              <Image
                src={testimonialSocar}
                alt="lg ai research"
                className="object-contain"
              />
            </div>
            <div className="w-[109px] h-[23px]">
              <Image
                src={testimonialKakao}
                alt="lg ai research"
                className="object-contain"
              />
            </div>
            <div className="w-[59px] h-[41px]">
              <Image
                src={testimonialFF}
                alt="lg ai research"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center align-middle text-center">
          <div className="flex justify-center align-middle">
            <h2 className="text-4xl font-bold w-4/12">
              여러 툴을 통합하고 비용을 절감하세요
            </h2>
            <div className="relative w-48 h-48">
              <Image
                src={testimonialPencil}
                alt="illustration"
                width={200}
                height={100}
                className="absolute"
              />
            </div>
          </div>
          <div className="relative w-[500px] h-[50px]">
            <div className="relative w-[500px] h-[50px] left-[13%] bottom-[30%]">
              <Image
                src={testimonialPencilmark}
                className="absolute top-[3%] mix-blend-multiply"
                alt="strikethrough pencilmark"
              />
            </div>
            <div className="relative w-[500px] h-[50px] left-[10%] bottom-[75px] ">
              <Image
                src={testimonialBeforeTools}
                alt="other alternative tools used before notion"
                className="mix-blend-multiply"
              />
            </div>
          </div>
          <figure className="flex flex-col justify-center align-middle">
            <blockquote className="text-[24px]">
              "Notion 하나로 10개 이상의 기존 툴을 대체할 수 있었어요."
            </blockquote>
            <figcaption className="flex justify-center align-middle gap-4 ">
              <div className="w-[127px] h-[35px] my-auto">
                <Image src={testimonialMetalab} alt="metalab logo" />
              </div>
              <div>
                <p>Justin Watt</p>
                <p>MetaLab 운영 및 마케팅팀 이사</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};
