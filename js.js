$(function(){
 const termekek = [];
 let fajlnev = "termekek.json";
 adatbetolt(fajlnev, termekek);

 function adatbetolt(fajlnev, tomb){
    $.ajax({
        url: fajlnev,
        success: function(result){
            result.forEach((element) => {
                tomb.push(element);
            });
            megjelenit(tomb);
        }
    });
 }

 function megjelenit(tomb){
    const SzuloElem=$("#pozi");
    let sablonElem=$(".termekek") 

    for (let index = 0; index < termekek.length; index++) {
        let ujElem=sablonElem.clone().appendTo(SzuloElem);
        const Ujtermek = new termek(ujElem, termekek);
    }
 }
});