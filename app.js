const favicon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23202124'/%3E%3Ctext x='32' y='39' text-anchor='middle' font-family='Arial' font-size='24' font-weight='700' fill='white'%3EAS%3C/text%3E%3Crect x='14' y='48' width='36' height='3' rx='1.5' fill='%23b8894f'/%3E%3C/svg%3E";
const icon=document.querySelector("link[rel='icon']");if(icon)icon.href=favicon;
const brand=document.querySelector('.brand');if(brand){brand.innerHTML='<span class="brand-monogram">AS</span><span class="brand-copy"><strong>AS Painting</strong><small>Quality painting in Limerick</small></span>';brand.setAttribute('aria-label','AS Painting — Home');}
document.title=document.title.replaceAll('AH Painting','AS Painting');
const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=meta.content.replaceAll('AH Painting','AS Painting');
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(n=>{n.nodeValue=n.nodeValue.replaceAll('AH PAINTING','AS PAINTING').replaceAll('AH Painting','AS Painting')});

/* Natural desktop navigation: the heading is the real page link; hovering or keyboard focus reveals its sections. */
const navStyle=document.createElement('style');
navStyle.textContent=`
.navitem{grid-template-columns:1fr!important}
.navtoggle{display:none!important}
@media (min-width:1051px) and (hover:hover){
  .navitem:hover>.dropmenu,.navitem:focus-within>.dropmenu{display:block}
  .navitem:hover>.navlabel,.navitem:focus-within>.navlabel{background:#f8f9fa;color:#174ea6}
}
`;
document.head.appendChild(navStyle);
