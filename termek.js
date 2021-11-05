class termek{
    constructor(elem, adat){
    this.cim = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");
    this.setAdatok(this.adat);
    }
    setAdatok(ertekek) {
        this.cim.html(ertekek.cim);
        this.kep.attr("src", ertekek.eleresiut);
        this.leiras.html(ertekek.leiras);
    }
}