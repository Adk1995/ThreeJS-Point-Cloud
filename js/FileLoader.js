var loader=new THREE.FileLoader();

loader.load('data/058.csv',function(data){
  console.log(data);
});
THREE.Cache.enabled=true;
