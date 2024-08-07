import { useState } from "react";
import CommentForm from "./commentForm";
import styles from "./comment.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Comment() {
  let initData = [
    {
      Username: "Sachin",
      Comment: "This is the demo comment",
      Rating: 5,
    },
    {
        Username: "Sachin",
        Comment: "This is the demo comment and here we are going to study the forms inr react ",
        Rating: 5,
      }
  ];
  let [reviews, setReviews] = useState(initData);

  const handleSubmit = (formData)=>{
            console.log(formData)
            setReviews((reviews)=>{
                return(
                    [...reviews ,formData]
                )
            })
  }

  return (
    <>
      <h1 style={{textAlign:"center" , margin : "20px"}}> Comments </h1>
      <div className={styles.commentContainer}>
      
        {reviews.map((review, index) => {
          return (
            <div className={styles.comment} key={index}>
              <h2>{review.Username}</h2>
              <p> {review.Comment}</p>
              <p> Rating : {review.Rating}</p>
              <button className="btn btn-danger">Delete</button>
            </div>
          );
        })}
      </div>
      <CommentForm handleSubmit={handleSubmit}/>
    </>
  );
}
