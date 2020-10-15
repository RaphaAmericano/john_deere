(function($){
    $(window).on('load', function(){
        $('#agendaModal').modal({
            focus: false,
            show: true
        });
    });

    $anchors = $('.navbar-opcoes .nav-link');
    // o navbar deve ter nas tags de anchor um atributo data-target com o id do modal alvo
    // ex: <a data-target="#modalFormulario">Formulario</a> 
    $anchors.on('click', function(){
        $target = this.dataset.target;
        $($target).modal('show')
    })

    $('#modalUpload').on('click', function(){
        $('#uploadModal').modal({
            focus: false,
            show: true
        });
    });

    $('#uploadArquivo').on('click', function(){
        document.getElementById('selectArquivo').click()
    });

    $('button.btn-secondary').on('click', function(){
        $('#videoModal').modal('show');
    });
    $('.caixa-biografia button.btn').on('click', function(){
        $('#biografiaModal').modal('show');
    })
}( jQuery ))