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

  const deletebyId = (id) => {
    setBooks((books) => {
      return books.filter((book) => book.id !== id);
    });
  };

  return (
    <div className="app">
      {console.log(books)}
      <Booklist books={books} onDelete={deletebyId} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
