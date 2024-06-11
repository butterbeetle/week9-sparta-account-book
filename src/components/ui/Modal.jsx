export default function Modal({ children, onClose }) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center size-full z-[99] bg-[#7f7f7fd9]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        className="fixed top-0 right-0 p-3 m-1 size-8 flex items-center justify-center
         text-white bg-[#2c2c2c] rounded-full"
        onClick={() => onClose()}
      >
        X
      </button>
      <div>{children}</div>
    </section>
  );
}
