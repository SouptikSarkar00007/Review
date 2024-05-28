import PropTypes from "prop-types";
import Tagline from "./Tagline";

const SafetyRating = ({ safetyRating, handleSafetyRating }) => {
  return (
    <div>
      <div className="subheading">Safety</div>
      <Tagline></Tagline>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= safetyRating ? "checked" : ""}`}
            onClick={() => handleSafetyRating(value)}
          >
            <i className="fas fa-star"></i>
          </span>
        ))}
      </div>
    </div>
  );
};

SafetyRating.propTypes = {
  safetyRating: PropTypes.number,
  handleSafetyRating: PropTypes.func,
};

export default SafetyRating;
