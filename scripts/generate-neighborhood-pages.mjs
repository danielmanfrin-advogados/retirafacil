import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const origin = 'https://retirafacilribeiraopreto.vercel.app';
const neighborhoods = [
  {
    slug: 'centro',
    name: 'Centro',
    intro: 'Retirada de móveis velhos no Centro de Ribeirão Preto para apartamentos, casas e imóveis comerciais que precisam ser liberados com organização.',
    context: 'Se o imóvel fica em uma área com portaria, elevador, escadas ou circulação compartilhada, envie essas informações junto com as fotos. Assim a equipe consegue entender o acesso antes de combinar a retirada.',
    phrase: 'desocupar um imóvel no Centro de Ribeirão Preto',
    items: 'sofás, camas, colchões, armários, geladeiras, máquinas de lavar e outros volumes',
  },
  {
    slug: 'jardim-botanico',
    name: 'Jardim Botânico',
    intro: 'Retirada de móveis e eletrodomésticos no Jardim Botânico, em Ribeirão Preto, para quem está mudando, reformando ou reorganizando a casa.',
    context: 'Para casas e condomínios do bairro, fotos dos itens e detalhes sobre garagem, corredor, escadas e elevador ajudam a planejar uma retirada mais rápida e cuidadosa.',
    phrase: 'retirar móveis no Jardim Botânico',
    items: 'sofás, poltronas, camas, armários, colchões, geladeiras e máquinas de lavar',
  },
  {
    slug: 'nova-alianca',
    name: 'Nova Aliança',
    intro: 'A RetiraFácil atende o bairro Nova Aliança com retirada de móveis velhos e desocupação de apartamentos, casas e imóveis em transição.',
    context: 'Se você está entregando um imóvel, trocando de endereço ou liberando espaço, mande fotos e informe o bairro. A equipe avalia o volume e combina as condições pelo WhatsApp.',
    phrase: 'pedir orçamento de retirada no Nova Aliança',
    items: 'sofás, camas, colchões, mesas, cadeiras, armários e eletrodomésticos volumosos',
  },
  {
    slug: 'vila-tiberio',
    name: 'Vila Tibério',
    intro: 'Retirada de móveis velhos na Vila Tibério, em Ribeirão Preto, com atendimento para casas, apartamentos, condomínios e imóveis comerciais.',
    context: 'Móveis grandes podem exigir desmontagem ou atenção especial ao acesso. Envie uma foto do item e descreva o caminho até a saída para receber uma orientação mais clara.',
    phrase: 'retirar móveis velhos na Vila Tibério',
    items: 'sofás, camas, armários, colchões, geladeiras, máquinas de lavar e móveis de escritório',
  },
  {
    slug: 'bonfim-paulista',
    name: 'Bonfim Paulista',
    intro: 'Desocupação de imóveis e retirada de móveis no Bonfim Paulista, com orçamento direto e agendamento pelo WhatsApp.',
    context: 'Em casas e condomínios, informe a quantidade de itens, o acesso para o veículo e se existe algum móvel que precisa ser desmontado. Isso ajuda a combinar o atendimento sem surpresas.',
    phrase: 'desocupar uma casa no Bonfim Paulista',
    items: 'sofás, poltronas, camas, armários, colchões, geladeiras e outros volumes grandes',
  },
  {
    slug: 'campos-eliseos',
    name: 'Campos Elíseos',
    intro: 'Retirada de móveis velhos no Campos Elíseos para liberar casas, apartamentos e salas comerciais em Ribeirão Preto.',
    context: 'A equipe pode avaliar itens de diferentes tamanhos por foto. Avise se o imóvel tem escadas, elevador, portaria ou área comum com regras de circulação.',
    phrase: 'solicitar retirada de móveis no Campos Elíseos',
    items: 'sofás, camas, colchões, armários, mesas, cadeiras, geladeiras e máquinas de lavar',
  },
];

const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const page = (item) => {
  const title = `Retirada de móveis no ${item.name}, Ribeirão Preto | RetiraFácil`;
  const description = `${item.intro} Solicite um orçamento pelo WhatsApp.`;
  const canonical = `${origin}/bairros/${item.slug}/`;
  const message = `Olá! Vim da página do bairro ${item.name} e gostaria de solicitar um orçamento para retirada de móveis.`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${origin}/#business`,
        name: 'RetiraFácil',
        url: origin + '/',
        image: `${origin}/assets/hero-retirada-moveis.webp`,
        description: 'Retirada de móveis velhos e desocupação de imóveis em Ribeirão Preto e região.',
        areaServed: { '@type': 'Place', name: `${item.name}, Ribeirão Preto, SP` },
        serviceType: 'Retirada de móveis velhos',
      },
      {
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name: `Retirada de móveis no ${item.name}`,
        serviceType: 'Retirada de móveis e desocupação de imóveis',
        provider: { '@id': `${origin}/#business` },
        areaServed: { '@type': 'Place', name: `${item.name}, Ribeirão Preto, SP` },
        url: canonical,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'RetiraFácil', item: origin + '/' },
          { '@type': 'ListItem', position: 2, name: 'Bairros de Ribeirão Preto', item: `${origin}/#bairros` },
          { '@type': 'ListItem', position: 3, name: item.name, item: canonical },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: `A RetiraFácil atende o bairro ${item.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Sim. A RetiraFácil atende o ${item.name}, em Ribeirão Preto, para retirada de móveis e desocupação de imóveis.` } },
          { '@type': 'Question', name: 'Como pedir um orçamento?', acceptedAnswer: { '@type': 'Answer', text: `Envie fotos dos itens, informe que o imóvel fica no ${item.name} e descreva o acesso. A equipe avalia o volume e combina as condições pelo WhatsApp.` } },
          { '@type': 'Question', name: 'Quais itens podem ser retirados?', acceptedAnswer: { '@type': 'Answer', text: `A avaliação pode incluir ${item.items}. Outros volumes podem ser analisados por foto.` } },
        ],
      },
    ],
  };

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="description" content="${escape(description)}">
  <meta name="keywords" content="retirada de móveis ${escape(item.name)}, móveis velhos ${escape(item.name)}, desocupação de imóveis Ribeirão Preto">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="RetiraFácil">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:image" content="${origin}/assets/hero-retirada-moveis.webp">
  <title>${escape(title)}</title>
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  <script defer src="/config.js"></script>
  <script defer src="/tracker.js"></script>
  <link rel="stylesheet" href="/bairro.css">
</head>
<body>
  <header class="local-header"><a class="local-brand" href="/">Retira<span>Fácil</span><small>móveis e desocupação</small></a><a class="local-back" href="/#bairros">Ver bairros atendidos</a></header>
  <main>
    <section class="local-hero"><div class="local-kicker">Ribeirão Preto · São Paulo</div><h1>Retirada de móveis no <em>${escape(item.name)}</em></h1><p>${escape(item.intro)}</p><a class="local-button" href="https://wa.me/5516900000000" data-acao="whatsapp" data-local="bairro" data-msg="${escape(message)}">Pedir orçamento pelo WhatsApp <span>→</span></a></section>
    <section class="local-content"><div class="local-main"><p class="local-eyebrow">Atendimento no bairro</p><h2>Libere o imóvel sem carregar peso.</h2><p>${escape(item.context)}</p><p>O atendimento começa com informações simples: fotos dos itens, endereço aproximado, tipo de imóvel e condições de acesso. A partir disso, a RetiraFácil orienta o próximo passo e combina o melhor horário.</p><h2>O que pode ser retirado</h2><p>${escape(item.items)}. Para outros itens, envie uma foto e explique o que precisa sair.</p><a class="local-text-link" href="https://wa.me/5516900000000" data-acao="whatsapp" data-local="bairro" data-msg="${escape(message)}">Falar sobre os meus itens →</a></div><aside class="local-card"><span class="local-card-number">${escape(item.slug === 'centro' ? '01' : item.slug === 'jardim-botanico' ? '02' : item.slug === 'nova-alianca' ? '03' : item.slug === 'vila-tiberio' ? '04' : item.slug === 'bonfim-paulista' ? '05' : '06')}</span><strong>${escape(item.name)}</strong><p>Ribeirão Preto e região</p><div class="local-card-line"></div><small>Orçamento direto<br>pelo WhatsApp</small></aside></section>
    <section class="local-faq"><p class="local-eyebrow">Dúvidas frequentes</p><h2>Antes de agendar a retirada</h2><details open><summary>A RetiraFácil atende o ${escape(item.name)}?</summary><p>Sim. O atendimento é para casas, apartamentos, condomínios e imóveis comerciais no ${escape(item.name)}, em Ribeirão Preto.</p></details><details><summary>O que preciso enviar para receber um orçamento?</summary><p>Fotos dos móveis, a quantidade aproximada, o tipo de imóvel e informações sobre elevador, escadas, portaria ou garagem.</p></details><details><summary>Vocês retiram outros itens além dos listados?</summary><p>Sim. Envie uma foto do volume e a equipe avalia se é possível incluir no atendimento.</p></details></section>
    <section class="local-final"><p>Precisa ${escape(item.phrase)}?</p><a class="local-button" href="https://wa.me/5516900000000" data-acao="whatsapp" data-local="bairro" data-msg="${escape(message)}">Solicitar orçamento <span>→</span></a></section>
  </main>
  <footer class="local-footer"><a href="/">Retira<span>Fácil</span></a><span>Retirada de móveis velhos em Ribeirão Preto e região.</span><a href="/#bairros">Voltar para a página principal</a></footer>
</body>
</html>`;
};

for (const item of neighborhoods) {
  const directory = join('public', 'bairros', item.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), page(item));
}
