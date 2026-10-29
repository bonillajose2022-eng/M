export const isDigit=s=>typeof s==='string'&&/^[0-9]$/.test(s);
export const isCode=s=>typeof s==='string'&&/^[0-9]{4}$/.test(s);
export const cleanDigit=s=>String(s).replace(/\D/g,'').slice(0,1);
export const cleanCode=s=>String(s).replace(/\D/g,'').slice(0,4);
export const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
