import Nav from "react-bootstrap/Nav";
import "./Navigator.css";
import PropTypes from "prop-types";
import { NavDetails } from "../../interfaces/NavDetails";
import { Link } from "react-router-dom";
function Navigator({ navDetails }: { navDetails: NavDetails[] }) {
  return (
    <Nav variant="underline" defaultActiveKey="/home">
      {navDetails.map((navDetail, index) => (
        <Nav.Item key={index}>
          <Nav.Link className="link" as={Link} to={navDetail.link}>
            {navDetail.title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
Navigator.propTypes = {
  navDetails: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Navigator;
