# Revealing Constructor (공개 생성자 패턴) 	&#128269;

```
const promise = new Promise(function(resolve, reject){

});
```

* Promise 는 생성자의 인자로 함수를 받는다. (executor 함수)
* 객체 내부 상태 변경할수 있도록 resovle, reject함수를 외부에 노출하는 매커니즘 제공
* 생성자 코드만 resovle, reject에 접근 가능, 다른 코드는 접근/변경 불가

 
## 읽기 전용 이벤트 이미터
> emit메소드를 호출할수 없는 특별한 종류의 이미터
