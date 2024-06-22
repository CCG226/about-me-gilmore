import Card from "react-bootstrap/Card";
import "./MeCard.css";
import PropTypes from "prop-types";
import { CardDetails } from "../../interfaces/CardDetails";
const MeCard: React.FC<CardDetails> = ({ title, desc, img }) => {
  return (
    <>
      <Card border="primary" style={{ width: "20rem", marginLeft: "1rem" }}>
        <Card.Img
          variant="top"
          style={{ height: "300px" }}
          src={require(`../../Images${img}`)}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
MeCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default MeCard;
