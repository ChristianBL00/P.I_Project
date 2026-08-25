const items = [
    {
      id: 1,
      category: 'surf',
      title: "Prancha de Surf Evolution 6'0",
      description: 'Bom estado, pequenos riscos na base, quilhas inclusas.',
      modality: 'Empréstimo',
      distance: '1.2 km',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'ciclismo',
      title: 'Mountain Bike Aro 29 Aro Alumínio',
      description: 'Revisada recentemente, pneus novos, sem folgas na suspensão.',
      modality: 'Troca Direta',
      distance: '3.4 km',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'tenis',
      title: 'Raquete Beach Tennis Carbono Pro',
      description: 'Uso leve, corda em ótimo estado, capa protetora inclusa.',
      modality: 'Ambos',
      distance: '0.8 km',
      rating: '5.0',
      image: 'https://http2.mlstatic.com/D_NQ_NP_972304-MLA112269973819_052026-O.webp'
    },
    {
      id: 4,
      category: 'camping',
      title: 'Barraca Impermeável 4 Pessoas',
      description: 'Armada poucas vezes, costuras impermeabilizadas recentemente.',
      modality: 'Empréstimo',
      distance: '2.1 km',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      category: 'coletivos',
      title: 'Kit 10 Bolas de Futebol Society',
      description: 'Bolas oficiais, uso recreativo, pressão calibrada.',
      modality: 'Troca Direta',
      distance: '4.6 km',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 6,
      category: 'surf',
      title: 'Stand Up Paddle Inflável 10\'6',
      description: 'Vem com bomba manual e remo ajustável, sem furos.',
      modality: 'Ambos',
      distance: '5.0 km',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 7,
      category: 'ciclismo',
      title: 'Bike Speed Urbana 700c',
      description: 'Ideal para trajetos longos, marchas Shimano revisadas.',
      modality: 'Empréstimo',
      distance: '1.7 km',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 8,
      category: 'camping',
      title: 'Mochila de Trilha 60L',
      description: 'Estrutura reforçada, capa de chuva inclusa, poucos usos.',
      modality: 'Troca Direta',
      distance: '2.9 km',
      rating: '4.5',
      image: 'https://cf.shopee.com.br/file/sg-11134201-824jc-me8u0eat4xkx04'
    }
  ];

  const modalityStyles = {
    'Empréstimo': 'modality-emprestimo',
    'Troca Direta': 'modality-troca',
    'Ambos': 'modality-ambos'
  };
  
  const itemsGrid = document.getElementById('itemsGrid');
  const emptyState = document.getElementById('emptyState');
  const resultCount = document.getElementById('resultCount');
  const categoryBar = document.getElementById('categoryBar');
  
  const modalOverlay = document.getElementById('modalOverlay');
  const modalPanel = document.getElementById('modalPanel');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalModality = document.getElementById('modalModality');
  const modalOwnerRating = document.getElementById('modalOwnerRating');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  
  const proposalForm = document.getElementById('proposalForm');
  const successMessage = document.getElementById('successMessage');
  const submitProposalBtn = document.getElementById('submitProposalBtn');
  const insuranceToggle = document.getElementById('insuranceToggle');
  
  // ======================= RENDERIZAÇÃO DE ITEMS ======================= 
  function renderItems(category = 'todos') {
    const filtered = category === 'todos'
      ? items
      : items.filter(item => item.category === category);
  
    itemsGrid.innerHTML = '';
  
    if (filtered.length === 0) {
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
    }
  
    resultCount.textContent = `${filtered.length} equipamento${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;
  
    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'item-card';
  
      card.innerHTML = `
        <div class="item-image">
          <img src="${item.image}" alt="${item.title}" />
          <span class="item-distance"><i class="fa-solid fa-location-dot" style="color: rgb(211, 3, 3);"></i> ${item.distance}</span>
        </div>
  
        <div class="item-content">
          <h3 class="item-title">${item.title}</h3>
          <p class="item-description">${item.description}</p>
  
          <div class="item-footer">
            <span class="item-modality ${modalityStyles[item.modality]}">
              ${item.modality}
            </span>
            <span class="item-rating"><i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i> ${item.rating}</span>
          </div>
  
          <button
            class="request-btn"
            data-id="${item.id}"
            aria-label="Solicitar negociação para ${item.title}"
          >
            Solicitar Negociação
          </button>
        </div>
      `;
  
      itemsGrid.appendChild(card);
    });
  
    lucide.createIcons();
    attachRequestListeners();
  }
  
  // ======================= EVENT LISTENERS - CATEGORIAS ======================= 
  categoryBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-pill');
    if (!btn) return;
  
    categoryBar.querySelectorAll('.category-pill').forEach(pill => {
      pill.classList.remove('active');
    });
    btn.classList.add('active');
  
    renderItems(btn.dataset.category);
  });
  
  // ======================= MODAL - ABRIR/FECHAR ======================= 
  function attachRequestListeners() {
    document.querySelectorAll('.request-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openModal(Number(btn.dataset.id));
      });
    });
  }
  
  function openModal(itemId) {
    const item = items.find(i => i.id === itemId);
    if (!item) return;
  
    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    modalModality.textContent = item.modality;
    modalOwnerRating.textContent = `⭐️ ${item.rating}`;
  
    proposalForm.reset();
    successMessage.classList.add('hidden');
    submitProposalBtn.classList.remove('hidden');
    setInsuranceState(true);
  
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
  
  modalCloseBtn.addEventListener('click', closeModal);
  
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
      closeModal();
    }
  });
  
  // ======================= TOGGLE DE SEGURO ======================= 
  function setInsuranceState(active) {
    insuranceToggle.dataset.active = active;
    insuranceToggle.setAttribute('aria-pressed', String(active));
    
    if (active) {
      insuranceToggle.classList.remove('inactive');
    } else {
      insuranceToggle.classList.add('inactive');
    }
  }
  
  insuranceToggle.addEventListener('click', () => {
    const isActive = insuranceToggle.dataset.active === 'true';
    setInsuranceState(!isActive);
  });
  
  // ======================= FORMULÁRIO DE PROPOSTA ======================= 
  proposalForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
  
    if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
      alert('A data de fim não pode ser anterior à data de início.');
      return;
    }
  
    successMessage.classList.remove('hidden');
    submitProposalBtn.classList.add('hidden');
  
    setTimeout(() => {
      closeModal();
    }, 1800);
  });
  
  // ======================= BOTÕES DE AÇÃO ======================= 
  const postItemBtn = document.getElementById('postItemBtn');
  const postItemBtnMobile = document.getElementById('postItemBtnMobile');
  const radiusBtn = document.getElementById('radiusBtn');
  
  if (postItemBtn) {
    postItemBtn.addEventListener('click', () => {
      alert('Em breve: formulário de anúncio de novo item na Tradefy!');
    });
  }
  
  if (postItemBtnMobile) {
    postItemBtnMobile.addEventListener('click', () => {
      alert('Em breve: formulário de anúncio de novo item na Tradefy!');
    });
  
  
  if (radiusBtn) {
    radiusBtn.addEventListener('click', () => {
      alert('Ajuste de raio de busca em breve disponível.');
    });
  }
  
  // ======================= ANIMAÇÃO DE CONTADORES ======================= 
  function animateCounters() {
    document.querySelectorAll('[data-counter]').forEach(el => {
      const target = Number(el.dataset.counter);
      const duration = 1200;
      const startTime = performance.now();
  
      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value.toLocaleString('pt-BR');
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }
      
      requestAnimationFrame(step);
    });
  }
  
  // ======================= INICIALIZAÇÃO ======================= 
  document.addEventListener('DOMContentLoaded', () => {
    renderItems('todos');
    animateCounters();
    lucide.createIcons();
  })};