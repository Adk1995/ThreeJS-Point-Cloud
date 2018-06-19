
//Initialize camera and Renderer
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,100);
var renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
//Enable Orbit Controls
controls=new THREE.OrbitControls(camera,renderer.domElement);

//Initilize geometry for boxes
var geometry=new THREE.BoxGeometry(3,3,3);
var material=new THREE.MeshBasicMaterial({color: 0xff2200});
var cube=new THREE.Mesh(geometry,material);
scene.add(cube);
camera.position.z=5;
//Load Dataset
var result;
var loader=new THREE.FileLoader();
loader.load('data/058.csv',function(data){
  result=$.csv.toArrays(data);

});
console.log(result);
THREE.Cache.enabled=true;

function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x+=0.01;
  cube.rotation.y+=0.01;
	renderer.render( scene, camera );
}
animate();
