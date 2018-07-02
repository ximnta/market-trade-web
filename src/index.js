function importAll(r) {
    r.keys().forEach(r);
}

require('angular');
require('angular-route');
require('angular-chart.js');
require('lodash');

importAll(require.context('./app/', true, /\.js$/));
importAll(require.context('./app/', true, /\.html$/));

importAll(require.context('./css/', true, /\.scss$/));