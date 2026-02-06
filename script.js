// ==========================
// CORRIGIDO: garante que o código só rode depois do HTML carregar
// ==========================
document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // DADOS DO CARDÁPIO
  // ==========================
  const menuItems = [
    // Simples
    { id: 1, name: 'Big Salada', description: 'Pão brioche, carne 100g, molho da casa, tomate e alface', price: 13.99, category: 'simples', color: 'rose' },
    { id: 2, name: 'Big Bovino', description: 'Pão brioche, carne 100g, molho da casa, ovo, cebola caramelizada e queijo prato', price: 14.99, category: 'simples', color: 'rose' },
    { id: 3, name: 'Big Cheddar', description: 'Pão brioche, carne 100g, ovo, queijo cheddar, cebola caramelizada e molho da casa', price: 15.99, category: 'simples', color: 'rose' },
    { id: 4, name: 'Big Bacon', description: 'Pão brioche, carne 100g, bacon, cebola caramelizada, ovo e queijo prato', price: 18.99, category: 'simples', color: 'rose' },
    { id: 5, name: 'Big Calabresa', description: 'Pão brioche, carne 100g, calabresa defumada, queijo prato, cebola caramelizada e molho da casa', price: 19.99, category: 'simples', color: 'rose' },

    // Acompanhamentos
    { id: 6, name: 'Batata P (Simples)', description: 'Porção pequena', price: 9.99, category: 'acompanhamentos', color: 'amber' },
    { id: 7, name: 'Batata M (Simples)', description: 'Porção média', price: 12.99, category: 'acompanhamentos', color: 'amber' },
    { id: 8, name: 'Batata G (Simples)', description: 'Porção grande', price: 14.99, category: 'acompanhamentos', color: 'amber' },

    // Especiais
    { id: 9, name: 'Big Tudo', description: 'Carne 100g, ovo, queijo prato, cebola caramelizada, bacon, cheddar, calabresa e molho da casa', price: 23.99, category: 'especiais', color: 'orange' },
    { id: 10, name: 'Big Mania', description: '3 carnes 100g, calabresa, bacon, cebola caramelizada, queijo prato e cheddar, ovo e molho especial', price: 34.99, category: 'especiais', color: 'orange' },

    // Premiums
    { id: 11, name: 'Big Supremo de Pizza', description: 'Carne 165g com pizza, molho da casa, tomate, cebola caramelizada e alface', price: 24.99, category: 'premiums', color: 'sky' },
    { id: 12, name: 'Big Supremo de Cheddar', description: 'Carne 165g com cheddar, molho da casa, tomate, cebola caramelizada e alface', price: 26.99, category: 'premiums', color: 'sky' },
    { id: 13, name: 'Big Supremo de Camarão', description: 'Carne 165g com camarão, molho da casa, tomate, cebola caramelizada e alface', price: 29.99, category: 'premiums', color: 'sky' },

    // Bebidas
    { id: 14, name: 'Refrigerante Lata', description: 'Lata 350ml', price: 5.0, category: 'bebidas', color: 'indigo' },
    { id: 15, name: 'Refrigerante 1 Litro', description: 'Coca-Cola, Guaraná ou Sprite', price: 10.0, category: 'bebidas', color: 'indigo' },
  ];

  // ==========================
  // VARIÁVEIS DE ESTADO
  // ==========================
  let cart = [];
  let activeCategory = 'all';

  const colorMap = {
    rose: { bg: 'bg-rose-500/20', text: 'text-rose-400', indicator: 'bg-rose-500' },
    amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', indicator: 'bg-amber-500' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', indicator: 'bg-orange-500' },
    sky: { bg: 'bg-sky-500/20', text: 'text-sky-400', indicator: 'bg-sky-500' },
    indigo: { bg: 'bg-indigo-500/20', text: 'text-indigo-400', indicator: 'bg-indigo-500' },
  };

  // ==========================
  // FUNÇÕES PRINCIPAIS
  // ==========================
  function renderMenu() {
    const container = document.getElementById('menu-container');
    const filteredItems = activeCategory === 'all' ? menuItems : menuItems.filter(i => i.category === activeCategory);

    container.innerHTML = filteredItems.map((item, index) => {
      const colors = colorMap[item.color];
      const cartItem = cart.find(c => c.id === item.id);
      const quantity = cartItem ? cartItem.quantity : 0;

      return `
        <div class="item-card bg-neutral-900 rounded-xl p-5 flex gap-4 animate-slide-in border border-neutral-800" style="animation-delay: ${index * 50}ms">
          <div class="category-indicator ${colors.indicator}"></div>
          <div class="flex-1">
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <h3 class="font-semibold text-lg text-white">${item.name}</h3>
                <p class="text-neutral-400 text-sm mt-1">${item.description}</p>
              </div>
              <div class="text-right">
                <span class="${colors.bg} ${colors.text} px-3 py-1 rounded-lg text-sm font-bold">
                  R$ ${item.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>
            <div class="flex items-center justify-end mt-4 gap-3">
              ${
                quantity > 0
                  ? `
                    <div class="flex items-center gap-2 bg-neutral-800 rounded-lg p-1">
                      <button onclick="updateQuantity(${item.id}, -1)" class="quantity-btn w-8 h-8 rounded-lg bg-neutral-700 hover:bg-neutral-600 flex items-center justify-center text-white font-bold">−</button>
                      <span class="w-8 text-center font-semibold text-white">${quantity}</span>
                      <button onclick="updateQuantity(${item.id}, 1)" class="quantity-btn w-8 h-8 rounded-lg bg-neutral-700 hover:bg-neutral-600 flex items-center justify-center text-white font-bold">+</button>
                    </div>`
                  : `<button onclick="addToCart(${item.id})" class="bg-amber-500 hover:bg-amber-400 text-neutral-900 px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                      </svg>
                      Adicionar
                    </button>`
              }
            </div>
          </div>
        </div>`;
    }).join('');
  }

  // === CARRINHO, PAGAMENTO, WHATSAPP, ETC (SEU CÓDIGO ORIGINAL) ===
  // ⚠️ Copia o resto do seu código daqui pra baixo exatamente igual
  // (não há necessidade de mudar nada dentro, só manter tudo dentro do bloco do DOMContentLoaded)

  // --- cole todo o resto aqui (addToCart, updateCartUI, submitOrder, showToast, etc.) ---

  // Inicializa o site
  renderMenu();
  updateCartUI();

}); // <-- fecha o DOMContentLoaded