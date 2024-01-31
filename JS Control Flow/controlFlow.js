const valoareCilindrica = prompt("Introduceti Capacitatea Cilindrica a masinii:");
const capacitateCilindrica = 6000;
const taxa = [100, 200, 300, 400, 500]

if (valoareCilindrica < 2000) {
    console.log("Impozitul pentru masina dumneavoastra este: ", taxa[0] + " lei")
}
if (valoareCilindrica >= 2000 && valoareCilindrica <= 3000) {
    console.log("Impozitul pentru masina dumneavoastra este: ", taxa[1] + " lei")
}
if (valoareCilindrica > 3000 && valoareCilindrica <= 4000) {
    console.log("Impozitul pentru masina dumneavoastra este: ", taxa[2] + " lei")
}
if (valoareCilindrica > 4000 && valoareCilindrica <= 5000) {
    alert("Impozitul pentru masina dumneavoastra este: " + taxa[3] + " lei")
}
if (valoareCilindrica > 5000 && valoareCilindrica <= 6000) {
    console.log("Impozitul pentru masina dumneavoastra este", taxa[4] + " lei")
}
if (valoareCilindrica > 6000) {
    alert("Nu va putem oferi informatiile necesare in acest moment. Va rug sa contactati oficiul local de taxe pentru a afla informatiile necesare")
}


65