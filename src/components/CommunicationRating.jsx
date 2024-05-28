import PropTypes from "prop-types";
import Tagline from "./Tagline";

const CommunicationRating = ({
  communicationRating,
  handleCommunicationRating,
}) => {
  return (
    <div>
      <div className="subheading">Communication</div>
      <Tagline></Tagline>
      <div className="another-rating-container">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`another-star ${
              value <= communicationRating ? "checked" : ""
            }`}
            onClick={() => handleCommunicationRating(value)}
          >
            <i className="fas fa-star"></i>
          </span>
        ))}
      </div>
    </div>
  );
};

CommunicationRating.propTypes = {
  communicationRating: PropTypes.number,
  handleCommunicationRating: PropTypes.func,
};

export default CommunicationRating;
