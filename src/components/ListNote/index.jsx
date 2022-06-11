import Label from "../Label";

export default function ListNote({ children, label }) {
  return (
    <section className="p-8 font-lato">
      <div className="mb-6">
        <Label styles={"font-poppins font-semibold text-xl"}>{label}</Label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
}
