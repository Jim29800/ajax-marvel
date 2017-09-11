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
        tableau = resultat;
        
            var liste = [];
            var tableauA = [];
            tableauLength = tableau.data.results.length;
            for (var i = 0; i < tableauLength; i++) {
                    tableauA.push( tableau.data.results[i].name);
            }
            tableauALength = tableauA.length;
            var pages = 0;
            $("#a").html("");
            for (var i = 0; i < tableauALength; i += 5) {
                pages ++;
                $("#a").append("<li><button id =" + pages + ">" + pages + "</button></li>")
                liste.push("<ul><li>"  + tableauA[i] + "</li><li>" + tableauA[i+1] + "</li><li>" + tableauA[i+2] + "</li><li>" + tableauA[i+3] + "</li><li>" + tableauA[i+4] + "</li></ul>");
            }
            $("button").click(function(){
                var page = $(this).attr("id");
                $("#affiche").html(liste[page]);
            })
    })
}
$("button").click(function(){
    var bouton = $(this).attr("id");
    requete(bouton);
})