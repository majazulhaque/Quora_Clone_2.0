import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import Post from "./Post";
import "./css/Feed.css";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/question/get")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="feed">
      <QuoraBox />
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
      {/* <Post/>
      <Post/>
      <Post/>
      <Post/> */}
    </div>
  );
}

export default Feed;
