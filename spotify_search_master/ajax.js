$(document).ready(function(){

	var default_img = "https://i.scdn.co/image/eafa6eabc63bd53a4c0dc3381c55ab1e8b733670";

	var onArtistSearch = $('input').keypress( function (event) {
		if(event.which === 13){
			event.preventDefault();
			var httpRequest = "https://api.spotify.com/v1/search?type=artist&";
			var userRequest = 'query=' + $('input').val();
			$.get(httpRequest + userRequest).done(handleRequest);
		};
	});


	function handleRequest(result){
				result.artists.items.forEach(function appendColumn(artist){
					var image = artist.images.length > 0 ? artist.images[0].url : default_img ;
					var html = [
						'<div class="column" value="' + artist.id + '">' ,
							'<img class="image is-128x128" src="' + image + '">',
							'<h2 class="title is-5">' + artist.name + '</h2>',
						'</div>'
					].join('\n');	
						
					$('.columns').append(html);
				});
		$('.columns').on('click','.column', handleClickListener);
	};	

	var handleClickListener = function (event){
		var artist_id = $(this).attr("value");
			$.get('https://api.spotify.com/v1/artists/' + artist_id + '/albums').done(getModalAlbums);
		function getModalAlbums(result){
			result.items.forEach(function appendModal(album){
				var html = [
					'<img class="image is-32x32" src="' + album.images[0].url + '">',
						'<p>' + album.name + '</p>',
				].join("\n");
				$('.modal-content').append(html);
				$('.column').on('click',function(event){
					$('.modal').addClass('is-active');
					$('.modal-close').click(function(){
						$('.modal').removeClass('is-active');
					});
				});
			});
		};
	};
});