# ✨ [9주차] React 심화주차 개인과제

##### 주제: 숙련주차때 만든 지출 관리 시스템에 인증 기능을 추가하고 JSON 서버를 이용해 데이터를 관리한다.

[사이트 바로가기](https://week9-sparta-account-book.vercel.app)

## ⏰ 기한

- 2024.06.10 ~ 2024.06.14

## 🎇 필수 구현 사항

- ✅ 지출 관리 시스템에 회원가입 / 로그인 기능 구현 [[상세 보기]](https://github.com/butterbeetle/week9-sparta-account-book/wiki/%ED%95%84%EC%88%98-%EA%B5%AC%ED%98%84-%EC%82%AC%ED%95%AD-%E2%80%90-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EA%B3%BC-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84#-auth) 
  - 반드시, 강의에서 제공하는 jwt 인증서버를 사용한다
  - 인증이 되지 않는다면 서비스를 이용 할 수 없다
- ✅ `json-server` 를 이용해 지출 데이터에 대한 CRUD 를 구현 [[상세 보기]](https://github.com/butterbeetle/week9-sparta-account-book/wiki/%ED%95%84%EC%88%98-%EA%B5%AC%ED%98%84-%EC%82%AC%ED%95%AD-%E2%80%90-%EC%A7%80%EC%B6%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%97%90-%EB%8C%80%ED%95%9C-CRUD-%EB%A5%BC-%EA%B5%AC%ED%98%84#-%EC%A7%80%EC%B6%9C-crud)
  - 지출 데이터에 누가 해당 지출을 생성 했는지 포함시킨다
- ✅ API 호출 시, `axios` 사용 [[상세 보기]](https://github.com/butterbeetle/week9-sparta-account-book/wiki/API#-api)
- ✅ 지출데이터 관련 API 통신 시 `Tanstack Query`를 사용 [[상세 보기]](https://github.com/butterbeetle/week9-sparta-account-book/wiki/API#-api)
  - 상태 관리를 위해 Props-drilling, Context API, Redux 대신 `Tanstack Query` 를 사용한다
  - 로그인, 회원가입 등 인증/인가 에 사용되는 API 는 자유로운 방식 구현 가능

## 🎆 선택 구현 사항

- ✅ `Styled-components` 로 스타일링 한 부분을 `Tailwindcss` 를 사용하여 리팩토링
- ✅ Modal 및 Toast 등 외부 라이브러리 적용 (Custom Hook으로 대체)[[상세 보기]](https://github.com/butterbeetle/week9-sparta-account-book/wiki/Custom-Hook#-custom-hook)
- ✅ Custom Hook 생성 및 상태 관리 [[상세 보기]](https://github.com/butterbeetle/week9-sparta-account-book/wiki/Custom-Hook#-custom-hook)
- ✅ Access Token 유효할 경우에만 지출 CRUD 가능 및 토큰 만료 시 로그아웃
- ✅ 로그인 된 유저정보는 `zustand`를 사용하여 상태 관리 [[상세 보기]](https://github.com/butterbeetle/week9-sparta-account-book/wiki/Custom-Hook#%EF%B8%8F-useme-userecord)

## 💡 과제 후 숙련 가능 사항
- REST API 통신에 대한 이해
- `Axios` 와 `Tanstack Query` 로 API 응답값 관리
- jwt 토큰을 이용한 인증/인가 기능 구현
