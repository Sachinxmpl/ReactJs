import { Fragment, useContext } from "react";
import { cartContext } from "../context/cartContext";

function Cart() {
  type itemtype = {
    productName: string;
    price: number;
    isAdded: boolean;
  };

  const { items, setItems } = useContext(cartContext);

  if (!items) {
    console.error("items is undefined or null");
    return <div>Error: Cart items could not be loaded.</div>;
  }

  return (
    <Fragment>
      <ul>
        {items.map((item: itemtype, index: number) => {
          if (item.isAdded) {
            return (
              <li key={index}>
                <h4>{item.productName}</h4>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      {
        items.length === 0? <h3>No items in cart</h3> : null
      }

      <h2> Totol cost : {
              items.reduce((acc: number, item: itemtype) => {
                if (item.isAdded) {
                  return acc + item.price;
                } else {
                  return acc;
                }
              }, 0)
        }</h2>
    </Fragment>
  );
}

export default Cart;
