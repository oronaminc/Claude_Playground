# 벽돌깨기 게임 (Breakout Game)

HTML5 Canvas와 JavaScript로 만든 클래식 벽돌깨기 게임입니다.

## 특징

- 객체지향 프로그래밍 (OOP) 구조
- ES6 모듈 시스템 사용
- 깔끔한 파일 구조로 관리

## 프로젝트 구조

```
breakout-game/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css      # 스타일시트
└── js/
    ├── Ball.js        # 공 클래스
    ├── Paddle.js      # 패들 클래스
    ├── Brick.js       # 벽돌 클래스
    ├── BrickManager.js # 벽돌 관리 클래스
    ├── InputHandler.js # 입력 처리 클래스
    ├── Game.js        # 게임 메인 클래스
    └── main.js        # 진입점
```

## 실행 방법

ES6 모듈을 사용하기 때문에 로컬 HTTP 서버가 필요합니다.

### Python 사용
```bash
python3 -m http.server 8000
```

### Node.js 사용
```bash
npx serve
```

그 후 브라우저에서 `http://localhost:8000` 접속

## 조작 방법

- **← →** 화살표 키로 패들 이동
- 모든 벽돌을 깨면 승리!

## 기술 스택

- HTML5 Canvas
- JavaScript (ES6+)
- CSS3
