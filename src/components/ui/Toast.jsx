import { cva } from "class-variance-authority";
import { useEffect, useState } from "react";
import { useToast } from "../../context/toast.context";
import cn from "../../utils/cn";

const ToastVariants = cva(
  `
  shadow-lg w-[320px] h-[90px] border p-6 rounded-lg text-sm cursor-pointer
  `,
  {
    variants: {
      variant: {
        default: `bg-white hover:bg-gray-50 active:bg-gray-200`,
        success: `bg-green-100 hover:bg-green-300 active:bg-green-500`,
        error: `bg-red-100 hover:bg-red-300 active:bg-red-500`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export default function Toast({
  title,
  content,
  time = 2000,
  toastId,
  variant,
}) {
  const [visible, setVisible] = useState(true);
  const toast = useToast();

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        toast.deleteToast(toastId);
      }, 500);
      setVisible(false);
    }, time);
  }, [time, toast, toastId]);

  const deleteToastHandler = () => {
    setTimeout(() => {
      toast.deleteToast(toastId);
    }, 500);
    setVisible(false);
  };

  return (
    <article
      onClick={() => deleteToastHandler()}
      className={cn(ToastVariants({ variant }), {
        "translate-x-[calc(100%+24px)]": !visible,
        "animate-slideIn": visible,
        "animate-slideOut": !visible,
      })}
    >
      <h6 className="font-semibold line-clamp-1">{title}</h6>
      <p className="line-clamp-1">{content}</p>
    </article>
  );
}
