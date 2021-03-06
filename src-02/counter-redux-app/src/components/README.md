# components

## 컴포넌트의 뷰에 해당하는 presentational 컴포넌트를 저장합니다.

## Presentational 컴포넌트

- View 기능맂 담당한다. (DOM 엘리먼트와 스타일이 있다)
- 리덕스 스토어에 직접 접근하지 않고, 오직 props로맂 데이터를 가져올 수 있다.
- 주로 함수형 컴포넌트로 작성되며 state 를 가지고 있어야 하거나, 최적화를 위해 LifeCycle 이 필요하면 클래스형 컴포넌트로 작성됩니다.

## Container 컴포넌트

- 상태를 가지고 있으며, 리덕스에 직접 접근할 수 있다.
- DOM 엘리먼트나 스타일을 직접적으로 사용할 수 없다.

## 이 구조의 장점

- UI 쪽과 Data 쪽이 붂리 되어 프로젝트를 이해 하기가 쉬워지며, 컴포넌트의 재 사용률도 높여 줍니다.
- 리덕스의 창시자 댄 아브라모프(Dan Abramov)가 더 나은 설계를 하기 위해 공유한 구조이다
