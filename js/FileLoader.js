var loader=new THREE.FileLoader();
var dataset;
loader.load('data/058.csv',function(data){
  var result=$.csv.toArrays(data);
  console.log(result);
});

THREE.Cache.enabled=true;
