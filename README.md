# A Repository Issue List
특정 github repository의 이슈 목록과 상세 내용을 확인하는 웹 사이트 입니다.

> 원티드 프리온보딩 프론트엔드 인턴십 3주차 과제  
> 목표 : 특정 깃헙 [레파지토리](https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축  
> [팀의 best-practice로 클릭하여 이동하기](https://github.com/wanted-pre-onboarding-11th-team3/pre-onboarding-11th-3-3) 

## 주요 내용
- 유지보수를 위해 HTTP 통신(`httpClient.ts`), issue관련 서비스 기능(`IssueService.ts`) `class`를 생성하여 **관심사 분리**
- `Context API` 활용하여 `issues`, `isLoading`, `repository` 관리
- **Github REST API** 중 List repository issues 연동하여 렌더링
- 반응형 웹 사이트  
![모바일dd](https://github.com/jh1109/repository-issue-list/assets/117807467/371919df-74cb-4b2f-82fc-23835ca98ed8)

## 요구 사항
### 1. 이슈 목록 화면
- [x] open 상태의 이슈 중 코멘트가 많은 순으로 정렬
![web](https://github.com/jh1109/repository-issue-list/assets/117807467/5b5624d9-c94a-4729-b76d-1291cbc91171)
- **Github REST API** 중 List repository issues 연동하여 렌더링
- 유지보수를 위해 HTTP 통신(`httpClient.ts`), issue관련 서비스 기능(`IssueService.ts`) `class`를 생성하여 **관심사 분리**
- `Context API` 활용하여 `issues`, `isLoading`, `repository` 관리
- 가져온 issue 중 필요한 값만 필터링(`filterIssue`함수)
<br>

- [x] 다섯번째 셀 마다 광고 이미지 출력, 클릭시 해당 홈페이지로 이동  
![광고](https://github.com/jh1109/repository-issue-list/assets/117807467/9d24e2c8-5e8f-472f-9437-ac355b4bef90)
- `map()`의 `index` 인자를 이용하여 삽입할 위치의 `index`에 광고이미지와 `issueItem`을 함께 렌더링
- **[트러블슛팅]** 기존 `issues`의 다섯번째 `index`마다 있었던 `issues`가 광고로 대체되는 문제 해결
<br>

- [x] 데이터 요청 중 로딩 표시
- issue가 1개라도 있을 때만 issues 렌더링
- 해당 repository에 issue가 없을 경우 "issues가 없습니다!" 렌더링
<br>

- [ ] 인피니티 스크롤 - 라이브러리 사용불가 ('23.07.16기준 구현 실패 😥)
### 2. 공통 헤더
- [x] organization name / repository name 표시
- 불필요한 렌더링을 막기 위해 `<Outlet />` 사용하여 **중첩 라우트**
- 공통되는 컴포넌트 및 UI는 `<RootLayout `/>에서 관리
### 3. 이슈 상세 화면
- [x] list에서 issue 클릭시 해당 이슈의 상세 내용 표시 - 이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문 표시
![상세페이지](https://github.com/jh1109/repository-issue-list/assets/117807467/ac4dbf7a-e82c-4040-9632-90656eb4bbab)
### 4. 에러 화면 구현
![errord](https://github.com/jh1109/repository-issue-list/assets/117807467/f456987b-8480-420d-9eb3-8473a294cace)
- 상위 라우트 `errorElement` propterty에 의해 `<ErrorPage />` 로딩

## 프로젝트 사용법
```
npm install & npm start

# or

yarn install & yarn start
```
