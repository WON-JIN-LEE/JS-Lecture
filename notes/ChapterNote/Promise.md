# 비동기(Asynchronous)

## 콜백 체인의 문제점

- 가독성이 안좋다
- 비즈니스 로직을 이해하기 힘듦
- 디버깅 할 때, 굉장히 어려움
- 유지보수 안좋음

### 동기(Synchronous)와 비동기(Asynchronous)

- 동기는 코드를 작성한 순서대로 실행되는 것을 말합니다.
- 비동기는 언제 코드가 실행될지 알 수 없는 것을 말합니다.
- Javascript는 synchronous(동기적)이다
- hoisting이 된 이후부터, 코드가 작성한 순서대로 실행됨
- hoisting: var, function 선언 들이 코드 맨 위로 자동으로 올라가는 것

---

## Promise

- 자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있게 도와주는 오브젝트이다.
- 정해진 장시간의 기능을 수행하고나서 기능이 성공적으로 수행되었다면 성공의 메세지와 함께 처리된 결과값을 전달해준다, 수행 중 예상치 못한 문제가 발생한다면 error를 전달해준다.
- Promise 수행중에 또 다른 Promise를 연결할 수 있다.
- State: **pending**(보류) → **fulfilled**(이행) or **rejected**(거부)
- Produce vs Consumer

## Producer (생산자)

- executor 콜백함수 인수에는 성공적인 최종 데이터를 전달하는 역할을 수행하는 resolve 콜백함수와 기능을 수행하다가 문제가 생기면 호출하게될 reject 콜백함수를 넘겨준다.
- 만약 사용자가 원할 때만 네트워크 통신을 수행해야한다면 promise는 조심해야 한다.
- 새 Promise가 생성되면 executor라는 콜백함수가 자동으로 실행됩니다. (코딩 할 때 조심)

## Consumers (소비자): then, catch, finally

### then():

- 성공적인 케이스를 다루는 메서드
- then 메서드의 value는 resolve에 전달된 인수를 받는다.
- 반환값 : promise 자체를 반환한다.
- 따라서 Promise chaining(연결하기)이 가능하다. then은 값을 바로 전달 할 수 도 있고, 리턴으로 Promise를 전달해도 된다.

### catch()

- 에러가 발생했을 때 콜백함수를 넘겨주는 메서드
- catch 로 error를 헨들링 할 수 있다
- error가 발행해도 catch를 이용하면 전체적인 Promise 체인에 문제가 발생하지 않도록 빵꾸처리를 할 수 있다.

### finally()

- 성공과 실패에 상관없이 무조건 콜백함수를 수행한다.
