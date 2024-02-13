const MyComponent = (props) => {
  // 속성을 부모컴포넌트 -> 자식 컴포넌트로 넘겨줄 때 = props

  const { name, age } = props;

  return (
    <>
      <div>
        {/* <h3>
          내 이름은 {props.name}입니다 <br /> 나이는 {props.age}세 입니다
        </h3> */}
        <h3>
          내 이름은 {name}입니다 <br /> 나이는 {age}세 입니다
        </h3>
      </div>
    </>
  );
};

// component는 사용시에는 외부에 내보내기 필수
export default MyComponent;
