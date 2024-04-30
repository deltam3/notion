"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface BannerProps {
  documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "노트 삭제중...",
      success: "노트 삭제 완료",
      error: "노트 삭제 실패",
    });

    router.push("/documents");
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "삭제된 노트 복구중",
      success: "노트 복구 완료",
      error: "노트 복구 실패",
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center text-[1.4rem] p-2 text-white flex items-center gap-x-2 justify-center">
      <p>이 페이지는 쓰레기통에 있습니다.</p>
      <Button
        size="sm"
        onClick={onRestore}
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal text-[1.4rem]"
      >
        페이지 복구
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal text-[1.4rem]"
        >
          영구 삭제
        </Button>
      </ConfirmModal>
    </div>
  );
};
