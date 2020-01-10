const baseUrl = 'https://portal-obsei-api.herokuapp.com';

const API_HEROKU = {
  getPesquisadores: baseUrl + '/pesquisadores',
  postPesquisadores: baseUrl + '/pesquisador',
  postGeradorPagina: baseUrl + '/pagina-pesquisa',
  getAreasPesquisa: baseUrl + '/areas-pesquisa',
  getGruposPesquisa: baseUrl + '/grupos-pesquisa',
  postGrupoPesquisa: baseUrl + '/grupo-pesquisa',
  getCategoriasLinks: baseUrl + '/categorias-links',
  getLinksUteis: baseUrl + '/links-uteis',
  postLinkUtil: baseUrl + '/link-util',
  getQuestionarios: baseUrl + '/questionarios',
  postQuestionario: baseUrl + '/questionario',
  getArtigo: baseUrl + '/artigos',
  postArtigo: baseUrl + '/artigo',
}


export const environment = {
  production: true,
  api: API_HEROKU
};
