# 🛍️ 리엑트 쇼핑몰

images

개발 기간 2021 09월 초 ~ 2021 10월 중순
리엑트를 사용해 간단한 쇼핑몰을 만들었다.  
전체적인 컴포넌트는 **로그인**, **메인화면**, **상세 페이지**, **사이드바** 로 이루어져있다.  
나의 코드 스타일, 디렉토리 구조, 리엑트 구조 등등 기록하기 위해서 **REACT SHOP** 프로젝트를 만들었다.

<br/>

# ⚙️ 사용 모듈

> typescript  
> CRA (create-react-app), react-router, craco  
> redux, redux-saga  
> emotion  
> fortawesome

<br/>

# 💡 구현 기능

### 특징

- 로그인 기능
- 페이지네이션 & 쿼리스트링 & 동적라우팅
- 리덕스 사가를 이용한 상태관리
- 반응형 CSS
- 장바구니 (LocalStorage)
- 햄버거 (사이드바)

<br/>

# ⌚︎ 실행

```bash
    npm install
```

```bash
    npm run start
```

<br/>

# 🗝 작업 이슈

### 웹펙 경로 처리

`CRA` 와 `tsconfig.json` 을 이용해 경로를 처리해주던중 이슈가 발생.  
`tsconfig.json` 에서 `paths` 경로를 달아도 시작하면 리셋이 된다. 따라서 overrightened  
`webpack` 을 직접 까서 수정하는 방법과 `craco` 를 이용한 경로 설정중 후자를 이용함.

<br/>

### 이모션

styled 컴포넌트와 다르게 추가적인 설정을 요하고, 이 프로젝트에선 최적화된 설정 처리는 하지 못했다.  
추후 검토를 해야함.

<br/>

### saga typescript

사가 안에서 타입스크립트 적용시 제너레이터 추론 이슈가 발생.  
임시적으로 `@ts-ignore`로 처리 추후 수정해야함

<br/>
