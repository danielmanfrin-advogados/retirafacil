const VERSAO = 'ok v2';
const TOKEN = '479479';
const FUSO = 'America/Sao_Paulo';
const CAB = ['Data e hora', 'Dia', 'Hora', 'Dia da semana', 'Site', 'Botão', 'Posição', 'Página', 'Origem', 'Meio', 'Campanha', 'Termo', 'Dispositivo', 'Veio de anúncio', 'Tela', 'Idioma', 'Sessão', 'Mensagem', 'Nicho'];
const SEMANA = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

function cabecalho_(sh) {
  sh.getRange(1, 1, 1, CAB.length).setValues([CAB]).setFontWeight('bold').setBackground('#1F3864').setFontColor('#FFFFFF');
  sh.setFrozenRows(1);
  sh.getRange('A:A').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  sh.getRange('B:B').setNumberFormat('@');
}
function aba_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('Cliques');
  if (!sh) sh = ss.insertSheet('Cliques');
  if (sh.getLastRow() === 0) cabecalho_(sh);
  return sh;
}
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.setSpreadsheetTimeZone(FUSO);
  cabecalho_(aba_());
  const rs = ss.getSheetByName('Resumo') || ss.insertSheet('Resumo');
  rs.clear();
  rs.getRange('A1').setValue('Cliques por dia e por botão').setFontWeight('bold');
  rs.getRange('A2').setFormula('=QUERY(Cliques!A2:S, "select B, count(B) where B is not null group by B pivot F order by B desc label B \'Dia\'", 0)');
  rs.getRange('G1').setValue('Cliques por hora do dia').setFontWeight('bold');
  rs.getRange('G2').setFormula('=QUERY(Cliques!A2:S, "select C, count(C) where C is not null group by C order by C label C \'Hora\', count(C) \'Cliques\'", 0)');
  rs.getRange('M1').setValue('Cliques por site e por botão').setFontWeight('bold');
  rs.getRange('M2').setFormula('=QUERY(Cliques!A2:S, "select E, count(E) where E is not null group by E pivot F order by E label E \'Site\'", 0)');
}
function linha_(p) {
  const agora = new Date();
  const dia = Utilities.formatDate(agora, FUSO, 'dd/MM/yyyy');
  const hora = Utilities.formatDate(agora, FUSO, 'HH:mm:ss');
  const dow = SEMANA[Number(Utilities.formatDate(agora, FUSO, 'u')) % 7];
  return [agora, dia, hora, dow, p.site || '', p.acao || '', p.local || '', p.pagina || '/', p.origem || 'direto', p.meio || p.utm_medium || '', p.campanha || p.utm_campaign || '', p.termo || p.utm_term || '', p.dispositivo || '', p.gclid === 'sim' ? 'sim' : '', p.tela || '', p.idioma || '', p.sessao || '', p.detalhe || p.mensagem || '', p.nicho || ''];
}
function doGet(e) {
  if (!e || !e.parameter) return ContentService.createTextOutput(VERSAO);
  if (e.parameter.token && e.parameter.token !== TOKEN) return ContentService.createTextOutput('unauthorized');
  if (e.parameter.acao) aba_().appendRow(linha_(e.parameter));
  return ContentService.createTextOutput('ok');
}
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    if (body.token && body.token !== TOKEN) return ContentService.createTextOutput('unauthorized');
    aba_().appendRow(linha_(body));
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err.message);
  }
}
function migrarLinhasAntigas() {
  const sh = aba_();
  if (sh.getLastRow() > 0) cabecalho_(sh);
}
