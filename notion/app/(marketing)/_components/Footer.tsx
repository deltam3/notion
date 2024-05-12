import { Logo } from "./Logo";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  Globe,
  ChevronDown,
} from "lucide-react";

import React from "react";

export const Footer = () => {
  return (
    <footer className="">
      <nav className="flex flex-col align-middle px-[3.2rem] py-[3.8rem] lg:py-[8rem] lg:px-[12.5rem] max-w-[127.4rem] lg:flex-row lg:gap-[2.4rem] mx-auto">
        <div className="footer-top flex flex-col mb-[3.6rem] lg:w-[25%] lg:items-start lg:justify-stretch">
          <div className="mb-[3.6rem]">
            <Logo />
          </div>
          <div>
            <ul className="flex mb-[2.4rem] gap-[0.2rem]">
              <li>
                <Instagram className="h-[3rem] w-[3rem] p-[0.6rem] hover:bg-[#f6f5f4]" />
              </li>
              <li>
                <Twitter className="h-[3rem] w-[3rem] p-[0.6rem] hover:bg-[#f6f5f4]" />
              </li>
              <li>
                <Linkedin className="h-[3rem] w-[3rem] p-[0.6rem] hover:bg-[#f6f5f4]" />
              </li>
              <li>
                <Facebook className="h-[3rem] w-[3rem] p-[0.6rem] hover:bg-[#f6f5f4]" />
              </li>
              <li>
                <Youtube className="h-[3rem] w-[3rem] p-[0.6rem] hover:bg-[#f6f5f4]" />
              </li>
            </ul>
          </div>
          <div>
            <a href="#" className="">
              <button className="flex align-middle justify-center rounded-lg border-[1px] border-[rgba(0,0,0,.15)] px-[0.4rem] py-[1.4rem] m-[0.1rem] min-h-[3.6rem] px-[0.25rem] py-[0.875rem] text-[1rem] hover:bg-[#f6f5f4]">
                <Globe className="h-[3rem] w-[3rem] p-[0.6rem]" />
                <p className="my-auto text-[1.6rem] font-[570]">한국어</p>
                <ChevronDown className="h-[3rem] w-[3rem] p-[0.6rem]" />
              </button>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-main ">
            <ul className="mb-[3.6rem]">
              <li>
                <p className="text-[1.6rem] font-bold  text-[#121212]">
                  프로덕트
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  AI
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  문서
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  위키
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  프로젝트
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  캘린더
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  새로운 기능
                </p>
              </li>
            </ul>
            <ul className="mb-[3.6rem]">
              <li>
                <p className="text-[1.6rem] font-bold  text-[#121212]">
                  솔류선
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  회사
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  팀
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  개인
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  원격 근무
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  스타트업
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  교육
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  비영리단체
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  엔지니어링
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  프로덕트
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  디자인
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  매니저
                </p>
              </li>
            </ul>
            <ul className="mb-[3.6rem]">
              <li>
                <p className="text-[1.6rem] font-bold  text-[#121212]">
                  다운로드
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  iOS & Android
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  Mac & Windows
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  캘린더
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  Web Clipper
                </p>
              </li>
            </ul>
            <ul className="mb-[3.6rem]">
              <li>
                <p className="text-[1.6rem] font-bold  text-[#121212]">
                  만들기
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  API 통합
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  템플릿
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  API 문서
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  가이드와 튜토리얼
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  컨설턴트 고용
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  파트너 되기
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  추천인 되기
                </p>
              </li>
            </ul>
            <ul className="mb-[3.6rem]">
              <li>
                <p className="text-[1.6rem] font-bold  text-[#121212]">
                  학습하기
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  고객 스토리
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  도움말 센터
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  웨비나
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  블로그
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  커뮤니티
                </p>
              </li>
            </ul>
            <ul className="mb-[3.6rem]">
              <li>
                <p className="text-[1.6rem] font-bold  text-[#121212]">
                  시작하기
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  Confluence에서 옮겨오기
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  Asana에서 전환
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  Evernote에서 옮겨오기
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  Monday와 비교
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  Clickup과 비교
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  Jira과 비교
                </p>
              </li>
            </ul>
            <ul className="mb-[3.6rem]">
              <li>
                <p className="text-[1.6rem] font-bold  text-[#121212]">자료</p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  요금제
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  Notion 소개
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  채용
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  미디어 키트
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  Notion에 이메일 보내기
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  보안
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  쿠기 설정
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  이용약관 및 개인정보 보호정책
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  캘리포니아 개인정보 보호정책
                  <br />
                  (California Privacy Notice)
                </p>
              </li>
              <li>
                <p className="text-[1.6rem] text-[#00000099] tracking-[0.0135px]">
                  서비스 상태
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-legal mt-[3.6rem]">
            <button>
              <p className="text-[rgb(5,5,5)] text-[1.5rem] tracking-[0.0135px] ">
                개인정보 판매나 공유를 원하지 않으시면 클릭해주세요.
              </p>
            </button>
            <p className="text-[rgba(0, 0, 0, 0.4)] text-[1.35rem] tracking-[0.10125px]">
              © 2024 Notion Labs, Inc.
            </p>
          </div>
        </div>
      </nav>
    </footer>
  );
};
