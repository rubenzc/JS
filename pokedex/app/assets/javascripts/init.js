//Si no existe nuestro namespace, lo creamos.
//Imagina
if (window.PokemonApp === undefined){
  window.PokemonApp = {};
}
//Avisar de que está inicializado
PokemonApp.init = function () {
  //3rd party setup code here
  console.log("Pokemon App ONLINE!")
}
//Inicializar la función
$(document).on("ready", function(){
  PokemonApp.init();
})