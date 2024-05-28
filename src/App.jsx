import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import SafetyRating from "./components/SafetyRating";
import CommunicationRating from "./components/CommunicationRating";
import Recommendation from "./components/Recommendation";
import PraiseButtons from "./components/PraiseButtons";
import { useState } from "react";

const App = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommendation, setRecommendation] = useState("");
  const [praiseButtons, setPraiseButtons] = useState([false, false, false]);

  const handleSafetyRating = (value) => {
    setSafetyRating(value);
  };

  const handleCommunicationRating = (value) => {
    setCommunicationRating(value);
  };

  const handleRecommendation = (value) => {
    setRecommendation(value);
  };

  const handlePraiseButton = (index) => {
    setPraiseButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      newButtons[index] = !newButtons[index];
      return newButtons;
    });
  };

  return (
    <div className="gap">
      <span className="close-button">
        <i className="fas fa-times"></i>
      </span>
      <div className="review-heading">Leave a Review</div>
      <SafetyRating
        safetyRating={safetyRating}
        handleSafetyRating={handleSafetyRating}
      />
      <CommunicationRating
        communicationRating={communicationRating}
        handleCommunicationRating={handleCommunicationRating}
      />
      <Recommendation
        recommendation={recommendation}
        handleRecommendation={handleRecommendation}
      />
      <PraiseButtons
        praiseButtons={praiseButtons}
        handlePraiseButton={handlePraiseButton}
      />
    </div>
  );
};

export default App;
