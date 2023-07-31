import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//
//
//

function Products() {
  //
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        console.log(data);
        setProducts(data.products);
        console.log(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    if (products.length == 0) {
      fetch();
    }
  }, []);

  //
  //
  //

  return (
    <>
      {products?.length > 0 &&
        products.map((product) => {
          return (
            <div
            className="products-container"
              key={product.id}
              onClick={() => {
                navigate(`/product/${product.id}`);
              }}
            >
              <img src={product.images[0]} alt="" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          );
        })}
    </>
  );
}

export default Products;
