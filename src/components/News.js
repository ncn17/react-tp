import React, { useState } from "react";

export default function News({ data, handleUpdate, handleDelete }) {
  const [editToogle, setEditToogle] = useState(false);
  const [content, setContent] = useState("");

  const dateFormater = (rawDate) => {
    let newDate = new Date(rawDate).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    return newDate;
  };

  return (
    <div key={data.id} className="article">
      <div className="card-header">
        <h3>{data.author}</h3>
        <em>Posté le {dateFormater(data.date)}</em>
      </div>
      {editToogle ? (
        <textarea
          defaultValue={data.content}
          onChangeCapture={(e) => setContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{data.content}</p>
      )}
      <div className="btn-container">
        {!editToogle ? (
          <button onClick={() => setEditToogle(!editToogle)}>Edit</button>
        ) : (
          <button
            onClick={() => {
              handleUpdate({ ...data, content });
              setEditToogle(!editToogle);
            }}
          >
            Update
          </button>
        )}
        <button onClick={() => handleDelete(data.id)}>Supprimer</button>
      </div>
    </div>
  );
}
