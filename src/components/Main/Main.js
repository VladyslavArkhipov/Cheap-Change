import styles from "./Main.module.css";
import backgroundUrl from "../../assets/images/background.svg";
import { MainSection } from "./MainSection";
import card from "../../assets/images/card.svg";
import cardInHand from "../../assets/images/hand_card.svg";
import { useState } from "react";
import { Converter } from "./Converter/Converter";
import { ConverterHistory } from "./ConverterHistory/ConverterHistory";

export function Main() {
  const [converterVisibility, setConverterVisibility] = useState(true);
  const [savedResults, setSavedResults] = useState([]);

  const handleConverterVisibility = (newValue) => {
    setConverterVisibility(newValue);
  };

  const updateSavedResults = (newResult) => {
    setSavedResults([newResult, ...savedResults]);
  };

  const clearHistory = () => {
    setSavedResults([]);
  };

  return (
    <div className={styles.main}>
      <MainSection
        onVisibilityChange={handleConverterVisibility}
        firstSection={true}
        backgroundUrl={backgroundUrl}
        header="Cheap Change"
        mainText="Currency exchanger - educational"
        buttonText="Currency converter"
        image={card}
        width="341px"
        height="216px"
      />
      {converterVisibility && (
        <MainSection
          onVisibilityChange={handleConverterVisibility}
          firstSection={false}
          header="Currency converter"
          mainText={
            "The predominant activity of the banking\ngroup for the last four reporting quarters\nis 50 percent or more."
          }
          buttonText="Convert currency"
          image={cardInHand}
          width="436px"
          height="314px"
        />
      )}
      {!converterVisibility && (
        <Converter
          savedResults={savedResults}
          updateSavedResults={updateSavedResults}
        />
      )}
      {savedResults.length > 0 && (
        <ConverterHistory
          savedResults={savedResults}
          updateSavedResults={updateSavedResults}
          clearHistory={clearHistory}
        />
      )}
    </div>
  );
}
