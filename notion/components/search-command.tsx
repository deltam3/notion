"use client";

import { useEffect, useState } from "react";
import { File } from "lucide-react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearch } from "@/hooks/use-search";
import { api } from "@/convex/_generated/api";

export const SearchCommand = () => {
  const { user } = useUser();
  const router = useRouter();
  const documents = useQuery(api.documents.getSearch);
  const [isMounted, setIsMounted] = useState(false);

  const toggle = useSearch((store) => store.toggle);
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const onSelect = (id: string) => {
    router.push(`/documents/${id}`);
    onClose();
  };

  if (!isMounted) {
    return null;
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput
        className="text-[1.8rem]"
        placeholder={`${user?.fullName ?? "유저"}님의 노션을 검색하기`}
      />
      <CommandList>
        <CommandEmpty>행당하는 결과가 없습니다.</CommandEmpty>
        <CommandGroup>
          {documents?.map((document) => (
            <CommandItem
              key={document._id}
              value={`${document._id}-${document.title}`}
              title={document.title}
              onSelect={() => onSelect(document._id)}
              className="mr-[1rem]"
            >
              {document.icon ? (
                <p className="mr-2 h-[1.8rem] w-[1.8rem] text-[1.8rem]">
                  {document.icon}
                </p>
              ) : (
                <File className="mr-2 h-[1.8rem] w-[1.8rem]" />
              )}
              <span className="text-[1.4rem]">{document.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
