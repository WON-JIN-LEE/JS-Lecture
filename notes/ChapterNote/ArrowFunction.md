## function

    - Rest parameters … : 나머지 인자를 배열로 받는다.
    - 함수 매개변수에 초기값을 설정할 수 있다.
    - Local scope
    - Early return
    - IIFE(즉시 실행함수) : Immediately Invoked Function Expression

## Arrow Function

    - 이름이 없는 함수
    - { }를 쓰면 return을 명시해줘야 한다.

## calculate Function

```js
function calculate(command, a, b) {
  switch (command) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
console.log(calculate("+", 9, 3));
```
