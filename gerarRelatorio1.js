// Obter o valor do elemento de rádio selecionado
var ruido = document.querySelector('input[name="ruido"]:checked').value;
var exposicaoR = document.querySelector('input[name="exposicaoR"]:checked').value;

function gerarPDF() {
    // Criar um novo objeto jsPDF
    var doc = new jsPDF();
    var cumprimento = parseInt(document.getElementById("cumprimento").value);
    var largura = parseInt(document.getElementById("largura").value);
    var area = cumprimento * largura;
    var introducao = "                  RELATÓRIO GERADO ATRAVÉS DO LEVANTAMENTO DE RISCOS";    doc.setFont("Arial");
    var linhaInicio = 10;
    var linhaFim = doc.internal.pageSize.width - 10;
    var linhaPosicao = 10;
    doc.setFontSize(12);
    doc.setLineWidth(0.5);
    var sumario = "                                                 RISCOS PRESENTES NO SETOR ";    doc.setFont("Arial");

    // Obter o valor do elemento de rádio selecionado
    var ruido = document.querySelector('input[name="ruido"]:checked').value;
    var exposicaoR = document.querySelector('input[name="exposicaoR"]:checked').value;

    var radiacaonaoion = document.querySelector('input[name="radiacaonaoion"]:checked').value;
    var exposicaoRadNaoIon = document.querySelector('input[name="exposicaoRadNaoIon"]:checked').value;

    var radion = document.querySelector('input[name="radion"]:checked').value;
    var exposicaoRI = document.querySelector('input[name="exposicaoRI"]:checked').value;

    var vibracao = document.querySelector('input[name="vibracao"]:checked').value;
    var exposicaoV = document.querySelector('input[name="exposicaoV"]:checked').value;

    var frio = document.querySelector('input[name="frio"]:checked').value;
    var exposicaoF = document.querySelector('input[name="exposicaoF"]:checked').value;

    var calor = document.querySelector('input[name="calor"]:checked').value;
    var exposicaoC = document.querySelector('input[name="exposicaoC"]:checked').value;

    var umidade = document.querySelector('input[name="umidade"]:checked').value;
    var exposicaoU = document.querySelector('input[name="exposicaoU"]:checked').value;

    var poeira = document.querySelector('input[name="poeira"]:checked').value;
    var exposicaoP = document.querySelector('input[name="exposicaoP"]:checked').value;

    var fumos = document.querySelector('input[name="fumos"]:checked').value;
    var exposicaoFumos = document.querySelector('input[name="exposicaoFumos"]:checked').value;

    var gases = document.querySelector('input[name="gases"]:checked').value;
    var exposicaoG = document.querySelector('input[name="exposicaoG"]:checked').value;

    var biologico = document.querySelector('input[name="biologico"]:checked').value;
    var exposicaoB = document.querySelector('input[name="exposicaoB"]:checked').value;

    var transportedepeso = document.querySelector('input[name="transportedepeso"]:checked').value;
    var exposicaoLET = document.querySelector('input[name="exposicaoLET"]:checked').value;

    var eletricidade = document.querySelector('input[name="eletricidade"]:checked').value;
    var exposicaoeletricidade = document.querySelector('input[name="exposicaoeletricidade"]:checked').value;

    var incendio = document.querySelector('input[name="incendio"]:checked').value;
    var exposicaoincendio = document.querySelector('input[name="exposicaoincendio"]:checked').value;

    var queda = document.querySelector('input[name="queda"]:checked').value;
    var exposicaoqueda = document.querySelector('input[name="exposicaoqueda"]:checked').value;

    var altura = document.querySelector('input[name="altura"]:checked').value;
    var exposicaoaltura = document.querySelector('input[name="exposicaoaltura"]:checked').value;

    var controleEPI = document.querySelector('input[name="controleEPI"]:checked').value;

    var rotadefuga = document.querySelector('input[name="rotadefuga"]:checked').value;

    var iluminacaoemerg = document.querySelector('input[name="iluminacaoemerg"]:checked').value;

    var extintores = document.querySelector('input[name="extintores"]:checked').value;

    var empresa = document.getElementById('empresa').value;

    doc.line(linhaInicio, linhaPosicao, linhaFim, linhaPosicao);
    doc.line(linhaInicio, doc.internal.pageSize.height - linhaPosicao, linhaFim, doc.internal.pageSize.height - linhaPosicao);
    doc.line(linhaInicio, linhaPosicao, linhaInicio, doc.internal.pageSize.height - linhaPosicao);
    doc.line(linhaFim, linhaPosicao, linhaFim, doc.internal.pageSize.height - linhaPosicao);  
    doc.text(introducao, 20, 20)
    doc.text("EMPRESA: " + document.getElementById("empresa").value, 20, 40);
    doc.text("SETOR: " + document.getElementById("setor").value, 20, 50);
    doc.text("ÁREA: " + area + " m²", 20, 60);
    doc.text("PÉ DIREITO: " + document.getElementById("pé_direito").value + " m", 20, 70);
    doc.text("PISO: " + document.getElementById("piso").value, 20, 80);
    doc.text("ESTRUTURA: " + document.getElementById("estrutura").value, 20, 90);
    doc.text("FORRO: " + document.getElementById("forro").value, 20, 100);
    doc.text("ILUMINAÇÃO NATURAL: " + document.getElementById("iluminação_natural").value, 20, 110);
    doc.text("ILUMINAÇÃO ARTIFICIAL: " + document.getElementById("iluminação_artificial").value, 20, 120);
    doc.text("VENTILAÇÃO NATURAL: " + document.getElementById("ventilador_natural").value, 20, 130);
    doc.text("VENTILAÇÃO ARTIFICIAL: " + document.getElementById("ventilador_artificial").value, 20, 140);
    doc.text("MÁQUINAS E EQUIPAMENTOS - LUX: " + document.getElementById("myTextarea").value, 20, 150);
    
    doc.text(sumario, 20, 200);
    //ruido
    if (ruido === 'ruidosim') {
        doc.text('Considerar ruído', 20, 210);
        doc.text('Exposição: ' + exposicaoR, 20, 215);
        doc.text('Fonte geradora: ' + document.getElementById("fonteRuido").value, 20, 220);
    } else {
        doc.text('Não considerar ruído', 20, 210);
    }

    //radiaçao nao ionizante
    if (radiacaonaoion === 'radiacaoNaoIonsim') {
        doc.text('Considerar radiação não ionizante', 20, 230);
        doc.text('Exposição: ' + exposicaoRadNaoIon, 20, 235);
        doc.text('Fonte geradora: ' + document.getElementById("fonteRadiacaoNaoIon").value, 20, 240);
    } else {
        doc.text('Não considerar radiação não ionizante', 20, 230);
    }

    //radiação ionizante
    if (radion === 'radionsim') {
        doc.text('Considerar radiação ionizante', 20, 250);
        doc.text('Exposição: ' + exposicaoRI, 20, 255);
        doc.text('Fonte geradora: ' + document.getElementById("fonteRadIon").value, 20, 260);
    } else {
        doc.text('Não considerar radiação ionizante', 20, 250);
    }

    //Vibração
    if (vibracao === 'vibracaosim') {
        doc.text('Considerar vibração', 20, 270);
        doc.text('Exposição: ' + exposicaoV, 20, 275);
        doc.text('Fonte geradora: ' + document.getElementById("fonteVibracao").value, 20, 280);
    } else {
        doc.text('Não considerar vibração', 20, 270);
    }

    doc.addPage();

    doc.line(linhaInicio, linhaPosicao, linhaFim, linhaPosicao);
    doc.line(linhaInicio, doc.internal.pageSize.height - linhaPosicao, linhaFim, doc.internal.pageSize.height - linhaPosicao);
    doc.line(linhaInicio, linhaPosicao, linhaInicio, doc.internal.pageSize.height - linhaPosicao);
    doc.line(linhaFim, linhaPosicao, linhaFim, doc.internal.pageSize.height - linhaPosicao); 


    //Frio
    if (frio === 'friosim') {
        doc.text('Considerar frio', 20, 20);
        doc.text('Exposição: ' + exposicaoF, 20, 25);
        doc.text('Fonte geradora: ' + document.getElementById("fonteFrio").value, 20, 30);
    } else {
        doc.text('Não considerar frio', 20, 20);
    }

    //Calor
    if (calor === 'calorsim') {
        doc.text('Considerar calor', 20, 40);
        doc.text('Exposição: ' + exposicaoC, 20, 45);
        doc.text('Fonte geradora: ' + document.getElementById("fonteCalor").value, 20, 50);
    } else {
        doc.text('Não considerar calor', 20, 40);
    }

    //Umidade
    if (umidade === 'umidadesim') {
        doc.text('Considerar umidade', 20, 60);
        doc.text('Exposição: ' + exposicaoU, 20, 65);
        doc.text('Fonte geradora: ' + document.getElementById("fonteUmidade").value, 20, 70);
    } else {
        doc.text('Não considerar umidade', 20, 60);
    }

    //Poeira
    if (poeira === 'poeirasim') {
        doc.text('Considerar poeira', 20, 80);
        doc.text('Exposição: ' + exposicaoP, 20, 85);
        doc.text('Fonte geradora: ' + document.getElementById("fontePoeira").value, 20, 90);
    } else {
        doc.text('Não considerar poeira', 20, 80);
    }

    //Fumos
    if (fumos === 'fumossim') {
        doc.text('Considerar fumos', 20, 100);
        doc.text('Exposição: ' + exposicaoFumos, 20, 105);
        doc.text('Fonte geradora: ' + document.getElementById("fonteFumos").value, 20, 110);
    } else {
        doc.text('Não considerar fumos', 20, 100);
    }

    //Gases
    if (gases === 'gasessim') {
        doc.text('Considerar gases', 20, 120);
        doc.text('Exposição: ' + exposicaoG, 20, 125);
        doc.text('Fonte geradora: ' + document.getElementById("fonteGases").value, 20, 130);
    } else {
        doc.text('Não considerar gases', 20, 120);
    }

    //Biologicos
    if (biologico === 'biologicosim') {
        doc.text('Considerar biologico', 20, 140);
        doc.text('Exposição: ' + exposicaoB, 20, 145);
        doc.text('Fonte geradora: ' + document.getElementById("fonteBiologico").value, 20, 150);
    } else {
        doc.text('Não considerar biologico', 20, 140);
    }

    //Levantamento e transporte manual de peso
    if (transportedepeso === 'transportedepesosim') {
        doc.text('Considerar levantamento e transporte manual de peso', 20, 160);
        doc.text('Exposição: ' + exposicaoLET, 20, 165);
        doc.text('Fonte geradora: ' + document.getElementById("fontetransportedepeso").value, 20, 170);
    } else {
        doc.text('Não considerar levantamento e transporte manual de peso', 20, 160);
    }

    //Eletricidade
    if (eletricidade === 'eletricidadesim') {
        doc.text('Considerar eletricidade', 20, 180);
        doc.text('Exposição: ' + exposicaoeletricidade, 20, 185);
        doc.text('Fonte geradora: ' + document.getElementById("fonteletricidade").value, 20, 190);
    } else {
        doc.text('Não considerar eletricidade', 20, 180);
    }

    //Incêndio
    if (incendio === 'incendiosim') {
        doc.text('Considerar risco de incêndio ou explosão', 20, 200);
        doc.text('Exposição: ' + exposicaoincendio, 20, 205);
        doc.text('Fonte geradora: ' + document.getElementById("fonteincendio").value, 20, 210);
    } else {
        doc.text('Não considerar risco de incêndio ou explosão', 20, 200);
    }

    //queda de materiais 
    if (queda === 'quedasim') {
        doc.text('Considerar queda de materiais', 20, 220);
        doc.text('Exposição: ' + exposicaoqueda, 20, 225);
        doc.text('Fonte geradora: ' + document.getElementById("fontequeda").value, 20, 230);
    } else {
        doc.text('Não considerar queda de materiais', 20, 220);
    }

    //trabalho em altura
    if (altura === 'alturasim') {
        doc.text('Considerar trabalho em altura', 20, 240);
        doc.text('Exposição: ' + exposicaoaltura, 20, 245);
        doc.text('Fonte geradora: ' + document.getElementById("fontealtura").value, 20, 250);
    } else {
        doc.text('Não considerar trabalho em altura', 20, 240);
    }


    doc.text("Observações: " + document.getElementById("obsriscos").value, 20, 260);

    doc.addPage();

    doc.line(linhaInicio, linhaPosicao, linhaFim, linhaPosicao);
    doc.line(linhaInicio, doc.internal.pageSize.height - linhaPosicao, linhaFim, doc.internal.pageSize.height - linhaPosicao);
    doc.line(linhaInicio, linhaPosicao, linhaInicio, doc.internal.pageSize.height - linhaPosicao);
    doc.line(linhaFim, linhaPosicao, linhaFim, doc.internal.pageSize.height - linhaPosicao);     


    //controle de EPI
    if (controleEPI === 'controlesim') {
        doc.text('Existe controle de fichas de EPI', 20, 20);
    } else {
        doc.text('Não existe controle de fichas de EPI', 20, 20);
    }

    //Rota de fuga
    if (rotadefuga === 'rotadefugasim') {
        doc.text('Existe rota fuga', 20, 30);
    } else {
        doc.text('Não existe rota fuga', 20, 30);
    }
    
    //iluminação de emergencia
    if (iluminacaoemerg === 'iluminacaoemergsim') {
        doc.text('Existe iluminação de emergência', 20, 40);
    } else {
        doc.text('Não existe iluminação de emergência', 20, 40);
    }

    //Extintores
    if (extintores === 'extintoressim') {
        doc.text('Existe extintores', 20, 50);
        doc.text('do tipo: ' + document.getElementById("tipoextintor").value, 50, 50);
    } else {
        doc.text('Não existe extintores', 20, 50);
    }

    //Placa de sinalização a ser adequada
    doc.text('Medidas a serem adotadas: ' + document.getElementById("tipoplacasinalizacao").value, 20, 60);
    

    var descAtividades = "                                       ATIVIDADES POR FUNCIONÁRIOS / FUNÇÃO";    doc.setFont("Arial");

    doc.text(descAtividades, 20, 80)
    // Adiciona os campos preenchidos ao PDF
    for (var i = 1; i < contadorCampos; i++) {
        var nome = document.getElementById("nome" + i).value;
        var atividade = document.getElementById("atividade" + i).value;
        var qtd = parseFloat(document.getElementById("qtd" + i).value);

        if (!isNaN(qtd)) {
        doc.text(nome + " - " + atividade + " - " + qtd, 20, 80 + i * 10);
        }
    }

    // Concatena o nome do formulário com o nome inserido no campo "nome"
    var nomeArquivo = 'levantamento_' + empresa + '.pdf';

    // Salvar o PDF
    doc.save(nomeArquivo);
    }