// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl = 'https://portal-obsei-api.herokuapp.com';

const API_LOCAL = {
    getPesquisadores: 'http://localhost:8080' + '/pesquisadores',
    postPesquisadores: 'http://localhost:8080' + '/pesquisador',
    
    postGeradorPagina: 'http://localhost:8080' + '/pagina-pesquisa',
    
    getAreasPesquisa: 'http://localhost:8080' + '/areas-pesquisa',
}

const API_HEROKU = {
    getPesquisadores: baseUrl + '/pesquisadores',
    postPesquisadores: baseUrl + '/pesquisador',
    postGeradorPagina: baseUrl + '/pagina-pesquisa'
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
