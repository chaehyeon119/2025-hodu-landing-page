# HODU Landing Page

고양이 테마의 반응형 랜딩 페이지입니다. 웹 접근성을 고려한 시맨틱 HTML과 모던 CSS를 활용하여 구현했습니다.

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [개발 일정](#개발-일정)
- [화면 설계도](#화면-설계도)
- [실행 방법](#실행-방법)
- [주요 구현 사항](#주요-구현-사항)
- [웹 접근성 고려사항](#웹-접근성-고려사항)
- [반응형 디자인](#반응형-디자인)
- [에러와 에러 해결](#에러와-에러-해결)
- [개발하며 느낀점](#개발하며-느낀점)
- [참고자료](#참고자료)

## 프로젝트 소개

HODU는 고양이 테마의 브랜드 랜딩 페이지로, 사용자 친화적인 인터페이스와 웹 접근성을 중점으로 개발했습니다. 반응형 디자인을 통해 다양한 디바이스에서 최적의 사용자 경험을 제공합니다.

## 주요 기능

- **반응형 디자인**: 데스크톱, 태블릿, 모바일 환경 지원
- **모달 시스템**: 구독 폼 및 모바일 메뉴 모달
- **웹 접근성**: 스크린 리더 지원 및 키보드 네비게이션
- **스무스 스크롤**: 부드러운 페이지 내 이동
- **고정 헤더**: 스크롤 시에도 항상 접근 가능한 네비게이션

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**:
  - CSS Grid & Flexbox
  - CSS Custom Properties (변수)
  - Media Queries
  - clamp() 함수
- **JavaScript**:
  - DOM 조작
  - 이벤트 리스너
  - 모달 기능
- **폰트**: Spoqa Han Sans Neo

## 📁 프로젝트 구조

```
2025-project-hodu-landing-page/
├── fonts/
│   ├── SpoqaHanSansNeo-Bold.otf
│   ├── SpoqaHanSansNeo-Light.otf
│   ├── SpoqaHanSansNeo-Medium.otf
│   ├── SpoqaHanSansNeo-Regular.otf
│   └── SpoqaHanSansNeo-Thin.otf
├── images/
│   ├── box-cat.png
│   ├── footer-icon-group.png
│   ├── icon-blog.png
│   ├── icon-facebook.png
│   ├── icon-insta.png
│   ├── icon-youtube.png
│   ├── img_1.png ~ img_5.png
│   ├── Logo-fin.svg
│   ├── mail.svg
│   ├── menu-tab.png
│   ├── mobile-modal.png
│   ├── modal.png
│   ├── scroll-top-btn.png
│   └── scroll-top-btn-hover.png
├── js/
│   └── modal.js
├── styles/
│   ├── mobile.css
│   ├── reset.css
│   └── style.css
└── index.html
```

## 📅 개발 일정

### 1단계: 기획 및 설계 (1일차)

- [x] 시멘틱 태그를 활용한 HTML 기본 구조 작성(header, main, section, footer 등)
- [x] 헤더 영역 마크업 및 스타일링
- [x] 메인 콘텐츠 영역 레이아웃 구성
- [x] 푸터 영역 마크업 및 스타일링
- [x] 데스크톱 화면 기준 레이아웃 완성

### 2단계: HTML 구조 작성 (2일차)

- [x] clamp() 함수를 활용한 데스크톱 화면 반응형 적용
- [x] 웹 접근성 속성 추가
- [x] 미디어 쿼리를 활용한 모바일 레이아웃 구현

### 3단계: CSS 스타일링, JavaScript 기능 구현 (3일차)

- [x] 미디어 쿼리 브레이크포인트 정의 및 점검
- [x] 갤러리 슬라이더 구현
- [x] 모달창 HTML 구조 작성
- [x] 모달창 CSS 스타일링(숨김 처리 포함)
- [x] 모달 기능 구현

### 4단계: 최종 정리 및 점검 (4일차)

- [x] 적절한 대체 텍스트(alt) 제공
- [x] 키보드 접근성 확인
- [x] CSS 최적화 (중복 코드 제거 등)
- [x] 코드 주석 추가 및 정리
- [x] 모바일/데스크톱 환경에서 최종 테스트
- [x] 웹 성능 최적화 (이미지 최적화, 불필요한 코드 제거 등)
- [x] 시맨틱 태그 활용 검증

## 와이어프레임 / UI

### 데스크톱 | 모바일 버전

![UI 설계도](./images/ui.png)

> **참고**: 위 GIF 파일들은 프로젝트의 실제 화면 설계도와 반응형 동작을 보여줍니다. 각 이미지를 클릭하면 더 큰 화면으로 확인할 수 있습니다.

## 실행 방법

1. 프로젝트 클론

```bash
git clone https://github.com/chaehyeon119/2025-project-hodu-landing-page.git
cd 2025-project-hodu-landing-page
```

## 🌐 배포 링크

- **GitHub Pages**: [https://chaehyeon119.github.io/2025-project-hodu-landing-page/](https://chaehyeon119.github.io/2025-project-hodu-landing-page/)

## 주요 구현 사항

### 1. CSS Custom Properties 활용

```css
:root {
  --orange: #d97652;
  --white: #fff;
  --subscribe-navy: #263140;
  --header-bg: #f2e9d8;
  --font-main: "Spoqa Han Sans Neo", sans-serif;
  --placeholder-gray: #767676;
}
```

### 2. 반응형 폰트 크기 (clamp 함수)

```css
/* 폰트가 넘치는 문제를 해결해줌 */
font-size: clamp(1.4rem, 2.5vw, 1.8rem);
```

### 3. 모달 시스템

```javascript
// 구독 모달 열기/닫기
openSubscribeModalBtn.addEventListener("click", () => {
  myModal.style.display = "block";
});

// 바깥 클릭으로 모달 닫기
myModal.addEventListener("click", (e) => {
  if (e.target === myModal) myModal.style.display = "none";
});
```

### 4. 스무스 스크롤

```css
html {
  scroll-behavior: smooth;
}
```

## 웹 접근성 고려사항

### 1. 시맨틱 HTML 구조

- `<header>`, `<main>`, `<footer>` 태그 활용
- `<nav>`, `<section>`, `<article>` 등 의미있는 태그 사용
- `aria-labelledby`, `aria-describedby` 속성으로 연결

### 2. 스크린 리더 지원

```html
<!-- 스크린 리더 전용 설명 -->
<p id="gallery-desc" class="a11y-hidden">
  고양이 사진이 가로로 나열되어 있습니다.
</p>

<!-- 접근성 숨김 클래스 -->
.a11y-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin:
-1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
}
```

### 3. 키보드 네비게이션

- 모든 인터랙티브 요소에 포커스 가능
- `tabindex` 속성 적절히 활용
- 포커스 표시 스타일 정의

### 4. 이미지 대체 텍스트

```html
<img
  src="./images/box-cat.png"
  alt="박스를 머리에 쓰고 앉아 있는 줄무니 고양이"
/>
```

## 반응형 디자인

### 1. 모바일 우선 접근법

- 기본 스타일은 데스크톱 기준
- `@media screen and (min-width: 576px)` 로 모바일 스타일 적용

### 2. 유연한 레이아웃

```css
/* max-width와 width:100% 속성의 중요성 */
.container {
  max-width: 1280px;
  width: 100%;
  margin-inline: auto;
  padding: 0 clamp(16px, 4vw, 32px);
}
```

### 3. 반응형 간격

```css
/* clamp를 활용한 반응형 간격 */
gap: clamp(12px, 3vw, 40px);
padding: clamp(12px, 2.2vw, 32px) clamp(16px, 4vw, 32px);
```

## 에러와 에러 해결

### 1. CSS 관련 에러

#### 문제: 폰트 크기가 화면 크기에 따라 넘치는 현상

**에러 상황**: 모바일에서 텍스트가 컨테이너를 벗어나는 문제
**해결 방법**: `clamp()` 함수를 사용하여 반응형 폰트 크기 설정

```css
/* 기존 코드 */
font-size: 1.8rem;

/* 해결된 코드 */
font-size: clamp(1.4rem, 2.5vw, 1.8rem);
```

#### 문제: 컨테이너가 화면 너비를 초과하는 현상

**에러 상황**: `max-width`만 설정하고 `width: 100%`를 누락
**해결 방법**: 두 속성을 함께 사용하여 반응형 컨테이너 구현

```css
/* 기존 코드 */
.container {
  max-width: 1280px;
  margin: 0 auto;
}

/* 해결된 코드 */
.container {
  max-width: 1280px;
  width: 100%;
  margin-inline: auto;
  padding: 0 clamp(16px, 4vw, 32px);
}
```

### 2. JavaScript 관련 에러

#### 문제: 모달 닫기 기능이 작동하지 않음

**에러 상황**: 이벤트 위임을 사용하지 않아 동적으로 생성된 요소에 이벤트가 바인딩되지 않음
**해결 방법**: 이벤트 위임 패턴 적용

```javascript
// 기존 코드
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 해결된 코드
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
```

### 3. 웹 접근성 관련 에러

#### 문제: 스크린 리더가 이미지 내용을 읽지 못함

**에러 상황**: 장식용 이미지에 불필요한 alt 텍스트 제공
**해결 방법**: 장식용 이미지는 `alt=""` 또는 `aria-hidden="true"` 사용

```html
<!-- 기존 코드 -->
<img src="./images/decoration.png" alt="장식 이미지" />

<!-- 해결된 코드 -->
<img src="./images/decoration.png" alt="" aria-hidden="true" />
```

### 4. 반응형 디자인 관련 에러

#### 문제: 모바일에서 레이아웃이 깨지는 현상

**에러 상황**: 고정된 픽셀 값 사용으로 인한 반응형 문제
**해결 방법**: 상대 단위와 clamp() 함수 활용

```css
/* 기존 코드 */
gap: 30px;
padding: 32px;

/* 해결된 코드 */
gap: clamp(12px, 3vw, 40px);
padding: clamp(12px, 2.2vw, 32px) clamp(16px, 4vw, 32px);
```

## 개발하며 느낀점

### 1. CSS 선택자 우선순위의 중요성

- 명확한 선택자 구조로 스타일 충돌 방지
- CSS Custom Properties로 일관성 있는 디자인 시스템 구축

### 2. 반응형 디자인의 핵심

- `clamp()` 함수로 폰트 크기 반응형 처리
- `max-width`와 `width: 100%` 조합으로 컨테이너 반응형 구현
- `line-height`로 높이를 맞추는 것의 장점

### 3. 웹 접근성의 실무적 적용

- 시맨틱 HTML의 중요성 재확인
- 스크린 리더 사용자를 위한 적절한 대체 텍스트 제공
- 키보드 네비게이션 지원의 필요성

### 4. 성능 최적화

- 이미지 최적화 및 적절한 포맷 선택
- CSS와 JavaScript 파일 분리로 유지보수성 향상

## 참고자료

- [MDN Web Docs - WAI-ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles)
- [인프런] 아는 만큼 보이는 웹 접근성 WCAG

## 🔗 링크

- **GitHub Repository**: [https://github.com/chaehyeon119/2025-project-hodu-landing-page](https://github.com/chaehyeon119/2025-project-hodu-landing-page)
- **Live Demo**: [https://chaehyeon119.github.io/2025-project-hodu-landing-page/](https://chaehyeon119.github.io/2025-project-hodu-landing-page/)

---

**참고**: 이 프로젝트는 [모두의연구소/위니브] 프론트엔드 스쿨의 HTML/CSS 프로젝트입니다.
