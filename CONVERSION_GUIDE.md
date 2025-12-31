# 🔄 WebM을 GIF/WebP로 변환하기

## 방법 1: ezgif.com 사용 (가장 쉬움)

### GIF 변환
1. https://ezgif.com/video-to-gif 접속
2. "Choose File" 클릭하여 `breakout-demo.webm` 선택
3. "Upload video!" 클릭
4. 옵션 설정:
   - Width: 800 (또는 자동)
   - Frame rate: 15-20
5. "Convert to GIF!" 클릭
6. "Save" 클릭하여 `demo.gif` 다운로드

### WebP 변환
1. https://ezgif.com/video-to-webp 접속
2. `breakout-demo.webm` 업로드
3. "Convert to WebP!" 클릭
4. `demo.webp` 다운로드

## 방법 2: Online-Convert 사용

1. https://www.online-convert.com/ 접속
2. "Video converter" → "Convert to GIF"
3. `breakout-demo.webm` 업로드
4. 변환 후 다운로드

## 방법 3: Convertio 사용

1. https://convertio.co/webm-gif/ 접속
2. `breakout-demo.webm` 업로드
3. "Convert" 클릭
4. 다운로드

## 변환 후 작업

변환이 완료되면:
```bash
# 파일을 프로젝트 폴더로 이동
cp ~/Downloads/demo.gif /Users/1113177/Desktop/Project/Claude/breakout-game/

# 또는 WebP의 경우
cp ~/Downloads/demo.webp /Users/1113177/Desktop/Project/Claude/breakout-game/

# Git에 추가
cd /Users/1113177/Desktop/Project/Claude/breakout-game
git add demo.gif  # 또는 demo.webp
git commit -m "Add animated demo GIF"
git push origin main
```

그 후 README를 업데이트하세요!
