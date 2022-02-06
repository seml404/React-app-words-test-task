import React, { useState } from "react";
import "../App.css";

function App() {
  let [userWord, setUserWord] = useState("");
  let [userCase, setUserCase] = useState("");
  let [resultWord, setResultWord] = useState("");
  let [errorWord, setErrorWord] = useState(false);

  function defineEnding(wordPassed, casePassed) {
    let ending = {}, wordResult;
    if (wordPassed[wordPassed.length - 1] === 'а') {
      ending = { Именительный: 'а', Родительный: 'и', Винительный: 'е', Дательный: 'у', Творительный: 'ой', Предложный: 'е' };
      wordResult = wordPassed.substring(0, wordPassed.length - 1) + ending[casePassed];
    } else if (wordPassed[wordPassed.length - 1] === 'я') {
      ending = { Именительный: 'я', Родительный: 'и', Винительный: 'е', Дательный: 'ю', Творительный: 'ей', Предложный: 'е' };
      wordResult = wordPassed.substring(0, wordPassed.length - 1) + ending[casePassed];
    } else if (wordPassed[wordPassed.length - 1] === 'о') {
      ending = { Именительный: 'о', Родительный: 'а', Винительный: 'у', Дательный: 'о', Творительный: 'ом', Предложный: 'е' };
      wordResult = wordPassed.substring(0, wordPassed.length - 1) + ending[casePassed];
    } else if (wordPassed[wordPassed.length - 1] === 'е') {
      ending = { Именительный: 'е', Родительный: 'я', Винительный: 'ю', Дательный: 'е', Творительный: 'ем', Предложный: 'и' };
      wordResult = wordPassed.substring(0, wordPassed.length - 1) + ending[casePassed];
    } else if (wordPassed === 'мать' || wordPassed === 'дочь') {
      ending = { Именительный: 'ь', Родительный: 'ери', Винительный: 'ери', Дательный: 'ь', Творительный: 'ерью', Предложный: 'ери' };
      wordResult = wordPassed.substring(0, wordPassed.length - 1) + ending[casePassed];
    } else if (wordPassed === 'путь') {
      ending = { Именительный: 'ь', Родительный: 'и', Винительный: 'и', Дательный: 'ь', Творительный: 'ем', Предложный: 'и' };
      wordResult = wordPassed.substring(0, wordPassed.length - 1) + ending[casePassed];
    } else if (['бремя', 'время', 'вымя', 'знамя', 'имя', 'пламя', 'племя', 'семя', 'стремя', 'темя'].includes(wordPassed)) {
      ending = { Именительный: 'я ', Родительный: 'ени', Винительный: 'ени', Дательный: 'я', Творительный: 'енем', Предложный: 'ени' };
      wordResult = wordPassed.substring(0, wordPassed.length - 1) + ending[casePassed];
    } else if (wordPassed === 'дитя') {
      ending = { Именительный: 'я', Родительный: 'яти', Винительный: 'яти', Дательный: 'я', Творительный: 'ятей', Предложный: 'яти' };
      wordResult = wordPassed.substring(0, wordPassed.length - 1) + ending[casePassed];
    } else if (wordPassed[wordPassed.length - 2] === 'ой') {
      ending = { Именительный: 'ой', Родительный: 'ого', Винительный: 'ому', Дательный: 'ого', Творительный: 'ым', Предложный: 'ом' };
      wordResult = wordPassed.substring(0, wordPassed.length - 2) + ending[casePassed];
    } else if (wordPassed[wordPassed.length - 2] === 'ая') {
      ending = { Именительный: 'ая', Родительный: 'ой', Винительный: 'ой', Дательный: 'ую', Творительный: 'ой', Предложный: 'ой' };
      wordResult = wordPassed.substring(0, wordPassed.length - 2) + ending[casePassed];
    } else if (wordPassed[wordPassed.length - 2] === 'ть' || wordPassed[wordPassed.length - 2] === 'чь' || wordPassed[wordPassed.length - 2] === 'шь') {
      ending = { Именительный: 'ь', Родительный: 'и', Винительный: 'и', Дательный: 'ь', Творительный: 'ью', Предложный: 'и' };
      wordResult = wordPassed.substring(0, wordPassed.length - 1) + ending[casePassed];
    } else if (wordPassed[wordPassed.length - 1] === 'й') {
      ending = { Именительный: 'й', Родительный: 'я', Винительный: 'ю', Дательный: 'й', Творительный: 'ем', Предложный: 'е' };
      wordResult = wordPassed.substring(0, wordPassed.length - 1) + ending[casePassed];
    } else if (wordPassed[wordPassed.length - 3] === 'онь') {
      ending = { Именительный: 'онь', Родительный: 'ня', Винительный: 'ню', Дательный: 'онь', Творительный: 'нем', Предложный: 'не' };
      wordResult = wordPassed.substring(0, wordPassed.length - 4) + ending[casePassed];
    } else {
      ending = { Именительный: '', Родительный: 'а', Винительный: 'у', Дательный: '', Творительный: 'ом', Предложный: 'е' };
      wordResult = (wordPassed + ending[casePassed]).trim();
    }
    return wordResult;
  }


  function handleSubmit(e) {
    e.preventDefault();
    let res = defineEnding(userWord, userCase);
    setResultWord(res)
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

  return (
    <div className="App">
      <div className="form-wrapper">
        <div className="form-top">
          <h2 className="submain-title">Склонение слова в указанном падеже</h2>
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
            // disabled={userWord && userCase}
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
      </div>
    </div>
  );
}

export default App;
