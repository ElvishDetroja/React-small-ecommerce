import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//
//
//

function Product() {
  //
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (Object.keys(product).length == 0) {
      fetch();
    }
  }, []);
  return (
    <>
      {Object.keys(product).length > 0 && (
        <div className="product-container">
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>rating : {product.rating}</p>
          <p>price : {product.price} $</p>
          {product.images.map((img) => {
            return <img src={img} alt="" key={img} />;
          })}
        </div>
      )}
    </>
  );
}

export default Product;
