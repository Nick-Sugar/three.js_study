//最初に読み込まれる
function EditStart(){
    canvas = document.getElementById("canvas");
    drawing();
    canvas.addEventListener('click', onClick, false);
}
//描画毎読み込み
function drawing(){
    canvas.width = document.body.scrollWidth;
    canvas.height = 500;
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}
//canvasがクリックされたら
function onClick(e) {
    var x = e.clientX - canvas.offsetLeft;
    var y = e.clientY - canvas.offsetTop;
    ctx.fillStyle = "#98fb98";
    ctx.fillRect(x,y,10,10);
}