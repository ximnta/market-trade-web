angular.module('market-trade',
    [
        'ngRoute',
        'market-trade.table',
        'market-trade.tab',
        'market-trade.graph',
        'chart.js'
    ])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/table', {
                template: '<trade-table></trade-table>',
                activetab: 'table'
            })
            .when('/graph', {
                template: '<trade-graph></trade-graph>',
                activetab: 'graph'
            })
            .otherwise({ redirectTo: '/table' });
    }]);