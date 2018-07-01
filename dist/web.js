!function(e){function t(t){for(var a,o,i=t[0],l=t[1],u=t[2],j=0,p=[];j<i.length;j++)o=i[j],s[o]&&p.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(c&&c(t);p.length;)p.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},s={1:0},n=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;n.push([190,0]),r()}({126:function(e,t,r){e.exports=r.p+"table/table.html"},127:function(e,t,r){e.exports=r.p+"tab/tab.html"},128:function(e,t,r){e.exports=r.p+"graph/graph.html"},129:function(e,t,r){e.exports=r.p+"graph-pie/graph-pie.html"},130:function(e,t,r){e.exports=r.p+"graph-line/graph-line.html"},131:function(e,t,r){var a={"./graph/graph-line/graph-line.html":130,"./graph/graph-pie/graph-pie.html":129,"./graph/graph.html":128,"./tab/tab.html":127,"./table/table.html":126};function s(e){var t=n(e);return r(t)}function n(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=131},132:function(e,t){angular.module("market-trade.table",["market-trade.service"]).component("tradeTable",{templateUrl:"table/table.html",controller:["tradeService",function(e){var t=this;e.getMessages().then(function(e){t.messages=e}),this.titles=["User id","Currency From","Currency To","Amount Sell","Amount Buy","Rate","Time Placed","Originating Country"]}]})},133:function(e,t){angular.module("market-trade.tab",[]).component("tradeTab",{templateUrl:"tab/tab.html",controller:["$route",function(e){this.getActiveTab=function(){return e.current.activetab}}]})},134:function(e,t){angular.module("market-trade.service",[]).service("tradeService",["$http",function(e){return{getMessages:function(){return e({method:"GET",url:"/api/trademsg"}).then(function(e){return e.data})}}}])},135:function(e,t){angular.module("market-trade.graph",["market-trade.graph-line","market-trade.graph-pie","market-trade.service"]).component("tradeGraph",{templateUrl:"graph/graph.html",controller:["tradeService",function(e){var t=this;e.getMessages().then(function(e){t.messages=e})}]})},136:function(e,t){angular.module("market-trade.graph-pie",[]).component("tradeGraphPie",{templateUrl:"graph-pie/graph-pie.html",bindings:{messages:"<"},controller:[function(){var e=this;this.$onChanges=function(){var t=_.groupBy(e.messages,"originatingCountry");this.labels=Object.keys(t),this.data=[],this.labels.forEach(function(r){e.data.push(t[r].length)})}}]})},137:function(e,t){angular.module("market-trade.graph-line",[]).component("tradeGraphLine",{templateUrl:"graph-line/graph-line.html",bindings:{messages:"<"},controller:[function(){var e=this;this.$onChanges=function(){if(e.messages){var t=e.messages.map(function(e){return e.timePlaced=new Date(e.timePlaced),e});t.sort(function(e,t){return e.timePlaced>t.timePlaced?1:-1}),e.messagesMap=_.groupBy(t,function(e){return e.currencyFrom+" - "+e.currencyTo}),e.allTrades=Object.keys(e.messagesMap),this.selectedTrade=e.allTrades[0],e.updateChart()}},this.updateChart=function(){e.labels=e.messagesMap[e.selectedTrade].map(function(e){return e.timePlaced}),e.series=[e.selectedTrade],e.data=[],e.data.push(e.messagesMap[e.selectedTrade].map(function(e){return e.rate})),e.onClick=function(e,t){console.log(e,t)},e.options={scales:{xAxes:[{type:"time"}]}}}}]})},138:function(e,t){angular.module("market-trade",["ngRoute","market-trade.table","market-trade.tab","market-trade.graph","chart.js"]).config(["$locationProvider","$routeProvider",function(e,t){e.hashPrefix("!"),t.when("/table",{template:"<trade-table></trade-table>",activetab:"table"}).when("/graph",{template:"<trade-graph></trade-graph>",activetab:"graph"}).otherwise({redirectTo:"/table"})}])},139:function(e,t,r){var a={"./app.js":138,"./graph/graph-line/graph-line.js":137,"./graph/graph-pie/graph-pie.js":136,"./graph/graph.js":135,"./share/tradeService.js":134,"./tab/tab.js":133,"./table/table.js":132};function s(e){var t=n(e);return r(t)}function n(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=139},155:function(e,t,r){var a={"./af":123,"./af.js":123,"./ar":122,"./ar-dz":121,"./ar-dz.js":121,"./ar-kw":120,"./ar-kw.js":120,"./ar-ly":119,"./ar-ly.js":119,"./ar-ma":118,"./ar-ma.js":118,"./ar-sa":117,"./ar-sa.js":117,"./ar-tn":116,"./ar-tn.js":116,"./ar.js":122,"./az":115,"./az.js":115,"./be":114,"./be.js":114,"./bg":113,"./bg.js":113,"./bm":112,"./bm.js":112,"./bn":111,"./bn.js":111,"./bo":110,"./bo.js":110,"./br":109,"./br.js":109,"./bs":108,"./bs.js":108,"./ca":107,"./ca.js":107,"./cs":106,"./cs.js":106,"./cv":105,"./cv.js":105,"./cy":104,"./cy.js":104,"./da":103,"./da.js":103,"./de":102,"./de-at":101,"./de-at.js":101,"./de-ch":100,"./de-ch.js":100,"./de.js":102,"./dv":99,"./dv.js":99,"./el":98,"./el.js":98,"./en-au":97,"./en-au.js":97,"./en-ca":96,"./en-ca.js":96,"./en-gb":95,"./en-gb.js":95,"./en-ie":94,"./en-ie.js":94,"./en-il":93,"./en-il.js":93,"./en-nz":92,"./en-nz.js":92,"./eo":91,"./eo.js":91,"./es":90,"./es-do":89,"./es-do.js":89,"./es-us":88,"./es-us.js":88,"./es.js":90,"./et":87,"./et.js":87,"./eu":86,"./eu.js":86,"./fa":85,"./fa.js":85,"./fi":84,"./fi.js":84,"./fo":83,"./fo.js":83,"./fr":82,"./fr-ca":81,"./fr-ca.js":81,"./fr-ch":80,"./fr-ch.js":80,"./fr.js":82,"./fy":79,"./fy.js":79,"./gd":78,"./gd.js":78,"./gl":77,"./gl.js":77,"./gom-latn":76,"./gom-latn.js":76,"./gu":75,"./gu.js":75,"./he":74,"./he.js":74,"./hi":73,"./hi.js":73,"./hr":72,"./hr.js":72,"./hu":71,"./hu.js":71,"./hy-am":70,"./hy-am.js":70,"./id":69,"./id.js":69,"./is":68,"./is.js":68,"./it":67,"./it.js":67,"./ja":66,"./ja.js":66,"./jv":65,"./jv.js":65,"./ka":64,"./ka.js":64,"./kk":63,"./kk.js":63,"./km":62,"./km.js":62,"./kn":61,"./kn.js":61,"./ko":60,"./ko.js":60,"./ky":59,"./ky.js":59,"./lb":58,"./lb.js":58,"./lo":57,"./lo.js":57,"./lt":56,"./lt.js":56,"./lv":55,"./lv.js":55,"./me":54,"./me.js":54,"./mi":53,"./mi.js":53,"./mk":52,"./mk.js":52,"./ml":51,"./ml.js":51,"./mn":50,"./mn.js":50,"./mr":49,"./mr.js":49,"./ms":48,"./ms-my":47,"./ms-my.js":47,"./ms.js":48,"./mt":46,"./mt.js":46,"./my":45,"./my.js":45,"./nb":44,"./nb.js":44,"./ne":43,"./ne.js":43,"./nl":42,"./nl-be":41,"./nl-be.js":41,"./nl.js":42,"./nn":40,"./nn.js":40,"./pa-in":39,"./pa-in.js":39,"./pl":38,"./pl.js":38,"./pt":37,"./pt-br":36,"./pt-br.js":36,"./pt.js":37,"./ro":35,"./ro.js":35,"./ru":34,"./ru.js":34,"./sd":33,"./sd.js":33,"./se":32,"./se.js":32,"./si":31,"./si.js":31,"./sk":30,"./sk.js":30,"./sl":29,"./sl.js":29,"./sq":28,"./sq.js":28,"./sr":27,"./sr-cyrl":26,"./sr-cyrl.js":26,"./sr.js":27,"./ss":25,"./ss.js":25,"./sv":24,"./sv.js":24,"./sw":23,"./sw.js":23,"./ta":22,"./ta.js":22,"./te":21,"./te.js":21,"./tet":20,"./tet.js":20,"./tg":19,"./tg.js":19,"./th":18,"./th.js":18,"./tl-ph":17,"./tl-ph.js":17,"./tlh":16,"./tlh.js":16,"./tr":15,"./tr.js":15,"./tzl":14,"./tzl.js":14,"./tzm":13,"./tzm-latn":12,"./tzm-latn.js":12,"./tzm.js":13,"./ug-cn":11,"./ug-cn.js":11,"./uk":10,"./uk.js":10,"./ur":9,"./ur.js":9,"./uz":8,"./uz-latn":7,"./uz-latn.js":7,"./uz.js":8,"./vi":6,"./vi.js":6,"./x-pseudo":5,"./x-pseudo.js":5,"./yo":4,"./yo.js":4,"./zh-cn":3,"./zh-cn.js":3,"./zh-hk":2,"./zh-hk.js":2,"./zh-tw":1,"./zh-tw.js":1};function s(e){var t=n(e);return r(t)}function n(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=155},190:function(e,t,r){function a(e){e.keys().forEach(e)}r(125),r(188),r(186),r(141),a(r(139)),a(r(131))}});