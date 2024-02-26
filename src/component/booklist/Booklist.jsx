import React from "react";
import BookShow from "../bookshow/BookShow";

export default function Booklist({ books, onDelete }) {
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} />;
      })}
    </div>
  );
}
