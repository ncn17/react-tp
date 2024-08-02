import axios from "axios";
import React, { useEffect, useState } from "react";
import News from "./News";

export default function Article() {
  const [articles, setArticles] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const getArticles = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setArticles(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getArticles();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      author: name,
      content: content,
      date: Date.now(),
      id: `${++articles[0].id}`,
    };

    axios.post("http://localhost:3004/articles", data).then((res) => {
      getArticles();
      setName("");
      setContent("");
    });
  };

  const handleUpdataNews = (data) => {
    axios
      .put(`http://localhost:3004/articles/${data.id}`, data)
      .then((res) => getArticles());
  };

  const handleDelete = (id) =>
    axios
      .delete(`http://localhost:3004/articles/${id}`)
      .then((res) => getArticles());

  return (
    <div className="blog">
      <h1>Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nom"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <textarea
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        <button>Envoyer</button>
      </form>

      <div className="articles">
        {articles
          .sort((a, b) => b.id - a.id)
          .map((data) => (
            <News
              key={data.id}
              data={data}
              handleUpdate={handleUpdataNews}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
}
