(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l="5516900000000",p="/manus-storage/async-images/BRZp2FZzrKelu7OTgc5U6D/image-1.webp",d={arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',arrowUp:'<path d="M12 19V5M5 12l7-7 7 7"/>',calendar:'<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',check:'<path d="m5 12 4 4L19 6"/>',chevron:'<path d="m6 9 6 6 6-6"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',couch:'<path d="M5 12V9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"/><path d="M3 12a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5H3z"/><path d="M6 17v2M18 17v2"/>',door:'<path d="M5 20h14M7 20V4h10v16M10 12h.01"/>',down:'<path d="M12 5v14M19 12l-7 7-7-7"/>',home:'<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>',leaf:'<path d="M20 4c-7.5.4-13.6 3.5-15.8 8.8C2.6 16.7 6.5 20 10 19c5.3-1.4 8.4-7.5 10-15Z"/><path d="M4 20c2.7-4.5 6.2-7.7 11-10"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',message:'<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.4 8.4 0 0 1-3-.6L4 20l1.6-4A7.2 7.2 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L9 10.9a16 16 0 0 0 6.1 6.1l1.2-1.2a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8A2 2 0 0 1 22 16.9Z"/>',shield:'<path d="M12 22s8-3.8 8-10V5l-8-3-8 3v7c0 6.2 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',truck:'<path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',washer:'<rect width="15" height="18" x="4.5" y="3" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M8 6h.01M11 6h.01M14 6h.01"/>'};function a(s,o=""){return`<svg class="icon ${o}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d[s]||d.check}</svg>`}function m(s="orçamento para retirada de móveis"){const o=`Olá! Vim pelo site da RetiraFácil e gostaria de solicitar um ${s}.`;return`https://wa.me/${l}?text=${encodeURIComponent(o)}`}function v(s){return s.replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(s,o="orçamento para retirada de móveis"){const t=`Olá! Vim pelo site da RetiraFácil e gostaria de solicitar um ${o}.`;return`href="${m(o)}" data-acao="whatsapp" data-local="${s}" data-msg="${v(t)}"`}const u=[{icon:"couch",name:"Sofás e poltronas",note:"Inteiros ou desmontados"},{icon:"home",name:"Camas e armários",note:"Quarto completo"},{icon:"shield",name:"Colchões",note:"Todos os tamanhos"},{icon:"washer",name:"Geladeiras e máquinas",note:"Linha branca"},{icon:"truck",name:"Móveis de escritório",note:"Mesas, cadeiras e mais"},{icon:"leaf",name:"Outros volumes",note:"Avaliamos pelo WhatsApp"}],h=[{number:"01",icon:"message",title:"Mande uma mensagem",copy:"Conte o que precisa retirar, mande fotos e informe o bairro do imóvel."},{number:"02",icon:"calendar",title:"Receba seu orçamento",copy:"Avaliamos o volume, o acesso e combinamos um valor sem enrolação."},{number:"03",icon:"clock",title:"Agende o melhor dia",copy:"Escolha um horário que funcione para você e para a liberação do imóvel."},{number:"04",icon:"truck",title:"A gente desocupa",copy:"Retiramos tudo com cuidado, organização e o mínimo de transtorno."}],f=[["Vocês atendem casas e apartamentos?","Sim. Retiramos móveis em casas, apartamentos, condomínios e imóveis comerciais. Se houver portaria, elevador ou escada, envie esses detalhes junto com as fotos."],["Quais móveis e eletros vocês retiram?","Sofás, camas, colchões, armários, mesas, cadeiras, geladeiras, máquinas de lavar e outros itens volumosos. Para itens diferentes, mande uma foto e avaliamos."],["Preciso desmontar os móveis antes?","Não necessariamente. Quando for possível, nossa equipe orienta e combina a desmontagem no orçamento. O importante é avisar sobre o tamanho e o acesso ao móvel."],["Como o preço é calculado?","O valor considera o volume, a quantidade de itens, o andar, a necessidade de desmontagem e as condições de acesso. Por isso, as fotos ajudam a passar um orçamento mais preciso."],["Vocês retiram no mesmo dia?","Dependendo da rota e da disponibilidade, podemos encaixar retiradas rápidas. Fale com a equipe pelo WhatsApp e conte quando você precisa liberar o imóvel."]];function g(){document.querySelector("#app").innerHTML=`
    <div class="site-shell">
      <header class="topbar" data-header>
        <div class="container topbar-inner">
          <a class="brand" href="#top" aria-label="RetiraFácil, início">
            <span class="brand-mark">${a("arrowUp")}</span>
            <span class="brand-copy"><strong>Retira<span>Fácil</span></strong><small>móveis e desocupação</small></span>
          </a>
          <nav class="desktop-nav" aria-label="Navegação principal">
            <a href="#servicos">O que retiramos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a class="button button-small button-outline" ${i("topo")} target="_blank" rel="noreferrer">${a("message")} Pedir orçamento</a>
          <button class="mobile-menu-button" type="button" aria-label="Abrir menu" aria-expanded="false" data-menu-button>${a("menu")}</button>
        </div>
        <div class="mobile-menu" data-mobile-menu>
          <a href="#servicos">O que retiramos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#duvidas">Dúvidas</a>
          <a class="button button-primary" ${i("topo")} target="_blank" rel="noreferrer">${a("message")} Pedir orçamento</a>
        </div>
      </header>

      <main id="top">
        <section class="hero-section">
          <div class="hero-image" style="background-image: linear-gradient(90deg, rgba(7, 44, 53, .96) 0%, rgba(7, 44, 53, .82) 35%, rgba(7, 44, 53, .28) 70%, rgba(7, 44, 53, .04) 100%), url('${p}');"></div>
          <div class="hero-grid-lines"></div>
          <div class="container hero-content">
            <div class="hero-kicker"><span class="pulse-dot"></span> Atendimento local e sem complicação</div>
            <h1>Desocupe seu imóvel <em>sem carregar peso.</em></h1>
            <p class="hero-lead">A RetiraFácil remove móveis velhos e itens volumosos de casas e apartamentos com agilidade, cuidado e orçamento direto pelo WhatsApp.</p>
            <div class="hero-actions">
              <a class="button button-accent" ${i("hero","orçamento para desocupar meu imóvel")} target="_blank" rel="noreferrer">Solicitar orçamento ${a("arrow")}</a>
              <a class="text-link light-link" href="#servicos">Ver o que retiramos ${a("down")}</a>
            </div>
            <div class="hero-proof">
              <div class="avatar-stack"><span>R</span><span>M</span><span>J</span><span>+</span></div>
              <div><strong>Atendimento que resolve</strong><small>Você manda as fotos. A gente cuida do resto.</small></div>
            </div>
          </div>
          <div class="hero-side-note"><span>01</span><span>desocupação residencial</span></div>
        </section>

        <section class="trust-strip">
          <div class="container trust-inner">
            <p>Para quem precisa liberar espaço <span>sem transformar a casa em obra.</span></p>
            <div class="trust-items">
              <span>${a("shield")} Cuidado com o imóvel</span>
              <span>${a("clock")} Horário combinado</span>
              <span>${a("truck")} Retirada completa</span>
            </div>
          </div>
        </section>

        <section class="section section-intro" id="servicos">
          <div class="container split-intro">
            <div class="section-eyebrow">O que retiramos <span></span></div>
            <div class="intro-copy"><h2>De um móvel pesado a um imóvel inteiro.</h2><p>Não importa se você está mudando, reformando, vendendo ou simplesmente cansou de ver aquele volume ocupando espaço. A gente organiza a retirada para você respirar aliviado.</p><a class="text-link dark-link" ${i("sobre","avaliação dos itens que preciso retirar")} target="_blank" rel="noreferrer">Falar sobre meus itens ${a("arrow")}</a></div>
          </div>
          <div class="container item-grid">
            ${u.map((e,r)=>`<article class="item-card ${r===0?"item-card-featured":""}"><div class="item-icon">${a(e.icon)}</div><div><h3>${e.name}</h3><p>${e.note}</p></div><span class="card-arrow">${a("arrow")}</span></article>`).join("")}
          </div>
        </section>

        <section class="section benefit-section">
          <div class="container benefit-layout">
            <div class="benefit-photo"><div class="photo-label">RETIRAFÁCIL <span>///</span></div><div class="photo-stamp">feito<br><strong>com<br>cuidado</strong></div></div>
            <div class="benefit-content"><div class="section-eyebrow">Mais espaço. Menos estresse. <span></span></div><h2>Sua casa livre de tralha, sem você precisar resolver tudo sozinho.</h2><p>Retirar móveis grandes exige tempo, força e logística. Nós entramos para tornar essa parte simples — do primeiro contato até o último item fora do caminho.</p><div class="benefit-list"><div><span class="check-circle">${a("check")}</span><div><strong>Desocupação rápida</strong><p>Para entregar, vender, alugar ou reorganizar o imóvel.</p></div></div><div><span class="check-circle">${a("check")}</span><div><strong>Equipe cuidadosa</strong><p>Protegemos paredes, elevadores e áreas comuns durante a retirada.</p></div></div><div><span class="check-circle">${a("check")}</span><div><strong>Combinado é combinado</strong><p>Você recebe o orçamento e confirma tudo antes do agendamento.</p></div></div></div></div>
          </div>
        </section>

        <section class="section process-section" id="como-funciona">
          <div class="container"><div class="process-heading"><div><div class="section-eyebrow">Um pedido simples <span></span></div><h2>Você mostra.<br><em>A gente resolve.</em></h2></div><p>Sem formulário longo e sem espera. Mande uma mensagem com fotos e diga onde fica o imóvel. A equipe retorna com os próximos passos.</p></div><div class="steps-grid">${h.map(e=>`<article class="step-card"><div class="step-top"><span class="step-number">${e.number}</span><span class="step-icon">${a(e.icon)}</span></div><h3>${e.title}</h3><p>${e.copy}</p></article>`).join("")}</div><div class="process-cta"><span>Pronto para abrir espaço?</span><a class="button button-dark" ${i("servico")} target="_blank" rel="noreferrer">Chamar no WhatsApp ${a("arrow")}</a></div></div>
        </section>

        <section class="section quote-section">
          <div class="container quote-layout"><div class="quote-mark">“</div><blockquote>Eu só precisava entregar o apartamento vazio e já estava sem saber por onde começar. Mandei as fotos, combinamos o horário e em poucas horas estava tudo resolvido.</blockquote><div class="quote-person"><span class="quote-avatar">C</span><div><strong>Carolina M.</strong><small>Cliente RetiraFácil</small></div></div></div>
        </section>

        <section class="section faq-section" id="duvidas">
          <div class="container faq-layout"><div class="faq-intro"><div class="section-eyebrow">Antes de chamar <span></span></div><h2>Dúvidas comuns, respostas diretas.</h2><p>Se a sua dúvida não estiver aqui, mande uma mensagem. Cada imóvel tem uma história — e a gente olha para os detalhes.</p><a class="text-link dark-link" ${i("final","uma dúvida sobre a retirada")} target="_blank" rel="noreferrer">Tirar uma dúvida no WhatsApp ${a("arrow")}</a></div><div class="faq-list">${f.map((e,r)=>`<details class="faq-item" ${r===0?"open":""}><summary><span>${e[0]}</span>${a("chevron")}</summary><p>${e[1]}</p></details>`).join("")}</div></div>
        </section>

        <section class="final-cta"><div class="container final-cta-inner"><div class="section-eyebrow light-eyebrow">Próximo passo <span></span></div><h2>O espaço que você quer<br><em>começa por uma mensagem.</em></h2><p>Conte o que precisa sair. A RetiraFácil ajuda você a desocupar com mais leveza.</p><a class="button button-accent" ${i("final","orçamento para retirada de móveis")} target="_blank" rel="noreferrer">Pedir orçamento pelo WhatsApp ${a("arrow")}</a></div><div class="cta-orbit orbit-one"></div><div class="cta-orbit orbit-two"></div></section>
      </main>

      <footer class="footer"><div class="container footer-grid"><div><a class="brand footer-brand" href="#top"><span class="brand-mark">${a("arrowUp")}</span><span class="brand-copy"><strong>Retira<span>Fácil</span></strong><small>móveis e desocupação</small></span></a><p class="footer-note">Retirada de móveis velhos para casas, apartamentos e imóveis que precisam respirar de novo.</p></div><div><h3>Navegue</h3><a href="#servicos">O que retiramos</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas frequentes</a></div><div><h3>Fale com a gente</h3><p>Atendimento pelo WhatsApp<br>para orçamento e agendamento.</p><a class="footer-whatsapp" ${i("final")} target="_blank" rel="noreferrer">${a("message")} Iniciar conversa</a></div></div><div class="container footer-bottom"><span>© 2026 RetiraFácil</span><span>Feito para deixar a vida mais leve.</span></div></footer>
      <a class="floating-whatsapp" ${i("barra-fixa")} target="_blank" rel="noreferrer" aria-label="Pedir orçamento pelo WhatsApp">${a("message")}<span>Orçamento rápido</span></a>
      <div class="mobile-cta"><a ${i("barra-fixa")} target="_blank" rel="noreferrer">${a("message")} Pedir orçamento no WhatsApp</a></div>
    </div>
  `;const s=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-mobile-menu]");s==null||s.addEventListener("click",()=>{const e=o.classList.toggle("is-open");s.setAttribute("aria-expanded",String(e)),s.innerHTML=a(e?"check":"menu")}),o==null||o.querySelectorAll("a").forEach(e=>e.addEventListener("click",()=>{o.classList.remove("is-open"),s.setAttribute("aria-expanded","false"),s.innerHTML=a("menu")}));const t=document.querySelector("[data-header]"),n=()=>t.classList.toggle("is-scrolled",window.scrollY>18);window.addEventListener("scroll",n,{passive:!0}),n()}g();
