$.getJSON("/wcs/resources/store/10701/productview/byId/1415062", function(json) {
    console.log(json.CatalogEntryView[0].name);
    $('.test').text(json.CatalogEntryView[0].name);
});