// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat() {
    const nCats = ["Arnold", ...cats];
    return nCats;
}
function removeLastCat() {
    const rCat = cats.slice(0, cats.length - 1);
    return rCat;
}

function removeFirstCat() {
    const remCat = cats.slice(1);
    return remCat;
}