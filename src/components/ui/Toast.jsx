import clsx from "clsx";
import { useEffect, useState } from "react";
import { useToast } from "../../context/toast.context";

export default function Toast({ title, content, time = 2000, toastId }) {
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
      className={clsx(
        "shadow-lg",
        "w-[320px]",
        "h-[90px]",
        "border",
        "p-6",
        "rounded-lg",
        "text-sm",
        "cursor-pointer",
        {
          "translate-x-[calc(100%+24px)]": !visible,
        },
        "bg-white",
        "hover:bg-gray-50",
        "active:bg-gray-200",
        {
          "animate-slideIn": visible,
          "animate-slideOut": !visible,
        }
      )}
    >
      <h6 className="font-semibold line-clamp-1">{title}</h6>
      <p className="line-clamp-1">{content}</p>
    </article>
  );
}
