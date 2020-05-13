function redireciona() {
    var usuario = $("#usuario").val();
    var senha = $('#senha').val();
    var index = "index.html";
    if (usuario == "caixa" && senha == "caixa") {
        $(location).attr('href', index);
    }
}

$(function() {
    var finalizaCAD = $(".cadfinal");
    var cadastro = $(".cad");
    var formCAD = $(".form-cad");

    cadastro.click(function() {
        formCAD.show(400);
    });

    finalizaCAD.click(function() {
        formCAD.hide(900);
        alert("Produto cadastrado com sucesso!");
    });
});


/*função para relatórios*/

$(function() {
    var confirma = $(".relok");
    var homestoque = "../estoque_home.html";
    confirma.click(function() {
        alert("Relatório enviado com Sucesso");
        $(location).attr('href', homestoque);
    });

});


$(function() {

    var produto = "dipirona";
    var lote = "12345678";
    var cliqueEs = $(".btnrelb");

    $(".produtoverificado").hide();

    cliqueEs.click(function() {

        if ($("#nomeP").val() == produto || $("#nomeP").val() == lote) {
            $(".produtoverificado").show();
        } else {
            alert("Produto não encontrado. Por favor, tente novamente");
        }
    })

    $(".btnrela").click(function() {

        $(".produtoverificado").hide();

    });

});