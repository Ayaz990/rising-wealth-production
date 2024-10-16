export default function ButtonGroup({ children }) {
  return (
    <div
      className={`w-full md:w-max flex flex-col-reverse md:flex-row gap-5 mt-6   lg:mt-10`}
    >
      {children}
    </div>
  );
}
