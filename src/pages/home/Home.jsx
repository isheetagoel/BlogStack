import React, { useState, useEffect } from "react";
import { Category } from "../../components/category/Category";
import Logo from "../../assets/images/home.svg";
import { Header } from "../../components/header/Header";
import './Home.css';
import { HomeCard } from "../../components/homeCard/homeCard";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/postsup/blogs");
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

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="color"></div>
      <img className="home-svg" src={Logo} alt="" />
      <Category />
      <HomeCard posts={posts} />
    </>
  );
};

export default Home;
