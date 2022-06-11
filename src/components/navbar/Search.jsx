import Input from "../Input";
import Label from "../Label";
import { getInitialData } from "../../utils";

export default function Search({ data, setData }) {
  function searchNote(e) {
    const userInput = e.target.value.toLowerCase();

    console.log(userInput);
    if (userInput === "") return setData(getInitialData());

    const search = data.filter((note) =>
      note.title.toLowerCase().includes(userInput)
    );
    return setData(search);
  }

  return (
    <div>
      <Label
        styles={
          "mr-3 tracking-wide font-lato text-[length:clamp(1.1rem,1.2vw,1.2rem)] text-stone-50 font-semibold"
        }
      >
        Search
      </Label>
      <Input onInput={searchNote} type={"search"} placeholder="search..." />
    </div>
  );
}
