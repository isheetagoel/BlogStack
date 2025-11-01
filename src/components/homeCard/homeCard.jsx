import React from "react";
import "./blog.css";

export const HomeCard = ({ posts }) => {
  return (
    <section className='blog'>
      <div className='container grid3'>
        {posts.map((item) => (
          <div className='box boxItems' key={item._id}>
            <div className='img'>
              <img src={item.cover} alt='Post' style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
