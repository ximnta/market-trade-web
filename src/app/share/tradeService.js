angular.module('market-trade.service', [])
    .service('tradeService', ['$http', function ($http) {

        var promiseCache;
        var useCache = true;

        var getMessages = function () {
            if(!promiseCache || !useCache){
                promiseCache = $http({
                    method: 'GET',
                    url: '/api/trademsg'
                }).then(function successCallback(response) {
                    return response.data;
                });
            }
            return promiseCache;
        } 

        return { getMessages: getMessages };
    }]);