import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Booklist from "./component/booklist/Booklist";
import BookCreate from "./component/bookcreate/BookCreate";

export default function App() {
  const [books, setBooks] = React.useState([]);
  const createBook = (title) => {
    const allbooks = { title: title, id: crypto.randomUUID() };

    setBooks((books) => {
      return [...books, allbooks];
    });
  };
  return (
    <div>
      <Booklist books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
