import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from 'formik';

export default function CommentForm({ handleSubmit }) {
  let [formData, setformData] = useState({
    Username: "",
    Comment: "",
    Rating: 5,
  });

  const handleInputChange = (event) => {
    setformData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData) ;
    setformData({
      Username: "",
      Comment: "",
      Rating: 3,
    });
  };
  return (
    
    <form className="col-6 offset-3 ">
      <h3 className="mt-5"> Leave a comment </h3>
      <label htmlFor="username" className="form-label mt-2">
        Username
      </label>
      <input
        type="text"
        name="Username"
        id="username"
        className="form-control"
        placeholder="Enter username "
        value={formData.Username}
        onChange={handleInputChange}
      />
      <label htmlFor="comment" className="form-label mt-2">
        Send Comment
      </label>
      <textarea
        id="comment"
        className="form-control "
        value={formData.Comment}
        name="Comment"
        onChange={handleInputChange}
        placeholder="Enter comment"
      ></textarea>
      
      <label htmlFor="rating" className="form-label mt-2">Rate Us </label>
      <input
        type="number"
        max="5"
        min="1"
        id="rating"
        name="Rating"
        className="form-control "
        value={formData.Rating}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-success mt-3" onClick={handleFormSubmit}>
        Add Comment{" "}
      </button>
    </form>
  );
}
