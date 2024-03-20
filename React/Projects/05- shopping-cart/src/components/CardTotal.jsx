import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({products}) => {
  // console.log(products);
  
  //^ 1. yol reduce ile\\
  const subtotal =products.reduce((acc,product)=> acc + product.price*product.amount*product.dampingRate,0)

  //^ 2. yol forEach ile\\
  // let subtotal = 0
  // products.forEach(product => subtotal += product.price * product.amount * product.dampingRate);    
  
  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subtotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{(subtotal*taxRate).toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total"> {(subtotal+shipping+(taxRate*subtotal)).toFixed(2)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
