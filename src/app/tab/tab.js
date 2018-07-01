angular.module('market-trade.tab', [])
.component('tradeTab', { 
    templateUrl: 'tab/tab.html',
    controller: ['$route', function ($route) {

        this.getActiveTab = function(){
            return $route.current.activetab;
        };
        
    }]
});





