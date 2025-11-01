import React, { useState, useEffect } from "react";
import { Header } from "../../components/header/Header";
import { Card } from "../../components/blog/Card";
import { Link } from "react-router-dom";
import "./ypost.css";

export const YPost = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/postsup/posts"); 
      if (response.ok) {
        const data = await response.json(); 
        setPosts(data); 
      } else {
        console.error("Failed to fetch posts:", response.status);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); 
  }, []);

  const handleEdit = () => {
    window.location.reload();
  };

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/postsup/${postId}`, {
        method: "DELETE"
      });

      if (response.ok) {
        fetchPosts();
        console.log("Post deleted successfully");
      } else {
        console.error("Failed to delete post:", response.status);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Link to="/create">
        <div className="color1"> Create Post</div>
      </Link>
      <Card posts={filteredPosts} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
};
