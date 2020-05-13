function redireciona() {
    var usuario = $("#usuario").val();
    var senha = $('#senha').val();
    var index_caixa = "caixa_home.html";
    var index_estoque = "estoque_home.html";
    var index_sacola = "balcao_home.html";
    var index_gestao = "gestor-home.html";

    acessos_user = ['caixa', 'estoque', 'balcao', 'gestor'];
    acessos_log = ['caixa', 'estoque', 'balcao', 'gestor'];

    switch (usuario && senha) {
        case acessos_user[0] && acessos_log[0]:
            $(location).attr('href', index_caixa);
            break;
        case acessos_user[1] && acessos_log[1]:
            $(location).attr('href', index_estoque);
            break;
        case acessos_user[2] && acessos_log[2]:
            $(location).attr('href', index_sacola);
            break;
        case acessos_user[3] && acessos_log[3]:
            $(location).attr('href', index_gestao);
            break;
        default:
            $('.modal').css({ 'top': '-365px', 'transition': 'all 1s linear' });
            $('.modal').click(function() {
                $('.modal').hide();
            });
    }
}