import React from "react";

export default function BookCreate({ onCreate }) {
  const [title, SetTitle] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") return;
    SetTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
      />
      <button>Add Books</button>
    </form>
  );
}
