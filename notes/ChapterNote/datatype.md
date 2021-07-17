# variable, datatype, operator

## const, let, var 키워드

    - var를 쓰지말고 let, const 키워드를 사용하는 것을 권장한다.
    - 상수 constants, const 선언과 할당한 뒤에는 변경 불가능하다. immutable 데이터 타입은 변경할수 없는 타입을 말한다.
    - let는 mutable 데이터 타입이라서 변경이 가능하다.

## 데이터 타입

    - 숫자타입 Number이다. Infinity,  -Infinity,  NaN / 최근 bigInt라는 타입이 추가되었다.
    - String 문자열 타입, 템플릿 리터럴로 백틱(``)안에 작성하게 간편하게 문자열을 작성할 수 있다.
    - 불리언 타입 true, false
    - null : 비어있는 값을 할당한 상태
    - undefined : 선언은 되었지만 값이 할당되지 않은상태
    - 심볼Symbol : 고유한 식별자가 필요할 때 쓰여지는 데이터 타입
    - Dynamic typing (동적 타입핑)
    - Object : const로 선언된 객체는 변경 불가능하지만 객체 안에 프로퍼티의 값은 변경 가능하다.

## Operator(연산자)

    - !(not) 값을 반대로 만들어준다.
    - ==, != 타입에 상관없이 비교한다.
    - === , !== 타입까지도 신경써서 비교한다.
