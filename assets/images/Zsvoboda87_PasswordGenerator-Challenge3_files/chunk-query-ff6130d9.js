System.register(["./chunk-vendor.js"],function(f){"use strict";var S,g,T,m,a,b;return{setters:[function(d){S=d.b,g=d.c,T=d.X,m=d.Y,a=d.j,b=d.t}],execute:function(){f({i:P,p:C});var d=Object.defineProperty,G=Object.getOwnPropertyDescriptor,_=(e,t)=>d(e,"name",{value:t,configurable:!0}),x=(e,t,r,s)=>{for(var o=s>1?void 0:s?G(t,r):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(o=(s?p(t,r,o):p(o))||o);return s&&o&&d(t,r,o),o};let c=class extends HTMLElement{connectedCallback(){this.classList.add("Truncate","d-inline-flex")}get lastToken(){return this.tokens[this.tokens.length-1]}get text(){return this.tokens.map(e=>e.text).join("")}get id(){return this.lastToken?this.lastToken.id:c.emptyScope.id}get type(){return this.lastToken?this.lastToken.type:c.emptyScope.type}get scope(){return this.hasScope()?{text:this.text,type:this.type,id:this.id,tokens:this.tokens}:c.emptyScope}set scope(e){this.renderTokens(e.tokens)}renderTokens(e){this.clearScope();const t=_(s=>m`${s.map(r)}`,"tokensTemplate"),r=_(s=>{const o=s.text.length>27?`${s.text.substring(0,24)}...`:s.text;return m`
        <command-palette-token
          data-text="${s.text}"
          data-id="${s.id}"
          data-type="${s.type}"
          data-value="${s.value}"
          data-targets="command-palette-scope.tokens"
          >${o}<span class="color-fg-subtle">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        </command-palette-token>
      `},"tokenTemplate");T(t(e),this),this.hidden=!this.hasScope()}removeToken(){this.lastToken&&(this.lastRemovedToken=this.lastToken,this.lastToken.remove(),this.renderTokens(this.tokens))}hasScope(){return this.tokens.length>0&&this.type&&this.id&&this.text}clearScope(){for(const e of this.tokens)e.remove()}};_(c,"CommandPaletteScopeElement"),c.emptyScope={type:"",text:"",id:"",tokens:[]},x([S],c.prototype,"tokens",2),c=x([g],c);var $=Object.defineProperty,E=Object.getOwnPropertyDescriptor,I=(e,t)=>$(e,"name",{value:t,configurable:!0}),h=(e,t,r,s)=>{for(var o=s>1?void 0:s?E(t,r):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(o=(s?p(t,r,o):p(o))||o);return s&&o&&$(t,r,o),o};let i=f("C",class extends HTMLElement{constructor(){super(...arguments);this.defaultPriority=0}connectedCallback(){this.classList.add("py-2","border-top"),this.setAttribute("hidden","true"),this.renderElement("")}prepareForNewItems(){this.list.innerHTML="",this.setAttribute("hidden","true"),this.classList.contains("border-top")||this.classList.add("border-top")}hasItem(e){return this.list.querySelectorAll(`[data-item-id="${e.id}"]`).length>0}renderElement(e){T(I(()=>this.hasTitle?m`
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              ${this.groupTitle}
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              ${e?"":this.groupHint}
            </span>
          </div>
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `:m`
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `,"groupTemplate")(),this)}push(e){this.removeAttribute("hidden"),this.topGroup&&this.atLimit?e.itemId!==this.firstItem.itemId&&this.replaceTopGroupItem(e):this.list.append(e)}replaceTopGroupItem(e){this.list.replaceChild(e,this.firstItem)}groupLimitForScope(){const e=this.closest("command-palette");if(e){const t=e.query.scope.type;return JSON.parse(this.groupLimits)[t]}}get limit(){const e=this.groupLimitForScope();return this.topGroup?1:this.isModeActive()?50:e||i.defaultGroupLimit}isModeActive(){const e=this.closest("command-palette");return e?e.getMode():!1}get atLimit(){return this.list.children.length>=this.limit}get topGroup(){return this.groupId===i.topGroupId}get hasTitle(){return this.groupId!==i.footerGroupId}get itemNodes(){return this.list.querySelectorAll("command-palette-item")}get firstItem(){return this.itemNodes[0]}get lastItem(){return this.itemNodes[this.itemNodes.length-1]}});I(i,"CommandPaletteItemGroupElement"),i.defaultGroupLimit=5,i.topGroupId="top",i.defaultGroupId="default",i.footerGroupId="footer",i.helpGroupIds=["modes_help","filters_help"],i.commandGroupIds=["commands"],i.topGroupScoreThreshold=9,h([a],i.prototype,"groupTitle",2),h([a],i.prototype,"groupHint",2),h([a],i.prototype,"groupId",2),h([a],i.prototype,"groupLimits",2),h([a],i.prototype,"defaultPriority",2),h([b],i.prototype,"list",2),h([b],i.prototype,"header",2),i=f("C",h([g],i));var w=Object.defineProperty,k=Object.getOwnPropertyDescriptor,v=(e,t)=>w(e,"name",{value:t,configurable:!0}),u=(e,t,r,s)=>{for(var o=s>1?void 0:s?k(t,r):t,n=e.length-1,p;n>=0;n--)(p=e[n])&&(o=(s?p(t,r,o):p(o))||o);return s&&o&&w(t,r,o),o};const M="*";let l=class extends HTMLElement{constructor(){super(...arguments);this.mode="",this.src="",this.type="remote",this.debounce=0,this.scopeTypes="",this.hasCommands=!1}static registerProvider(e){const t=e.name.replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/(^-|-Provider$)/g,"").toLowerCase();this.providerClasses[t]=e}static getProvider(e){const t=this.providerClasses[e];if(t)return t;throw new Error(`${e} provider not found`)}get provider(){if(!this._provider){const e=l.getProvider(this.type);this._provider=new e(this)}return this._provider}get octicons(){return this.provider.octicons}async prefetch(e){await this.provider.prefetch(e)}async fetch(e,t){return this.lastFetchQuery=e,await A(this.debounce),this.lastFetchQuery!==e?{results:[]}:this.provider.fetch(e,t)}isWildcardMode(){return this.mode===M}appliesTo(e){return(this.mode===e.mode||this.isWildcardMode())&&P(e,this.scopeTypes)}};v(l,"CommandPaletteProviderElement"),l.providerClasses={},u([a],l.prototype,"mode",2),u([a],l.prototype,"src",2),u([a],l.prototype,"type",2),u([a],l.prototype,"debounce",2),u([a],l.prototype,"scopeTypes",2),u([a],l.prototype,"hasCommands",2),l=u([g],l);function C(e){l.registerProvider(e)}v(C,"provider");function P(e,t){return t?t&&JSON.parse(t).includes(e.scope.type):!0}v(P,"isEnabledScopeType");const A=v(e=>new Promise(t=>setTimeout(t,e)),"delay");var O=Object.defineProperty,j=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))N.call(t,r)&&L(e,r,t[r]);if(j)for(var r of j(t))D.call(t,r)&&L(e,r,t[r]);return e},H=(e,t)=>O(e,"name",{value:t,configurable:!0});class y{constructor(t,r,{scope:s,subjectId:o,subjectType:n,returnTo:p}={}){this.queryText=t,this.queryMode=r,this.scope=s!=null?s:c.emptyScope,this.subjectId=o,this.subjectType=n,this.returnTo=p}get text(){return this.queryText}get mode(){return this.queryMode}get path(){return this.buildPath(this)}buildPath(t,r=t.text){return`scope:${t.scope.type}-${t.scope.id}/mode:${t.mode}/query:${r}`}clearScope(){this.scope=c.emptyScope}hasScope(){return this.scope.id!==c.emptyScope.id}isBlank(){return this.text.trim().length===0}isPresent(){return!this.isBlank()}immutableCopy(){const t=this.text,r=this.mode,s=F({},this.scope);return new y(t,r,{scope:s,subjectId:this.subjectId,subjectType:this.subjectType,returnTo:this.returnTo})}hasSameScope(t){return this.scope.id===t.scope.id}params(){const t=new URLSearchParams;return this.isPresent()&&t.set("q",this.text),this.hasScope()&&t.set("scope",this.scope.id),this.mode&&t.set("mode",this.mode),this.returnTo&&t.set("return_to",this.returnTo),this.subjectId&&t.set("subject",this.subjectId),t}}f("Q",y),H(y,"Query")}}});
//# sourceMappingURL=chunk-query-149c6ee9.js.map