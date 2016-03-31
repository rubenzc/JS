// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//currentTarget recoge los datos del pokemon. En este caso en base a la uri
$(document).on("ready", function (){
  var self_pkmn;

  $(".js-show-pokemon").on("click", function (event){
    var $button = $(event.currentTarget);
    var pokemonUri = $button.data("pokemon-uri");

    var pokemon = new PokemonApp.Pokemon(pokemonUri);
    self_pkmn = pokemon.render();
  });

 $(".js-pkmn-btn-evolution").on("click", function (event){
    var $button = $(event.currentTarget);
    var pokemonUri = $button.data("pokemon-uri");

    var PokemonEvolutions = new PokemonApp.PokemonEvolutions(pokemonUri);
    PokemonEvolutions.render(self_pkmn);
  });

});

//Introducción del namespace PokemonApp para construir el pokemon con el pokemonUri
PokemonApp.Pokemon = function (pokemonUri){
  this.id = PokemonApp.Pokemon.idFromUri(pokemonUri);
};

//Sacamos el id del pokemon de la uri
PokemonApp.Pokemon.idFromUri = function (pokemonUri) {
  var uriSegments = pokemonUri.split("/");
  var secondLast = uriSegments.length -2;
  return uriSegments[secondLast];
}

//El render es la muestra de las características
PokemonApp.Pokemon.prototype.render = function () {
  console.log("Rendering pokemon: #" + this.id);
  //Accedemos a la info específica a través del this
  //PETICIÓN PARA TODOS LOS DATOS DEL POKEMON
  var self = this;
  $.ajax({
    //Si pones self.id también funcionaría
    url: "/api/pokemon/" + this.id,
    success: function (response){
      self.info = response;

      $(".js-pkmn-name").text(self.info.name);
      $(".js-pkmn-number").text(self.info.pkdx_id);
      $(".js-pkmn-type-name").text(self.info.types[0].name);
      $(".js-pkmn-height").text(self.info.height);
      $(".js-pkmn-weight").text(self.info.weight);

      $(".js-pkmn-hp").text(self.info.hp);
      $(".js-pkmn-attack").text(self.info.attack);
      $(".js-pkmn-defense").text(self.info.defense);
      $(".js-pkmn-sp_atk").text(self.info.sp_atk);
      $(".js-pkmn-sp_def").text(self.info.sp_def);
      $(".js-pkmn-speed").text(self.info.speed);
      $(".js-pkmn-modal").modal("show");
      $(".js-modal-evolution").modal("hide");

    }
  });
  return self;
};

//POKEMON EVOLUTION
PokemonApp.PokemonEvolutions = function(id, info){
  this.id = id;
  this.info = info;
};
PokemonApp.PokemonEvolutions.prototype.render = function (self_pkmn) {
  console.log("Rendering evolution: #" + this.id);
  var self = this;
  $.ajax({
    url: self_pkmn.info.evolutions[0].resource_uri,
    success: function (response){
      self.info = response;
      $(".js-pkmn-evolution").text(self.info.name);
      $(".js-modal-evolution").modal("show");
    }
  });
};

//POKEMON SPRITE
PokemonApp.PokemonSprite = function(id, info){
  this.id = id;
  this.info = info;
};
PokemonApp.PokemonEvolutions.prototype.render = function (self_pkmn) {
  console.log("Rendering evolution: #" + this.id);
  var self = this;
  $.ajax({
    url: self_pkmn.info.evolutions[0].resource_uri,
    success: function (response){
      self.info = response;
      $(".js-pkmn-evolution").text(self.info.name);
      $(".js-modal-evolution").modal("show");
    }
  });
};