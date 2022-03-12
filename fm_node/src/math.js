const cache = new Map();

export const pow =(base,exp) =>{
   const key = `${base}_${exp}`;
   if(!cache.has(key)){
    cache.set(key, base**exp);
   }
   return cache.get(key);
}

export const mult = (a,b) => a*b;

export const sum = (...args) => args.reduce((res,arg)=>res+arg,0);
