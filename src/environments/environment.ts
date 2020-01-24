// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl = 'https://portal-obsei-api.herokuapp.com';

const API_LOCAL = {
    getPesquisadores: 'http://localhost:8080' + '/pesquisadores',
    postPesquisador: 'http://localhost:8080' + '/pesquisador',
    postGeradorPagina: 'http://localhost:8080' + '/pagina-pesquisa',
    getAreasPesquisa: 'http://localhost:8080' + '/areas-pesquisa',
    postAreaPesquisa: 'http://localhost:8080' + '/area-pesquisa',
    getGruposPesquisa: 'http://localhost:8080' + '/grupos-pesquisa',
    postGrupoPesquisa: 'http://localhost:8080' + '/grupo-pesquisa',
    getCategoriasLinks: 'http://localhost:8080' + '/categorias-links',
    postCategoriaLinks: 'http://localhost:8080' + '/categoria-links',
    getLinksUteis: 'http://localhost:8080' + '/links-uteis',
    postLinkUtil: 'http://localhost:8080' + '/link-util',
    getQuestionarios: 'http://localhost:8080' + '/questionarios',
    postQuestionario: 'http://localhost:8080' + '/questionario',
    getArtigo: 'http://localhost:8080' + '/artigos',
    postArtigo: 'http://localhost:8080' + '/artigo',
    postLogin: 'http://localhost:8080' + '/login',
}

const API_HEROKU = {
    getPesquisadores: baseUrl + '/pesquisadores',
    postPesquisador: baseUrl + '/pesquisador',
    postGeradorPagina: baseUrl + '/pagina-pesquisa',
    getAreasPesquisa: baseUrl + '/areas-pesquisa',
    postAreaPesquisa: baseUrl + '/area-pesquisa',
    getGruposPesquisa: baseUrl + '/grupos-pesquisa',
    postGrupoPesquisa: baseUrl + '/grupo-pesquisa',
    getCategoriasLinks: baseUrl + '/categorias-links',
    postCategoriaLinks: baseUrl + '/categoria-links',
    getLinksUteis: baseUrl + '/links-uteis',
    postLinkUtil: baseUrl + '/link-util',
    getQuestionarios: baseUrl + '/questionarios',
    postQuestionario: baseUrl + '/questionario',
    getArtigo: baseUrl + '/artigos',
    postArtigo: baseUrl + '/artigo',
}

export const environment = {
    production: false,
    api: API_LOCAL
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
