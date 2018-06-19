var scene=new THREE.Scene();
var camera=nre THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,100);
var renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
