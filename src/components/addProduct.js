import { useState } from "react";
import axios from "axios";
import Text from "./inputText";
import Number from "./inputNumber";
import Select from "./inputSelect";
import File from "./inputFile";

//
//
//

function AddProduct() {
  //
  //
  const brandItems = [
    { name: "Apple", value: "Apple" },
    { name: "Samsung", value: "Samsung" },
    { name: "Black Berry", value: "Blackberry" },
    { name: "Xiomi", value: "MI" },
  ];

  const categoryItems = [
    { name: "Smartphones", value: "Smartphones" },
    { name: "Laptop", value: "Laptop" },
    { name: "Printer", value: "Printer" },
  ];

  const [info, setInfo] = useState({});
  const [product, setProduct] = useState({});
  const [error, setError] = useState();

  console.log(info);

  async function handleSubmit() {
    try {
      let errorSignal = false;

      if (Object.keys(info).length < 10) {
        setError("please fill the required field");
        errorSignal = true;
      }

      if (!errorSignal) {
        setError("");
        const { data } = await axios.post(
          "https://dummyjson.com/products/add",
          info
        );
        setProduct(data);
        console.log(data);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  //
  //
  //
  //
  //

  return (
    <>
      <div className="addProduct-container">
        <Text name="title" itemSelected={info} setItemSelected={setInfo} />
        <Text
          name="description"
          itemSelected={info}
          setItemSelected={setInfo}
        />
        <Number name="price" itemSelected={info} setItemSelected={setInfo} />
        <Number
          name="discountPercentage"
          itemSelected={info}
          setItemSelected={setInfo}
        />
        <Number name="rating" itemSelected={info} setItemSelected={setInfo} />
        <Number name="stock" itemSelected={info} setItemSelected={setInfo} />
        <Select
          name="brand"
          items={brandItems}
          itemSelected={info}
          setItemSelected={setInfo}
        />
        <Select
          name="category"
          items={categoryItems}
          itemSelected={info}
          setItemSelected={setInfo}
        />
        <File name="thumbnail" itemSelected={info} setItemSelected={setInfo} />
        <File
          name="images"
          multiple={true}
          itemSelected={info}
          setItemSelected={setInfo}
        />

        <div className="btn-container">
          {error ? <h3>{error}</h3> : ""}
          <button onClick={handleSubmit}>SUBMIT</button>
          {Object.keys(product).length > 1 && (
            <div className="add-product-container">
              <p>your product add successfully</p>
              <h2>title : {product.title}</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddProduct;
