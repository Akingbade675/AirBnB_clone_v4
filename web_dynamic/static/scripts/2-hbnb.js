$(document).ready(function () {
    
    $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
        if (data.status === 'OK') {
            console.log("TRUE");
            $('div#api_status').addClass('available');
        } else {
            if ($('div#api_status').hasClass('available')) {
                $('div#api_status').removeClass('available');
            }
        }
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
