export default function H3({
  children,
  color,
  textSize,
  customStyles,
}) {
  return (
    <h3
      className={`
      ${textSize || "text-lg md:text-xl"}
      ${color || "text-black"}
      tracking-wide ${customStyles}`}
    >
      {children}
    </h3>
  );
}
