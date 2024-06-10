import { createContext, useContext, useState } from "react";
import Toast from "../components/ui/Toast";

const initialValue = {
  createToast: () => {},
  deleteToast: () => {},
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

export default function ToastContextProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const value = {
    createToast: (options) => {
      setToasts((prev) => [...prev, { ...options }]);
    },
    deleteToast: (toastId) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
    },
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
        {toasts.map(({ id: toastId, title, content, time, variant }) => (
          <li key={toastId}>
            <Toast
              title={title}
              content={content}
              time={time}
              toastId={toastId}
              variant={variant}
            />
          </li>
        ))}
      </ul>
    </ToastContext.Provider>
  );
}
