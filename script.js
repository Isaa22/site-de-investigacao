// 20 CASOS CRIMINAIS REAIS NÃO RESOLVIDOS
const casosData = [
    // CASOS BRASILEIROS
    {
        id: 1,
        titulo: "CASO EVANDRO CAETANO",
        ano: 1992,
        local: "Guaratuba, PR",
        pais: "Brasil",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1569834216462-c847f9e0fad1?w=800",
        descricao: "Evandro Caetano, 6 anos, desapareceu em 1992 em Guaratuba, PR. Seu corpo foi encontrado com sinais de rituais. O caso ficou conhecido como 'Caso Evandro' e até hoje não foi totalmente esclarecido. Investigações apontaram para um suposto ritual de magia negra envolvendo membros da comunidade.",
        vitima: "Evandro Caetano, 6 anos",
        localCrime: "Guaratuba, Paraná - Próximo à Ponte de Guaratuba",
        evidencias: [
            { id: 1, url: "https://images.unsplash.com/photo-1585123334904-845d60e6b562?w=300", titulo: "Local do Crime", descricao: "Área onde o corpo foi encontrado", encontrada: false },
            { id: 2, url: "https://images.unsplash.com/photo-1531842477197-54acf89bff98?w=300", titulo: "Vestimentas", descricao: "Roupas da vítima encontradas", encontrada: false },
            { id: 3, url: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=300", titulo: "Local do Desaparecimento", descricao: "Ponto onde Evandro foi visto pela última vez", encontrada: false }
        ],
        suspeitos: [
            { nome: "Beatriz Cordeiro Abagge", descricao: "Professora, apontada como líder do ritual", investigado: false },
            { nome: "Armando Abagge", descricao: "Médico, esposo de Beatriz", investigado: false },
            { nome: "Davi dos Santos Soares", descricao: "Caseiro da propriedade", investigado: false }
        ],
        pistas: ["Sangue encontrado na propriedade", "Vestimentas com substâncias estranhas", "Luzes estranhas na noite do crime"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 2,
        titulo: "CRIME DA MALA",
        ano: 2008,
        local: "Brasília, DF",
        pais: "Brasil",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        descricao: "Em 2008, uma mala com restos mortais foi encontrada em Brasília. A vítima foi identificada como o jovem João Paulo. O caso nunca foi solucionado e há suspeitas de envolvimento de pessoas influentes.",
        vitima: "João Paulo, 18 anos",
        localCrime: "Lago Sul, Brasília - DF",
        evidencias: [
            { id: 4, url: "https://images.unsplash.com/photo-1545987795-200673ee7b61?w=300", titulo: "A Mala", descricao: "Mala onde o corpo foi encontrado", encontrada: false },
            { id: 5, url: "https://images.unsplash.com/photo-1589571894960-20bbe2828b6a?w=300", titulo: "Local", descricao: "Local onde a mala foi abandonada", encontrada: false }
        ],
        suspeitos: [
            { nome: "Pessoas influentes de Brasília", descricao: "Suspeita de envolvimento de figuras políticas", investigado: false },
            { nome: "Amigos da vítima", descricao: "Últimas pessoas a ver João Paulo vivo", investigado: false }
        ],
        pistas: ["Mala de luxo abandonada", "Marcas de sangue no porta-malas", "Telefonemas anônimos"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 3,
        titulo: "DESAPARECIMENTO DE BRUNO BORGES",
        ano: 2012,
        local: "Rio de Janeiro, RJ",
        pais: "Brasil",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800",
        descricao: "O jornalista Bruno Borges desapareceu misteriosamente em 2012. Ele investigava milícias no Rio de Janeiro. Nunca mais foi visto.",
        vitima: "Bruno Borges, 29 anos, jornalista",
        localCrime: "Rio de Janeiro, RJ",
        evidencias: [
            { id: 6, url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300", titulo: "Carro", descricao: "Veículo encontrado abandonado", encontrada: false },
            { id: 7, url: "https://images.unsplash.com/photo-1585123334904-845d60e6b562?w=300", titulo: "Anotações", descricao: "Caderno de investigações", encontrada: false }
        ],
        suspeitos: [
            { nome: "Milicianos da Zona Oeste", descricao: "Grupo que Bruno investigava", investigado: false },
            { nome: "Policiais corruptos", descricao: "Possível envolvimento", investigado: false }
        ],
        pistas: ["Arquivos do computador deletados", "Testemunhas ameaçadas", "Ligações interceptadas"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 4,
        titulo: "CASO ELIANE DE GRAMACHO",
        ano: 2010,
        local: "Rio de Janeiro, RJ",
        pais: "Brasil",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800",
        descricao: "Eliane desapareceu ao sair do trabalho. Seu corpo nunca foi encontrado. O principal suspeito era seu ex-marido, mas nunca foi comprovado.",
        vitima: "Eliane, 35 anos",
        localCrime: "Gramacho, Duque de Caxias - RJ",
        evidencias: [
            { id: 8, url: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=300", titulo: "Roupas", descricao: "Pertences encontrados", encontrada: false }
        ],
        suspeitos: [
            { nome: "Ex-marido", descricao: "Motivo: ciúmes e discussões", investigado: false },
            { nome: "Desconhecido", descricao: "Possível assalto", investigado: false }
        ],
        pistas: ["Sangue no carro do suspeito", "Testemunhas viram briga", "Celular desligado misteriosamente"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 5,
        titulo: "ASSASSINATO DA FAMÍLIA REAL ROMANOV",
        ano: 1918,
        local: "Ekaterimburgo, Rússia",
        pais: "Rússia",
        status: "parcial",
        progresso: 25,
        imagemCena: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
        descricao: "O mistério envolvendo a execução da família Romanov em 1918. Anos depois, surgiram várias pessoas afirmando serem a princesa Anastasia, que teria sobrevivido à execução.",
        vitima: "Família Romanov: Nikolau II, Alexandra e 5 filhos",
        localCrime: "Casa Ipatiev, Ekaterimburgo, Rússia",
        evidencias: [
            { id: 9, url: "https://images.unsplash.com/photo-1583321500900-82888e5a5484?w=300", titulo: "Casa Ipatiev", descricao: "Local da execução", encontrada: false },
            { id: 10, url: "https://images.unsplash.com/photo-1542601098-8fc114e148e2?w=300", titulo: "Ossadas", descricao: "Restos mortais encontrados", encontrada: false },
            { id: 11, url: "https://images.unsplash.com/photo-1562442671-d69f073ac699?w=300", titulo: "Diários", descricao: "Documentos da família", encontrada: false }
        ],
        suspeitos: [
            { nome: "Yakov Yurovsky", descricao: "Líder do pelotão de fuzilamento", investigado: false },
            { nome: "Vladimir Lenin", descricao: "Ordenou a execução", investigado: false },
            { nome: "Anna Anderson", descricao: "Falsa Anastasia", investigado: false }
        ],
        pistas: ["Coroas encontradas nas roupas", "Corpos levados para mina", "Tiros ouvidos por horas"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 6,
        titulo: "MISTÉRIO DO VOO 447",
        ano: 2009,
        local: "Oceano Atlântico",
        pais: "Internacional",
        status: "parcial",
        progresso: 30,
        imagemCena: "https://images.unsplash.com/photo-1531509014726-c626b9836b29?w=800",
        descricao: "Voo Air France 447 desapareceu no Oceano Atlântico em 1º de junho de 2009 com 228 pessoas. Apenas dois anos depois os destroços foram encontrados.",
        vitima: "228 passageiros e tripulantes",
        localCrime: "Oceano Atlântico, entre Brasil e África",
        evidencias: [
            { id: 12, url: "https://images.unsplash.com/photo-1532100735528-2f9b1d165b7b?w=300", titulo: "Destroços", descricao: "Partes da aeronave", encontrada: false },
            { id: 13, url: "https://images.unsplash.com/photo-1558981403-d55e9b5d6daa?w=300", titulo: "Caixa Preta", descricao: "Gravador de voo", encontrada: false }
        ],
        suspeitos: [
            { nome: "Falha nos sensores", descricao: "Problema nos tubos de Pitot", investigado: false },
            { nome: "Erro humano", descricao: "Falta de treinamento", investigado: false }
        ],
        pistas: ["Mensagens automáticas", "Corpos encontrados flutuando", "Sensores congelados"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 7,
        titulo: "ZODÍACO KILLER",
        ano: 1968,
        local: "Califórnia, EUA",
        pais: "EUA",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        descricao: "Serial killer que aterrorizou a Califórnia nos anos 60/70. Enviava cartas criptografadas para jornais. Nunca foi identificado.",
        vitima: "5 confirmadas, possivelmente mais de 20",
        localCrime: "Área da Baía de São Francisco",
        evidencias: [
            { id: 14, url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300", titulo: "Cartas", descricao: "Cartas criptografadas", encontrada: false },
            { id: 15, url: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=300", titulo: "Local dos Crimes", descricao: "Pontos de ataque", encontrada: false }
        ],
        suspeitos: [
            { nome: "Arthur Leigh Allen", descricao: "Principal suspeito", investigado: false },
            { nome: "Ted Kaczynski", descricao: "Unabomber, possivelmente", investigado: false }
        ],
        pistas: ["Códigos nunca decifrados", "Testemunhas vagas", "Impressões digitais sem match"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 8,
        titulo: "JACK, O ESTRIPADOR",
        ano: 1888,
        local: "Londres, Inglaterra",
        pais: "Inglaterra",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
        descricao: "Serial killer mais famoso da história. Matou prostitutas em Whitechapel. Nunca foi identificado apesar de inúmeras teorias.",
        vitima: "5 canônicas, possivelmente 11",
        localCrime: "Whitechapel, Londres",
        evidencias: [
            { id: 16, url: "https://images.unsplash.com/photo-1585123334904-845d60e6b562?w=300", titulo: "Cartas", descricao: "Dear Boss letter", encontrada: false },
            { id: 17, url: "https://images.unsplash.com/photo-1545987795-200673ee7b61?w=300", titulo: "Rua do Crime", descricao: "Local dos assassinatos", encontrada: false }
        ],
        suspeitos: [
            { nome: "Montague Druitt", descricao: "Advogado e professor", investigado: false },
            { nome: "Aaron Kosminski", descricao: "Imigrante polonês", investigado: false },
            { nome: "Príncipe Albert Victor", descricao: "Teoria da realeza", investigado: false }
        ],
        pistas: ["Perícia arcaica", "Cartas com sangue", "Modus operandi específico"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 9,
        titulo: "DB COOPER",
        ano: 1971,
        local: "Portland-Oregon, EUA",
        pais: "EUA",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
        descricao: "Homem sequestrou um avião, recebeu $200.000 e saltou de paraquedas. Nunca foi encontrado.",
        vitima: "Nenhuma vítima fatal",
        localCrime: "Voo Northwest Orient Airlines",
        evidencias: [
            { id: 18, url: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=300", titulo: "Gravata", descricao: "Gravata deixada no avião", encontrada: false },
            { id: 19, url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300", titulo: "Dinheiro", descricao: "Algumas notas encontradas", encontrada: false }
        ],
        suspeitos: [
            { nome: "Richard McCoy", descricao: "Pára-quedista", investigado: false },
            { nome: "Duane Weber", descricao: "Confessou em leito de morte", investigado: false }
        ],
        pistas: ["Dinheiro encontrado em rio", "Análise de partículas", "Retrato falado"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 10,
        titulo: "MARY CELESTE",
        ano: 1872,
        local: "Oceano Atlântico",
        pais: "Internacional",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        descricao: "Navio encontrado à deriva em perfeitas condições, mas sem tripulação. Misteriosamente abandonado.",
        vitima: "7 tripulantes desaparecidos",
        localCrime: "Oceano Atlântico, próximo aos Açores",
        evidencias: [
            { id: 20, url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300", titulo: "Navio", descricao: "Embarcação encontrada", encontrada: false }
        ],
        suspeitos: [
            { nome: "Fenômeno natural", descricao: "Água-viva ou terremoto", investigado: false },
            { nome: "Motim", descricao: "Rebelião a bordo", investigado: false }
        ],
        pistas: ["Comida intacta", "Registro de bordo vazio", "Nenhum sinal de luta"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 11,
        titulo: "SOMERTON MAN",
        ano: 1948,
        local: "Adelaide, Austrália",
        pais: "Austrália",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1534751516642-7411f487a06c?w=800",
        descricao: "Homem encontrado morto com código secreto no bolso. Nunca foi identificado.",
        vitima: "Homem não identificado",
        localCrime: "Praia de Somerton, Austrália",
        evidencias: [
            { id: 21, url: "https://images.unsplash.com/photo-1585123334904-845d60e6b562?w=300", titulo: "Código", descricao: "Código indecifrável", encontrada: false }
        ],
        suspeitos: [
            { nome: "Espião", descricao: "Guerra Fria", investigado: false },
            { nome: "Professor", descricao: "Possível suicídio", investigado: false }
        ],
        pistas: ["Código nunca quebrado", "Etiqueta de roupa removida", "Veneno no corpo"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 12,
        titulo: "MENINA DE NITERÓI",
        ano: 2008,
        local: "Niterói, RJ",
        pais: "Brasil",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=800",
        descricao: "Corpo de uma menina foi encontrado em uma mala em Niterói. Nunca foi identificada.",
        vitima: "Menina não identificada, aproximadamente 10 anos",
        localCrime: "Niterói, Rio de Janeiro",
        evidencias: [
            { id: 22, url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300", titulo: "Mala", descricao: "Mala encontrada", encontrada: false }
        ],
        suspeitos: [
            { nome: "Familiar", descricao: "Possível abuso doméstico", investigado: false },
            { nome: "Desconhecido", descricao: "Crime sexual", investigado: false }
        ],
        pistas: ["DNA não identificado", "Roupas removidas", "Nenhum familiar procurou"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 13,
        titulo: "ASSASSINATO DO CONDE DRÁCULA",
        ano: 1890,
        local: "Londres, Inglaterra",
        pais: "Inglaterra",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
        descricao: "Inspirou Bram Stoker para criar Drácula. Príncipe Vlad Tepes, conhecido como Empalador, teve morte misteriosa.",
        vitima: "Vlad III, Príncipe da Valáquia",
        localCrime: "Romênia",
        evidencias: [
            { id: 23, url: "https://images.unsplash.com/photo-1583321500900-82888e5a5484?w=300", titulo: "Túmulo", descricao: "Local do enterro", encontrada: false }
        ],
        suspeitos: [
            { nome: "Turcos Otomanos", descricao: "Inimigos de guerra", investigado: false }
        ],
        pistas: ["Cabeça levada como troféu", "Corpo nunca encontrado", "Lendas de vampirismo"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 14,
        titulo: "ROANOKE COLONY",
        ano: 1590,
        local: "Carolina do Norte, EUA",
        pais: "EUA",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        descricao: "Colônia inglesa desapareceu misteriosamente. Única pista: palavra 'CROATOAN' esculpida.",
        vitima: "115 colonos desaparecidos",
        localCrime: "Ilha Roanoke, EUA",
        evidencias: [
            { id: 24, url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300", titulo: "Árvore", descricao: "Palavra esculpida", encontrada: false }
        ],
        suspeitos: [
            { nome: "Índios Croatoan", descricao: "Possível assimilação", investigado: false },
            { nome: "Espanhóis", descricao: "Ataque inimigo", investigado: false }
        ],
        pistas: ["Forte desmontado", "Nenhum corpo encontrado", "Secas severas na época"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 15,
        titulo: "FLORESTA DE HOIA BACIU",
        ano: 1968,
        local: "Romênia",
        pais: "Romênia",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
        descricao: "Floresta conhecida como 'Triângulo das Bermudas da Romênia'. Pessoas desaparecem, OVNIs são vistos.",
        vitima: "Múltiplos desaparecidos",
        localCrime: "Floresta Hoia Baciu, Romênia",
        evidencias: [
            { id: 25, url: "https://images.unsplash.com/photo-1516214104703-d8707988c0b4?w=300", titulo: "Floresta", descricao: "Área misteriosa", encontrada: false }
        ],
        suspeitos: [
            { nome: "Fenômeno paranormal", descricao: "Portal dimensional", investigado: false },
            { nome: "Gases tóxicos", descricao: "Alucinações coletivas", investigado: false }
        ],
        pistas: ["Fotos de OVNIs", "Árvores tortas", "Bússolas enlouquecem"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 16,
        titulo: "TAMAM SHUD CASE",
        ano: 1948,
        local: "Austrália",
        pais: "Austrália",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1534751516642-7411f487a06c?w=800",
        descricao: "Homem encontrado morto com frase 'Tamám Shud' no bolso, que significa 'acabou' em persa.",
        vitima: "Homem não identificado",
        localCrime: "Praia de Somerton, Austrália",
        evidencias: [
            { id: 26, url: "https://images.unsplash.com/photo-1585123334904-845d60e6b562?w=300", titulo: "Código", descricao: "Código indecifrável", encontrada: false }
        ],
        suspeitos: [
            { nome: "Espião soviético", descricao: "Guerra Fria", investigado: false }
        ],
        pistas: ["Livro raro encontrado", "Código nunca decifrado", "Veneno misterioso"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 17,
        titulo: "SINAL DE UVB-76",
        ano: 1976,
        local: "Rússia",
        pais: "Rússia",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800",
        descricao: "Estação de rádio que transmite bipe constante há décadas. Raramente há mensagens de voz.",
        vitima: "N/A - Mistério de comunicação",
        localCrime: "Estação de rádio na Rússia",
        evidencias: [
            { id: 27, url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300", titulo: "Frequência", descricao: "4625 kHz", encontrada: false }
        ],
        suspeitos: [
            { nome: "Militares russos", descricao: "Sistema de Dead Hand", investigado: false }
        ],
        pistas: ["Bipe constante", "Mensagens raras", "Estação nunca desativada"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 18,
        titulo: "SERRA DA MANTIQUEIRA",
        ano: 2019,
        local: "São Paulo/Minas, Brasil",
        pais: "Brasil",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
        descricao: "Série de desaparecimentos na região serrana. Mais de 30 pessoas sumiram desde 2019.",
        vitima: "Mais de 30 desaparecidos",
        localCrime: "Serra da Mantiqueira, divisa SP/MG",
        evidencias: [
            { id: 28, url: "https://images.unsplash.com/photo-1516214104703-d8707988c0b4?w=300", titulo: "Trilhas", descricao: "Pontos de desaparecimento", encontrada: false }
        ],
        suspeitos: [
            { nome: "Serial killer", descricao: "Possível predador na região", investigado: false },
            { nome: "Tráfico de órgãos", descricao: "Rede criminosa", investigado: false }
        ],
        pistas: ["Celulares encontrados", "Testemunhas com medo", "Falta de investigação"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 19,
        titulo: "MENINA DO TÚNEL",
        ano: 2015,
        local: "São Paulo, SP",
        pais: "Brasil",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=800",
        descricao: "Menina de 6 anos encontrada morta dentro de um túnel. Caso nunca resolvido.",
        vitima: "Menina, 6 anos",
        localCrime: "Túnel em São Paulo",
        evidencias: [
            { id: 29, url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300", titulo: "Túnel", descricao: "Local do crime", encontrada: false }
        ],
        suspeitos: [
            { nome: "Familiar próximo", descricao: "Último a ver a criança", investigado: false }
        ],
        pistas: ["Marcas de arrasto", "Cabelo encontrado", "Testemunha muda"],
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 20,
        titulo: "PRÍNCIPE PERDIDO",
        ano: 1483,
        local: "Londres, Inglaterra",
        pais: "Inglaterra",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
        descricao: "Príncipes Eduardo e Ricardo desapareceram da Torre de Londres. Possivelmente assassinados por Ricardo III.",
        vitima: "Príncipes Eduardo V e Ricardo de Shrewsbury",
        localCrime: "Torre de Londres",
        evidencias: [
            { id: 30, url: "https://images.unsplash.com/photo-1583321500900-82888e5a5484?w=300", titulo: "Torre", descricao: "Local do desaparecimento", encontrada: false }
        ],
        suspeitos: [
            { nome: "Ricardo III", descricao: "Tio dos príncipes", investigado: false },
            { nome: "Henrique VII", descricao: "Sucessor ao trono", investigado: false }
        ],
        pistas: ["Ossadas encontradas", "Confissões históricas", "Documentos perdidos"],
        resolvidoPor: null,
        teoriasUsuario: []
    }
];

// Variáveis globais
let casos = JSON.parse(localStorage.getItem('coldCase20')) || casosData.map(caso => ({...caso, status: caso.status || "nao-resolvido", progresso: caso.progresso || 0}));
let casoSelecionado = casos[0];
let xpTotal = localStorage.getItem('investigadorXP20') ? parseInt(localStorage.getItem('investigadorXP20')) : 0;
let pistasEncontradas = localStorage.getItem('pistasEncontradas20') ? parseInt(localStorage.getItem('pistasEncontradas20')) : 0;
let nivel = 1;
let ranking = JSON.parse(localStorage.getItem('rankingInvestigadores')) || [];

// Sistema de conquistas
let conquistas = {
    primeiroCaso: false,
    cincoCasos: false,
    dezCasos: false,
    todosCasos: false,
    mestreDetetive: false
};

// Funções principais
function salvarProgresso() {
    localStorage.setItem('coldCase20', JSON.stringify(casos));
    localStorage.setItem('investigadorXP20', xpTotal);
    localStorage.setItem('pistasEncontradas20', pistasEncontradas);
    localStorage.setItem('rankingInvestigadores', JSON.stringify(ranking));
}

function calcularNivel() {
    nivel = Math.floor(xpTotal / 200) + 1;
    document.getElementById('nivelInvestigador').textContent = nivel;
    document.getElementById('nivelDisplay').textContent = nivel;
    return nivel;
}

function atualizarStats() {
    const total = casos.length;
    const emInv = casos.filter(c => c.status === 'nao-resolvido').length;
    const resolvidos = casos.filter(c => c.status === 'resolvido').length;
    
    document.getElementById('totalCasos').textContent = total;
    document.getElementById('emInvestigacao').textContent = emInv;
    document.getElementById('pistasEncontradas').textContent = pistasEncontradas;
    document.getElementById('xpTotal').textContent = xpTotal;
    document.getElementById('casosResolvidos').textContent = resolvidos;
    
    calcularNivel();
    
    // Verificar conquistas
    verificarConquistas(resolvidos);
}

function verificarConquistas(resolvidos) {
    if (resolvidos >= 1 && !conquistas.primeiroCaso) {
        conquistas.primeiroCaso = true;
        mostrarConquista("🏅 PRIMEIRO CASO RESOLVIDO! Você começou sua jornada como investigador!");
    }
    if (resolvidos >= 5 && !conquistas.cincoCasos) {
        conquistas.cincoCasos = true;
        mostrarConquista("🎖️ 5 CASOS RESOLVIDOS! Promovido a Detetive Pleno!");
    }
    if (resolvidos >= 10 && !conquistas.dezCasos) {
        conquistas.dezCasos = true;
        mostrarConquista("🏅 10 CASOS RESOLVIDOS! Você é um Investigador Sênior!");
    }
    if (resolvidos === 20 && !conquistas.todosCasos) {
        conquistas.todosCasos = true;
        mostrarConquista("🏆 LENDÁRIO! Você resolveu TODOS OS 20 CASOS! +500 XP!");
        xpTotal += 500;
        salvarProgresso();
        atualizarStats();
    }
}

function renderizarCasos(filtro = 'todos', searchTerm = '', yearFilter = 'todos') {
    let casosFiltrados = casos;
    
    if (filtro === 'nao-resolvido') {
        casosFiltrados = casos.filter(c => c.status === 'nao-resolvido');
    } else if (filtro === 'parcial') {
        casosFiltrados = casos.filter(c => c.status === 'parcial');
    } else if (filtro === 'resolvido') {
        casosFiltrados = casos.filter(c => c.status === 'resolvido');
    }
    
    if (searchTerm) {
        casosFiltrados = casosFiltrados.filter(c => 
            c.titulo.toLowerCase().includes(searchTerm) ||
            c.local.toLowerCase().includes(searchTerm) ||
            c.vitima.toLowerCase().includes(searchTerm) ||
            c.suspeitos.some(s => s.nome.toLowerCase().includes(searchTerm))
        );
    }
    
    if (yearFilter !== 'todos') {
        const yearRange = parseInt(yearFilter);
        if (yearRange === 1900) {
            casosFiltrados = casosFiltrados.filter(c => c.ano >= 1900 && c.ano < 1950);
        } else if (yearRange === 1950) {
            casosFiltrados = casosFiltrados.filter(c => c.ano >= 1950 && c.ano < 1990);
        } else if (yearRange === 1990) {
            casosFiltrados = casosFiltrados.filter(c => c.ano >= 1990 && c.ano < 2000);
        } else if (yearRange === 2000) {
            casosFiltrados = casosFiltrados.filter(c => c.ano >= 2000 && c.ano < 2010);
        } else if (yearRange === 2010) {
            casosFiltrados = casosFiltrados.filter(c => c.ano >= 2010);
        }
    }
    
    const casesList = document.getElementById('casesList');
    casesList.innerHTML = casosFiltrados.map(caso => `
        <div class="case-card ${casoSelecionado?.id === caso.id ? 'active' : ''}" onclick="selecionarCaso(${caso.id})">
            <div class="case-header">
                <div class="case-title">${caso.titulo}</div>
                <span class="status-badge status-${caso.status}">${getStatusText(caso.status)}</span>
            </div>
            <div class="case-meta">
                <span>📅 ${caso.ano}</span>
                <span>📍 ${caso.local}</span>
                <span>🌎 ${caso.pais}</span>
            </div>
            ${caso.progresso > 0 ? `
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${caso.progresso}%"></div>
                </div>
            ` : ''}
        </div>
    `).join('');
}

function getStatusText(status) {
    const map = {
        'nao-resolvido': '❌ NÃO RESOLVIDO',
        'parcial': '⚠️ PARCIAL',
        'resolvido': '✅ RESOLVIDO'
    };
    return map[status];
}

function selecionarCaso(id) {
    casoSelecionado = casos.find(c => c.id === id);
    renderizarDetalhesCaso();
    renderizarCasos(
        document.querySelector('.filter-btn.active')?.dataset.filter || 'todos',
        document.getElementById('searchCase')?.value || '',
        document.getElementById('yearFilter')?.value || 'todos'
    );
}

function renderizarDetalhesCaso() {
    const detailsDiv = document.getElementById('caseDetails');
    
    const evidenciasEncontradas = casoSelecionado.evidencias.filter(e => e.encontrada).length;
    const totalEvidencias = casoSelecionado.evidencias.length;
    const suspeitosInvestigados = casoSelecionado.suspeitos.filter(s => s.investigado).length;
    const totalSuspeitos = casoSelecionado.suspeitos.length;
    
    detailsDiv.innerHTML = `
        <div class="investigation-content">
            <div class="crime-scene">
                <img src="${casoSelecionado.imagemCena}" class="crime-scene-img" alt="Cena do crime">
                <div class="crime-scene-overlay">
                    <div class="crime-title">${casoSelecionado.titulo}</div>
                    <div class="crime-date">${casoSelecionado.ano} • ${casoSelecionado.local} • ${casoSelecionado.pais}</div>
                </div>
            </div>
            
            <div class="info-section">
                <div class="info-title">
                    <span>📋</span> RELATÓRIO DO CRIME
                </div>
                <div class="info-text">${casoSelecionado.descricao}</div>
            </div>
            
            <div class="info-section">
                <div class="info-title">
                    <span>👤</span> VÍTIMA
                </div>
                <div class="info-text">${casoSelecionado.vitima}</div>
            </div>
            
            <div class="info-section">
                <div class="info-title">
                    <span>📍</span> LOCAL DO CRIME
                </div>
                <div class="info-text">${casoSelecionado.localCrime}</div>
            </div>
            
            <div class="info-section">
                <div class="info-title">
                    <span>📸</span> EVIDÊNCIAS (${evidenciasEncontradas}/${totalEvidencias} investigadas)
                </div>
                <div class="evidence-grid">
                    ${casoSelecionado.evidencias.map(ev => `
                        <div class="evidence-card" onclick="investigarEvidencia(${ev.id})">
                            <img src="${ev.url}" alt="${ev.titulo}">
                            <div class="evidence-info">
                                <div class="evidence-title">${ev.titulo}</div>
                                <div class="evidence-desc">${ev.descricao}</div>
                            </div>
                            ${ev.encontrada ? '<div class="evidence-found">✓ INVESTIGADO</div>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="info-section">
                <div class="info-title">
                    <span>🔪</span> SUSPEITOS (${suspeitosInvestigados}/${totalSuspeitos} investigados)
                </div>
                <ul class="suspects-list">
                    ${casoSelecionado.suspeitos.map(sus => `
                        <li onclick="investigarSuspeito('${sus.nome}')">
                            <div>
                                <div class="suspect-name">${sus.nome}</div>
                                <div style="font-size: 11px; color: #999;">${sus.descricao}</div>
                            </div>
                            ${sus.investigado ? '<span class="suspect-status">✓ INVESTIGADO</span>' : '<span class="suspect-status">🔍 INVESTIGAR</span>'}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="info-section">
                <div class="info-title">
                    <span>💡</span> PISTAS ENCONTRADAS
                </div>
                <ul style="list-style: none;">
                    ${casoSelecionado.pistas.map(pista => `
                        <li style="padding: 8px 0; border-bottom: 1px solid #2a2a2f;">🔍 ${pista}</li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="theory-box">
                <div class="info-title">
                    <span>✍️</span> MINHA TEORIA DO CASO
                </div>
                <textarea id="teoriaUsuario" class="theory-input" rows="4" placeholder="Escreva sua teoria sobre o que aconteceu neste caso... Baseado nas evidências e pistas...">${casoSelecionado.teoriasUsuario[casoSelecionado.teoriasUsuario.length - 1] || ''}</textarea>
                <button class="btn-submit-theory" onclick="salvarTeoria()">💾 SALVAR TEORIA</button>
            </div>
            
            ${casoSelecionado.status === 'resolvido' ? `
                <div class="info-section" style="background: rgba(34, 139, 34, 0.2);">
                    <div class="info-title">
                        <span>🏆</span> CASO RESOLVIDO!
                    </div>
                    <div class="info-text">Parabéns! Você resolveu este caso!</div>
                </div>
            ` : ''}
        </div>
    `;
}

function investigarEvidencia(id) {
    const evidencia = casoSelecionado.evidencias.find(e => e.id === id);
    
    if (!evidencia.encontrada) {
        evidencia.encontrada = true;
        pistasEncontradas++;
        xpTotal += 15;
        
        atualizarProgressoCaso();
        salvarProgresso();
        atualizarStats();
        renderizarDetalhesCaso();
        renderizarCasos(
            document.querySelector('.filter-btn.active')?.dataset.filter || 'todos',
            document.getElementById('searchCase')?.value || '',
            document.getElementById('yearFilter')?.value || 'todos'
        );
        
        mostrarPista(`🔬 Evidência "${evidencia.titulo}" analisada! +15 XP`);
    }
}

function investigarSuspeito(nome) {
    const suspeito = casoSelecionado.suspeitos.find(s => s.nome === nome);
    
    if (!suspeito.investigado) {
        suspeito.investigado = true;
        pistasEncontradas++;
        xpTotal += 20;
        
        atualizarProgressoCaso();
        salvarProgresso();
        atualizarStats();
        renderizarDetalhesCaso();
        renderizarCasos(
            document.querySelector('.filter-btn.active')?.dataset.filter || 'todos',
            document.getElementById('searchCase')?.value || '',
            document.getElementById('yearFilter')?.value || 'todos'
        );
        
        mostrarPista(`🕵️ Suspeito "${nome}" interrogado! Novas informações coletadas! +20 XP`);
    }
}

function atualizarProgressoCaso() {
    const totalEvidencias = casoSelecionado.evidencias.length;
    const evidenciasEncontradas = casoSelecionado.evidencias.filter(e => e.encontrada).length;
    const suspeitosInvestigados = casoSelecionado.suspeitos.filter(s => s.investigado).length;
    
    let progresso = (evidenciasEncontradas / totalEvidencias) * 50;
    progresso += (suspeitosInvestigados / casoSelecionado.suspeitos.length) * 50;
    
    casoSelecionado.progresso = Math.floor(progresso);
    
    if (evidenciasEncontradas === totalEvidencias && suspeitosInvestigados === casoSelecionado.suspeitos.length) {
        if (casoSelecionado.status !== 'resolvido') {
            casoSelecionado.status = 'resolvido';
            casoSelecionado.progresso = 100;
            xpTotal += 100;
            
            // Adicionar ao ranking
            ranking.push({
                nome: "Ana Beatriz Santos",
                xp: xpTotal,
                casosResolvidos: casos.filter(c => c.status === 'resolvido').length,
                data: new Date().toISOString()
            });
            ranking.sort((a, b) => b.xp - a.xp);
            ranking = ranking.slice(0, 10);
            
            mostrarConquista(`🎉 CASO "${casoSelecionado.titulo}" RESOLVIDO! +100 XP`);
            
            // Verificar se completou todos
            const resolvidos = casos.filter(c => c.status === 'resolvido').length;
            if (resolvidos === 20) {
                mostrarConquista("🏆 LENDÁRIO INVESTIGADOR! Você resolveu TODOS os 20 casos!");
            }
        }
    } else if (progresso > 0 && progresso < 100 && casoSelecionado.status !== 'parcial') {
        casoSelecionado.status = 'parcial';
    }
}

function salvarTeoria() {
    const teoria = document.getElementById('teoriaUsuario').value;
    if (teoria.trim()) {
        casoSelecionado.teoriasUsuario.push(teoria);
        salvarProgresso();
        mostrarPista("📝 Teoria salva! A perícia analisará suas conclusões.");
    }
}

function mostrarPista(mensagem) {
    const modal = document.getElementById('clueModal');
    document.getElementById('clueMessage').innerHTML = mensagem;
    modal.style.display = 'block';
    
    document.getElementById('closeClueBtn').onclick = () => modal.style.display = 'none';
    document.querySelector('.close-clue').onclick = () => modal.style.display = 'none';
}

function mostrarConquista(mensagem) {
    const modal = document.getElementById('achievementModal');
    document.getElementById('achievementMessage').innerHTML = mensagem;
    modal.style.display = 'block';
    
    setTimeout(() => modal.style.display = 'none', 3000);
}

function mostrarRanking() {
    const modal = document.getElementById('rankingModal');
    const rankingList = document.getElementById('rankingList');
    
    rankingList.innerHTML = ranking.map((r, idx) => `
        <div class="ranking-item">
            <div class="ranking-position">#${idx + 1}</div>
            <div class="ranking-name">${r.nome}</div>
            <div class="ranking-xp">${r.xp} XP</div>
            <div class="ranking-cases">${r.casosResolvidos} casos</div>
        </div>
    `).join('');
    
    if (ranking.length === 0) {
        rankingList.innerHTML = '<div style="text-align:center; padding: 30px;">Nenhum ranking ainda. Resolva casos para aparecer!</div>';
    }
    
    modal.style.display = 'block';
    document.querySelector('.close-ranking').onclick = () => modal.style.display = 'none';
}

// Event Listeners
document.getElementById('searchCase')?.addEventListener('input', (e) => {
    renderizarCasos(
        document.querySelector('.filter-btn.active')?.dataset.filter || 'todos',
        e.target.value.toLowerCase(),
        document.getElementById('yearFilter')?.value || 'todos'
    );
});

document.getElementById('yearFilter')?.addEventListener('change', (e) => {
    renderizarCasos(
        document.querySelector('.filter-btn.active')?.dataset.filter || 'todos',
        document.getElementById('searchCase')?.value.toLowerCase() || '',
        e.target.value
    );
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderizarCasos(
            btn.dataset.filter,
            document.getElementById('searchCase')?.value.toLowerCase() || '',
            document.getElementById('yearFilter')?.value || 'todos'
        );
    });
});

document.getElementById('rankingFab')?.addEventListener('click', mostrarRanking);

// Inicializar
atualizarStats();
renderizarCasos('todos');
selecionarCaso(1);

console.log("🔍 SISTEMA DE INVESTIGAÇÃO CARREGADO - 20 CASOS DISPONÍVEIS!");
console.log("🎯 DESAFIO: Resolva todos os 20 casos e torne-se um Investigador Lendário!");
