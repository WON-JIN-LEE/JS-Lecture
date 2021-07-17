# script async 와 defer 차이점

## HTML파일에 script 파일 추가하는 방법

1. head태그 안에 추가하는 방법

   - parsing HTML -> parsing HTML STOP -> JS 파일 fetching -> JS 파일 executing -> parsing HTML

2. body태그 안에 추가하는 방법

   - parsing HTML -> JS 파일 fetching -> JS 파일 executing

3. head + asyn 옵션

   - HTML 파싱하는 동안 자바스크립트 파일을 동시에 다운로드 받고 패칭이 완료된 JS파일을 먼저 바로 실행시키는 옵션이다. 그런 다음 나머지 HTML을 다시 파싱한다.
   - JS파일 중 패칭이 먼저완료된 js파일을 먼저 실행시킨다. 순서가 없다.

4. head+defer 옵션: (권장)

   - 자바스크립트 구문에 defer를 이용하는 것은 html파일이 pursuing되는 동안 자바스크립트 파일을 동시에 다운로드 받아는다.
   - 그리고 html이 pursuing이 다 완료가 된 다음에 자바스크립트 파일을 실행하기 때문에 항상 defer옵션을 쓰는것을 권장한다.
   - Script 파일 추가하는 정의한대로 순서를 유지한다.
