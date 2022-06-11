import Navbar from "./components/navbar";
import Contents from "./components/Contents";
import { getInitialData } from "./utils";
import { useState } from "react";

function App() {
  const [data, setData] = useState(getInitialData());

  return (
    <>
      <Navbar data={data} setData={setData} />
      <Contents data={data} setData={setData} />
    </>
  );
}

export default App;
