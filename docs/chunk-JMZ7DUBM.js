var j=Object.defineProperty,n=Object.defineProperties;var o=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var i=(c,b,a)=>b in c?j(c,b,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[b]=a,r=(c,b)=>{for(var a in b||={})p.call(b,a)&&i(c,a,b[a]);if(h)for(var a of h(b))q.call(b,a)&&i(c,a,b[a]);return c},s=(c,b)=>n(c,o(b));var t=(c,b)=>{for(var a in b)j(c,a,{get:b[a],enumerable:!0})};var u=(c,b,a)=>new Promise((k,g)=>{var l=d=>{try{e(a.next(d))}catch(f){g(f)}},m=d=>{try{e(a.throw(d))}catch(f){g(f)}},e=d=>d.done?k(d.value):Promise.resolve(d.value).then(l,m);e((a=a.apply(c,b)).next())});export{r as a,s as b,t as c,u as d};
