import React from "react";

export default function BookShow({ book, onDelete }) {
  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="edit">edit</button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          delete
        </button>
      </div>
    </div>
  );
}
