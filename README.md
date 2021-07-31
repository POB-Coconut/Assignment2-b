# Assignment 2 미스터카멜 과제

### 팀원

[김동원](https://github.com/dongwonnn), [이제찬](https://github.com/jeky22), [장명진](https://github.com/orgs/POB-Coconut/people/thinkJin6), [이제경](https://github.com/jejelee94)

## 데모 링크

🔗 [페이지 링크](https://github.com/POB-Coconut/Assignment2-b)

### 설치 및 실행 방법

```javascript
npm install | yarn
npm run start | yarn start
```

## 구현 목록

### 1. product 페이지

**담당 구현** : [장명진](https://github.com/orgs/POB-Coconut/people/thinkJin6), [이제경](https://github.com/jejelee94)

- [x] Class Component 를 이용해 ProductPage 구현.
- [x] Local Storage 와 mock data 를 통한 데이터 관리.
- [x] Pagination 을 통한 상품목록 페이징 처리.
- [x] 상품 클릭시 해당 상품으로 이동하는 routing 구현.
- [x] 관심 없음 버튼 클릭시 랜덤 상품 로드 및 접근 불가 처리.
- [x] 상품 조회 시 이력데이터 누적 및 동일 상품 조회 시 최신 데이터로 갱신.
- [x] Router 를 통한 ErrorPage 구현.

### 2. recentList 페이지

**담당 구현** : [김동원](https://github.com/dongwonnn), [이제찬](https://github.com/jeky22)

- [x] 00시 기준으로 최근 조회이력과 관심 없는 상품목록 초기화 기능
- [x] 브랜드 필터 기능
- [x] 관심사 필터 기능
- [x] 최신 조회 정렬 기능
- [x] 가격 순 정렬 기능
- [x] 조건 별 상세 페이지 이동 기능

### 폴더 구조

📦public
┗ 📂data : mock data 폴더

📦src  
┣ 📂components
┣ 📂pages  
┣ 📂utils  
┃ ┗ 📂data : data form 관련 폴더
┃ ┗ 📂storage : storage 관련 폴더
┣ 📜App.js  
┗ 📜index.js
