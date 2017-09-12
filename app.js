alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var tableau;
for (var i = 0; i < alphabet.length; i++) {
    $("#buttonList").append("<button id='" + alphabet[i] + "'>" + alphabet[i] + "</button>")
}
function requete2(lettre) {
    $.ajax({    
        url: "http://gateway.marvel.com/v1/public/characters?nameStartsWith="+ lettre +"&limit=100&ts=100&apikey=6137cc204db277fb57d4a3b5ef8bef50&hash=19199efec98ef4c65677214b350d083c"
        // url: "http://gateway.marvel.com/v1/public/characters?nameStartsWith=b&limit=100&ts=100&apikey=6137cc204db277fb57d4a3b5ef8bef50&hash=19199efec98ef4c65677214b350d083c"
    }).done(function(data){
        $("#ici").html("");
        for(var i = 0; i < data.data.results.length; i++){
            var donnee = data.data.results[i];        $("#ici").append("<tr class='hero'><td>"+ donnee.id+ "</td>"+ "<td>" + "<img class='thumb' src='"
            +donnee.thumbnail.path+"."+donnee.thumbnail.extension+"'/> </td>"
            + "<td>"+ donnee.name + "</td>" +"<td>"  +donnee.description + "</td>"+ "<td>"
            + donnee.comics.available + "</td>"+ "<td>" + donnee.stories.available + "</td>" + "<td>"
            + donnee.series.available + "</td>" + "</tr>");        
        }
        new List('test-list', {
            valueNames: ['hero'],
            page: 5,
            pagination: [{
                outerWindow: 1,
                innerWindow : 5
            }]
        });
    }).fail(function(){
        console.log("nope");
    })
};


$("button").click(function(){
    $("#affiche").html("");
    var bouton = $(this).attr("id");

    requete2(bouton);
})