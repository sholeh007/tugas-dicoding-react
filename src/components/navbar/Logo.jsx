import csx from "classnames";

export default function Logo({ children, color }) {
  const styles = csx({
    "text-[length:clamp(1.6rem,2vw,2rem)]": true,
    [`${color}`]: true,
    "font-poppins": true,
    "font-semibold": true,
  });

  return (
    <div>
      <h3 className={styles}>{children}</h3>
    </div>
  );
}
