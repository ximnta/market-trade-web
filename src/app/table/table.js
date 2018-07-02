angular.module('market-trade.table', ['market-trade.service'])
    .component('tradeTable', {
        templateUrl: 'table/table.html',
        controller: ['tradeService', function (tradeService) {
            
            var ctrl = this;
            tradeService.getMessages().then(function (m) {
                ctrl.messages = m;
            });

            this.titles = ['User id', 'Currency From', 'Currency To', 'Amount Sell', 'Amount Buy', 'Rate', 'Time Placed', 'Originating Country' ];
            this.page = 1;
            this.pageSize = 15;
        }]
    });