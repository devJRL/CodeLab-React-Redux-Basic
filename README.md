# React 입문 교육 (KOSTA/2019.12.19~20)

- 2019년 12월 19일 ~ 20일 (2일/15시간)
- KOSTA / 백명숙 강사 (https://blog.naver.com/)

---

## React 소개

2013년에 페이스북이 만든 오픈소스 자바스크립트 라이브러리로, User Interface 만들기 위한 `선언적 코어 컴포넌트 라이브러리`입니다. `Angular나 Vue와 같은 프레임워크 레벨`이 아닌 `코어 라이브러리`로 서드파트 라이브러리를 추가하여 기능 확장 및 구축이 가능합니다.

- Framework: 객체의 생성주기(Life-cycle)를 효율적으로 수행하기 위한 모든 공통 의존 모듈을 내장하고, 의존성과 관리를 제공하는 프로그램의 기존 구조(뼈대)
- Library: 프로그램 제작시 필요한 기능, 구성물로 각 라이브러리는 외부 라이브러리를 의존하는 경우도 있습니다.

### WebPack & Bundle

`Angular`, `Vue`, `React`는 Client만을 위한 프로젝트를 따로 구성하여 WepPack으로 제공하는 Client용 서버를 별도로 만들고, JQuery에서 탈피하여 개발한 자바스크립트를 배포합니다. WebPack이 index.html, 개발js파일, node_modules를 함께 묶어서(bundling) 배포하는 방식을 사용합니다.

### JSX 문법, ES6 그리고 브라우저

class, export, import 등의 문법은 ES6부터 적용 가능한 문법을 오래된 인터넷 브라우저에서는 읽지 못합니다. 이를 ES5로 컴파일해서 사용자에게 제공해주어야 하므로, `Babel` 컴파일러를 주로 사용합니다. (ES6-> ES5)

### TypeScript

ES6, ES7, ES8를 모두 내장하면서 입/출력을 포함한 모든 `타입 체크`를 수행합니다. 그 결과 JavaScript코드로 Java나 C#과 같은 수준의 코드와 성능을 보여줍니다. 이를 (ts -> ES5)로 컴파일 해야하므로 `TSC` 컴파일러가 필요합니다.

### Dev Server

`Cient를 위한 개발 프로젝트`가 필요합니다. 초기 환경 셋업하기 위한 필요사항이 많습니다.

- [React Library - FaceBook](https://reactjs.org/) : [`Create-React-App`](https://create-react-app.dev/) - [GitHub](https://github.com/facebook/create-react-app)
- [Angular Framework - Google](https://angular.io/) : [`Abgular-CLI`](https://cli.angular.io/)
- [Vue Library/Framework - Evan You](https://vuejs.org/) : [`Vue-CLI`](https://cli.vuejs.org/) -

---

## React 컴포넌트

### 컴포넌트 통신(Props)

### 자기 자신의 상태변수(state) : 자바의 인스턴스와 유사

---

## React 이벤트 및 DOM

### 이벤트 바인딩

### ref:DOM : HTML DOM 객체를 직접 컨트롤

### 컴포넌트 반복 : map()

### [실습] ToDo-List App

- React Framework 성능 최적화 : 화면 렌더링

---

## React & Redux

### Redux 개념

### [실습] Counter-App

---

## Redux & Axios

### Axios 개념

### [실습] ToDo-List와 Counter-App에 적용하기

---

## React Router

### SPA

### Routing

### React Router
