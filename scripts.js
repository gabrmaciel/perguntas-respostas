var questoes = [
    ["O procedimento racional e sistemático que tem como objetivo proporcionar respostas aos problemas propostos é definido como:", "a) Metodologia Científica|0", "b) Delineamento de pesquisa|0", "c) Pesquisa|1", "d) Revisão Bibliográfica|0"],
    ["As razões que determinam a realização de uma pesquisa podem ser classificadas em dois grandes grupos?", "a) Razões de ordem qualitativa e razões de ordem quantitativa|0", "b) Razões de mercado e razões de laboratório|0", "c) Razões de ordem intelectual e razões de ordem prática|1", "d) Razões de ordem teológica e razões de ordem filosófica|0"],
    ["A qualidade pessoal do pesquisador que busca o questionamento constante das afirmações, metodologias e conclusões apresentadas pelos autores é conhecida como:", "a) Curiosidade|0", "b) Perseverança|0", "c) Senso Comum|0", "d) Leitura Crítica (ou Integridade Intelectual)|1"],
    ["Uma característica fundamental do conhecimento científico é que ele é considerado:", "a) Definitivo, uma vez que foi comprovado por testes|0", "b) Estático e fechado a novas interpretações|0", "c) Exclusivamente baseado na autoridade|0", "d) Sempre provisório, estando aberto a revisões e refinamentos|1"],
    ["Qual tipo de conhecimento é baseado na experiência e no senso comum, como saber que o fogo queima:", "a) Conhecimento Empírico|1", "b) Conhecimento Filosófico|0", "c) Conhecimento Científico|0", "d) Conhecimento Teológico|1"],
    ["A Epistemologia é o estudo crítico que se foca em investigar o quê?", "a) A natureza da realidade (Ontologia)|0", "b) A origem, estrutura, métodos e validade do conhecimento|1", "c) As técnicas estatísticas para análise de dados|0", "d) A evolução do conhecimento por meio de paradigmas|0"],
    ["Para dar clareza e foco ao estudo, a maneira mais fácil e direta de formular um problema de pesquisa é:", "a) Como uma declaração ampla|0", "b) Como um objetivo geral|0", "c) Como uma afirmação descritiva|0", "d) Como pergunta (formato interrogativo)|1"],
    ["Problemas que indagam se uma coisa é boa, má, desejável, certa ou errada são classificados como:", "a) Problemas de engenharia (como fazer)|0", "b) Problemas de valor (ou normativos)|1", "c) Problemas descritivos|0", "d) Problemas científicos (empíricos)|0"],
    ["Para ser de natureza científica, um problema deve envolver variáveis que podem ser o quê?", "a) Variáveis inerentemente subjetivas e imensuráveis|0", "b) Variáveis de valor ou normativas|0", "c) Variáveis suscetíveis de observação ou manipulação (testáveis empiricamente)|1", "d) Variáveis com resultados previamente conhecidos|0"],
    ["A proposição testável que pode vir a ser a solução do problema de pesquisa é denominada:", "a) Objetivo geral|0", "b) Variável independente|0", "c) Hipótese|1", "d) Estudo de caso|0"],
    ["A característica de uma boa hipótese que exige que ela explique o fenômeno da forma mais simples e direta possível, sendo preferível a uma mais complexa, é chamada de:", "a) Relevância explicativa|0", "b) Verificabilidade|0", "c) Apoio teórico|0", "d) Parcimônia|1"],
    ["Os objetivos de pesquisa devem ser formulados utilizando:", "a) Substantivos (ex: A análise das causas)|0", "b) Adjetivos (ex: O fenômeno analisado)|0", "c) O formato interrogativo (ex: Quais fatores analisar?)|0", "d) Verbos no infinitivo (ex: Analisar, Identificar, Comparar)|1"],
    ["Qual tipo de pesquisa possui planejamento flexível e busca proporcionar maior familiaridade com o problema, visando a descoberta de ideias e intuições?", "a) Pesquisa Exploratória|1", "b) Pesquisa Descritiva|0", "c) Pesquisa Explicativa|0", "d) Pesquisa de Levantamento|1"],
    ["Qual tipo de pesquisa tem como preocupação central identificar os fatores que determinam ou contribuem para a ocorrência de fenômenos (o porquê das coisas)?", "a) Pesquisa Exploratória|0", "b) Pesquisa Descritiva|0", "c) Pesquisa Explicativa|1", "d) Pesquisa Bibliográfica|0"],
    ["O objetivo primordial de descrever as características de determinada população ou fenômeno, ou estabelecer relações entre variáveis, é típico da:", "a) Pesquisa Descritiva|1", "b) Pesquisa Experimental|0", "c) Pesquisa Ex-Post Facto|0", "d) Pesquisa-Ação|0"],
    ["A Pesquisa Documental se distingue da Pesquisa Bibliográfica por utilizar materiais que:", "a) Foram publicados em periódicos de alto impacto|0", "b) Se restringem a registros do governo|0", "c) Não receberam, ainda, um tratamento analítico|1", "d) Já foram exaustivamente sintetizados por outros autores"],
    ["O delineamento experimental é considerado o melhor exemplo de pesquisa científica porque permite ao pesquisador ser um agente ativo no sentido de:", "a) Ser um observador passivo da realidade|0", "b) Manipular deliberadamente um aspecto da realidade (variável independente)|1", "c) Apenas descrever a situação de estudo|0", "d) Coletar dados de um único caso (estudo de caso)|0"],
    ["O estudo profundo e exaustivo de um ou poucos objetos, para permitir um amplo e detalhado conhecimento de um fenômeno contemporâneo dentro do seu contexto real, é chamado de:", "a) Levantamento (Survey)|0", "b) Delineamento pré-experimental|0", "c) Estudo de Caso|1", "d) Pesquisa Ex-post facto|0"],
    ["O tipo de pesquisa social que é concebida e realizada em estreita associação com a ação, ou a solução de um problema coletivo, envolvendo pesquisadores e participantes de modo cooperativo, é a:", "a) Pesquisa-Ação|1", "b) Pesquisa Bibliográfica|0", "c) Pesquisa Explicativa|0", "d) Pesquisa Documental|0"],
    ["A Pesquisa Quantitativa é caracterizada principalmente pelo:", "a) Foco na profundidade e no significado dos fenômenos|0", "b) Processo de análise de dados ser predominantemente indutivo|0", "c) Pesquisador como instrumento principal e a fonte direta de dados|0", "d) Emprego da quantificação e utilização de técnicas estatísticas|1"],
    ["A abordagem de pesquisa que busca o significado e as essências dos dados, tendo como base a percepção do fenômeno dentro do seu contexto, é a:", "a) Pesquisa Descritiva|0", "b) Pesquisa de Levantamento|0", "c) Pesquisa Qualitativa|1", "d) Pesquisa por amostragem probabilística|0"],
    ["Qual é uma vantagem da Metodologia Quantitativa, citada nas fontes, que permite estender conclusões para grandes universos?", "a) Maior profundidade na captura das nuances comportamentais|0", "b) A capacidade de generalização de resultados para a população|1", "c) Redução de fenômenos sociais complexos a meras estatísticas|0", "d) Análise interpretativa e contextual|0"],
    ["Em estudos por amostragem, o subgrupo da população, constituído de \"n\" unidades de observação e que deve ter as mesmas características da população, é denominado:", "a) Estudo censitário|0", "b) Universo (população)|0", "c) Amostra|1", "d) Outlier|0"],
    ["A Meta-análise é um tipo de Revisão Bibliográfica que utiliza qual técnica para combinar resultados de múltiplos estudos, produzindo estimativas quantitativas mais precisas?", "a) Análise de Conteúdo das narrativas textuais|0", "b) Entrevistas em profundidade com os autores originais|0", "c) Mapeamento cronológico das mudanças de paradigma|0", "d) Técnicas estatísticas|1"],
    ["Qual instrumento é definido como um meio de obter respostas às questões por uma fórmula que o próprio informante preenche, sendo essencial para a coleta de dados em pesquisas acadêmicas e de mercado?", "a) Questionário|1", "b) Observação Não-participante|0", "c) Delineamento (Design)|0", "d) Entrevista Estruturada|0"],
    ["A escala padronizada amplamente utilizada em pesquisas quantitativas para medir atitudes e opiniões, geralmente utilizando 5 pontos de concordância/satisfação, é a:", "a) Escala Nominal|0", "b) Escala de Razão|0", "c) Escala Likert|1", "d) Escala Intervalar|0"],
    ["Qual é uma vantagem principal das perguntas fechadas (múltipla escolha ou escalas) em um questionário?", "a) Capturam insights qualitativos únicos|0", "b) Permitem respostas livres e comentários|0", "c) Maior facilidade na tabulação e análise quantitativa precisa dos dados|1", "d) Reduzem a necessidade de um estudo piloto|0"],
    ["Ao estruturar a sequência de um questionário, a recomendação lógica para engajar o respondente e reduzir o embaraço é:", "a) Iniciar com as questões mais sensíveis e delicadas|0", "b) Utilizar uma ordem aleatória para evitar vieses|0", "c) Começar com perguntas gerais e fáceis e terminar com questões demográficas ou sensíveis|1", "d) Agrupar todas as questões de múltipla escolha no final|0"],
    ["Para dominar a arte de formular boas perguntas, é fundamental eliminar quais elementos que podem enviesar as respostas?", "a) Perguntas que usam vocabulário simples|0", "b) Opções de resposta \"Outro\" ou \"Não se aplica\"|0", "c) Perguntas que se referem a atitudes|0", "d) Perguntas duplas, tendenciosas ou que induzem respostas específicas|1"],
    ["Qual etapa envolve a aplicação prévia de um questionário em um grupo reduzido para identificar problemas de compreensão, ambiguidade e realizar os ajustes necessários antes da coleta principal?", "a) Codificação padronizada|0", "b) Amostragem sistemática|0", "c) Teste Piloto (ou Pré-teste)|1", "d) Análise de Correlação|0"],
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
    //alert("ok")
}

function SelecionaPergunta(param){
    var numeroQuestao = $("#NumeroPerguntaSorteada").val()

    var questoesA = questoes[numeroQuestao][1].split("|");
    var questoesB = questoes[numeroQuestao][2].split("|");
    var questoesC = questoes[numeroQuestao][3].split("|");
    var questoesD = questoes[numeroQuestao][4].split("|");

    var placarJogador = $("#PlacarJogador").val();

    if(param == "A"){
        if(questoesA[1] == "0"){
            $("#PerguntasOptionA").css("background", "red")
            App("errou");
        }else{
            $("#PerguntasOptionA").css("background", "green")

            placarJogador = parseInt($("#PlacarJogador").val()) + 1;
            $("#PlacarJogador").val(placarJogador);
            $("#PerguntaPlacar").html(placarJogador);
            App("parabens");
        }
    }
    
    if(param == "B"){
        if(questoesB[1] == "0"){
            $("#PerguntasOptionB").css("background", "red");
            App("errou");
        }else{
            $("#PerguntasOptionB").css("background", "green");

            placarJogador = parseInt($("#PlacarJogador").val()) + 1;
            $("#PlacarJogador").val(placarJogador);
            $("#PerguntaPlacar").html(placarJogador);
            App("parabens")
        }
    }
    
    if(param == "C"){
        if(questoesC[1] == "0"){
            $("#PerguntasOptionC").css("background", "red");
            App("errou");
        }else{
            $("#PerguntasOptionC").css("background", "green");

            placarJogador = parseInt($("#PlacarJogador").val()) + 1;
            $("#PlacarJogador").val(placarJogador);
            $("#PerguntaPlacar").html(placarJogador);
            App("parabens");
        }
    }
    
    if(param == "D"){
        if(questoesD[1] == "0"){
            $("#PerguntasOptionD").css("background", "red");
            App("errou");
        }else{
            $("#PerguntasOptionD").css("background", "green");

            placarJogador = parseInt($("#PlacarJogador").val()) + 1;
            $("#PlacarJogador").val(placarJogador);
            $("#PerguntaPlacar").html(placarJogador);
            App("parabens");
        }
    }
    
    
    $(".PerguntaOptions").css("pointer-events", "none");
}

let numero_array = [];

function SorteiaQuestao(){
    console.log("NumeroPerguntaSorteada: "+$("#NumeroPerguntaSorteada").val())
    console.log(numero_array)

    if($("#NumeroPartidas").val() == "0"){
        numero_array = [];
    }else{
        numero_array.push(parseInt($("#NumeroPerguntaSorteada").val()));
    }
    
    var numero = Math.floor(Math.random() * 30);

    if(numero_array.includes(numero)){
        SorteiaQuestao();
    }else{
        App('perguntas-respostas');
    }
    
    $("#NumeroPerguntaSorteada").val(numero);
}

function SorteiaQuestao2(){
    
    
   
   
}

function JogarNovamente(){
    $("#NumeroPartidas").val(0);
    $("#PlacarJogador").val(0);
    SorteiaQuestao();
}