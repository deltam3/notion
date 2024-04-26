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

import { Button } from "@/components/ui/button";

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

import teamEng from "../../../public/latest/engineering-v2_1.png";
import teamDesign from "../../../public/latest/design-v2_1.png";
import teamProduct from "../../../public/latest/product.png";
import teamMarketing from "../../../public/latest/marketing.png";
import teamManagement from "../../../public/latest/manage.png";
import teamHr from "../../../public/latest/HR.png";
import teamEngScreenshot from "../../../public/latest/teamEng.webp";
import teamDesignScreenshot from "../../../public/latest/teamDesign.webp";
import teamProductScreenshot from "../../../public/latest/teamMarketing.webp";
import teamMarketingScreenshot from "../../../public/latest/teamManagement.webp";
import teamManagementScreenshot from "../../../public/latest/teamManagement.webp";
import teamHrScreenshot from "../../../public/latest/teamHr.webp";

import communityFaces from "../../../public/latest/faces.png";

import ctaParade from "../../../public/latest/notion-parade.png";

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

  const [block, setBlock] = useState<Number>(0);

  const blockHandler = (action: number) => {
    setBlock(+action);
  };

  const [team, setTeam] = useState<Number>(0);

  return (
    <main>
      <section className="section-testimonial">
        <div className="max-w-[99rem] px-[3.2rem]">
          <figure className="flex flex-col justify-center align-middle">
            <blockquote className="text-[3.4rem] lg:text-[4.3rem]">
              &quot;AI의 모든 것을 담은 앱&quot;
            </blockquote>
            <figcaption>
              <a href="#" className="flex justify-center">
                <div className="relative w-[6.6rem] h-[1.7rem] lg:h-[5rem] lg:w-[100px]">
                  <Image
                    src="/latest/forbes.png"
                    alt="forbes logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-[99rem]">
          <div className="flex justify-center gap-16 pb-[1.5rem]">
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
                <p className="mx-auto text-[2.4rem]">AI</p>
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
                <p className="mx-auto text-[2.4rem]">문서</p>
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
                  <p className="mx-auto text-[2.4rem]">위키</p>
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
                <p className="mx-auto text-[2.4rem]">프로젝트</p>
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
                <p className="mx-auto text-[2.4rem]">캘린더</p>
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-center gap-4">
              {features === 0 && (
                <>
                  <span className="text-[1.6rem]">
                    무엇이든 물어보세요. Notion이 대답해 드려요.
                  </span>
                  <Link href="#" className="flex">
                    <span className="text-purple-600 text-[1.6rem]">
                      자세히 알아보기 &rarr;
                    </span>
                  </Link>
                </>
              )}
              {features === 1 && (
                <>
                  <span className="text-[1.6rem]">
                    심플하고 파워풀한 차세대 메모와 문서.
                  </span>
                  <Link href="#" className="flex">
                    <span className="text-yellow-600 text-[1.6rem]">
                      자세히 알아보기 &rarr;
                    </span>
                  </Link>
                </>
              )}

              {features === 2 && (
                <>
                  <span className="text-[1.6rem]">
                    지식을 한 곳에 모으고더 이상 찾아 헤매지 마세요
                  </span>
                  <Link href="#" className="flex">
                    <span className="text-orange-600 text-[1.6rem]">
                      자세히 알아보기 &rarr;
                    </span>
                  </Link>
                </>
              )}

              {features === 3 && (
                <>
                  <span className="text-[1.6rem]">
                    복잡한 프로젝트를 깔끔하게 관리하세요.
                  </span>
                  <Link href="#" className="flex">
                    <span className="text-blue-600 text-[1.6rem]">
                      자세히 알아보기 &rarr;
                    </span>
                  </Link>
                </>
              )}

              {features === 4 && (
                <>
                  <span className="text-[1.6rem]">
                    시간과 프로젝트를 함께 관리하세요.
                  </span>
                  <Link href="#" className="flex">
                    <span className="text-red-600 text-[1.6rem]">
                      자세히 알아보기 &rarr;
                    </span>
                  </Link>
                </>
              )}
            </div>
            <div className="py-[2rem]">
              {/* <div className="relative min-w-[80rem] min-h-[50rem] mx-auto"> */}
              <div className="min-[1px]:w-[40rem] md:w-[80rem] relative mx-auto px-[4rem]">
                <button
                  className="absolute z-10 left-0 w-1/2 h-full opacity-0 hover:opacity-100"
                  onClick={() => featureHandler("prev")}
                >
                  <div className="absolute left-7 z-20">
                    <ChevronLeft className="feature-carousel-btn" />
                  </div>
                </button>
                {/* <div className="min-w-[20rem]:w-[40rem] min-w-[80rem]:w-[80rem]"> */}
                <div className="relative">
                  {features === 0 && (
                    <Image
                      src={featureAi}
                      alt="ai feature"
                      // className="max-w-full object-contain h-auto"
                      layout="responsive"
                      // fill
                      // className="object-contain"
                    />
                  )}

                  {features === 1 && (
                    <Image
                      src={featureDoc}
                      alt="document feature"
                      // className="max-w-full object-contain h-auto"
                      layout="responsive"
                      // fill
                      // className="object-contain"
                    />
                  )}
                  {features === 2 && (
                    <Image
                      src={featureWiki}
                      alt="wiki feature"
                      // className="max-w-full object-contain h-auto"
                      layout="responsive"
                      // fill
                      // className="object-contain"
                    />
                  )}
                  {features === 3 && (
                    <Image
                      src={featureProject}
                      alt="project feature"
                      // className="max-w-full object-contain h-auto"
                      layout="responsive"
                      // fill
                      // className="object-contain"
                    />
                  )}
                  {features === 4 && (
                    <Image
                      src={featureCalendar}
                      alt="calendar feature"
                      // className="max-w-full object-contain h-auto"
                      layout="responsive"
                      // fill
                      // className="object-contain"
                    />
                  )}
                </div>
                <button
                  className="absolute top-0 right-0 w-1/2 h-full opacity-0 hover:opacity-100"
                  onClick={() => featureHandler("next")}
                >
                  <div className="absolute right-7 z-20 top-2/2 h-full">
                    <ChevronRight className="feature-carousel-btn" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="w-full sm:max-w-[99rem] mx-auto px-[3.2rem]">
          <div className="flex flex-col justify-center align-middle text-center">
            <h2 className="text-[3.6rem] md:text-[4.6rem] font-bold text-[rgb(18, 18, 18)] -tracking-[1.2px]">
              수백만 명이 매일 사용하는 Notion
            </h2>
            <h3 className="text-[1.6rem]">
              차세대 스타트업부터 기존 기업에 이르기까지 세계 최고의 팀들을
              지원합니다
            </h3>
            <div className="flex justify-center">
              <Link href="#" className="text-blue-600 flex">
                <span className="text-[1.6rem]">고객 스토리 읽어보기</span>
                <ArrowRight />
              </Link>
            </div>
            <div className="px-[1.2rem] align-middle w-[42rem] gap-4 md:w-full flex sm:gap-3 md:gap-10 flex-row justify-center align-middle flex-wrap max-w-[82rem] py-20 my-0 mx-auto">
              {/* <div className="w-[128px] h-[20px]">
                <Image
                  src={testimonialLg}
                  alt="lg ai research"
                  className="object-contain"
                /> */}
              <div className="relative sm:w-[12.8rem] sm:h-[2rem] w-[12.8rem] h-[2rem]">
                <Image
                  src={testimonialLg}
                  alt="lg ai research"
                  // className="max-w-full object-contain h-auto"
                  layout="responsive"
                  // fill
                  // className="object-contain"
                />
                {/* </div> */}
              </div>
              <div className="w-[12.1rem] h-[2rem] ">
                <Image
                  src={testimonialSendbird}
                  alt="lg ai research"
                  className="object-contain"
                />
              </div>
              <div className="w-[13.6rem] h-[2rem]">
                <Image
                  src={testimonialHyosung}
                  alt="lg ai research"
                  className="object-contain my-auto"
                />
              </div>
              <div className="w-[7rem] h-[3rem]">
                <Image
                  src={testimonialGs}
                  alt="lg ai research"
                  className="object-contain"
                />
              </div>
              <div className="w-[6.2rem] h-[4rem]">
                <Image
                  src={testimonialDg}
                  alt="lg ai research"
                  className="object-contain"
                />
              </div>
              <div className="w-[9.2rem] h-[2.7rem]">
                <Image
                  src={testimonialSocar}
                  alt="lg ai research"
                  className="object-contain"
                />
              </div>
              <div className="w-[10.9rem] h-[2.3rem]">
                <Image
                  src={testimonialKakao}
                  alt="lg ai research"
                  className="object-contain"
                />
              </div>
              <div className="w-[5.9rem] h-[4.1rem]">
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
              <h2 className="text-[3.6rem] md:text-[4.2rem] font-bold w-4/12">
                여러 툴을 통합하고 비용을 절감하세요
              </h2>
              <div className="relative w-48 h-48 ">
                <Image
                  src={testimonialPencil}
                  alt="illustration"
                  width={200}
                  height={100}
                  className="absolute"
                />
              </div>
            </div>
            <div className="relative w-[50rem] h-[5rem] mx-auto right-[8%] sm:right-[10%]">
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
            <figure className="flex flex-col justify-center align-middle px-[3.2rem]">
              <blockquote className="text-[1.8rem] md:text-[2.4rem]">
                &ldquo;Notion 하나로 10개 이상의 기존 툴을 대체할 수
                있었어요.&ldquo;
              </blockquote>
              <figcaption className="flex justify-center align-middle gap-4 ">
                <div className="w-[127px] h-[35px] my-auto">
                  <Image src={testimonialMetalab} alt="metalab logo" />
                </div>
                <div className="text-left">
                  <p className="text-[1.4rem] md:text-[2rem]">Justin Watt</p>
                  <p className="text-[1.4rem] md:text-[2rem]">
                    MetaLab 운영 및 마케팅팀 이사
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="w-full lg:max-w-[99rem] px-[3.2rem] relative">
          <h2 className="mb-[20rem] text-[4.5rem] font-bold">
            강력한 빌딩 블록
          </h2>
          <div className="flex flex-col gap-5">
            <div className="hero-block px-[3rem] py-5 w-[80%] lg:w-[98rem] relative mx-auto">
              <Image
                className="absolute top-[-20%] w-[50%] h-[25%] md:h-[50%] lg:w-[22rem] lg:h-[15rem] lg:top-[-16%]"
                src={blockTop}
                alt="two people peaking"
              />
              <header className="text-left py-5">
                <Shuffle fill="#0081f2" />
                <h3 className="text-[1.8rem] text-bold pb-5">
                  원하는 방식으로 보기 표시, 필터링, 정렬
                </h3>
                <p className="text-[1.6rem] sm:w-[30rem]">
                  나에게 할당된 작업 또는 긴급으로 표시된 작업만 확인해 보세요.
                  어떤 프로젝트라도 나에게 맞는 방법으로 보기를 조정할 수
                  있어요.
                </p>
              </header>
              <div className="w-[80%] lg:w-[92.2rem] lg:h-[57.7rem] mx-auto pb-5">
                {block === 0 && (
                  <Image
                    src={blockBoard}
                    alt="board feature"
                    className="object-contain"
                    layout="responsive"
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
            <div className="flex justify-between flex-col lg:flex-row gap-[2.4rem] pb-[2.5rem] w-[80%] lg:w-[98rem] mx-auto">
              <div className="hero-block pt-[2.4rem] pl-[3.2rem] mx-auto w-[100%] lg:w-[50%]">
                <header className="text-left">
                  <Eye fill="#0081f2" />
                  <p className="text-[1.8rem] font-bold">관심 정보 지정</p>
                  <p className="max-w-[30rem] text-[1.6rem]">
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
              <div className="hero-block pt-[2.4rem] pl-[3.2rem] mx-auto w-[100%] lg:w-[50%]">
                <header className="text-left">
                  <Palette fill="#0081f2" />
                  <p className="text-[1.8rem] font-bold">
                    원하는 대로 페이지를 구성하고 아이디어 공유
                  </p>
                  <p className="text-[1.6rem]">
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

          <figure className="w-[80%] mx-auto">
            <blockquote className="text-[2.4rem] mx-auto w-[60%] py-[2rem]">
              &ldquo;Notion은 니즈에 맞는 커스텀이 가능합니다. 사용자가 원하는
              만큼 간단하게 또는 정교하게 만들어 사용할 수 있어요.&ldquo;
            </blockquote>
            <figcaption className="flex flex-col md:flex-row justify-center align-middle gap-3 mx-auto">
              <div className="w-[3.3rem] h-[3.6rem] mx-auto sm:mx-0 relative">
                <Image src={tinderIcon} alt="match group icon" fill />
              </div>
              <div className="flex flex-col justify-center align-middle text-center md:text-left ">
                <p className="font-bold text-[1.35rem]">Rahim Makani</p>
                <p className="text-[1.35rem]">Match Group 프로덕트 디렉터</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="py-20">
        <div className="w-[80%] lg:w-[99rem] px-[0.8rem] md:px-[3.2rem] mx-auto">
          <h2 className="text-[3rem] pb-[2rem] md:text-[4.5rem] font-bold">
            모든 팀을 위한 협업툴
          </h2>
          <div className="flex justify-center pb-[2.5rem] gap-2 md:gap-5 lg:gap-10 w-[60%] lg:w-[80%] mx-auto">
            <div
              className={clsx(
                // "hero-block pt-[1rem] px-[1.2rem] pb-[1.2rem] md:w-[15.7rem] md:h-[12.5rem]",
                "hero-block my-auto",
                {
                  "selected-white": team === 0,
                }
              )}
            >
              <button
                onClick={() => setTeam(0)}
                className="py-[0.2rem] px-[0.4rem]  md:py-[1rem] md:px-[1.2rem] md:pb-[1.2rem]"
              >
                <div className="hidden lg:block">
                  <Image src={teamEng} alt="feature for Engineering teams" />
                </div>
                <p className="text-[1.3rem] lg:text-[1.6rem] font-medium whitespace-nowrap">
                  엔지니어링
                </p>
              </button>
            </div>
            <div
              className={clsx("hero-block my-auto", {
                "selected-white": team === 1,
              })}
            >
              <button
                onClick={() => setTeam(1)}
                className="py-[0.2rem] px-[0.4rem] md:pt-[1rem] md:px-[1.2rem] md:pb-[1.2rem]"
              >
                <div className="hidden lg:block">
                  <Image src={teamDesign} alt="feature for Design teams" />
                </div>
                <p className="text-[1.3rem] md:text-[1.6rem] font-medium whitespace-nowrap">
                  디자인
                </p>
              </button>
            </div>
            <div
              className={clsx("hero-block my-auto", {
                "selected-white": team === 2,
              })}
            >
              <button
                onClick={() => setTeam(2)}
                className="py-[0.2rem] px-[0.4rem] md:pt-[1rem] md:px-[1.2rem] md:pb-[1.2rem]"
              >
                <div className="hidden lg:block">
                  <Image src={teamProduct} alt="feature for Product teams" />
                </div>
                <p className="text-[1.3rem] md:text-[1.6rem] font-medium whitespace-nowrap">
                  프로덕트
                </p>
              </button>
            </div>
            <div
              className={clsx("hero-block my-auto ", {
                "selected-white": team === 3,
              })}
            >
              <button
                onClick={() => setTeam(3)}
                className="py-[0.2rem] px-[0.4rem] md:pt-[1rem] md:px-[1.2rem] md:pb-[1.2rem]"
              >
                <div className="hidden lg:block">
                  <Image
                    src={teamMarketing}
                    alt="feature for Management teams"
                  />
                </div>
                <p className="text-[1.3rem] md:text-[1.6rem] font-medium whitespace-nowrap">
                  마케팅
                </p>
              </button>
            </div>
            <div
              className={clsx("hero-block my-auto", {
                "selected-white": team === 4,
              })}
            >
              <button
                onClick={() => setTeam(4)}
                className="py-[0.2rem] px-[0.4rem] md:pt-[1rem] md:px-[1.2rem] md:pb-[1.2rem]"
              >
                <div className="hidden lg:block">
                  <Image
                    src={teamManagement}
                    alt="feature for Management teams"
                  />
                </div>
                <p className="text-[1.3rem] md:text-[1.6rem] font-medium whitespace-nowrap">
                  운영
                </p>
              </button>
            </div>
            <div
              className={clsx("hero-block my-auto ", {
                "selected-white": team === 5,
              })}
            >
              <button
                onClick={() => setTeam(5)}
                className="py-[0.2rem] px-[0.4rem] md:pt-[1rem] md:px-[1.2rem] md:pb-[1.2rem]"
              >
                <div className="hidden lg:block">
                  <Image src={teamHr} alt="feature for Hr teams" />
                </div>
                <p className="text-[1.3rem] md:text-[1.6rem] font-medium whitespace-nowrap">
                  HR
                </p>
              </button>
            </div>
          </div>
          <div className="flex justify-center w-[50%] lg:w-[80%] mx-auto md:px-[0.8rem]">
            {team === 0 && (
              <Image
                src={teamEngScreenshot}
                alt="engineering team using notion"
                className="object-contain"
              />
            )}
            {team === 1 && (
              <Image
                src={teamDesignScreenshot}
                alt="design team using notion"
                className="object-contain"
              />
            )}
            {team === 2 && (
              <Image
                src={teamProductScreenshot}
                alt="product team using notion"
                className="object-contain"
              />
            )}
            {team === 3 && (
              <Image
                src={teamMarketingScreenshot}
                alt="marketing team using notion"
                className="object-contain"
              />
            )}
            {team === 4 && (
              <Image
                src={teamManagementScreenshot}
                alt="management team using notion"
                className="object-contain"
              />
            )}
            {team === 5 && (
              <Image
                src={teamHrScreenshot}
                alt="hr team using notion"
                className="object-contain"
              />
            )}
          </div>
        </div>
      </section>
      {/* <section className="py-20">
        <div className="max-w-[99rem] px-[3.2rem]">
          <div className="flex flex-col justify-center text-center max-w-[66rem] mx-auto">
            <div className="max-w-[66rem] mx-auto">
              <h2 className="text-[4.5rem] leading-[4.9rem] -tracking-[0.12rem] font-bold">
                글로벌 커뮤니티와 함께 창의성을 발휘하세요
              </h2>
              <p className="text-[1.6rem]">
                활발한 Notion 커뮤니티에서는 콘텐츠를 만들고, 트레이닝 코스를
                제공하고, 이벤트를 주최하는 등의 활동을 주도합니다.
              </p>
              <Link href="#" className="flex justify-center align-middle">
                <span className="text-blue-600 my-auto">자세히 알아보기</span>
                <ArrowRight fill="blue" />
              </Link>
            </div>
          </div>
          <div className="">
            <Image src={communityFaces} alt="notion users" />
          </div>
          <div className="flex justify-center gap-3">
            <div className="hero-block">
              <p>1M+</p>
              <p>커뮤니티 멤버</p>
            </div>
            <div className="hero-block">
              <p>150+</p>
              <p>커뮤니티 그룹</p>
            </div>
            <div className="hero-block">
              <p>50+</p>
              <p>함께하는 국가</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-20">
        <div className="w-[80%] md:w-[99rem] px-[3.2rem] mx-auto">
          <h2 className="text-[4.5rem] md:text-[6.1rem] mb-4 font-bold mx-auto">
            무료로 시작하기
          </h2>
          <p className="mb-4 text-[1.6rem]">
            요금을 지불하고 팀원을 추가하기 전에 무료로 충분히 사용해 보세요.
          </p>
          <div className="flex justify-center gap-4 pb-4">
            <button className="bg-black text-white py-2 px-4 rounded-md text-[1.6rem]">
              무료로 Notion 사용하기
            </button>
            <button className="flex align-middle">
              <p className="text-blue-600 my-auto text-[1.6rem]">
                영업팀 문의하기 &rarr;
              </p>
            </button>
          </div>
          <div className="w-[80%] mx-auto">
            <Image
              src={ctaParade}
              alt="notion parade"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
