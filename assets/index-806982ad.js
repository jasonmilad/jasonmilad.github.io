(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function C(){}function Y(e){return e()}function K(){return Object.create(null)}function A(e){e.forEach(Y)}function Z(e){return typeof e=="function"}function te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let M;function D(e,t){return M||(M=document.createElement("a")),M.href=t,e===M.href}function ne(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function b(){return B(" ")}function re(){return B("")}function Q(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return Array.from(e.childNodes)}function oe(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function w(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function _(e,t,n){e.classList[n?"add":"remove"](t)}let P;function j(e){P=e}function se(){if(!P)throw new Error("Function called outside component initialization");return P}function ie(e){se().$$.on_mount.push(e)}const E=[],R=[],q=[],U=[],ae=Promise.resolve();let I=!1;function ce(){I||(I=!0,ae.then(ee))}function z(e){q.push(e)}const F=new Set;let S=0;function ee(){const e=P;do{for(;S<E.length;){const t=E[S];S++,j(t),fe(t.$$)}for(j(null),E.length=0,S=0;R.length;)R.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];F.has(n)||(F.add(n),n())}q.length=0}while(E.length);for(;U.length;)U.pop()();I=!1,F.clear(),j(e)}function fe(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const ue=new Set;function de(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function me(e,t,n,r){const{fragment:l,after_update:o}=e.$$;l&&l.m(t,n),r||z(()=>{const a=e.$$.on_mount.map(Y).filter(Z);e.$$.on_destroy?e.$$.on_destroy.push(...a):A(a),e.$$.on_mount=[]}),o.forEach(z)}function pe(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){e.$$.dirty[0]===-1&&(E.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function he(e,t,n,r,l,o,a,u=[-1]){const g=P;j(e);const s=e.$$={fragment:null,ctx:[],props:o,update:C,not_equal:l,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:K(),dirty:u,skip_bound:!1,root:t.target||g.$$.root};a&&a(s.root);let y=!1;if(s.ctx=n?n(e,t.props||{},(i,$,...L)=>{const d=L.length?L[0]:$;return s.ctx&&l(s.ctx[i],s.ctx[i]=d)&&(!s.skip_bound&&s.bound[i]&&s.bound[i](d),y&&_e(e,i)),$}):[],s.update(),y=!0,A(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const i=le(t.target);s.fragment&&s.fragment.l(i),i.forEach(v)}else s.fragment&&s.fragment.c();t.intro&&de(e.$$.fragment),me(e,t.target,t.anchor,t.customElement),ee()}j(g)}class ge{$destroy(){pe(this,1),this.$destroy=C}$on(t,n){if(!Z(n))return C;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const we="/assets/moon-1058d95e.svg",ke="/assets/sun-58dc9d95.svg";function V(e){let t,n;return{c(){t=h("h1"),n=B(e[4]),w(t,"position","absolute"),w(t,"top","50%"),w(t,"left","50%"),w(t,"-ms-transform","translate(-50%, -50%)"),w(t,"transform","translate(-50%, -50%)"),c(t,"class","svelte-10rwsxa")},m(r,l){N(r,t,l),f(t,n)},p(r,l){l&16&&oe(n,r[4])},d(r){r&&v(t)}}}function W(e){let t,n,r,l,o,a,u,g,s,y,i,$,L,d,O,G,x,H,J,m=e[1]&&X();return{c(){t=h("div"),n=h("div"),r=h("a"),r.textContent="Skills",l=b(),o=h("a"),o.textContent="Projects",a=b(),u=h("a"),u.textContent="Github",g=b(),s=h("a"),s.textContent="Linkedin",y=b(),i=h("div"),$=B("jmilad@uwaterloo.ca "),m&&m.c(),L=b(),d=h("img"),G=b(),x=h("div"),x.innerHTML=`<h1 class="svelte-10rwsxa">Jason Milad</h1> 
<p class="svelte-10rwsxa">Entrepreneur. Programmer. Student.</p>`,c(r,"id","skills"),c(r,"class","element svelte-10rwsxa"),_(r,"dark",e[0]),c(o,"id","projects"),c(o,"class","element svelte-10rwsxa"),w(o,"margin-right","auto"),_(o,"dark",e[0]),c(u,"class","element svelte-10rwsxa"),c(u,"id","github"),c(u,"href","https://github.com/jasonmilad"),_(u,"dark",e[0]),c(s,"class","element svelte-10rwsxa"),c(s,"id","Linkedin"),c(s,"href","https://www.linkedin.com/in/jasonmilad/"),_(s,"dark",e[0]),c(i,"class","element svelte-10rwsxa"),c(i,"id","email"),w(i,"display","relative"),_(i,"dark",e[0]),c(d,"class","element svelte-10rwsxa"),c(d,"id","logo"),D(d.src,O=e[2])||c(d,"src",O),_(d,"dark",e[0]),c(n,"class","navbar svelte-10rwsxa"),c(x,"id","intro"),c(x,"class","svelte-10rwsxa"),c(t,"class","content svelte-10rwsxa")},m(p,k){N(p,t,k),f(t,n),f(n,r),f(n,l),f(n,o),f(n,a),f(n,u),f(n,g),f(n,s),f(n,y),f(n,i),f(i,$),m&&m.m(i,null),f(n,L),f(n,d),f(t,G),f(t,x),H||(J=[Q(i,"click",e[5]),Q(d,"click",e[6])],H=!0)},p(p,k){k&1&&_(r,"dark",p[0]),k&1&&_(o,"dark",p[0]),k&1&&_(u,"dark",p[0]),k&1&&_(s,"dark",p[0]),p[1]?m||(m=X(),m.c(),m.m(i,null)):m&&(m.d(1),m=null),k&1&&_(i,"dark",p[0]),k&4&&!D(d.src,O=p[2])&&c(d,"src",O),k&1&&_(d,"dark",p[0])},d(p){p&&v(t),m&&m.d(),H=!1,A(J)}}}function X(e){let t;return{c(){t=h("div"),t.textContent="Copied!",w(t,"position","absolute"),w(t,"top","3.7rem"),w(t,"text-align","center")},m(n,r){N(n,t,r)},d(n){n&&v(t)}}}function ye(e){let t,n,r=!e[3]&&V(e),l=e[3]&&W(e);return{c(){r&&r.c(),t=b(),l&&l.c(),n=re()},m(o,a){r&&r.m(o,a),N(o,t,a),l&&l.m(o,a),N(o,n,a)},p(o,[a]){o[3]?r&&(r.d(1),r=null):r?r.p(o,a):(r=V(o),r.c(),r.m(t.parentNode,t)),o[3]?l?l.p(o,a):(l=W(o),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},i:C,o:C,d(o){r&&r.d(o),o&&v(t),l&&l.d(o),o&&v(n)}}}function T(e){return new Promise(t=>{setTimeout(t,e)})}function be(e,t,n){let r=!1,l=!1,o,a=!1,u=["Hola","olá","أهلا","你好","Привет","नमस्ते","ciao","Bonjour","Hello."],g=u[0];async function s(){await navigator.clipboard.writeText("jmilad@uwaterloo.ca"),n(1,l=!0),await T(1500),n(1,l=!1)}ie(async()=>{window.matchMedia("(prefers-color-scheme: dark)").matches?(window.document.body.classList.toggle("dark"),n(0,r=!0)):window.document.body.classList.toggle("light"),await T(500);for(let i=1;i<u.length;i++)n(4,g=u[i]),await T(500);await T(1e3),n(3,a=!0)});const y=()=>{n(0,r=!r),window.document.body.classList.toggle("dark"),window.document.body.classList.toggle("light")};return e.$$.update=()=>{e.$$.dirty&1&&(r?n(2,o=ke):n(2,o=we))},[r,l,o,a,g,s,y]}class ve extends ge{constructor(t){super(),he(this,t,be,ye,te,{})}}new ve({target:document.getElementById("app")});