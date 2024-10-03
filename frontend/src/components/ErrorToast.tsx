import { useState, useEffect } from "react";
import { Toast, ToastProvider, ToastViewport } from "./ui/toast";
import { ToastTitle, ToastDescription } from "./ui/toast";
import { AlertCircle } from "lucide-react";
import { ErrorToastProps } from "../lib/types";

export default function ErrorToast({
  message,
  duration = 5000,
  onClose,
}: ErrorToastProps) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <ToastProvider>
      <Toast open={open} onOpenChange={setOpen} className="bg-red-600">
        <div className="grid grid-flow-col gap-4">
          <AlertCircle className="h-6 w-6 text-white" />
          <div className="grid gap-1 text-white">
            <ToastTitle>Error</ToastTitle>
            <ToastDescription>{message}</ToastDescription>
          </div>
        </div>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}
