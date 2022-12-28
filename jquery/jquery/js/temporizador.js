(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesfinais = $.extend({
            mensagem: "Em breve um novo site pra vc",
            horario: "11:06:20"
        }, opcoes)

        const horadezena = $("<span class = 'digito'>").html("0")
        const horaunidade = $("<span class = 'digito'>").html("0")
        const minutodezena = $("<span class = 'digito'>").html("0")
        const minutounidade = $("<span class = 'digito'>").html("0")
        const segundodezena = $("<span class = 'digito'>").html("0")
        const segundounidade = $("<span class = 'digito'>").html("0")

        const separarhora = $("<span class = 'separador'>").html(":")
        const separarminuto = $("<span class = 'separador'>").html(":")
        const mensagem = $("<div class = 'mensagem'>").html(opcoesfinais.mensagem)

        $(this).addClass("temporizador")
        $(this).append(horadezena, horaunidade, separarhora, minutodezena, minutounidade,
            separarminuto, segundodezena, segundounidade, mensagem)


        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioalvo = regex.exec(opcoesfinais.horario)

        var temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioalvo[1])
            alvo.setMinutes(horarioalvo[2])
            alvo.setSeconds(horarioalvo[3])

            const diferencaemmili = alvo.getTime() - agora.getTime()
            if (diferencaemmili >= 0) {
                const diferenca = regex.exec(new Date(diferencaemmili).toISOString())
                //console.log(diferenca)

                horadezena.html(diferenca[1][0])
                horaunidade.html(diferenca[1][1])
                minutodezena.html(diferenca[2][0])
                minutounidade.html(diferenca[2][1])
                segundodezena.html(diferenca[3][0])
                segundounidade.html(diferenca[3][1])

            } else{
                clearInterval(temporizador)
            }


        }, 1000)



        return this
    }
})(jQuery)