import styles from "./Converter.module.css";
import { Select } from "./Select";
import reverse from "../../../assets/images/reverse.svg";
import calendar from "../../../assets/images/calendar.svg";
import { useEffect, useState } from "react";

export function Converter({ savedResults, updateSavedResults }) {
  const [availableCurrency, setAvailableCurrency] = useState("EUR");
  const [desiredCurrency, setDesiredCurrency] = useState("EUR");
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState("");
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=4fec1933e831394ad490d14e66dbfbc3"
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

  const changeHandlerOutput = (e) => {
    setDesiredCurrency(e.target.value);
  };

  const changeHandlerInput = (e) => {
    setAvailableCurrency(e.target.value);
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const saveResultHandler = () => {
    const newResult = {
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
    console.log(savedResults);

    updateSavedResults(newResult);
  };

  return (
    <section className={styles.section}>
      <article className={styles.wrapper}>
        <h3 className={styles.header}>Конвертер валют</h3>
        <article className={styles.converter}>
          <article className={styles.inputs}>
            <p className={styles.paragraph}>В мене є:</p>
            <input
              onChange={inputHandler}
              type="number"
              className={styles.input_number}
              defaultValue={input}
            ></input>
            <Select onChange={changeHandlerInput} value={availableCurrency} />
            <input
              type="date"
              style={{ backgroundImage: `url(${calendar})` }}
              className={styles.input_date}
              defaultValue={getCurrentDate()}
            ></input>
          </article>
          <article className={styles.reverse}>
            <img src={reverse} alt="reverse"></img>
          </article>
          <article className={styles.inputs}>
            <p className={styles.paragraph}>Хочу придбати:</p>
            <input
              type="number"
              className={styles.input_number}
              defaultValue={output}
            ></input>
            <Select onChange={changeHandlerOutput} value={desiredCurrency} />
            <article className={styles.btn_wrapper}>
              <button onClick={saveResultHandler} className={styles.button}>
                Зберегти результат
              </button>
            </article>
          </article>
        </article>
      </article>
    </section>
  );
}
