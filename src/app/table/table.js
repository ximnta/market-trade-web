angular.module('market-trade.table', ['market-trade.service'])
    .component('tradeTable', {
        templateUrl: 'table/table.html',
        controller: ['$filter', 'tradeService', function ($filter, tradeService) {
            
            var ctrl = this;
            tradeService.getMessages().then(function (m) {
                ctrl.originalMessages = m;
                ctrl.filterMessages();
            });

            this.titles = ['User id', 'Currency From', 'Currency To', 'Amount Sell', 'Amount Buy', 'Rate', 'Time Placed', 'Originating Country' ];
            this.pageSize = 15;

            this.filterMessages = function (){
                ctrl.page = 1;
                ctrl.messages = $filter('filter')(ctrl.originalMessages, {originatingCountry: ctrl.country, currencyFrom: ctrl.from, currencyTo: ctrl.to});
;               ctrl.totalPages = Math.ceil(ctrl.messages.length / ctrl.pageSize) || 1;
            }
        }]
    });