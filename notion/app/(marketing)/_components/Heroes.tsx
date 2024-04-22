"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

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

import blockTop from "../../../public/latest/topPeek.png";
import blockBoard from "../../../public/latest/features-board.webp";
import blockGraph from "../../../public/latest/features-graph.webp";
import blockTimeline from "../../../public/latest/features-timeline.webp";
import blockCalendar from "../../../public/latest/features-calendar.webp";
import blockGallery from "../../../public/latest/features-gallery.webp";
import blockList from "../../../public/latest/features-list.webp";
import tinderIcon from "../../../public/latest/match-group.png";
import blockLeft from "../../../public/latest/block-left.webp";
import blockRight from "../../../public/latest/block-right.webp";

export const Heroes = () => {
  const [features, setFeatures] = useState<Number>(1);

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

  const [block, setBlock] = useState<Number>(0);

  const blockHandler = (action: number) => {
    setBlock(+action);
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
          <div className="relative w-[50rem] h-[5rem] mx-auto right-[16%]">
            <div className="absolute w-[50rem] h-[5rem] left-[13%] bottom-[30%]">
              <Image
                src={testimonialPencilmark}
                className="absolute mix-blend-multiply"
                alt="strikethrough pencilmark"
              />
            </div>
            <div className="absolute w-[50rem] h-[5rem] left-[13%] bottom-[50%] ">
              <Image
                src={testimonialBeforeTools}
                alt="other alternative tools used before notion"
                className="absolute mix-blend-multiply"
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
              <div className="text-left">
                <p>Justin Watt</p>
                <p>MetaLab 운영 및 마케팅팀 이사</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-[99rem] px-[3.2rem] relative">
          <Image
            className="absolute top-[-5%]"
            src={blockTop}
            alt="two people peaking"
          />
          <h2 className="text-[45px] font-bold">강력한 빌딩 블록</h2>
          <div className="flex flex-col gap-5">
            <div className="hero-block px-5 py-5 max-w-[98rem]">
              <header className="text-left py-5">
                <Shuffle fill="#0081f2" />
                <h3 className="text-[18px] text-bold pb-5">
                  원하는 방식으로 보기 표시, 필터링, 정렬
                </h3>
                <p className="text-[16px] max-w-[30rem]">
                  나에게 할당된 작업 또는 긴급으로 표시된 작업만 확인해 보세요.
                  어떤 프로젝트라도 나에게 맞는 방법으로 보기를 조정할 수
                  있어요.
                </p>
              </header>
              <div className="max-w-[92.2rem] max-h-[57.7rem] mx-auto pb-5">
                {block === 0 && (
                  <Image
                    src={blockBoard}
                    alt="board feature"
                    className="object-contain"
                  />
                )}
                {block === 1 && (
                  <Image
                    src={blockGraph}
                    alt="graph feature"
                    className="object-contain"
                  />
                )}
                {block === 2 && (
                  <Image
                    src={blockTimeline}
                    alt="timeline feature"
                    className="object-contain"
                  />
                )}
                {block === 3 && (
                  <Image
                    src={blockCalendar}
                    alt="calendar feature"
                    className="object-contain"
                  />
                )}
                {block === 4 && (
                  <Image
                    src={blockGallery}
                    alt="gallery feature"
                    className="object-contain"
                  />
                )}
                {block === 5 && (
                  <Image
                    src={blockList}
                    alt="list feature"
                    className="object-contain"
                  />
                )}
              </div>
              <div>
                <nav className="flex justify-center gap-5">
                  {/* <div className="border-[0.9px] rounded-md mt-[2px]"> */}
                  <div
                    className={clsx("border-[0.9px] rounded-md mt-[2px]", {
                      "selected-gray": block === 0,
                    })}
                  >
                    <button
                      className="py-[3.2px] px-[9.6px]"
                      onClick={() => setBlock(0)}
                    >
                      보드
                    </button>
                  </div>

                  <div
                    className={clsx("border-[0.9px] rounded-md mt-[2px]", {
                      "selected-gray": block === 1,
                    })}
                  >
                    <button
                      className="py-[3.2px] px-[9.6px]"
                      onClick={() => setBlock(1)}
                    >
                      표
                    </button>
                  </div>
                  <div
                    className={clsx("border-[0.9px] rounded-md mt-[2px]", {
                      "selected-gray": block === 2,
                    })}
                  >
                    <button
                      className="py-[3.2px] px-[9.6px]"
                      onClick={() => setBlock(2)}
                    >
                      타임라인
                    </button>
                  </div>
                  <div
                    className={clsx("border-[0.9px] rounded-md mt-[2px]", {
                      "selected-gray": block === 3,
                    })}
                  >
                    <button
                      className="py-[3.2px] px-[9.6px]"
                      onClick={() => setBlock(3)}
                    >
                      캘린더
                    </button>
                  </div>
                  <div
                    className={clsx("border-[0.9px] rounded-md mt-[2px] ", {
                      "selected-gray": block === 4,
                    })}
                  >
                    <button
                      className="py-[3.2px] px-[9.6px]"
                      onClick={() => setBlock(4)}
                    >
                      갤러리
                    </button>
                  </div>
                  <div
                    className={clsx("border-[0.9px] rounded-md mt-[2px] ", {
                      "selected-gray": block === 5,
                    })}
                  >
                    <button
                      className="py-[3.2px] px-[9.6px]"
                      onClick={() => setBlock(5)}
                    >
                      리스트
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            <div className="flex justify-between gap-[2.4rem] pb-[2.5rem]">
              <div className="hero-block pt-[2.4rem] pl-[3.2rem]">
                <header className="text-left">
                  <Eye fill="#0081f2" />
                  <p className="text-[1.8rem] text-bold">관심 정보 지정</p>
                  <p className="max-w-[30rem]">
                    필요에 맞게 라벨, 태그, 담당자 등을 지정해 모든 사람들이
                    관련 정보를 볼 수 있게 하세요.
                  </p>
                </header>
                <div>
                  <Image
                    src={blockLeft}
                    alt="block functionality"
                    className="p-[4px]"
                  />
                </div>
              </div>
              <div className="hero-block pt-[2.4rem] pl-[3.2rem]">
                <header className="text-left">
                  <Palette fill="#0081f2" />
                  <p className="text-[1.8rem] text-bold">
                    원하는 대로 페이지를 구성하고 아이디어 공유
                  </p>
                  <p>
                    Notion에서는 이미지, 토글, 할 일, 임베드된 데이터베이스까지
                    모든 것이 드래그 & 드롭입니다.
                  </p>
                </header>
                <div className="relative">
                  <Image
                    src={blockRight}
                    alt="block functionality"
                    className="p-[4px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <figure>
            <blockquote className="text-[2.4rem] mx-auto max-w-[60%]">
              "Notion은 니즈에 맞는 커스텀이 가능합니다. 사용자가 원하는 만큼
              간단하게 또는 정교하게 만들어 사용할 수 있어요."
            </blockquote>
            <figcaption className="flex justify-center align-middle gap-3">
              <div className="max-w-[3.3rem] max-h-[3.6rem]">
                <Image src={tinderIcon} alt="match group icon" />
              </div>
              <div className="flex flex-col justify-center align-middle text-left">
                <p className="font-bold">Rahim Makani</p>
                <p>Match Group 프로덕트 디렉터</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};
