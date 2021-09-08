### 사용 툴 및 모듈

- cra
- react-router-dom
- redux, redux-saga
- typescript
- emotion
- tailwind

### 디렉토리 구조

```
src - assets >> 이미지, css 등등
    - components - commom >> 공통컴포넌트
                 - template >> 레이아웃
    - modules - redux
    - pages - page
```

### 구현 리스트

- 로그인 페이지
- 메인 페이지 + 페이지네이션 + 동적 라우팅
- 상세 페이지

### npm

```
    npm i redux redux-saga redux-devtools-extension react-redux
```

### 경로 작업

weppack 에서 경로 수정및 tsconfig 파일 수정
@이슈
tsconfig 에서 paths 경로를 달아도 시작하면 리셋이 된다. 따라서 overrightened

CRA 커스텀 실패, 자동으로 경로가 리셋되는 이슈 등 문제 있음
그냥 CRACO 사용으로 변경

### 이모션

styled 컴포넌트와 다르게 추가적인 설정을 요함
