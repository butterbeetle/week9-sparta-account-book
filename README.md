# ✨ [9주차] React 심화주차 개인과제

##### 주제: 숙련주차때 만든 지출 관리 시스템에 인증 기능을 추가하고 JSON 서버를 이용해 데이터를 관리한다.

<details>
  <summary>구현할 웹사이트 예시</summary>
  <br/>
  <ul>
    <li>홈 화면</li>
    <br/>
    <img width="800" alt="홈화면" src="https://github.com/butterbeetle/sparta-account-book/assets/50831567/fb8b9e29-a6c5-4a22-a2fd-e0528899b25a"> 
    <br/>
    <br/>
    <li>상세 화면</li>
    <br/>
    <img width="800" alt="상세화면" src="https://github.com/butterbeetle/sparta-account-book/assets/50831567/a81a26b8-9536-4daa-81e2-1397410ac064">
    <br/>
  </ul>
</details>
<details>
  <summary>과제 이후 숙련 가능 사항</summary>
  <div>
    <ul>
      <li>REST API 통신에 대한 이해</li>
      <li>Axios 와 Tanstack Query 로 API 응답값 관리</li>
      <li>jwt 토큰을 이용한 인증/인가 기능 구현</li>
    </ul>
  </div>
</details>

## ⏰ 기한

- 2024.06.10 ~ 2024.06.14

## 🎇 필수 구현 사항

- 지출 관리 시스템에 회원가입 / 로그인 기능 구현
  - 반드시, 강의에서 제공하는 jwt 인증서버를 사용한다
  - 인증이 되지 않는다면 서비스를 이용 할 수 없다
- `json-server` 를 이용해 지출 데이터에 대한 CRUD 를 구현
  - 지출 데이터에 누가 해당 지출을 생성 했는지 포함시킨다
- API 호출 시, `axios` 사용
- 지출데이터 관련 API 통신 시 `Tanstack Query`를 사용
  - 상태 관리를 위해 Props-drilling, Context API, Redux 대신 `Tanstack Query` 를 사용한다
  - 로그인, 회원가입 등 인증/인가 에 사용되는 API 는 자유로운 방식 구현 가능

## 🎆 선택 구현 사항

- `Styled-components` 로 스타일링 한 부분을 `Tailwindcss` 를 사용하여 리팩토링
- Modal 및 Toast 등 외부 라이브러리 적용
- Custom Hook 생성 및 상태 관리
- Access Token 유효할 경우에만 지출 CRUD 가능 및 토큰 만료 시 로그아웃
- 로그인 된 유저정보는 `zustand`를 사용하여 상태 관리
