# 자료구조

- 비슷한 타입의 데이터(object)들을 묶어서 한곳에 보관해 놓는 것
- 대부분의 프로그래밍 언어들은 동일한 타입의 object만 담을 수 있는데 JS는 동적타입언어라 이것저것 담을 수 있음, 그러나 동일한 타입만 담는 것을 규칙으로함.
- 어떤 방식/형식으로 데이터를 담냐에 따라서 굉장히 많은 타입이 존재
- 객체는 서로 연관된 특징과 행동들을 묶어 놓은것들을 의미함 (자료구조와 다름)
- 삽입, 검색, 정렬, 삭제를 고려해서 자료구조중 가장 효율적인 것을 사용하는것이 중요
- 자료구조중 하나가 **배열**이다.

## Array

- Shift , unshift는 push, pop 메서드보다 속도가 매우 느리다. 가능하면 pop와 push메서드를 사용하는 것이 권장합니다.
- 그 이유는 shift와 unshift는 사용하면 모든 요소들을 움직여야 하기 때문에 오래걸린다.

## 1. Declaration (선언)

```jsx
const arr1 = new Array();
const arr2 = [1, 2];
```

## 2. Index position (인덱스 위치)

```jsx
const fruits = [`🍎`, `🍌`];
console.log(fruits); // > ["🍎", "🍌"]
console.log(fruits.length); // > 2
console.log(fruits[0]); // > 🍎
console.log(fruits[1]); // > 🍌
console.log(fruits[2]); // > undefined
console.log(fruits[fruits.length - 1]); // > 🍌 : 마지막 인덱스에 접근 할 때 방법.
```

## 3. Looping over an array

- For(), for …of , forEach

## 4. Addtion, deletion, copy

- push, pop
- unshift, shift
- splice
- concat

## 5. Searching (검색)

- indexOf, lastIndexOf
- includes
