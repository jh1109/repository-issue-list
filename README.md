# A Repository Issue List
GitHub REST API를 사용하여 특정 github repository의 이슈 목록을 확인하는 웹 사이트 입니다.

> 원티드 프리온보딩 프론트엔드 인턴십 3주차 과제  
> 목표 : 특정 깃헙 [레파지토리](https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

## 주요 전략
- 유지보수를 위해 HTTP 통신과 사용하고자 하는 GitHub REST API를 호출하는 class를 각각 분리(`httpClient.ts` & `IssueService.ts`)
- 재사용성을 위해 `Date`값에서 년, 월, 일만 참조하는 유틸 함수 생성
- 반응형 웹 사이트

## 요구 사항
### 1. 이슈 목록 화면
- [x] Context API를 활용한 API 연동으로 이슈 목록 가져오기
- [x] 이슈 목록 데이터 요청 중 로딩 표시
- [x] open 상태 데이터 요청 및 표시 : List repository issues API 사용

## 프로젝트 사용법
```
npm install & npm start

# or

yarn install & yarn start
```
