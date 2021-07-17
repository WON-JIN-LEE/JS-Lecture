# Class And Object

## 클래스

    - Fields
    - Methods
    - Getter & Setter
    - 클래스 내에서 변수 앞에 # 추가하면 privateField가 된다.
    오버라이딩이란 상속 관계에 있는 부모 클래스에서 이미 정의된 메소드를 자식 클래스에서 같은 시그니쳐를 갖는 메소드로 다시 정의하는 것
    - instanceof 연산자는 생성자의 prototype 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별합니다.

---

## Object

    - 오브젝트는 키와 벨류의 집합체이다.
    - . 과 [ ]으로 프로퍼티에 접근가능하다.
    - In 연산자를 이용하면  해당 객체에 key가 있는지 확인할 수 있다.

## 객체 복사

    - 대표적으로 3가지 방법이 있습니다.
    - (A) Shallow copy, (B) Deep+Shallow Copy, (C) Deep Copy

### (A) Shallow copy

- A방법은 복제없이 참조하는 변수만 만들어 얕게 복사합니다.

<!-- image -->

![image description](/imgs/shallowCopy.png)

```js
let grandeur = { engine: "gdi", cc: 3000 };
let aa = { name: "kildong", age: 20, car: grandeur };
let bb = aa; // Object Shallow Copy, 하위Object Shallow Copy
console.log(Object.is(aa, bb)); // true
console.log(Object.is(aa.car, bb.car)); // true
```

---

### (B) Deep+Shallow Copy

- B방법은 대표 객체는 복사하지만 하위 객체는 참조만 합니다.
- Object.assign()메서드 사용하여 복사합니다.

<!-- image -->

![image description](/imgs/DeepShallowCopy.png)

```js
let grandeur = { engine: "gdi", cc: 3000 };
let aa = { name: "kildong", age: 20, car: grandeur };
let bb = Object.assign({}, aa); // Object Deep Copy, 하위Object Shallow Copy
console.log(Object.is(aa, bb)); // false
console.log(Object.is(aa.car, bb.car)); // true
```

---

### (C) Deep Copy

- C방법은 대표 객체뿐만아니라 중첩된 객체까지 복사하는 것을 말합니다.
- JSON객체의 메서드를 이용하는 방법
  <!-- image -->
  ![image description](/imgs/DeepCopy.png)

```js
let grandeur = { engine: "gdi", cc: 3000 };
let aa = { name: "kildong", age: 20, car: grandeur };
let bb = JSON.parse(JSON.stringify(aa)); // Object Deep Copy, 하위Object Deep Copy
console.log(Object.is(aa, bb)); // false
console.log(Object.is(aa.car, bb.car)); // false
```
