export default function Section({ children, customStyles }) {
  return (
    <div
      className={`w-full md:w-10/12 flex flex-col gap-5 xl:gap-10 p-6 ${
        customStyles || ""
      }`}
    >
      {children}
    </div>
  );
}
