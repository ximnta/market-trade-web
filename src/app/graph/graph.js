angular.module('market-trade.graph', ['market-trade.graph-line', 'market-trade.graph-pie', 'market-trade.service'])
    .component('tradeGraph', {
        templateUrl: 'graph/graph.html',
        controller: ['tradeService', function (tradeService) {
            
            var ctrl = this;
            tradeService.getMessages().then(function (m) {
                ctrl.messages = m;
            });
            
        }]
    });