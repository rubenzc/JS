$( document ).ready(function(){
  $('.btn-submit').click(function(event){
    event.preventDefault();
    showArtists();
  });

//////////////////////////// ARTISTS ////////////////////////////
function showArtists(){
  //Ajax
  $.ajax({
    type: "GET",
    url:'https://api.spotify.com/v1/search?type=artist&query='+$('.artist-search').val(),
    success: handleArtists,
    dataType: 'json'
  });

  function handleArtists(art){
    $('.ul-artists').empty();
    $.each(art.artists.items, function(key, val){
      
      if (val.images.length > 0){
        var img = val.images[1].url
      }
      else{
        var img = 'https://comoserunbuendj.files.wordpress.com/2010/10/vinilo_disco.jpg';
      }
      var html= [
        "<li class='li-artist' data-value='"+val.id+"'>"+val.name+" ("+val.followers.total+" followers)",
        "<a href='"+val.external_urls.spotify+"' class='link-artist'>Artist link</a>",
        "<br><img src='"+img+"' class='img-artist' data-toggle='modal' data-target='#myModal'>",
        "<ul class='ul-albums alb"+val.id+"'></ul></li>"
      ].join("\n");

      $('.ul-artists').append(html);
      showAlbums(val.id);
    })
    $('.img-artist').click(getAlbums);
  }
}


//////////////////////////// ALBUMS ////////////////////////////
//MANEJO DEL EVENTO DEL CLICK EN LA IMAGEN
function getAlbums(event){
  event.preventDefault();
  var id = $(event.currentTarget).parent().attr("data-value");
  showAlbums(id);
}

function showAlbums(id){
  $.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/artists/'+id+'/albums',
    success: handleAlbums,
    dataType: 'json'
  });
}

function handleAlbums(alb){
  $('.modal-body').empty();

  $.each(alb.items, function(key, val){
    var html = [
      "<li class='li-albums' data-value='"+val.id+"'>",
      "<br><img src='"+val.images[1].url+"' alt='"+val.name+"' class='img-album'>",
      "<br>"+val.name,
      "<ul class='ul-tracks trac"+val.id+"'></ul></li>"
    ].join("\n");
    $('.modal-body').append(html);
    $('#myModalLabel').text('ALBUMS');
  })
  $('.img-album').click(function(event){
    event.preventDefault();
    showTracks();
  });
}


//////////////////////////// TRACKS ////////////////////////////

function showTracks(){
  var id = $(event.currentTarget).parent().attr("data-value");
  $.ajax({
    type: "GET",
    url: 'https://api.spotify.com/v1/albums/'+id+'/tracks',
    success: handleTracks,
    dataType: 'json'
  });

  function handleTracks(track){
    $('.modal-body').empty();
    $.each(track.items, function(key, val){
      var html=[
        "<li class='li-tracks'><a href='"+val.external_urls.spotify+"'>"+val.name+"</a><br>",
        "<audio controls><source src='"+val.preview_url+"'></source></audio></li>"
      ].join("\n");
      $('.modal-body').append(html);
      $('#myModalLabel').text('SONGS');
    })
  }
}
});