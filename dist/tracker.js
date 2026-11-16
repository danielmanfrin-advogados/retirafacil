(function () {
  'use strict';

  const config = window.SITE_CONFIG || {};
  const session = Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  const provisionalWhatsapp = '5516900000000';
  const provisionalPhone = '5516900000000';

  function cleanNumber(value, fallback) {
    const number = String(value || '').replace(/\D/g, '');
    return number || fallback;
  }

  function messageFor(link) {
    return link.getAttribute('data-msg') || config.mensagem || 'Olá! Vim pelo site e gostaria de solicitar um orçamento.';
  }

  function updateLinks() {
    document.querySelectorAll('[data-acao]').forEach(function (link) {
      const action = link.getAttribute('data-acao');
      if (action === 'whatsapp') {
        const phone = cleanNumber(config.whatsapp, provisionalWhatsapp);
        link.href = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(messageFor(link));
      }
      if (action === 'ligar') {
        const phone = cleanNumber(config.telefone, provisionalPhone);
        link.href = 'tel:+' + phone;
      }
    });
  }

  function getUtm(name) {
    return new URLSearchParams(window.location.search).get(name) || '';
  }

  function deviceType() {
    return window.matchMedia && window.matchMedia('(max-width: 767px)').matches ? 'celular' : 'computador';
  }

  function sourceName() {
    if (!document.referrer) return 'direto';
    try { return new URL(document.referrer).hostname; } catch (_) { return document.referrer; }
  }

  function sendClick(link) {
    if (!config.endpoint) return;
    const params = new URLSearchParams({
      site: config.site || '',
      nicho: config.nicho || '',
      acao: link.getAttribute('data-acao') || '',
      local: link.getAttribute('data-local') || '',
      pagina: window.location.pathname || '/',
      titulo: document.title || '',
      origem: sourceName(),
      utm_source: getUtm('utm_source'),
      utm_medium: getUtm('utm_medium'),
      utm_campaign: getUtm('utm_campaign'),
      utm_term: getUtm('utm_term'),
      dispositivo: deviceType(),
      tela: window.innerWidth + 'x' + window.innerHeight,
      idioma: navigator.language || '',
      detalhe: messageFor(link),
      sessao: session
    });
    if (getUtm('gclid')) params.set('gclid', 'sim');

    const url = config.endpoint + (config.endpoint.indexOf('?') >= 0 ? '&' : '?') + params.toString();
    const fallback = function () {
      try {
        const beacon = new Image();
        beacon.src = url;
      } catch (_) {}
    };
    try {
      fetch(url, { method: 'GET', mode: 'no-cors', keepalive: true }).catch(fallback);
    } catch (_) {
      fallback();
    }
  }

  document.addEventListener('click', function (event) {
    const link = event.target.closest && event.target.closest('[data-acao]');
    if (link) sendClick(link);
  }, { capture: true, passive: true });

  document.addEventListener('DOMContentLoaded', updateLinks);
  new MutationObserver(updateLinks).observe(document.documentElement, { childList: true, subtree: true });
  updateLinks();
})();
