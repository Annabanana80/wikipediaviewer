$(document).ready(function(){
	
	$('#submitBtn').click(function(event){
		var searchInput = $('#searchBox').val();
		var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchInput + '&format=json&callback=?';
	
		$.ajax({
			type: 'GET',
			url: wikiUrl, 
			async: false,
			dataType: 'json',
			success: function(data){			
				for(var i=0;i<data[1].length; i++ ){
					$('#searchResult').prepend("<li><a href="+data[3][i]+">" +data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
					$('a').addClass("badge badge-info mb-2");
				}				
			},
			error: function(error){
				console.log('error');
			}
		});
	});

})