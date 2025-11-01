import React, { useState, useEffect } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import { AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/postsup/blogs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlogData(data);
        } else {
          console.error("Failed to fetch blog details:", response.status);
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  return (
    <>
      {blogData && (
        <section className='singlePage'>
          <div className='container'>
            <div className='right'>
              <h1>{blogData.title}</h1>
              <img src={blogData.cover} alt='' />
              <p>{blogData.desc}</p>
              <p>Author: {blogData.author}</p>
              <div className='date'>
                <AiOutlineComment className='icon' /> <label htmlFor=''>{blogData.comments}</label>
                <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
