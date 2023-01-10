# :clapper: TMDB API를 활용한 영화 검색 사이트 노랑박스 🗂

이전에 진행했었던 [Javascript 영화 프로젝트 노랑 박스](https://github.com/ghgt1/Yellow-Box)를 리액트로 다시 만들어보았습니다.

## 배포주소

데모를 [여기서](https://react-yellow-box.netlify.app/) 보실수 있습니다 

## 기간

- 2023/01/04 ~ 2023/01/09

## 사용 기술 스택

- Programming

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![CSS Modules](https://img.shields.io/badge/CssModules-DD3A0A?style=for-the-badge&logo=CssModules&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) 

- Deploy

<img src="https://img.shields.io/badge/NETLIFY-00C7B7?style=for-the-badge&logo=NETLIFY&logoColor=white">

- Etc

<img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white"> 

## 주요 구현 사항 and 신경쓴 부분

- 년도와 종류에따라 각기따른 api를 사용, 다양한 검색옵션을 제공했습니다.
- 이전과는 다르게 api를 한국어 검색도 가능하게 교체하였습니다.
- page단계를 main-search-detail이 아닌 main-detail 두단계만 사용하도록 간소화하였습니다.
- `rem`을 사용하여 반응형 효과를 차용하였고, 미디어쿼리도 적용하였습니다.
- 스켈레톤 UI를 처음 사용해 미숙하지만, 로딩보다 자연스러운 효과를 얻을수있었습니다.
- 무한스크롤을 `Intersection Observer API`를 활용하여 구현하였습니다.
- 이전에 만들지못한 상단이동버튼과 같이, 사용자 편의를 깜빡한것을 차용하였습니다.
- 쿼리문과 useLocation, url search params과 같은 리액트 라우터 관련 기능들을 최대한 사용해보려 노력했습니다.
- UI 컴포넌트들을 재활용하기위해 고민하고 적용해보았습니다(Container)

## 어려웠던 부분 && 아쉬웠던 부분

- 리액트를 처음 접해보고 처음 만들어본 사이트입니다. 이전의 Vanilla JS 프로젝트에서 적용하지 못했던것을 적용해보고자 리액트로 다시 만들어보았습니다.
- 아직 리액트가 익숙하지 않아, 기본적인 `hooks`로만 기능들을 구현했는데 어려움을 많이 느꼈습니다.
- 원래의 기획은, 검색어 디바운싱을 적용하여, 하단에 실시간으로 결과가 나오게 하는거였고, 기능 구현에 성공하였으나 무한스크롤과 UX가 너무 맞지않아, 다시 버튼 트리거로 변경을 하였습니다(useDebounce hook 코드를 남겨놓았습니다). 기획의 중요성을 크게 느꼈습니다.
- 이전의 api(OMDB)에비해 한글검색을 제공하지만, 전체적인 데이터의 질이 아쉽다고 느껴졌습니다.
- 리듀서와, 컨텍스트 api와 같은 hook들을 사용해보고싶었으나 사용할 기회를 찾지못하였습니다.
- **변수, state, ref 의 차이를 제대로 이해하지못하고 처음에 굉장히 고전하였습니다.** 따라서 리액트의 라이프사이클과 재렌더링에 대해서 추가적으로 공부를 했습니다.
- 처음엔 포탈을 사용하여 로딩을 구현하였으나, 스켈레톤UI로 변경하여 사용하지 못하였습니다.
