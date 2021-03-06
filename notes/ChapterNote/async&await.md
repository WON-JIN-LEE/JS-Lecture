# async & await

- 프로미스 체이닝을 계속 하다보면 코드의 가독성이 떨어짐
- async 와 await는 Promise를 간결/간편하고 동기적으로 실행되는것 처럼 보이게 만들어주는 API
- async 와 await는 새로운 것이 추가 된게 아니라, 기존에 존재하는 Promise 위에 조금 더 간편한 API를 제공함 이런 것을 syntactic sugar 라고 한다 (Class도 마찬가지..)

## 1.async

-async 키워드를 사용하면 promise를 더욱 쉽게 사용할 수 있다.
-async를 사용하면 함수의 코드 블록이 자동으로 Promise로 변환이 되어짐
-function 앞에 async 키워드를 써주면 promise를 사용하지 않아도 사용한 효과를 받을 수 있다.

## 2.await

-async 키워드가 붙은 함수 안에서만 await 키워드를 사용가능하다.

## 유용한 Promise API

- Promise.all( ) : all API는 프로미스 배열을 전달하게 되면, 모든 프로미스들이 병렬적으로 받아질때 까지 모았다가 한번에 배열을 전달한다.

- Promise.race( ) : race API는 배열에 전달된 프로미스 중에서 가장 먼저 값을 리턴하는 프로미스만 전달된다.

## 비동기 처리를 반드시 해야하는 이유

- JS 엔진은 블록({})안에 코드를 동기적으로 실행(처리)한다.
- 시간이 오래 걸리는 코드를 비동기 처리를 전혀 하지 않으면, 다음 코드에 문제가 발생할 수 있음
- 예를 들어 서버에서 data를 받아와서 웹페이지에 출력하는 시나리오가 있다
- data를 받아 오는데 10초가 걸림, 근데 비동기 처리를 안하면 텅 빈 data를 출력 해버림
- Promise 상황극: 내가 언제 유저의 data를 받아 올진 모르겠지만 내가 약속할께, Promise라는 object를 가지고 있으면, 여기에 니가 then 이라는 콜백함수만 등록해 놓으면, 유저의 data가 준비 되는대로 니가 등록한 콜백함수를 불러줄께
