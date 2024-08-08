import { useContext } from "react";
import { cartContext } from "../context/cartContext";

type itemtype = {
  productName: string;
  price: number;
  isAdded: boolean;
};

const styles: React.CSSProperties = {
  width: "200px",
  height: "200px",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10px",
};

function Carditem() {
  const { items, setItems } = useContext(cartContext);

  const handleClick = (productName: string) => {
    setItems((prevItems: itemtype[]) => {
      return prevItems.map((item) => {
        if (item.productName === productName) {
          return { ...item, isAdded: true };
        }
        return item;
      });
    });
  };
  const handelRemove = (productName: string) => {
    setItems((prevItems: itemtype[]) => {
      return prevItems.map((item) => {
        if (item.productName === productName) {
          return { ...item, isAdded: false };
        }
        return item;
      });
    });
  };

  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      {items.map((item: itemtype) => {
        return (
          <div className="item" key={Math.random() * 100000} style={styles}>
            <h4> {item.productName}</h4>
            <p> {item.price}</p>
            <button onClick={() => handleClick(item.productName)}>
              Add To Cart
            </button>
            {item.isAdded && (
              <>
                <i style={{ color: "red" }}>Added </i>
                <button onClick={() => handelRemove(item.productName)}>
                  Remove From Cart 
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carditem;
