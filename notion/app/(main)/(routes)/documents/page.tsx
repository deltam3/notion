"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    console.log(user);
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "새로운 노트를 생성중",
      success: "새로운 노트를 생성했습니다.!",
      error: "노트 생성 실패!",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-[1.35rem] font-medium">
        {user?.firstName ?? "유저"}님 노션에 환영합니다.
      </h2>
      <Button onClick={onCreate} className="text-[1.35rem] px-4 py-2">
        <PlusCircle className="h-8 w-8 mr-4" />
        <span>노트 생성</span>
      </Button>
    </div>
  );
};

export default DocumentsPage;
