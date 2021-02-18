# Factory Pattern (팩토리 패턴) &#127981;

## javascript 에서는 함수 위주의 패러다임이 순수한 객체지향 설계보다 더 선호된다.
> 새 객체 인스턴스를 작성할때 특히 더 그렇다.

* new 연산자 또는 Object.create() 사용하여 프로토타입에서 직접 새 객체 만드는 대신 ***팩토리***를 호출하는 것이 편리, 유연함
> 팩토리는 객체 생성을 구현/분리할 수 있게 도와준다.

---

## 팩토리 내에서 클로저를 활용하여 새로운 인스턴스를 만들거나 특정 조건에 따라 다른 인스턴스 반환! 

```
function createImage(name){
    return new Image(name);
}

const image = createImage('photo.jpg');
```

```
function createImage(name){
    if(name.match(/\.jpeg$/)){
        return new jpegImage(name);
    }else if(name.match(/\.gif$/{
        return new GifImage(name);
    }else{
        throw new Exception('Unknown format');
    }
}
```
> 팩토리는 생성자 노출/객체 확장/수정 이 불가능 하도록 한다.

---

## 팩토리는 클로저 덕분에 캡슐화를 사용할 수 있다. (PersonFactory.js 참고)
> createPerson는 클로저를 사용하여 두 객체를 생성했다.

* privateProperties 객체는 외부에서 접근하는 방법은 person 객체가 제공하는 인터페이스를 통해서만 접근이 가능한다 (setName, getName)
> 실제로 접근하는 코드는 undefined 결과가 나온다(주석처리 해놓음)


## 합성 가능한 팩토리 함수
> 향상된 팩토리 함수를 만들기 위해 함께 ***조합*** 될 수 있는 특정 유형의 팩토리 함수
> ***상속***하는 객체를 만들때 유용 (굳이 복잡한 클래스 계층 구조 필요 x)

 * stampit 모듈 (Character.js 참고)
 ---
 새로운 팩토리 함수들을 만들기 위해 함께 구성할 수 있는 팩토리 함수들을 정의하기 위한 직관적인 인터페이스를 제공합니다.
