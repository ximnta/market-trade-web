angular.module('market-trade.graph-pie', [])
    .component('tradeGraphPie', {
        templateUrl: 'graph-pie/graph-pie.html',
        bindings: {
            messages: '<'
        },
        controller: [function () {
            var ctrl = this;
            this.$onChanges = function () {                
                var countriesMap = _.groupBy(ctrl.messages, 'originatingCountry');
                this.labels = Object.keys(countriesMap);
                this.data = [];
                this.labels.forEach(function (l) {
                    ctrl.data.push(countriesMap[l].length);
                });
            };
        }]
    });

