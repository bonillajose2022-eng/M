const KEY='aspaen_secret_code_v3';
export const read=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return {}}};
export const write=(s)=>{try{localStorage.setItem(KEY,JSON.stringify(s))}catch(e){console.warn('Storage unavailable',e)}};
export const wipe=()=>{localStorage.removeItem(KEY)};
