$('#btnRunNeighbours').click(function() {
	$.ajax({
		url: "libs/php/getNeighbours.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#selCountry').val(),
		},
		success: function(result) {
				console.log(result);
			if (result.status.name == "ok") {
				//resets html
				$('#txtNeighbours').html(" ");
				//console.log("test");
				for (i in result['data']){
					var numI = parseInt(i);
					//console.log((result['data'][i]['countryName']));
					//console.log(numI);
					$('#txtNeighbours').append([numI+1],"<span> - </span>",result['data'][i]['countryName']);
					$('#txtNeighbours').append("</br>")
				}
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("error in neighbours");
		}
	}); 
});
	
$('#btnRunInfo').click(function() {
	$.ajax({
		url: "libs/php/getCountryInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#selCountry2').val(),
			lang: $('#selLanguage2').val()
		},
		success: function(result) {
			console.log(result);
			if (result.status.name == "ok") {
				//console.log("info test")
				$('#txtContinent').html(result['data'][0]['continent']);
				$('#txtCapital').html(result['data'][0]['capital']);
				$('#txtLanguages').html(result['data'][0]['languages']);
				$('#txtPopulation').html(result['data'][0]['population']);
				$('#txtArea').html(result['data'][0]['areaInSqKm']);
			}
			
		},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error in Country info");
		}
	});	
});

$('#btnRunOcean').click(function() {
	$.ajax({
		url: "libs/php/getOcean.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#selLat').val(),
			long: $('#selLong').val()
		},
		success: function(result) {
			console.log(result);
			if (result.status.name == "ok") {
				try{
					$('#txtOcean').html(result['data']['name']);
				}
				catch(e){
					$('#txtOcean').html('<span>You are on Land!</span>');
				}
			}
		},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error in Ocean");
		}
	});	
});