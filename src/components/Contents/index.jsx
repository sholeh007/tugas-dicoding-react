import { Fragment, useState } from "react";
import Button from "../Button";
import Card from "../Card";
import Input from "../Input";
import Label from "../Label";
import ListNote from "../ListNote";
import { showFormattedDate } from "../../utils";

export default function Contents({ data, setData }) {
  const [char, setChar] = useState({ keyword: "", maxText: 50 });
  const [textArea, setTextArea] = useState("");
  const [err, setErr] = useState({ title: "", content: "" });

  const dataNote = [...data].reverse();

  const maxChar = (e) => {
    const max = 50;
    const titleInput = e.target.value.slice(0, max);
    const titleInputLength = titleInput.length;

    setChar({
      keyword: titleInput,
      maxText: max - titleInputLength,
    });
  };

  function handleTextArea(e) {
    setTextArea(e.target.value);
  }

  function addNotes(e) {
    e.preventDefault();
    if (char.keyword.length === 0) return setErr({ title: "title required" });
    if (textArea.length === 0) return setErr({ content: "Content required" });

    setData((old) => {
      return [
        ...old,
        {
          id: +new Date(),
          title: char.keyword,
          body: textArea,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ];
    });
    setChar(() => ({
      keyword: "",
      maxText: 50,
    }));
    setTextArea("");
  }

  function deleteNotes(idNote) {
    setData((notes) => notes.filter((note) => note.id !== idNote));
  }

  function archiveNote(idNote) {
    setData((notes) =>
      notes.map((note) => {
        if (note.id === idNote) {
          return {
            ...note,
            archived: !note.archived,
          };
        }
        return {
          ...note,
        };
      })
    );
  }
  const dataArchive = dataNote.filter((item) => item.archived === true);
  const dataActive = dataNote.filter((item) => item.archived === false);

  return (
    <>
      <section className="my-8">
        <div className="max-w-[60vw] mx-auto">
          <Card>
            <form onSubmit={addNotes} className="flex flex-col">
              <Label styles="font-poppins text-center text-xl font-semibold text-gray-800 mb-8">
                Create note
              </Label>
              <Input
                borderB={true}
                borderC={true}
                type={"text"}
                onInput={maxChar}
                placeholder="title..."
                value={char.keyword}
                name="title"
              />
              <small className={err.title ? "text-red-500 mt-0" : "hidden"}>
                {err.title}
              </small>
              <small className="text-right font-lato mb-6">
                remaining character: {char.maxText}
              </small>
              <textarea
                className="border font-lato border-gray-900 focus:outline-none"
                cols="30"
                rows="8"
                value={textArea}
                onChange={handleTextArea}
              ></textarea>
              <small className={err.content ? "text-red-500" : "hidden"}>
                {err.content}
              </small>
              <div className="text-center mt-6">
                <Button
                  bgColor="bg-teal-600"
                  txtColor="text-stone-50"
                  bgHvColor="hover:bg-teal-700"
                  txtHvColor="hover:text-stone-100"
                >
                  Add note
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
      <ListNote label="Active Note">
        {dataActive.length > 0 ? (
          dataNote?.map(
            (note) =>
              !note.archived && (
                <Fragment key={note.id}>
                  <Card>
                    <h3 className="text-lg">{note.title}</h3>
                    <small className="italic">
                      {showFormattedDate(note.createdAt)}
                    </small>
                    <p className="pt-4">{note.body}</p>
                    <div className="space-x-2 mt-4">
                      <Button
                        bgColor="bg-rose-500"
                        bgHvColor="hover:bg-rose-700"
                        txtColor="text-slate-50"
                        txtHvColor="hover:text-slate-100"
                        onClick={() => deleteNotes(note.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        bgColor="bg-teal-600"
                        bgHvColor="hover:bg-teal-700"
                        txtColor="text-stone-50"
                        txtHvColor="hover:text-stone-100"
                        onClick={() => archiveNote(note.id)}
                      >
                        Archive
                      </Button>
                    </div>
                  </Card>
                </Fragment>
              )
          )
        ) : (
          <h1 className="text-lg">No Data</h1>
        )}
      </ListNote>
      <ListNote label="Archived">
        {dataArchive.length > 0 ? (
          dataNote?.map(
            (note) =>
              note.archived && (
                <Fragment key={note.id}>
                  <Card>
                    <h3 className="text-lg">{note.title}</h3>
                    <small className="italic">
                      {showFormattedDate(note.createdAt)}
                    </small>
                    <p className="pt-4">{note.body}</p>
                    <div className="space-x-2 mt-4">
                      <Button
                        bgColor="bg-rose-500"
                        bgHvColor="hover:bg-rose-700"
                        txtColor="text-slate-50"
                        txtHvColor="hover:text-slate-100"
                        onClick={() => deleteNotes(note.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        bgColor="bg-teal-600"
                        bgHvColor="hover:bg-teal-700"
                        txtColor="text-stone-50"
                        txtHvColor="hover:text-stone-100"
                        onClick={() => archiveNote(note.id)}
                      >
                        Unarchive
                      </Button>
                    </div>
                  </Card>
                </Fragment>
              )
          )
        ) : (
          <h1 className="text-lg">No Data</h1>
        )}
      </ListNote>
    </>
  );
}
