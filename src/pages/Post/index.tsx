import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import { Routes } from "../../constans/Routes";

const Post = () => {
  const [post, setPost] = useState({
    id: 0,
    title: "",
    text: "",
    image: "",
  });

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`https://studapi.teachmeskills.by/blog/posts/${params.id}/`)
      .then((response) => {
        setPost(response.data);
      });
  }, [params.id]);

  return (
    <div className="container">
      <h1>Title: {post.title}</h1>

      <img className="img" src={post.image} alt="" />

      <p>text: {post.text}</p>
      <Link to={Routes.Home}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Post;
