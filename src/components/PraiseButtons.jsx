import PropTypes from "prop-types";
import Tagline from "./Tagline";

const PraiseButtons = ({ praiseButtons, handlePraiseButton }) => {
  return (
    <div className="praise-section">
      <div className="subheading">Praise</div>
      <Tagline></Tagline>
      <div className="action-buttons">
        {["Button 1", "Button 2", "Button 3"].map((label, index) => (
          <button
            key={index}
            className={`action-button ${praiseButtons[index] ? "active" : ""}`}
            onClick={() => handlePraiseButton(index)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

PraiseButtons.propTypes = {
  praiseButtons: PropTypes.arrayOf(PropTypes.bool),
  handlePraiseButton: PropTypes.func,
};

export default PraiseButtons;
