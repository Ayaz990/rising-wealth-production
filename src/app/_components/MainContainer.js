export default function MainContainer({ children, bgImage, id, customStyles }) {
  const style = {
    backgroundImage: bgImage ? `url('${bgImage}')` : null,
  };
  return (
    <div
      id={id || ""}
      style={style}
      className={`w-full flex flex-col items-center ${customStyles}`}
    >
      {children}
    </div>
  );
}
