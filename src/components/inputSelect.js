function Select({ name, items, itemSelected, setItemSelected }) {
    //
  
    function handleSelect(e) {
      setItemSelected((pre) => {
        return { ...pre, [name]: e.target.value };
      });
    }
  
    //
    return (
      <div className="input-container">
        <label htmlFor=""></label>
        <select
          name={name}
          value={itemSelected?.[name]}
          onChange={(e) => {
            handleSelect(e);
          }}
        >
          <option value="">Select {name}</option>
          {items?.map((item) => {
            return (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  
  export default Select;