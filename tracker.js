(function () {
  'use strict';
  var config = window.SITE_CONFIG || {};
  var sessionKey = 'retirafacil_session';
  var session = sessionStorage.getItem(sessionKey) || Math.random().toString(36).slice(2, 10);
  sessionStorage.setItem(sessionKey, session);
  var params = new URLSearchParams(window.location.search);
  var device = window.innerWidth < 768 ? 'celular' : 'computador';
  function value(name) { return params.get(name) || ''; }
  function send(link) {
    if (!config.endpoint) return;
    var query = new URLSearchParams({
      site: config.site || '', nicho: config.nicho || '', acao: link.getAttribute('data-acao') || '', local: link.getAttribute('data-local') || '',
      pagina: window.location.pathname, titulo: document.title, origem: document.referrer || 'direto', meio: value('utm_medium'), campanha: value('utm_campaign'),
      utm_source: value('utm_source'), utm_term: value('utm_term'), gclid: value('gclid') ? 'sim' : '', dispositivo: device, tela: window.innerWidth + 'x' + window.innerHeight,
      idioma: navigator.language || 'pt-BR', detalhe: link.getAttribute('data-msg') || '', sessao: session
    });
    var url = config.endpoint + (config.endpoint.indexOf('?') >= 0 ? '&' : '?') + query.toString();
    var fallback = function () { try { var beacon = new Image(); beacon.src = url; } catch (_) {} };
    try { fetch(url, { method: 'GET', mode: 'no-cors', keepalive: true }).catch(fallback); } catch (_) { fallback(); }
  }
  function hydrate() {
    document.querySelectorAll('[data-acao]').forEach(function (link) {
      if (link.getAttribute('data-acao') === 'whatsapp') {
        var number = config.whatsapp || '5516900000000';
        var msg = link.getAttribute('data-msg') || config.mensagem || '';
        link.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(msg);
      }
      link.addEventListener('click', function () { send(link); }, { passive: true });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hydrate); else hydrate();
})();
