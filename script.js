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

					$('#txtNeighbours').html(result['data'][0]['totalResultsCount']);
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});