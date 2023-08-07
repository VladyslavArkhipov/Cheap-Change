import styles from "./Converter.module.css";
import { Select } from "./Select";
import reverse from "../../../assets/images/reverse.svg";
import { useEffect, useState } from "react";
import { SaveButton } from "./SaveButton";

export function Converter({ savedResults, updateSavedResults }) {
  const [availableCurrency, setAvailableCurrency] = useState("EUR");
  const [desiredCurrency, setDesiredCurrency] = useState("EUR");
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState("");
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=b82caa4b534ebc3b5dfddb60da0b1b18"
    )
      .then((response) => response.json())
      .then((json) => {
        setCurrency({
          USD: {
            EUR: 1 / json.rates.USD,
            UAH: (1 / json.rates.USD) * json.rates.UAH,
            USD: 1,
          },

          EUR: {
            USD: 1 * json.rates.USD,
            UAH: 1 * json.rates.UAH,
            EUR: 1,
          },

          UAH: {
            USD: (1 / json.rates.UAH) * json.rates.USD,
            EUR: 1 / json.rates.UAH,
            UAH: 1,
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching currency:", error);
      });
  }, []);

  useEffect(() => {
    if (currency) {
      setOutput(
        (input * currency[availableCurrency][desiredCurrency]).toFixed(2)
      );
    }
  }, [currency, desiredCurrency, availableCurrency, input]);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const data = {
    date: getCurrentDate(),
    input: {
      value: input,
      currency: availableCurrency,
    },
    output: {
      value: output,
      currency: desiredCurrency,
    },
  };

  const changeHandlerOutput = (e) => {
    setDesiredCurrency(e.target.value);
  };

  const changeHandlerInput = (e) => {
    setAvailableCurrency(e.target.value);
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <section className={styles.section}>
      <article className={styles.wrapper}>
        <h3 className={styles.header}>Currency converter</h3>
        <article className={styles.converter}>
          <article className={styles.inputs}>
            <p className={styles.paragraph}>I have:</p>
            <input
              onChange={inputHandler}
              type="number"
              className={styles.input_number}
              defaultValue={input}
            ></input>
            <Select onChange={changeHandlerInput} value={availableCurrency} />
            <input
              type="date"
              className={styles.input_date}
              defaultValue={getCurrentDate()}
            ></input>
          </article>
          <article className={styles.reverse}>
            <img src={reverse} alt="reverse"></img>
          </article>
          <article className={styles.inputs}>
            <p className={styles.paragraph}>I want to buy:</p>
            <input
              type="number"
              className={styles.input_number}
              defaultValue={output}
            ></input>
            <Select onChange={changeHandlerOutput} value={desiredCurrency} />
            <SaveButton updateSavedResults={updateSavedResults} data={data} />
          </article>
        </article>
      </article>
    </section>
  );
}
