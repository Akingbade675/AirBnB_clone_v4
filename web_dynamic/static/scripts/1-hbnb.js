$(document).ready(function () {
    console.log("Script ready");
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
