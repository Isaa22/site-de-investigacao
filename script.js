// Dados iniciais dos casos
let casos = JSON.parse(localStorage.getItem('casosCriminais')) || [
    {
        id: 1,
        titulo: "Caso do Hotel Tijuana - 1987",
        data: "1987-05-15",
        local: "Hotel Tijuana, São Paulo",
        status: "investigando",
        descricao: "Hóspede encontrado sem vida em seu quarto. Sem sinais de arrombamento. Suspeita-se de envenenamento.",
        evidencias: [
            { id: 1, tipo: "imagem", url: "https://picsum.photos/id/104/200/150", descricao: "Quarto do hotel - cena do crime" },
            { id: 2, tipo: "imagem", url: "https://picsum.photos/id/106/200/150", descricao: "Copo com resíduos" },
            { id: 3, tipo: "documento", url: "#", descricao: "Registro de hóspedes" }
        ],
        suspeitos: [
            "Carlos Alberto Mendes - Último a ver a vítima",
            "Funcionários do hotel em horário noturno"
        ],
        vitima: "Ricardo Oliveira, 45 anos, empresário",
        anotacoes: [
            { id: 1, texto: "Resíduos encontrados no copo enviados para análise toxicológica. Aguardando resultados.", data: "2024-01-15" },
            { id: 2, texto: "Testemunha relata ter visto uma figura encapuzada no corredor às 23h.", data: "2024-01-20" }
        ]
    },
    {
        id: 2,
        titulo: "Desaparecimento na Floresta Nacional",
        data: "1995-08-22",
        local: "Floresta Nacional, Amazonas",
        status: "ativo",
        descricao: "Três pesquisadores desapareceram durante expedição. Apenas equipamentos foram encontrados.",
        evidencias: [
            { id: 1, tipo: "imagem", url: "https://picsum.photos/id/15/200/150", descricao: "Mochila encontrada" },
            { id: 2, tipo: "imagem", url: "https://picsum.photos/id/96/200/150", descricao: "Pegadas no local" }
        ],
        suspeitos: [
            "Caçadores ilegais da região",
            "Possível acidente - equipes de busca"
        ],
        vitima: "Pesquisadores: Dr. Paulo Sérgio, Dra. Mariana Costa, Dr. João Silva",
        anotacoes: [
            { id: 1, texto: "Equipe de busca encerrada. Caso permanece sem solução.", data: "2024-01-10" }
        ]
    },
    {
        id: 3,
        titulo: "Assalto ao Banco Central - 2005",
        data: "2005-11-28",
        local: "Fortaleza, CE",
        status: "arquivado",
        descricao: "Túnel de 80 metros construído. 164 milhões de reais levados. Nenhum suspeito identificado.",
        evidencias: [
            { id: 1, tipo: "imagem", url: "https://picsum.photos/id/20/200/150", descricao: "Entrada do túnel" },
            { id: 2, tipo: "imagem", url: "https://picsum.photos/id/22/200/150", descricao: "Ferramentas encontradas" }
        ],
        suspeitos: [
            "Possível informação interna",
            "Quadrilha especializada em túneis"
        ],
        vitima: "Banco Central do Brasil",
        anotacoes: [
            { id: 1, texto: "Caso arquivado por falta de novas evidências. Prescrição em 2025.", data: "2023-12-01" }
        ]
    }
];

let casoSelecionado = null;
let proximoId = casos.length + 1;
let proximoIdAnotacao = 4;

// Salvar dados no localStorage
function salvarDados() {
    localStorage.setItem('casosCriminais', JSON.stringify(casos));
}

// Renderizar lista de casos
function renderizarListaCasos() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    
    const casosFiltrados = casos.filter(caso => {
        const matchSearch = caso.titulo.toLowerCase().includes(searchTerm) ||
                           caso.local.toLowerCase().includes(searchTerm) ||
                           caso.suspeitos.some(s => s.toLowerCase().includes(searchTerm));
        const matchStatus = statusFilter === 'todos' || caso.status === statusFilter;
        return matchSearch && matchStatus;
    });
    
    const casesList = document.getElementById('casesList');
    casesList.innerHTML = casosFiltrados.map(caso => `
        <div class="case-item ${casoSelecionado?.id === caso.id ? 'active' : ''}" onclick="selecionarCaso(${caso.id})">
            <div class="case-header">
                <div class="case-title">${caso.titulo}</div>
                <span class="status-badge status-${caso.status}">${getStatusText(caso.status)}</span>
            </div>
            <div class="case-meta">
                <span>📅 ${formatarData(caso.data)}</span>
                <span>📍 ${caso.local}</span>
                <span>📝 ${caso.anotacoes.length} anotações</span>
            </div>
        </div>
    `).join('');
    
    // Atualizar stats
    document.getElementById('totalCasos').textContent = casos.length;
    document.getElementById('investigando').textContent = casos.filter(c => c.status === 'ativo' || c.status === 'investigando').length;
    document.getElementById('totalAnotacoes').textContent = casos.reduce((sum, c) => sum + c.anotacoes.length, 0);
}

function getStatusText(status) {
    const statusMap = {
        'ativo': 'EM ANDAMENTO',
        'investigando': 'INVESTIGANDO',
        'arquivado': 'ARQUIVADO'
    };
    return statusMap[status] || status;
}

function formatarData(data) {
    if (!data) return 'Data desconhecida';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

// Selecionar caso
function selecionarCaso(id) {
    casoSelecionado = casos.find(c => c.id === id);
    renderizarDetalhesCaso();
    renderizarListaCasos();
}

// Renderizar detalhes do caso
function renderizarDetalhesCaso() {
    const detailsDiv = document.getElementById('caseDetails');
    
    if (!casoSelecionado) {
        detailsDiv.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <h3>Nenhum caso selecionado</h3>
                <p>Selecione um caso na lista para visualizar os detalhes e fazer anotações</p>
            </div>
        `;
        return;
    }
    
    detailsDiv.innerHTML = `
        <div class="case-detail-header">
            <div class="case-detail-title">🔎 ${casoSelecionado.titulo}</div>
            <div class="case-detail-meta">
                <span>📅 Data: ${formatarData(casoSelecionado.data)}</span>
                <span>📍 Local: ${casoSelecionado.local}</span>
                <span>🏷️ Status: ${getStatusText(casoSelecionado.status)}</span>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">
                <span>📋</span> Descrição do Crime
            </div>
            <p>${casoSelecionado.descricao}</p>
        </div>
        
        <div class="section">
            <div class="section-title">
                <span>👤</span> Vítima(s)
            </div>
            <p>${casoSelecionado.vitima}</p>
        </div>
        
        <div class="section">
            <div class="section-title">
                <span>🔪</span> Suspeitos
            </div>
            <ul>
                ${casoSelecionado.suspeitos.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>
        
        <div class="section">
            <div class="section-title">
                <span>📸</span> Evidências e Fotos
            </div>
            <div class="evidence-grid">
                ${casoSelecionado.evidencias.map(ev => `
                    <div class="evidence-item" onclick="abrirImagem('${ev.url}')">
                        <img src="${ev.url}" class="evidence-img" alt="${ev.descricao}">
                        <div class="evidence-label">${ev.descricao}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="annotations-area">
            <div class="section-title">
                <span>📝</span> Anotações da Investigação
            </div>
            <textarea id="novaAnotacao" class="annotation-input" rows="3" placeholder="Adicionar nova anotação..."></textarea>
            <button class="btn-save" onclick="salvarAnotacao()">💾 Salvar Anotação</button>
            
            <div class="annotations-list">
                ${casoSelecionado.anotacoes.map(anot => `
                    <div class="annotation-item">
                        <div class="annotation-text">${anot.texto}</div>
                        <div class="annotation-date">${formatarData(anot.data)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Salvar anotação
function salvarAnotacao() {
    const texto = document.getElementById('novaAnotacao').value;
    if (!texto.trim()) return;
    
    const novaAnotacao = {
        id: proximoIdAnotacao++,
        texto: texto,
        data: new Date().toISOString().split('T')[0]
    };
    
    casoSelecionado.anotacoes.push(novaAnotacao);
    salvarDados();
    renderizarDetalhesCaso();
    renderizarListaCasos();
}

// Adicionar novo caso
function adicionarCaso(event) {
    event.preventDefault();
    
    const novoTitulo = document.getElementById('caseTitle').value;
    const novaData = document.getElementById('caseDate').value;
    const novoLocal = document.getElementById('caseLocation').value;
    const novoStatus = document.getElementById('caseStatus').value;
    const novaDescricao = document.getElementById('caseDescription').value;
    
    const novoCaso = {
        id: proximoId++,
        titulo: novoTitulo,
        data: novaData || new Date().toISOString().split('T')[0],
        local: novoLocal || "Local não informado",
        status: novoStatus,
        descricao: novaDescricao || "Descrição não fornecida",
        evidencias: [
            { id: 1, tipo: "imagem", url: "https://picsum.photos/id/0/200/150", descricao: "Evidência 1" },
            { id: 2, tipo: "imagem", url: "https://picsum.photos/id/1/200/150", descricao: "Evidência 2" }
        ],
        suspeitos: ["Suspeito não identificado"],
        vitima: "Vítima não identificada",
        anotacoes: []
    };
    
    casos.push(novoCaso);
    salvarDados();
    renderizarListaCasos();
    fecharModal();
}

// Abrir imagem em nova aba
function abrirImagem(url) {
    window.open(url, '_blank');
}

// Modal functions
const modal = document.getElementById('addCaseModal');
const fab = document.getElementById('fabButton');
const closeBtn = document.querySelector('.close');

function abrirModal() {
    modal.style.display = 'block';
}

function fecharModal() {
    modal.style.display = 'none';
    document.getElementById('addCaseForm').reset();
}

// Event Listeners
fab.onclick = abrirModal;
closeBtn.onclick = fecharModal;
window.onclick = (event) => {
    if (event.target === modal) fecharModal();
};

document.getElementById('addCaseForm').addEventListener('submit', adicionarCaso);
document.getElementById('searchInput').addEventListener('input', renderizarListaCasos);
document.getElementById('statusFilter').addEventListener('change', renderizarListaCasos);

// Inicializar
renderizarListaCasos();
