function setup() {
    // canvasサイズをiframeと同じサイズに設定
    const cnv = createCanvas(640, 390);
    // 親要素にvideo-containerを指定
    cnv.parent('map-container');
    clearButton = createButton('消す');//ボタンを作成
    clearButton.mousePressed(clearCanvas);//ボタンクリックの関数を指定
  }
  
  function draw() {
    //clear(); // 前フレームをクリア
  
    // ここにoverlayで描画するコードを記述（例: 半透明の図形）
    if (mouseIsPressed) {
        strokeWeight(9);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }

  function clearCanvas() {
    clear();
   }