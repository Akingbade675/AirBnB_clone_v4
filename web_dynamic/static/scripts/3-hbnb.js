$(document).ready(function () {
    
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
        if (data.status == "OK") {
            console.log("TRUE");
            $('div#api_status').addClass('available');
        } else {
            if ($('div#api_status').hasClass('available')) {
                $('div#api_status').removeClass('available');
            }
        }
    });

    // fetch data about places
	$.post({
		url: 'http://0.0.0.0:5001/api/v1/places_search',
		data: JSON.stringify({}),
		headers: {
			"Content-Type": "application/json",
		},
		success: (data) => {
			data.forEach((place) =>
				$("section.places").append(
					`<article>
			<div class="title_box">
			<h2>${place.name}</h2>
			<div class="price_by_night">$${place.price_by_night}</div>
			</div>
			<div class="information">
			<div class="max_guest">${place.max_guest} Guest${
						place.max_guest !== 1 ? "s" : ""
					}</div>
			<div class="number_rooms">${place.number_rooms} Bedroom${
						place.number_rooms !== 1 ? "s" : ""
					}</div>
			<div class="number_bathrooms">${place.number_bathrooms} Bathroom${
						place.number_bathrooms !== 1 ? "s" : ""
					}</div>
			</div>
			<div class="description">
			${place.description}
			</div>
				</article>`
				)
			);
		},
		dataType: "json",
	});

    checked = {}
    $('li input[type=checkbox]').change(function () {
        const amenity_id = this.dataset.id;
        const amenity_name = this.dataset.name;
        console.log(`${amenity_name} changed`);
        if (this.checked) {
            checked[amenity_name] = amenity_id;
        } else {
            delete checked[amenity_name];
        }

        $('div.amenities h4').text(Object.keys(checked).sort().join(', '));
    });
});
