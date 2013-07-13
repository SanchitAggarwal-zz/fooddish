/* One ring to rule them all */

//global variables
var foodItemList;
var topItemListURL= "http://";
var geoLocation=getLocation();

function showTopItemList(){
    $.ajax({ // ajax call starts
        type:"POST",
        url: topItemListURL, // Rest call for the top item list
        data: geoLocation, // Send value of the geo location of the user
        dataType: 'json', // Choosing a JSON datatype
        success: function(data) // Variable data contains the data we get from serverside
        {

        }
    });
}
//Main function on load
$(document).ready(function(){

});



$(function() {
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON( flickerAPI, {
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
    })
        .done(function( data ) {
            $.each( data.items, function( i, item ) {
                $( "<img/>" ).attr( "src", item.media.m ).appendTo( "#images" );
                if ( i === 3 ) {
                    return false;
                }
            });
        });
})();

$.each(arr, function(count, item) {
    var newTd = $('<td></td>').html(item).attr('name','pieTD');
    var newTr = $('<tr></tr>');
    newTr.append(newTd);
    $('table').append(newTr);
});
