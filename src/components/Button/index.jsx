import ctx from "classnames";

export default function Button({
  children,
  bgColor,
  txtColor,
  bgHvColor,
  txtHvColor,
  onClick,
}) {
  const styles = ctx({
    "font-lato": true,
    "px-5": true,
    "py-2": true,
    "rounded-lg": true,
    "outline-none": true,
    "border-none": true,
    [bgColor]: true,
    [txtColor]: true,
    [bgHvColor]: true,
    [txtHvColor]: true,
  });

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
