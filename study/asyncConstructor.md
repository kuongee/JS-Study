# class constructor에서 async

> Todo list 만들 때 컴포넌트가 생성될 때 constructor에서 서버 데이터를 가져오는 async 동작을 하고 싶었다. 그런데 안 된다는 에러 메시지가 떠서 따로 함수로 빼서 구현했다.

## 왜 안 될까?

[Stack overflow에 그나마 적절한 설명이 있어서 적어놓는다.](https://stackoverflow.com/questions/43431550/async-await-class-constructor)

The async keyword allows await to be used in a function marked as async but it also converts that function into a promise generator. So a function marked with async will return a promise. A constructor on the other hand returns the object it is constructing. Thus we have a situation where you want to both return an object and a promise: an impossible situation.

정리하면, async가 붙은 함수는 프로미스를 반환할텐데 object 그 자체를 반환하는 constructor가 프로미스를 반환하는 건 불가능한 상황이라는 것이다. 이를 해결하기 위한 여러 방법을 제안하고 있다.

## 참고

- https://stackoverflow.com/questions/43431550/async-await-class-constructor
- https://qwtel.com/posts/software/async-constructor-pattern/
