const baseUrl = 'https://portal-obsei-api.herokuapp.com';

const API_HEROKU = {
    getPesquisadores: baseUrl + '/pesquisadores',
    postPesquisadores: baseUrl + '/pesquisador',
    postGeradorPagina: baseUrl + '/pagina-pesquisa'
}


export const environment = {
  production: true,
  api: API_HEROKU
};
