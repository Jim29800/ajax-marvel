//928356911322e7d58efcf73817e807a1
//developer.marvel.com
//hash : e8d8429ab3e7963285c987814d5e29be
//http://gateway.marvel.com/v1/public/characters?ts=100&apikey=928356911322e7d58efcf73817e807a1&hash=e8d8429ab3e7963285c987814d5e29be
alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var tableau;
for (var i = 0; i < alphabet.length; i++) {
    $("#buttonList").append("<button id ='" + alphabet[i] + "'>" + alphabet[i] + "</button>")
}
function requete(lettre) {
    $.ajax({
        url:"https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=" + lettre + "&ts=100&apikey=928356911322e7d58efcf73817e807a1&hash=e8d8429ab3e7963285c987814d5e29be"
    }).done(function (resultat) {
        console.log(resultat)
        
            var liste = [];
            var tableauA = [];
            tableauLength = resultat.data.results.length;
            for (var i = 0; i < tableauLength; i++) {
                    tableauA.push( resultat.data.results[i]);
            }
            tableauALength = tableauA.length;
            var pages = 0;
            $("#a").html("");
            for (var i = 0; i < tableauALength; i += 5) {
                pages ++;
                $("#a").append("<li><button id =" + pages + ">" + pages + "</button></li>")
                liste.push("<tr><td>"  + tableauA[i].name + "</td><td><img src='" + tableauA[i].thumbnail.path + "." + tableauA[i].thumbnail.extension +"'></td><td>" + tableauA[i].description + "</td><td>" + tableauA[i].comics.collectionURI + "</td><td>" + tableauA[i].stories.collectionURI + "</td><td>" + tableauA[i].series.collectionURI + "</td></tr>"
                + "<tr><td>"  + tableauA[i+1].name + "</td><td><img src='" + tableauA[i+1].thumbnail.path + "." + tableauA[i+1].thumbnail.extension +"'></td><td>" + tableauA[i+1].description + "</td><td>" + tableauA[i+1].comics.collectionURI + "</td><td>" + tableauA[i+1].stories.collectionURI + "</td><td>" + tableauA[i+1].series.collectionURI + "</td></tr>"
                + "<tr><td>"  + tableauA[i+2].name + "</td><td><img src='" + tableauA[i+2].thumbnail.path + "." + tableauA[i+2].thumbnail.extension +"'></td><td>" + tableauA[i+2].description + "</td><td>" + tableauA[i+2].comics.collectionURI + "</td><td>" + tableauA[i+2].stories.collectionURI + "</td><td>" + tableauA[i+2].series.collectionURI + "</td></tr>"
                + "<tr><td>"  + tableauA[i+3].name + "</td><td><img src='" + tableauA[i+3].thumbnail.path + "." + tableauA[i+3].thumbnail.extension +"'></td><td>" + tableauA[i+3].description + "</td><td>" + tableauA[i+3].comics.collectionURI + "</td><td>" + tableauA[i+3].stories.collectionURI + "</td><td>" + tableauA[i+3].series.collectionURI + "</td></tr>"
                + "<tr><td>"  + tableauA[i+4].name + "</td><td><img src='" + tableauA[i+4].thumbnail.path + "." + tableauA[i+4].thumbnail.extension +"'></td><td>" + tableauA[i+4].description + "</td><td>" + tableauA[i+4].comics.collectionURI + "</td><td>" + tableauA[i+4].stories.collectionURI + "</td><td>" + tableauA[i+4].series.collectionURI + "</td></tr>");
            }
            $("button").click(function(){
                var page = $(this).attr("id");
                $("#affiche").html(liste[page]);
            })
    })
}
$("button").click(function(){
    $("#affiche").html("");
    var bouton = $(this).attr("id");
    requete(bouton);
})