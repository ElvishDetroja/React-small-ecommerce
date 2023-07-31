function InputFile({ name, multiple = false, itemSelected, setItemSelected }) {
  //
  function handleFile(e) {
    console.log("FILE", e.target.files);
    if (multiple) {
      const finalImages = [];

      console.log(Array.from(e.target.files));

      Array.from(e.target.files).forEach((img) => {
        finalImages.push(img.name);
      });

      setItemSelected((pre) => {
        return { ...pre, [name]: finalImages };
      });
    } else {
      setItemSelected((pre) => {
        return { ...pre, [name]: e.target.files[0].name };
      });
    }
  }

  return (
    <div className="input-container">
      <label htmlFor={name}>{name}</label>
      <input
        type="file"
        name={name}
        id=""
        multiple={multiple}
        onChange={handleFile}
      />
    </div>
  );
}

export default InputFile;
