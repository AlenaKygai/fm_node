export const pow =(base,exp) =>{
    return base**exp;
}

export const mult = (a,b) => a*b;

export const sum = (...args) => args.reduce((res,arg)=>res+arg,0);

const superSecret = 'Elon Musk';

const ssFunction = ()=> superSecret;

export default ssFunction;