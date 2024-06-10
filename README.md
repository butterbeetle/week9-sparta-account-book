# ✨ React 숙련주차 개인과제

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
      <li>react-router-dom 을 활용한 페이지 이동처리</li>
      <li>styled-component 를 이용한 스타일링 적용</li>
      <li>context api 를 이용한 전역 상태 관리</li>
      <li>redux 를 이용한 전역 상태 관리</li>
    </ul>
  </div>
</details>

## ⏰ 기한
- 2024.05.20 ~ 2024.05.29

## 🎇 필수 구현 사항
- 지출 CRUD 구현 (작성, 조회, 수정, 삭제)
- 월별 지출 조회 기능 구현 (Home - Read)
- 월별 지출 항목 등록 구현 (Home - Create)
- 지출 상세 화면 구현 (Detail - Read)
- 상세화면에서 지출 항목 수정 구현 (Detail - Update)
- 상세화면에서 지출 항목 삭제 구현 (Detail - Delete)

## 🎆 필수 요구 사항

<details>
  <summary>styled-components 를 이용하여 스타일링</summary>
  <div>
    <ul>
      <li>인라인 스타일링이나 일반 css 파일을 이용한 스타일링 방식 지양 (이번 과제 한정)</li>
      <li>모든 태그를 styled-components 화 할 필요는 없으나 스타일링이 들어가는 경우는 styled-components 화 할 것</li>
    </ul>
</details>
    
<details>
  <summary>styled-components에 props를 넘김으로 인한 조건부 스타일링 적용</summary>
  <div>
    <ul>
      <li>월 선택 탭에 적용해 보세요</li>
    </ul>
</details>
    
<details>
  <summary>react-router-dom 을 이용해서 페이지 전환을 합니다.</summary>
  <div>
    <ul>
      <li>지출을 수정하기 위한 페이지 이동 시에 사용해주세요.</li>
    </ul>
</details>
    
<details>
  <summary>useState, useEffect, useRef 사용</summary>
  <div>
    <ul>
      <li>과제 안내 순서에 각각 어디에서 사용되면 좋을지 가이드를 드렸습니다. 해당 부분에서 위의 기능들을 각각 사용해주세요</li>
    </ul>
</details>
    
<details>
  <summary>지출 항목 등록 시 id는 uuid 라이브러리를 이용 </summary>
  <div>
    <ul>
      <li>(npm i uuid) or (yarn add uuid)</li>
    </ul>
</details>

## ⚡ 제출 시 주의 사항
- 제출된 깃헙에는 props-drilling, context, redux 라는 이름의 각각의 브랜치명이 있어야 합니다.
- props-drilling 브랜치에서는 context나 redux 없이 useState만으로 상태관리해서 코드를 작성합니다.
- props-drilling 으로 코드를 모두 작성 및 커밋을 완료했으면 context 브랜치로 생성 및 이동합니다.
- context 브랜치에서는 props-drilling으로 작업한 코드에서 react context API를 사용하여 전역상태를 이용한 코드로 리팩터링합니다.
- context 브랜치에서 리팩터링 및 커밋을 완료했으면 redux 브랜치 생성 및 이동합니다.
- redux 브랜치에서는 context api로 전역상태를 관리한 코드를 모두 redux 라이브러리를 이용한 코드로 리팩터링합니다.<br/>
  **주의: Redux ducks 패턴을 사용하지 않고 Redux Toolkits 을 사용하도록 합니다.**

## ✒ 제출 시 답변
1. styled-components 는 CSS in JS 라이브러리 중 하나로 리액트 개발 시 자주 사용되는 방법입니다. <br/>본인이 생각하는 styled-components의 장점과 단점을 말씀해 주세요.
2. props-drilling으로 전체를 먼저 구현하신 다음 context api와 redux로 리팩터링해서 전역 상태 관리를 경험해 보셨습니다. <br/>어떤 상태들을 전역 상태로 관리하셨나요? <br/>context나 redux로 전역상태를 관리해봤을 때 어떤 문제를 해결해준다고 느끼셨나요?
3. 지출을 등록/수정 하는 과정에서 useState 와 useRef 를 둘다 사용해봤는데요. <br/>각각 언제 사용하면 좋을 지에 대한 생각을 공유해주세요.
# week9-sparta-account-book
