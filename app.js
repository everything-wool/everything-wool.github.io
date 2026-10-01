async function getProducts(){
  const r = await fetch('data/products.json?v=' + Date.now());
  if(!r.ok) throw new Error('Could not load product data');
  return r.json();
}
function money(v){
  if(v === '' || v == null || Number.isNaN(Number(v))) return '';
  return new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(Number(v));
}
function productCard(p){
  const image = p.image || 'assets/logo.jpeg';
  const stock = Number(p.stock || 0);
  return `<article class="product">
    <img src="${escapeHtml(image)}" alt="${escapeHtml(p.name)}">
    <div class="product-body">
      <h3>${escapeHtml(p.name)}</h3>
      ${p.category ? `<p>${escapeHtml(p.category)}</p>` : ''}
      ${p.price !== '' && p.price != null ? `<p class="price">${money(p.price)}</p>` : ''}
      <p class="stock ${stock > 0 ? 'in-stock':'out-stock'}">${stock > 0 ? `${stock} in stock` : 'Out of stock'}</p>
    </div>
  </article>`;
}
function escapeHtml(v){return String(v ?? '').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
async function loadProducts(targetId, opts={}){
  const el=document.getElementById(targetId); if(!el) return;
  try{
    let products=await getProducts();
    if(opts.featuredOnly) products=products.filter(p=>String(p.featured).toLowerCase()==='true');
    if(opts.search) { const q=opts.search.toLowerCase(); products=products.filter(p=>(p.name+' '+p.category+' '+p.description).toLowerCase().includes(q)); }
    if(opts.limit) products=products.slice(0,opts.limit);
    el.innerHTML=products.length ? products.map(productCard).join('') : '<p>No products found.</p>';
  }catch(e){el.innerHTML='<p>Product information is temporarily unavailable.</p>';}
}
document.querySelectorAll('#year').forEach(e=>e.textContent=new Date().getFullYear());
