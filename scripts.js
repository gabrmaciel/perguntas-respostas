var questoes = [
    ["Qual o significado da palavra \"epistemologia\"?", "A - Epistemologia é o ramo da filosofia que estuda a teoria do conhecimento.|1", "B - Epistemologia é um ramo da ciência que estuda a teoria do conhecimento.|0", "C - Epistemologia é uma filosofia de vida|0", "D - Epistemologia não tem nada a ver com a ciência nem com a filosofia|0", "E - Todas as alternativas anteriores|0"],
    ["Em que ano o Nirvana lançou 'Smells Like Teen Spirit'?", "A -1990|0", "B - 1991|0", "C - 1992|0", "D - 1993|0", "E - 1994|1"],
];

function App(page, param){

    $.ajax({
        url: page+".html", 
        success: function(result){
            $("#App").html(result);
        }
    });
}

function MostraPergunta(){
    alert("ok")
}

function SelecionaPergunta(param){
    var numeroQuestao = $("#NumeroPerguntaSorteada").val()

    var questoesA = questoes[numeroQuestao][1].split("|");
    var questoesB = questoes[numeroQuestao][2].split("|");
    var questoesC = questoes[numeroQuestao][3].split("|");
    var questoesD = questoes[numeroQuestao][4].split("|");
    var questoesE = questoes[numeroQuestao][5].split("|");

    var placarJogadorAzul = $("#PlacarJogadorAzul").val();
    var placarJogadorVermelho = $("#PlacarJogadorVermelho").val();
    var quemComeca = $("#QuemComeca").val();

    if(param == "A"){
        if(questoesA[1] == "0"){
            $("#PerguntasOptionA").css("background", "red")
            App("errou");
        }else{
            $("#PerguntasOptionA").css("background", "green")

            if(quemComeca == "Azul"){
                placarJogadorAzul = parseInt($("#PlacarJogadorAzul").val()) + 1;
                $("#PlacarJogadorAzul").val(placarJogadorAzul);
                $("#PerguntaPlacarAzul").html(placarJogadorAzul);
                App("parabens");
            }else if(quemComeca == "Vermelho"){
                placarJogadorVermelho = parseInt($("#PlacarJogadorVermelho").val()) + 1;
                $("#PlacarJogadorVermelho").val(placarJogadorVermelho);
                $("#PerguntaPlacarVermelho").html(placarJogadorVermelho);
                App("parabens");
            }
        }
    }
    
    if(param == "B"){
        if(questoesB[1] == "0"){
            $("#PerguntasOptionB").css("background", "red");
            App("errou");
        }else{
            $("#PerguntasOptionB").css("background", "green");

            if(quemComeca == "Azul"){
                placarJogadorAzul = parseInt($("#PlacarJogadorAzul").val()) + 1;
                $("#PlacarJogadorAzul").val(placarJogadorAzul);
                $("#PerguntaPlacarAzul").html(placarJogadorAzul);
                App("parabens")
            }else if(quemComeca == "Vermelho"){
                placarJogadorVermelho = parseInt($("#PlacarJogadorVermelho").val()) + 1;
                $("#PlacarJogadorVermelho").val(placarJogadorVermelho);
                $("#PerguntaPlacarVermelho").html(placarJogadorVermelho);
                App("parabens");
            }
        }
    }
    
    if(param == "C"){
        if(questoesC[1] == "0"){
            $("#PerguntasOptionC").css("background", "red");
            App("errou");
        }else{
            $("#PerguntasOptionC").css("background", "green");

            if(quemComeca == "Azul"){
                placarJogadorAzul = parseInt($("#PlacarJogadorAzul").val()) + 1;
                $("#PlacarJogadorAzul").val(placarJogadorAzul);
                $("#PerguntaPlacarAzul").html(placarJogadorAzul);
                App("parabens");
            }else if(quemComeca == "Vermelho"){
                placarJogadorVermelho = parseInt($("#PlacarJogadorVermelho").val()) + 1;
                $("#PlacarJogadorVermelho").val(placarJogadorVermelho);
                $("#PerguntaPlacarVermelho").html(placarJogadorVermelho);
                App("parabens");
            }
        }
    }
    
    if(param == "D"){
        if(questoesD[1] == "0"){
            $("#PerguntasOptionD").css("background", "red");
            App("errou");
        }else{
            $("#PerguntasOptionD").css("background", "green");

            if(quemComeca == "Azul"){
                placarJogadorAzul = parseInt($("#PlacarJogadorAzul").val()) + 1;
                $("#PlacarJogadorAzul").val(placarJogadorAzul);
                $("#PerguntaPlacarAzul").html(placarJogadorAzul);
                App("parabens");
            }else if(quemComeca == "Vermelho"){
                placarJogadorVermelho = parseInt($("#PlacarJogadorVermelho").val()) + 1;
                $("#PlacarJogadorVermelho").val(placarJogadorVermelho);
                $("#PerguntaPlacarVermelho").html(placarJogadorVermelho);
                App("parabens");
            }
        }
    }
    
    if(param == "E"){
        if(questoesE[1] == "0"){
            $("#PerguntasOptionE").css("background", "red");
            App("errou");
        }else{
            $("#PerguntasOptionE").css("background", "green");

            if(quemComeca == "Azul"){
                placarJogadorAzul = parseInt($("#PlacarJogadorAzul").val()) + 1;
                $("#PlacarJogadorAzul").val(placarJogadorAzul);
                $("#PerguntaPlacarAzul").html(placarJogadorAzul);
                App("parabens");
            }else if(quemComeca == "Vermelho"){
                placarJogadorVermelho = parseInt($("#PlacarJogadorVermelho").val()) + 1;
                $("#PlacarJogadorVermelho").val(placarJogadorVermelho);
                $("#PerguntaPlacarVermelho").html(placarJogadorVermelho);
                App("parabens");
            }
        }
    }
    
    $(".PerguntaOptions").css("pointer-events", "none");
}

function SorteiaQuestao(){
    var numero = Math.round(Math.random());
    $("#NumeroPerguntaSorteada").val(numero);
    App('perguntas-respostas');
}