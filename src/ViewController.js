window.onload = function(){
    ViewStart();
    EditStart();
}
function ViewStart(){
    console.log("A")
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#view")
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(document.body.scrollWidth, 540);
    
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45,document.body.scrollWidth / 540,1,10000);
    camera.position.set(0, 0, +1000);

    const geometry = new THREE.BoxGeometry(500, 500, 500);
    material = new THREE.MeshStandardMaterial({color: 0x0000ff});
    box = new THREE.Mesh(geometry, material);
    // シーンに追加
    scene.add(box);
    // new THREE.DirectionalLight(色)
    const light = new THREE.DirectionalLight(0xffffff);
    light.intensity = 2; // 光の強さを倍に
    // シーンに追加
    scene.add(light);
    light.position.set(1, 1, 1);
    renderer.render(scene, camera);
    tick();
}
function tick() {
    requestAnimationFrame(tick);
  
    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
  
    // レンダリング
    renderer.render(scene, camera);
  }