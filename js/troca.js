$(document).ready(function() {

    var troca = "troca.html";
    var sangria = "sangria.html";
    var devolucao = "devolucao.html";

    $("#troca").click(function() {
        var acesso = prompt("Por favor, digite a senha: ");
        if (acesso == "teste") {
            $(location).attr('href', troca);
        } else {
            alert("Senha incorreta. por favor digite a senha novamente.");
        }
    });

    $("#sangria").click(function() {
        var acesso = prompt("Por favor, digite a senha: ");
        if (acesso == "teste") {
            $(location).attr('href', sangria);
        } else {
            alert("Senha incorreta. por favor digite a senha novamente.");
        }

    });

    $("#devolucao").click(function() {
        var acesso = prompt("Por favor, digite a senha: ");
        if (acesso == "teste") {
            $(location).attr('href', devolucao);
        } else {
            alert("Senha incorreta. por favor digite a senha novamente.");
        }

    });



});