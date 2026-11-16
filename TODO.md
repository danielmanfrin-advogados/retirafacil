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
- [x] Preparar diagnóstico, runtime e rota declarada para Preview.
- [x] Validar a página em desktop e mobile e corrigir problemas de layout ou interação.
- [x] Salvar a versão entregue como checkpoint no repositório canônico.
- [x] Integrar o registro de cliques dos botões na planilha Google usando o endpoint Apps Script fornecido.
  - [x] Criar `public/config.js` editável com site, nicho, números provisórios, mensagem e endpoint.
  - [x] Criar `public/tracker.js` sem cookies de publicidade, enviando GET com ação, local, página, origem, UTMs, dispositivo, tela, idioma, detalhe e sessão.
  - [x] Marcar os CTAs de WhatsApp com `data-acao`, `data-local` e `data-msg`, mantendo os links provisórios até o tracker carregar a configuração.
  - [x] Criar `LEIA-ME.txt` com instruções para setup, nova versão da implantação e tabela dinâmica por site.
