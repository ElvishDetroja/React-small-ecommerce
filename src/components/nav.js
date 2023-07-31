import { useNavigate } from "react-router-dom";

function Nav() {
  //
  const navigate = useNavigate();
  const nav = [
    { name: "SIGN IN", link: "/" },
    { name: "PRODUCTS", link: "/products" },
    { name: "ADD PRODUCT", link: "/addProduct" },
    { name: "LOGOUT", link: "/signout" },
  ];
  return (
    <>
      <ul className="menu">
        {nav.map((na) => (
          <li
          className="nav"
            key={na.name}
            onClick={() => {
              navigate(na.link);
            }}
          >
            {na.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Nav;
