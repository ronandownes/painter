const translations=window.translationParts||{};
const select=document.getElementById('language');
const englishReset=document.getElementById('english-reset');
const saved=localStorage.getItem('painter-language');
const initial=saved&&translations[saved]?saved:'en';

function setLanguage(lang){
  const d=translations[lang]||translations.en||{};
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  select.value=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(d[key]) el.textContent=d[key];
  });
  localStorage.setItem('painter-language',lang);
}

select.addEventListener('change',e=>setLanguage(e.target.value));
englishReset.addEventListener('click',()=>setLanguage('en'));
document.getElementById('year').textContent=new Date().getFullYear();
setLanguage(initial);
