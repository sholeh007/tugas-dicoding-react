import Logo from "./Logo";
import Search from "./Search";

export default function Navbar({ data, setData }) {
  return (
    <header className="bg-teal-600">
      <nav className="p-8 flex justify-between items-center">
        <Logo color="text-stone-50">Diary Note</Logo>
        <Search data={data} setData={setData} />
      </nav>
    </header>
  );
}
