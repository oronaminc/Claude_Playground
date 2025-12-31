# 🎥 게임 플레이 데모 캡처 가이드

## 방법 1: 스크린샷 캡처 (간단)

1. `demo.html` 파일을 브라우저에서 열기 (자동 플레이)
2. `Cmd + Shift + 4` + `Space` 눌러서 윈도우 캡처
3. 게임 윈도우 클릭해서 캡처
4. 파일 이름을 `demo.png`로 변경
5. Git에 추가:
   ```bash
   git add demo.png
   git commit -m "Add gameplay screenshot"
   git push origin main
   ```

## 방법 2: GIF 녹화 (추천)

### macOS 화면 녹화
1. `Cmd + Shift + 5` 눌러서 화면 녹화 도구 열기
2. "선택 영역 녹화" 선택
3. 게임 영역만 선택
4. 녹화 버튼 클릭 (15-20초 정도)
5. 중지 후 `recording.mov` 저장

### GIF 변환 (ffmpeg 필요)
```bash
# ffmpeg 설치
brew install ffmpeg

# GIF 변환
ffmpeg -i recording.mov -vf "fps=15,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 demo.gif

# Git에 추가
git add demo.gif
git commit -m "Add gameplay demo GIF"
git push origin main
```

## 방법 3: 온라인 도구 사용

1. https://www.screentogif.com/ 다운로드 (Windows/Mac)
2. 또는 https://gifcap.dev/ 브라우저 도구 사용
3. 게임 플레이 녹화
4. `demo.gif`로 저장
5. Git에 추가

## WebP 변환 (선택사항)

```bash
# WebP 변환 (더 작은 파일 크기)
ffmpeg -i demo.gif -c:v libwebp -lossless 0 -q:v 80 -loop 0 demo.webp
```

## 빠른 방법: 무료 온라인 도구

https://ezgif.com/video-to-gif 접속:
1. recording.mov 업로드
2. 크기 조정: 800px width
3. FPS: 15
4. Convert to GIF
5. 다운로드
