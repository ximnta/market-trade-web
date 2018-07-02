angular.module('market-trade.graph-line', [])
  .component('tradeGraphLine', {
    templateUrl: 'graph-line/graph-line.html',
    bindings: {
      messages: '<'
    },
    controller: [function () {

      var ctrl = this;

      //Initializing the selected trade
      this.$onChanges = function () {
        if(!ctrl.messages){
          return;
        }        
        //Converting and sorting the dates
        var mList = ctrl.messages.map(function (m) {
          m.time = new Date(m.timePlaced);
          return m;
        });
        
        mList.sort(function (a, b) {
          return a.time > b.time ? 1 : -1;
        })

        //Grouping by currencies
        ctrl.messagesMap = _.groupBy(mList, function (m) {
          return m.currencyFrom + ' - ' + m.currencyTo;
        });

        //Setting up the chart graph 
        ctrl.allTrades = Object.keys(ctrl.messagesMap);
        this.selectedTrade =  ctrl.allTrades[0];

        ctrl.updateChart();
      };

      this.updateChart = function () {
        if(!ctrl.messagesMap[ctrl.selectedTrade]){
          ctrl.labels = [];
          ctrl.series = [];
          ctrl.data = [];
          return;
        }
        ctrl.labels = ctrl.messagesMap[ctrl.selectedTrade].map(function (m) {
          return m.time;
        })

        ctrl.series = [ctrl.selectedTrade];

        ctrl.data = [];
        ctrl.data.push(ctrl.messagesMap[ctrl.selectedTrade].map(function (m) {
          return m.rate;
        }));

        ctrl.onClick = function (points, evt) {
          console.log(points, evt);
        };

        ctrl.options = {
          scales: {
            xAxes: [
              {
                type: 'time'
              }
            ]
          }
        }
      };

    }]
  });