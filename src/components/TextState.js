import { useState } from "react";

const TextState = () => {
  const [text, setText] = useState("텍스트를 입력해주세요"); // 문자 초기화
  const [color, setColor] = useState("black");

  const greeting = () => {
    setText("안녕하세요");
  };

  const thanks = () => {
    setText("감사합니다");
  };

  return (
    <div>
      <h2 style={{ color }}>{text}</h2>
      <button onClick={greeting}>인사</button>
      <button onClick={thanks}>감사</button>
      <br />
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨강
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑
      </button>
    </div>
  );
};

export default TextState;
