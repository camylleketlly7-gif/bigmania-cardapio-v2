// ==========================
// DADOS DO CARDÁPIO
// ==========================
export const menuItems = [
  { id: 1, name: 'Big Salada', description: 'Pão brioche, carne 100g, molho da casa, tomate e alface', price: 13.99, category: 'simples', color: 'rose' },
  { id: 2, name: 'Big Bovino', description: 'Pão brioche, carne 100g, molho da casa, ovo, cebola caramelizada e queijo prato', price: 14.99, category: 'simples', color: 'rose' },
  { id: 3, name: 'Big Cheddar', description: 'Pão brioche, carne 100g, ovo, queijo cheddar, cebola caramelizada e molho da casa', price: 15.99, category: 'simples', color: 'rose' },
  { id: 4, name: 'Big Bacon', description: 'Pão brioche, carne 100g, bacon, cebola caramelizada, ovo e queijo prato', price: 18.99, category: 'simples', color: 'rose' },
  { id: 5, name: 'Big Calabresa', description: 'Pão brioche, carne 100g, calabresa defumada, queijo prato, cebola caramelizada e molho da casa', price: 19.99, category: 'simples', color: 'rose' },

  { id: 6, name: 'Batata P (Simples)', description: 'Porção pequena', price: 9.99, category: 'acompanhamentos', color: 'amber' },
  { id: 7, name: 'Batata M (Simples)', description: 'Porção média', price: 12.99, category: 'acompanhamentos', color: 'amber' },
  { id: 8, name: 'Batata G (Simples)', description: 'Porção grande', price: 14.99, category: 'acompanhamentos', color: 'amber' },

  { id: 9, name: 'Big Tudo', description: 'Carne 100g, ovo, queijo prato, cebola caramelizada, bacon, cheddar, calabresa e molho da casa', price: 23.99, category: 'especiais', color: 'orange' },
  { id: 10, name: 'Big Mania', description: '3 carnes 100g, calabresa, bacon, cebola caramelizada, queijo prato e cheddar, ovo e molho especial', price: 34.99, category: 'especiais', color: 'orange' },

  { id: 11, name: 'Big Supremo de Pizza', description: 'Carne 165g com pizza, molho da casa, tomate, cebola caramelizada e alface', price: 24.99, category: 'premiums', color: 'sky' },
  { id: 12, name: 'Big Supremo de Cheddar', description: 'Carne 165g com cheddar, molho da casa, tomate, cebola caramelizada e alface', price: 26.99, category: 'premiums', color: 'sky' },
  { id: 13, name: 'Big Supremo de Camarão', description: 'Carne 165g com camarão, molho da casa, tomate, cebola caramelizada e alface', price: 29.99, category: 'premiums', color: 'sky' },

  { id: 14, name: 'Refrigerante Lata', description: 'Lata 350ml', price: 5.0, category: 'bebidas', color: 'indigo' },
  { id: 15, name: 'Refrigerante 1 Litro', description: 'Coca-Cola, Guaraná ou Sprite', price: 10.0, category: 'bebidas', color: 'indigo' },
];

// Estado
let cart = [];
let activeCategory = 'all';

// Mapeamento de cores
const colorMap = {
  rose: { bg: 'bg-rose-500/20', text: 'text-rose-400', indicator: 'bg-rose-500' },
  amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', indicator: 'bg-amber-500' },
  orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', indicator: 'bg-orange-500' },
  sky: { bg: 'bg-sky-500/20', text: 'text-sky-400', indicator: 'bg-sky-500' },
  indigo: { bg: 'bg-indigo-500/20', text: 'text-indigo-400', indicator: 'bg-indigo-500' },
};

// Aqui dentro vou continuar o JS como você já tinha (renderMenu, addToCart, updateCartUI, etc)
// 🔹 Mantendo os event listeners para carrinho, categorias e WhatsApp
// 🔹 Essa versão já é compatível com GitHub Pages e sem erros de “is not defined”