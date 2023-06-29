import Navbar from "../molecules/Navbar/Navbar";
import listLinks from "../molecules/Navbar/listLinks.json";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar brand={"Prueba Tecnica"} listLinks={listLinks} />
      {children}
    </>
  );
};

export default Layout;
