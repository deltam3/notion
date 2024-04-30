"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useSettings } from "@/hooks/use-settings";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-[1.4rem] font-medium">내 설정</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label className="text-[1.4rem]">외관</Label>
            <span className="text-[1.3rem] text-muted-foreground">
              노션의 외관을 개인화하세요.
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
