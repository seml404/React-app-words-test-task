import React, { useState } from "react";
import "../App.css";

function App() {
  let [userWord, setUserWord] = useState("");
  let [userCase, setUserCase] = useState("");
  let [resultWord, setResultWord] = useState("");
  let [errorWord, setErrorWord] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let word = userWord;
    switch (userWord[userWord.length - 1]) {
    }
  }

  function handleInputChange(event) {
    setUserWord(event.target.value);
    if (event.target.value.length < 3 || !/[а-яё]/iu.test(event.target.value)) {
      setErrorWord(true);
    } else {
      setErrorWord(false);
    }
  }
  function toggleFilter(value) {
    setUserCase(value);
  }

  function handleShowData() {
    console.log(userCase, userWord);
  }

  return (
    <div className="App">
      <div className="form-wrapper">
        <div className="form-top">
          <h2 className="submain-title">Генерация слова в указанном падеже</h2>
          <button className="btn-close">&#10006;</button>
        </div>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-container">
            <p className="input-label">
              Введите существительное в именительном падеже, единственном числе
            </p>
            <input
              value={userWord}
              type="text"
              placeholder="Введите слово"
              className="input"
              onChange={(e) => handleInputChange(e)}
            ></input>
          </div>
          {errorWord && (
            <div>
              Слово должно быть написано на русском языке и иметь длину более 3х
              букв
            </div>
          )}
          <div className="input-container">
            <p className="input-label">Падеж</p>
            <select
              onChange={(e) => toggleFilter(e.target.value)}
              id="cases"
              className="input"
            >
              <option defaultValue id="info">
                Выберите падеж
              </option>
              <option id="case1">Именительный</option>
              <option id="case2">Родительный</option>
              <option id="case3">Винительный</option>
              <option id="case4">Дательный</option>
              <option id="case5">Творительный</option>
              <option id="case6">Предложный</option>
            </select>
          </div>
          <div className="btn-main-container">
            <button
              className="btn btn-main"
              type="submit"
              disabled={userWord && userCase}
            >
              <p>Узнать слово</p>
            </button>
          </div>
          <div>
            {resultWord
              ? resultWord
              : "введите слово и здесь будет его склонение"}
          </div>
        </form>
        <button onClick={handleShowData}>show data</button>
      </div>
    </div>
  );
}

export default App;
