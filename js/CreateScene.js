var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,100);
var renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*0.5,window.innerHeight*0.5);
document.body.appendChild(renderer.domElement);

var geometry=new THREE.BoxGeometry(1,1,1);
var material=new THREE.MeshBasicMaterial({color: 0xff2200});
var cube=new THREE.Mesh(geometry,material);
scene.add(cube);
camera.position.z=5;


function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x+=0.1;
  cube.rotation.y+=0.1;
	renderer.render( scene, camera );
}
animate();
