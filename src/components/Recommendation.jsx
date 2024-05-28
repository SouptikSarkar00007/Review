import PropTypes from "prop-types";
import Tagline from "./Tagline";

const Recommendation = ({ recommendation, handleRecommendation }) => {
  return (
    <div>
      <div className="subheading">Would you recommend Trausti?</div>
      <Tagline></Tagline>
      <div className="thumbs-container">
        <span
          className={`thumb dislike ${
            recommendation === "No" ? "checked disliked" : ""
          }`}
          onClick={() => handleRecommendation("No")}
        >
          <i className="fas fa-thumbs-down"></i> No
        </span>
        <span
          className={`thumb like ${recommendation === "Yes" ? "checked" : ""}`}
          onClick={() => handleRecommendation("Yes")}
        >
          <i className="fas fa-thumbs-up"></i> Yes
        </span>
      </div>
    </div>
  );
};

Recommendation.propTypes = {
  recommendation: PropTypes.string,
  handleRecommendation: PropTypes.func,
};

export default Recommendation;
