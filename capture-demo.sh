#!/bin/bash

# 화면 녹화 및 GIF/WebP 변환 스크립트

echo "🎬 게임 플레이 데모 녹화를 시작합니다..."
echo ""
echo "다음 단계를 따라주세요:"
echo "1. Cmd + Shift + 5 를 눌러 화면 녹화 시작"
echo "2. 게임 영역만 선택해서 녹화 (약 15-20초)"
echo "3. 녹화 중지 후 mov 파일을 이 폴더에 'recording.mov'로 저장"
echo ""
echo "녹화가 완료되면 이 스크립트를 다시 실행하세요."
echo ""

# recording.mov 파일이 있는지 확인
if [ ! -f "recording.mov" ]; then
    echo "❌ recording.mov 파일을 찾을 수 없습니다."
    echo "화면 녹화를 완료한 후 파일을 'recording.mov'로 저장해주세요."
    exit 1
fi

echo "✅ recording.mov 파일을 찾았습니다!"
echo ""

# ffmpeg 설치 확인
if ! command -v ffmpeg &> /dev/null; then
    echo "📦 ffmpeg가 설치되어 있지 않습니다."
    echo "설치 방법:"
    echo "  brew install ffmpeg"
    echo ""
    echo "설치 후 다시 실행해주세요."
    exit 1
fi

echo "🎨 GIF로 변환 중..."
ffmpeg -i recording.mov -vf "fps=15,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 demo.gif -y

echo "🎨 WebP로 변환 중..."
ffmpeg -i recording.mov -vf "fps=15,scale=800:-1" -c:v libwebp -lossless 0 -q:v 80 -loop 0 demo.webp -y

echo ""
echo "✅ 변환 완료!"
echo "  📁 demo.gif 생성됨"
echo "  📁 demo.webp 생성됨"
echo ""
echo "이제 Git에 커밋할 수 있습니다:"
echo "  git add demo.gif demo.webp"
echo "  git commit -m 'Add gameplay demo'"
echo "  git push origin main"
