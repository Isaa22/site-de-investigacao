// Casos criminais reais não resolvidos com fotos reais
const casosData = [
    {
        id: 1,
        titulo: "CASO EVANDRO CAETANO",
        ano: 1992,
        local: "São Paulo, SP",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1569834216462-c847f9e0fad1?w=800",
        descricao: "Evandro Caetano, 6 anos, desapareceu em 1992 em Guaratuba, PR. Seu corpo foi encontrado com sinais de rituais. O caso ficou conhecido como 'Caso Evandro' e até hoje não foi totalmente esclarecido. As investigações apontaram para um suposto ritual de magia negra envolvendo membros da comunidade.",
        vitima: "Evandro Caetano, 6 anos, criança desaparecida em 06/04/1992",
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
        pistas: [
            "Sangue encontrado na propriedade dos Abagge",
            "Vestimentas da vítima com substâncias estranhas",
            "Testemunhas relatam luzes estranhas na noite do crime"
        ],
        teoriaOficial: "Ritual de magia negra envolvendo membros da elite local",
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 2,
        titulo: "MISTÉRIO DO VOO 447",
        ano: 2009,
        local: "Oceano Atlântico",
        status: "parcial",
        progresso: 35,
        imagemCena: "https://images.unsplash.com/photo-1531509014726-c626b9836b29?w=800",
        descricao: "Voo Air France 447 desapareceu no Oceano Atlântico em 1º de junho de 2009 com 228 pessoas. Apenas dois anos depois os destroços foram encontrados. Até hoje existem teorias sobre falhas humanas e técnicas que levaram à tragédia.",
        vitima: "228 passageiros e tripulantes",
        localCrime: "Oceano Atlântico, entre Brasil e África",
        evidencias: [
            { id: 4, url: "https://images.unsplash.com/photo-1532100735528-2f9b1d165b7b?w=300", titulo: "Destroços", descricao: "Partes da aeronave recuperadas", encontrada: false },
            { id: 5, url: "https://images.unsplash.com/photo-1558981403-d55e9b5d6daa?w=300", titulo: "Caixa Preta", descricao: "Gravador de voo recuperado em 2011", encontrada: false },
            { id: 6, url: "https://images.unsplash.com/photo-1571786185660-df4ca10d87d1?w=300", titulo: "Radar", descricao: "Última posição registrada", encontrada: false }
        ],
        suspeitos: [
            { nome: "Falha nos sensores de velocidade", descricao: "Problema nos tubos de Pitot", investigado: false },
            { nome: "Erro humano dos pilotos", descricao: "Falta de treinamento para turbulência", investigado: false },
            { nome: "Condições climáticas severas", descricao: "Tempestade na região", investigado: false }
        ],
        pistas: [
            "Mensagens automáticas enviadas pelo avião",
            "Corpos encontrados flutuando dias depois",
            "Falha nos sensores de velocidade congelados"
        ],
        teoriaOficial: "Combinação de falhas técnicas e erro humano",
        resolvidoPor: null,
        teoriasUsuario: []
    },
    {
        id: 3,
        titulo: "ASSASSINATO DA FAMÍLIA REAL",
        ano: 1918,
        local: "Ekaterimburgo, Rússia",
        status: "nao-resolvido",
        progresso: 0,
        imagemCena: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
        descricao: "O mistério envolvendo a execução da família Romanov em 1918. Anos depois, surgiram várias pessoas afirmando serem a princesa Anastasia, que teria sobrevivido à execução. Em 1991, ossadas foram encontradas, mas duas crianças ainda estavam faltando.",
        vitima: "Família Romanov: Nikolau II, Alexandra e 5 filhos",
        localCrime: "Casa Ipatiev, Ekaterimburgo, Rússia",
        evidencias: [
            { id: 7, url: "https://images.unsplash.com/photo-1583321500900-82888e5a5484?w=300", titulo: "Casa Ipatiev", descricao: "Local da execução", encontrada: false },
            { id: 8, url: "https://images.unsplash.com/photo-1542601098-8fc114e148e2?w=300", titulo: "Ossadas", descricao: "Restos mortais encontrados", encontrada: false },
            { id: 9, url: "https://images.unsplash.com/photo-1562442671-d69f073ac699?w=300", titulo: "Diários", descricao: "Documentos da família", encontrada: false }
        ],
        suspeitos: [
            { nome: "Yakov Yurovsky", descricao: "Líder do pelotão de fuzilamento", investigado: false },
            { nome: "Vladimir Lenin", descricao: "Ordenou a execução", investigado: false },
            { nome: "Falsa Anastasia", descricao: "Anna Anderson, que alegava ser a princesa", investigado: false }
        ],
        pistas: [
            "Coroas e joias encontradas nas roupas das vítimas",
            "Os corpos foram levados para uma mina abandonada",
            "Testemunhas relataram ouvir tiros por horas"
        ],
        teoriaOficial: "Execução sumária por ordem de Lenin",
        resolvidoPor: null,
        teoriasUsuario: []
    }
];

let casos = JSON.parse(localStorage.getItem('coldCaseProgress')) || casosData;
let casoSelecionado = casos[0];
let xpTotal = localStorage.getItem('investigadorXP') ? parseInt(localStorage.getItem('investigadorXP')) : 0;
let pistasEncontradas = localStorage.getItem('pistasEncontradas') ? parseInt(localStorage.getItem('pistasEncontradas')) : 0;
let nivel = 1;

// Salvar progresso
function salvarProgresso() {
    localStorage.setItem('coldCaseProgress', JSON.stringify(casos));
    localStorage.setItem('investigadorXP', xpTotal);
    localStorage.setItem('pistasEncontradas', pistasEncontradas);
}

// Calcular nível do investigador
function calcularNivel() {
    nivel = Math.floor(xpTotal / 100) + 1;
    document.getElementById('nivelInvestigador').textContent = nivel;
}

// Atualizar estatísticas
function atualizarStats() {
    const total = casos.length;
    const emInv = casos.filter(c => c.status === 'nao-resolvido' || c.status === 'parcial').length;
    const resolvidos = casos.filter(c => c.status === 'resolvido').length;
    
    document.getElementById('totalCasos').textContent = total;
    document.getElementById('emInvestigacao').textContent = emInv;
    document.getElementById('pistasEncontradas').textContent = pistasEncontradas;
    document.getElementById('totalCasosCount').textContent = total;
    document.getElementById('casosResolvidos').textContent = resolvidos;
    
    calcularNivel();
}

// Renderizar lista de casos
function renderizarCasos(filtro = 'todos') {
    let casosFiltrados = casos;
    
    if (filtro === 'nao-resolvido') {
        casosFiltrados = casos.filter(c => c.status === 'nao-resolvido');
    } else if (filtro === 'parcial') {
        casosFiltrados = casos.filter(c => c.status === 'parcial');
    } else if (filtro === 'resolvido') {
        casosFiltrados = casos.filter(c => c.status === 'resolvido');
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
                <span>🔍 ${caso.progresso}%</span>
            </div>
            ${caso.progresso > 0 ? `<div style="margin-top: 10px;"><progress value="${caso.progresso}" max="100" style="width: 100%; height: 4px; border-radius: 2px;"></progress></div>` : ''}
        </div>
    `).join('');
}

function getStatusText(status) {
    const map = {
        'nao-resolvido': 'NÃO RESOLVIDO',
        'parcial': 'INVESTIGAÇÃO PARCIAL',
        'resolvido': 'RESOLVIDO'
    };
    return map[status];
}

// Selecionar caso
function selecionarCaso(id) {
    casoSelecionado = casos.find(c => c.id === id);
    renderizarDetalhesCaso();
    renderizarCasos(document.querySelector('.filter-btn.active')?.dataset.filter || 'todos');
}

// Renderizar detalhes
function renderizarDetalhesCaso() {
    const detailsDiv = document.getElementById('caseDetails');
    
    detailsDiv.innerHTML = `
        <div class="investigation-content">
            <div class="crime-scene">
                <img src="${casoSelecionado.imagemCena}" class="crime-scene-img" alt="Cena do crime">
                <div class="crime-scene-overlay">
                    <div class="crime-title">${casoSelecionado.titulo}</div>
                    <div class="crime-date">${casoSelecionado.ano} • ${casoSelecionado.local}</div>
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
                    <span>📸</span> EVIDÊNCIAS / FOTOS (Clique para investigar)
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
                    <span>🔪</span> SUSPEITOS (Investigue para mais informações)
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
                <button class="btn-submit-theory" onclick="salvarTeoria()">💾 SALVAR TEORIA E ENVIAR PARA PERÍCIA</button>
            </div>
            
            ${casoSelecionado.status === 'resolvido' ? `
                <div class="info-section" style="background: rgba(34, 139, 34, 0.2);">
                    <div class="info-title">
                        <span>🏆</span> CASO RESOLVIDO!
                    </div>
                    <div class="info-text">Parabéns! Você resolveu este caso em ${new Date(casoSelecionado.resolvidoPor).toLocaleDateString()}</div>
                </div>
            ` : ''}
        </div>
    `;
    
    // Verificar se o caso foi 100% resolvido
    verificarResolucaoCaso();
}

// Investigar evidência
function investigarEvidencia(id) {
    const evidencia = casoSelecionado.evidencias.find(e => e.id === id);
    
    if (!evidencia.encontrada) {
        evidencia.encontrada = true;
        pistasEncontradas++;
        xpTotal += 15;
        
        // Atualizar progresso do caso
        const totalEvidencias = casoSelecionado.evidencias.length;
        const evidenciasEncontradas = casoSelecionado.evidencias.filter(e => e.encontrada).length;
        const suspeitosInvestigados = casoSelecionado.suspeitos.filter(s => s.investigado).length;
        
        let progresso = (evidenciasEncontradas / totalEvidencias) * 50;
        progresso += (suspeitosInvestigados / casoSelecionado.suspeitos.length) * 50;
        
        casoSelecionado.progresso = Math.floor(progresso);
        
        if (casoSelecionado.progresso > 0 && casoSelecionado.progresso < 100) {
            casoSelecionado.status = 'parcial';
        } else if (casoSelecionado.progresso === 100) {
            casoSelecionado.status = 'resolvido';
            casoSelecionado.resolvidoPor = new Date().toISOString();
            xpTotal += 100;
            mostrarConquista(`🎉 VOCÊ RESOLVEU O CASO "${casoSelecionado.titulo}"! +100 XP`);
        }
        
        salvarProgresso();
        atualizarStats();
        renderizarDetalhesCaso();
        renderizarCasos(document.querySelector('.filter-btn.active')?.dataset.filter || 'todos');
        
        mostrarPista(`Você encontrou uma nova evidência: "${evidencia.titulo}"! +15 XP`);
    } else {
        alert("Você já investigou esta evidência!");
    }
}

// Investigar suspeito
function investigarSuspeito(nome) {
    const suspeito = casoSelecionado.suspeitos.find(s => s.nome === nome);
    
    if (!suspeito.investigado) {
        suspeito.investigado = true;
        pistasEncontradas++;
        xpTotal += 20;
        
        // Atualizar progresso
        const totalEvidencias = casoSelecionado.evidencias.length;
        const evidenciasEncontradas = casoSelecionado.evidencias.filter(e => e.encontrada).length;
        const suspeitosInvestigados = casoSelecionado.suspeitos.filter(s => s.investigado).length;
        
        let progresso = (evidenciasEncontradas / totalEvidencias) * 50;
        progresso += (suspeitosInvestigados / casoSelecionado.suspeitos.length) * 50;
        
        casoSelecionado.progresso = Math.floor(progresso);
        
        if (casoSelecionado.progresso > 0 && casoSelecionado.progresso < 100) {
            casoSelecionado.status = 'parcial';
        } else if (casoSelecionado.progresso === 100) {
            casoSelecionado.status = 'resolvido';
            casoSelecionado.resolvidoPor = new Date().toISOString();
            xpTotal += 100;
            mostrarConquista(`🎉 VOCÊ RESOLVEU O CASO "${casoSelecionado.titulo}"! +100 XP`);
        }
        
        salvarProgresso();
        atualizarStats();
        renderizarDetalhesCaso();
        renderizarCasos(document.querySelector('.filter-btn.active')?.dataset.filter || 'todos');
        
        mostrarPista(`Você investigou o suspeito "${nome}" e descobriu novas informações! +20 XP`);
    } else {
        alert("Você já investigou este suspeito!");
    }
}

// Salvar teoria do usuário
function salvarTeoria() {
    const teoria = document.getElementById('teoriaUsuario').value;
    if (teoria.trim()) {
        casoSelecionado.teoriasUsuario.push(teoria);
        salvarProgresso();
        alert("Teoria salva! A perícia irá analisar suas conclusões.");
    } else {
        alert("Por favor, escreva sua teoria antes de salvar.");
    }
}

// Verificar se o caso foi resolvido
function verificarResolucaoCaso() {
    const totalEvidencias = casoSelecionado.evidencias.length;
    const evidenciasEncontradas = casoSelecionado.evidencias.filter(e => e.encontrada).length;
    const suspeitosInvestigados = casoSelecionado.suspeitos.filter(s => s.investigado).length;
    
    if (evidenciasEncontradas === totalEvidencias && suspeitosInvestigados === casoSelecionado.suspeitos.length) {
        if (casoSelecionado.status !== 'resolvido') {
            casoSelecionado.status = 'resolvido';
            casoSelecionado.resolvidoPor = new Date().toISOString();
            casoSelecionado.progresso = 100;
            xpTotal += 100;
            salvarProgresso();
            atualizarStats();
            renderizarDetalhesCaso();
            renderizarCasos(document.querySelector('.filter-btn.active')?.dataset.filter || 'todos');
            mostrarConquista(`🎉 CASO RESOLVIDO! Você solucionou "${casoSelecionado.titulo}"! +100 XP`);
        }
    }
}

// Mostrar modal de pista
function mostrarPista(mensagem) {
    const modal = document.getElementById('clueModal');
    document.getElementById('clueMessage').innerHTML = mensagem;
    document.getElementById('xpGain').innerHTML = '';
    modal.style.display = 'block';
    
    document.getElementById('closeClueBtn').onclick = () => {
        modal.style.display = 'none';
    };
    
    document.querySelector('.close-clue').onclick = () => {
        modal.style.display = 'none';
    };
}

// Mostrar conquista
function mostrarConquista(mensagem) {
    const modal = document.getElementById('achievementModal');
    document.getElementById('achievementMessage').innerHTML = mensagem;
    modal.style.display = 'block';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}

// Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderizarCasos(btn.dataset.filter);
    });
});

// Inicializar
atualizarStats();
renderizarCasos('todos');
selecionarCaso(1);
