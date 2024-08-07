export default function Price({ oldprice, newprice }) {
  let styles = {
    textDecorationLine: "line-through",
  };
  return (
    <>
      <p className="price">
        <span style={styles}>{oldprice}</span> 
        &nbsp; &nbsp; {newprice}
      </p>
    </>
  );
}
