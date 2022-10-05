import { useState } from "react";
import { Body } from "../Body/Body";
import { Header } from "../Header/Header";

export function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="App">
      <Header setPage={setPage}/>
      <Body page={page} />
    </div>
  );
}
