import React, { useState } from "react";

const Form = () => {
  const [post, setPost] = useState({});

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  console.log(post);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(post);
  };

  return (
    <div>
      <h4>Post Data:-</h4>
      <form>
        <div>
          <label htmlFor="userId">User Id</label>
          <p></p>
          <input
            className="input1"
            type="text"
            value={post.userId}
            name="userId"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="title">Title</label>
          <p></p>
          <input
            className="input2"
            type="text"
            value="Testing form value"
            name="title"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="body">Body</label>
          <p></p>
          <textarea
            className="input3"
            rows="4"
            cols="31"
            type="text"
            value={post.body}
            name="body"
            onChange={handleChange}
          />
        </div>
        <br />
        <button onClick={handleClick}>Post Data</button>
      </form>
    </div>
  );
};

export default Form;
