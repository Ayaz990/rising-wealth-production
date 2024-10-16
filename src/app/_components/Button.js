export default function Button({ children, bgColor, textColor }) {
  return (
    <button
      className={`w-full 
      ${bgColor || "bg-[#464bd8]"} 
      ${
        textColor || "text-white"
      } text-lg px-4 py-3 tracking-wide rounded-lg flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-200 hover:gap-5`}
    >
      {children}
    </button>
  );
}
