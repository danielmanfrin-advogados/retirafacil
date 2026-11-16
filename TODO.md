# Entregas do site RetiraFácil

- [x] Criar landing page responsiva em português do Brasil, inspirada na lógica de conversão da referência, mas com identidade própria para retirada de móveis velhos e itens volumosos.
  - [x] Hero de alto impacto com proposta de valor clara, imagem contextual e CTA principal para solicitar orçamento pelo WhatsApp.
  - [x] CTA persistente para WhatsApp, visível durante a navegação em dispositivos móveis e desktop.
  - [x] Seção de benefícios destacando desocupação rápida, retirada em casas e apartamentos, praticidade e cuidado no transporte.
  - [x] Grade dos principais itens retirados: sofás, camas, colchões, geladeiras, máquinas de lavar e outros volumes.
  - [x] Seção “Como funciona” com envio das informações, orçamento, agendamento e retirada.
  - [x] Bloco de prova social com depoimentos e sinais de confiança no serviço.
  - [x] Chamadas para orçamento distribuídas entre as seções, com textos objetivos e direcionamento ao WhatsApp.
  - [x] Rodapé com dados essenciais do serviço, área de atendimento e novo acesso rápido ao WhatsApp.
  - [x] Layout responsivo, escaneável e orientado à conversão.
- [x] Integrar o registro de cliques dos botões na planilha Google usando o endpoint Apps Script fornecido.
  - [x] Criar `config.js` editável com site, nicho, números provisórios, mensagem e endpoint.
  - [x] Criar `tracker.js` sem cookies de publicidade, enviando GET com ação, local, página, origem, UTMs, dispositivo, tela, idioma, detalhe e sessão.
  - [x] Marcar os CTAs de WhatsApp com `data-acao`, `data-local` e `data-msg`.
- [x] Criar o pacote de SEO e GEO para a busca local em Ribeirão Preto.
  - [x] Incluir conteúdo inicial rastreável sem depender da execução de JavaScript.
  - [x] Adicionar title, description, keywords, canonical, Open Graph, Twitter Card e sinais de localidade.
  - [x] Adicionar dados estruturados JSON-LD para negócio local, serviço e perguntas frequentes.
  - [x] Criar sitemap, robots e arquivos de descoberta por IA.
- [x] Criar páginas individuais de bairros em Ribeirão Preto: Centro, Jardim Botânico, Nova Aliança, Vila Tibério, Bonfim Paulista e Campos Elíseos.
- [x] Converter o projeto para HTML, CSS e JavaScript puros, sem React, Vite, framework ou etapa de build.
  - [x] Cada página é um `index.html` real dentro de sua pasta, com o texto completo presente no HTML.
  - [x] Um único `style.css`, um único `tracker.js` e um único `config.js` são compartilhados por todas as páginas.
  - [x] O mesmo logotipo e a mesma marca visual aparecem em todas as páginas.
  - [x] A estrutura raiz contém `servicos/<slug>/index.html`, `bairros/<slug>/index.html`, `sobre/index.html`, `perguntas-frequentes/index.html`, `politica-de-privacidade/index.html`, `img/`, `favicon.svg`, `sitemap.xml`, `robots.txt`, `llms.txt`, `vercel.json`, `apps-script/Code.gs` e `LEIA-ME.txt`.
  - [x] As imagens foram convertidas para JPG compactado, com `loading="lazy"` fora da primeira dobra e atributos `width` e `height`.
  - [x] A publicação Vercel está configurada como site estático, Framework Preset Other, sem comando de build, diretório raiz, `cleanUrls: true` e `trailingSlash: true`.
  - [x] Foram criadas três páginas de serviços, seis páginas de bairros e as páginas institucionais solicitadas.
  - [x] O rastreamento de cliques na planilha foi preservado e o Apps Script está documentado em `apps-script/Code.gs`.

- [x] Adicionar imagens locais nas páginas de serviços, bairros, perguntas frequentes e política de privacidade, mantendo as imagens existentes na home e no sobre.

- [x] Refazer a composição visual das páginas internas para usar a imagem no mesmo padrão e local da home: hero de primeira dobra com foto em background, overlay, título e CTA sobre a imagem.
