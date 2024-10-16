export default function Description({
  children,
  color,
  textSize,
  customStyles,
}) {
  return (
    <p
      className={`
      ${textSize || "text-lg md:text-xl"}
      ${color || "text-black"}
      tracking-wide ${customStyles}`}
    >
      {children}
    </p>
  );
}
