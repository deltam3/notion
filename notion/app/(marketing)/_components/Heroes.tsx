import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/documents.png"
            fill
            className="object-contain dark:hidden"
            alt="문서 관련 이미지"
          />
          <Image
            src="/documents-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="문서 관련 이미지"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/reading.png"
            fill
            className="object-contain dark:hidden"
            alt="책 읽은 사람"
          />
          <Image
            src="/reading-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="책 읽는 사람"
          />
        </div>
      </div>
    </div>
  );
};
