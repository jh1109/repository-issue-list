# A Repository Issue List (개인 작업물)
GitHub REST API를 사용하여 특정 github repository의 이슈 목록을 확인하는 웹 사이트 입니다.

> 원티드 프리온보딩 프론트엔드 인턴십 3주차 과제  
> 목표 : 특정 깃헙 [레파지토리](https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축  
> 해당 과제 팀 best-practice로 [클릭](https://github.com/wanted-pre-onboarding-11th-team3/pre-onboarding-11th-3-3)하여 이동하기

## 주요 전략
- 유지보수를 위해 HTTP 통신과 사용하고자 하는 GitHub REST API를 호출하는 class를 각각 분리(`httpClient.ts` & `IssueService.ts`)
- 재사용성을 위해 `Date`값에서 년, 월, 일만 참조하는 유틸 함수 생성
- 반응형 웹 사이트

## 요구 사항
### 1. 이슈 목록 화면
- [x] Context API를 활용한 API 연동으로 이슈 목록 가져오기
- [x] 이슈 목록 데이터 요청 중 로딩 표시
- [x] open 상태 데이터 요청 및 표시 : List repository issues API 사용

### 2. 이슈 상세 화면
- [ ] 이슈의 상세 내용 표시
- [ ] '이슈변호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

### 3. 공통 헤더
- [x] 두 페이지는 공통 헤더 공유
  - `<RootLayout />`를 만들어 라우트 중첩
  - 유지보수를 위해 `<RootLayout />`과 `<Header />` 컴포넌트 관심사 분리

### 4. 그 외
- [x] 에러 화면 구현
  - 루트 라우트의 `errorElement property`를 사용하여 에러 화면 구현

## 프로젝트 사용법
```
npm install & npm start

# or

yarn install & yarn start
```
