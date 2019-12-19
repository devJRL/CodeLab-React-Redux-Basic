# React 프로젝트를 구성하는 방법

1. `Node.js` 설치 : LTS

```bash
  # 확인
  node -v
  npm -v
```

2. npm을 이용하여 `Yarn` 설치

```bash
  # 설치
  npm install global yarn
  # 확인
  yarn -v
```

3. React 프로젝트를 만들 디렉토리에서 노드 의존 패키지 모듈 정보 고정

```bash
  # 원하는 디렉토리에서 실행
  yarn add global create-react-app
  # 확인
  create-react-app -v
  cat package-lock.json
```

4. `create-react-app`으로 리액트 프로젝트 만들기

```bash
  # 리액트 프로젝트 생성
  # 필요한 기본 모듈을 다운받기 위해 시간 이 많이 필요함
  # 프로젝트 이름이 폴더가 되므로 대문자를 입력하지 않도록 합니다. (모두 소문자)
  create-reace-app {my-project}

  # 리액트 프로젝트 실행
  cd {my-project}
  yarn start
```

5. 새로 받은 경우, node_modules 폴더는 제외된 상태로 가볍게 오므로 노드 의존 모듈 설치

```bash
  yarn install
```
