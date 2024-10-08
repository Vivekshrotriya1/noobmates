import { Link, useLocation } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import { GrAddCircle } from "react-icons/gr";
import { AiOutlineOrderedList } from "react-icons/ai";
const DoctorNav = ({ children }) => {
  const location = useLocation();
  const role  = "admin";
  return (
    <>
      {role === "admin" && (
        <>
          <Nav tabs>
            <NavItem>
              <NavLink active={location.pathname === "/doctors/add"}>
                <Link to="/doctors/add">
                  <GrAddCircle
                    style={{ marginRight: "5px", marginBottom: "2px" }}
                  />
                  Add Hospitals
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={location.pathname === "/doctors/"}>
                <Link to="/doctors/">
                  <AiOutlineOrderedList
                    style={{ marginRight: "5px", marginBottom: "2px" }}
                  />
                  Hospital List DataBase
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </>
      )}
      <div>{children}</div>
    </>
  );
};
export default DoctorNav;
