import ctx from "classnames";

export default function Input({
  type,
  placeholder,
  onInput,
  value,
  name,
  borderB = false,
  borderC = false,
}) {
  const styles = ctx({
    "font-lato": true,
    "focus:outline-none": true,
    "border-b": borderB,
    "border-gray-900": borderC,
  });

  return (
    <input
      className={styles}
      onInput={onInput}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
    />
  );
}
