let capture;

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  
  // 取得攝影機影像
  capture = createCapture(VIDEO);
  
  // 隱藏預設出現在畫布下方的攝影機標籤，只在畫布上繪製
  capture.hide();
}

function draw() {
  // 設定背景為淡粉色 (粉紅色 R:255, G:192, B:203)
  background(255, 192, 203);
  
  // 計算影像顯示的寬高 (螢幕的 60%)
  let imgW = width * 0.6;
  let imgH = height * 0.6;
  
  // 計算置中座標
  let x = (width - imgW) / 2;
  let y = (height - imgH) / 2;
  
  // 繪製攝影機影像
  image(capture, x, y, imgW, imgH);
}

// 確保視窗縮放時，畫布也會跟著自動調整大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}