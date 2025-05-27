strong = document.getElementsByTagName("strong");

// for (i = 0; i <= strong.length; i++) {
//     strong[i].innerHTML = "LEGO";
// }

function jogar() {
    palavra = document.getElementById("palavra").value;
    console.log(palavra);

    for (i = 0; i < strong.length; i++) {
        strong[i].innerHTML = palavra;

    }
}