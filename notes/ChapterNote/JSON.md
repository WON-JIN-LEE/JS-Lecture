# JSON (서버 통신)

## HTTP

- Hypertext Transfer Protocal
- 클라이언트와 서버가 어떻게 통신할 수 있는지 정해놓은 프로토콜
- Hypertext는 리소스, 이미지 파일 , 문서들을 통틀어 말합니다.

## AJAX

- Asynchronous Javascript And XML
- 웹페이지에서 동적으로 서버에게 데이터를 주고받을 수 있는 기술을 말한다.
- 대표적인 예 : XMLHttpRequest 객체가 있다. 이 객체를 통해 손쇱게 데이터를 주고 받을 수 있다.
- fetch() API도 있다.
- XML은 많은 포맷 중 하나이다. XML을 사용하면 불필요한 태그들이 많이 들어가서 가독성이 떨어지고 사이즈고 커지기 때문에 많이 사용하고 있지는 않다.

---

## JSON( JavaScript Object Notation)

- 요즘 많이 사용되고 있는 데이터 포맷인 JSON이다.
- key와 value로 이루어졌다.
- 데이터를 주고 받을 때 가장 간단하게 사용할 수 있는 데이터 포맷이다.
- 텍스트를 기반으로 되어있어 가볍다.
- 가독성이 좋다.
- 데이터를 서버와 주고 받을때 직렬화하고 데이터를 전송할 때 쓰인다.
- 중요한 것은 어떠한 프로그램 언어나 플랫폼에 상관없이 쓸 수 있다.
  - 즉 C, C#, Java, Python, PhP, kotlin, go와 같은 언어들로 된 오브젝트를 JSON파일로 serialize 변환하고 또 JSON파일을 각 언어에 특징에 맞게 오브젝트로 deserialize을 지원하기 때문에 많이 사용되고 있습니다.

### Object to JSON

- JSON.stringify()로 JSON 파일로 변환할 수 있다.
- 오브젝트를 JSON으로 변환할 때 JSON파일에는 함수는 제외된다. Symbol 타입도 포함되지 않는다.
- JSON.stringify()의 두 번째 인수에 배열로 원하는 프로퍼티 키를 전달하면 전달된 프로퍼티 키와 값을 가진 JSON 파일로 변환한다.
- 두 번째 인수에 콜백함수로 오브젝트를 더 세밀하게 무언가를 제어 가능하기 때문에 원하는 JSON파일을 만들 수 있습니다.

### JSON to Object

- JSON.prase()로 JSON 파일을 객체로 변환할 수 있다.
- JSON.prase()의 두 번째 인수에 콜백함수로 JSON파일을 더 세밀하게 제어 가능하기 때문에 원하는 오브젝트를 만들 수 있습니다.
- JSON 파일은 String으로 이뤄졌기 때문에 오브젝트로 변환할때 JSON파일에 String을 그대로 전달받는다. Date() 객체로 받는 것이 아니라 JSON파일에 String을 그대로 받는다.
