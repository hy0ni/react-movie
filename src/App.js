import { useState, useEffect } from "react";
// import Button from "./Button";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => { setValue((prev) => prev + 1) };
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log('I run only once. (나는 한번만 실행돼요.)');
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes. (나는 키워드가 변화할 때 실행돼요.)");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes. (나는 카운터가 변화할 때 실행돼요.)");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes. (나는 키워드와 카운터가 변화할 때 실행돼요.)");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
