import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Booklist from "./component/booklist/Booklist";
import BookCreate from "./component/bookcreate/BookCreate";
import axios from "axios";

export default function App() {
  const [books, setBooks] = React.useState([]);

  const createBook = async (title) => {
    // using Axios to make API calls
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    console.log(response);
    setBooks((books) => {
      return [...books, response.data];
    });
  };

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  React.useEffect(() => {
    fetchBook();
  }, []);

  const deletebyId = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks((books) => {
      return books.filter((book) => book.id !== id);
    });
  };

  const editbyId = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    setBooks((books) => {
      return books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      });
    });
  };

  return (
    <div className="app">
      {console.log(books)}
      <Booklist books={books} onDelete={deletebyId} onEdit={editbyId} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
