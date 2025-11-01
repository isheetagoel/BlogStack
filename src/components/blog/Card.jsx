import React, { useState } from "react";
import "./blog.css";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = ({ posts, onEdit, onDelete }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");

  const handleEdit = (post) => {
    console.log("Editing post:", post);
    setSelectedPost(post);
    setUpdatedTitle(post.title);
    setUpdatedContent(post.content);
    setUpdatedCategory(post.category);
    setShowEditModal(true);
    console.log("showEditModal:", showEditModal); 
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/postsup/${selectedPost._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: updatedTitle,
          content: updatedContent,
          category: updatedCategory
        })
      });

      if (response.ok) {
        onEdit(selectedPost._id);
        console.log("Post updated successfully");
        setShowEditModal(false);
        window.location.reload();
      } else {
        console.error("Failed to update post:", response.status);
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = (postId) => {
    onDelete(postId);
  };

  return (
    <section className='blog'>
      <div className='container grid3'>
        {posts.map((item) => (
          <div className='box boxItems' key={item._id}>
            <Link to={`/details/${item._id}`} className='link'></Link>
            <div className='details'>
              <div className='tag'>
                <AiOutlineTags className='icon' />
                #{item.category}
              </div>
                <h3>{item.title}</h3>
                <p>{item.content.slice(0, 180)}...</p>
              <div className='date'>
                <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                <div className="action-buttons">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleEdit(item);
                    }} 
                    className="action-btn edit-btn"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (window.confirm('Are you sure you want to delete this post?')) {
                        handleDelete(item._id);
                      }
                    }} 
                    className="action-btn delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Post</h2>
            <label>Title:</label>
            <input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
            <label>Content:</label>
            <textarea value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} />
            <label>Category:</label>
            <input type="text" value={updatedCategory} onChange={(e) => setUpdatedCategory(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
};
