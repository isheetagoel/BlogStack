import React, { useState } from "react";
import axios from 'axios'; 
import { useHistory } from 'react-router-dom';
import { Header } from "../../components/header/Header";
import upload from "../../assets/images/blog.png";
import './create.css'

export const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(""); 
  const history = useHistory();

  const handleCreatePost = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/postsup', {
        title,
        content,
        category 
      });
      console.log(response.data);
      alert("Post created successfully!");
      history.push('/ypost');
    } catch (error) {
      console.error('Create post error:', error);
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <>
      <Header/>
      <section className='newPost'>
        <div className='container boxItems'>
          <form onSubmit={handleCreatePost}>
            <div className='inputfile flexCenter'>
            </div>
            <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
            <input type='text' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} required /> 
            <button className='button' type="submit">Create Post</button>
          </form>
        </div>
      </section>
    </>
  );
};
