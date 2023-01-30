import { useState } from "react";
import Button from "./components/Button/Button";
import Genlteman from "./components/Gentleman/Gentleman";
import Info from "./components/Info/Info";
import "./styles.css";
import { Gentleman } from "./types";

const App = (): JSX.Element => {
  const [gentlemenList, setGentlemenList] = useState<Gentleman[]>([
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      id: 2,
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "Pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ]);

  const selectAll = () => {
    setGentlemenList([
      {
        id: 1,
        name: "Bertin Osborne",
        status: "Alive",
        profession: "Youtuber",
        twitter: "@osbourne",
        picture: "bertin.jpg",
        alternativeText: "Osbourne pointing at you",
        selected: true,
      },
      {
        id: 2,
        name: "The Farytale",
        status: "RIP",
        profession: "Influencer",
        twitter: "Pending",
        picture: "fary.jpg",
        alternativeText: "The Fary pointing at you",
        selected: true,
      },
      {
        id: 3,
        name: "Julius Churchs",
        status: "Alive",
        profession: "Java developer",
        twitter: "@julius_churchs",
        picture: "julio.jpg",
        alternativeText: "Churchs pointing at you",
        selected: true,
      },
    ]);
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info
          pointingGentlemen={
            gentlemenList.filter((gentleman) => gentleman.selected).length
          }
        />
        <Button selectAll={selectAll} />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemenList.map((gentleman, position) => (
            <Genlteman gentleman={gentlemenList[position]} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
