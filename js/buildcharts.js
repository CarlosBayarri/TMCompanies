/* BUILDING CHARTS */

function buildChartsAllYears(i, ccaa) {
  var years = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
  years.forEach(function(year) {
    var id = ccaa + year;
    var container = 'containerCanvas' + year;
    var canvas = document.createElement('canvas'); canvas.id = id; canvas.style.display = 'block';
    canvas.style.width = 800; canvas.style.height = 400; document.getElementById(container).appendChild(canvas);
    var ctx = document.getElementById(id).getContext('2d');
    var dataset = [{label: year, data: centroids.features[i].properties.companies[year], type: "radar", backgroundColor: ['rgba(0,0,0, 1)'], borderColor: ['rgb(248,248,255, 1)'] }];
    var chart = new Chart(ctx, {type: 'radar', data: { labels: ["G1", "G2", "G3", "G4"], datasets: dataset}, options: options });
      setTimeout(() => {
        var data = canvas.toDataURL('image/png',1);
        if (year == 2008) charts2008.push(new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({anchor: [0.5, 0.5], src: data})));
        if (year == 2009) charts2009.push(new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({anchor: [0.5, 0.5], src: data})));
        if (year == 2010) charts2010.push(new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({anchor: [0.5, 0.5], src: data})));
        if (year == 2011) charts2011.push(new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({anchor: [0.5, 0.5], src: data})));
        if (year == 2012) charts2012.push(new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({anchor: [0.5, 0.5], src: data})));
        if (year == 2013) charts2013.push(new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({anchor: [0.5, 0.5], src: data})));
        if (year == 2014) charts2014.push(new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({anchor: [0.5, 0.5], src: data})));
        if (year == 2015) charts2015.push(new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({anchor: [0.5, 0.5], src: data})));
        if (year == 2016) charts2016.push(new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({anchor: [0.5, 0.5], src: data})));
        if (year == 2017) charts2017.push(new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({anchor: [0.5, 0.5], src: data})));
        var gdp = centroids.features[i].properties['gdp'];
        let colorGDP;
        if (gdp[newValue] < 17000) colorGDP = 'rgb(255, 255, 0)'; // Yellow
        if (gdp[newValue] > 17000 && gdp[newValue] < 22000) colorGDP = 'rgb(218, 178, 0)'; // Golden
        if (gdp[newValue] > 22000 && gdp[newValue] < 25000) colorGDP = 'rgb(255, 145, 0)'; // Orange
        if (gdp[newValue] > 25000 && gdp[newValue] < 28000) colorGDP = 'rgb(184, 67, 0)'; // Red
        if (gdp[newValue] > 28000) colorGDP = 'rgb(112, 41, 0)'; // Brown
        if (gdp[newValue] == 0) colorGDP = 'rgba(255, 255, 255, 0)'; // No color
        var newStyle = new ol.style.Style({stroke: new ol.style.Stroke({color: 'blue',width: 1}),fill: new ol.style.Fill({color: colorGDP}) });
        coropleths.push(newStyle);
        setTimeout(() => {
        }, 1000);
      }, 5000);
  });
}

/* BUILDING CHARTS */
var newValue = 2008;
var charts = [];
var charts2008 = [];
var charts2009 = [];
var charts2010 = [];
var charts2011 = [];
var charts2012 = [];
var charts2013 = [];
var charts2014 = [];
var charts2015 = [];
var charts2016 = [];
var charts2017 = [];
var coropleths = [];
var layersToRemove = [];

$mdToast.show($mdToast.simple().content("Year: " + newValue).position("bottom right").hideDelay(1500));

for (var i = 0; i<centroids.features.length; i++) {
  var feature = centroids.features[i].properties['Texto'];
  buildChartsAllYears(i, feature);
}
/* BUILDING LAYER */
setTimeout(() => {
  /*
  var years = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
  for (var i = 0; i<centroids.features.length; i++) {
    var feature = centroids.features[i].properties['Texto'];
    var nameCanvas = feature;
    console.log(feature);
    var data = document.getElementById(feature).toDataURL('image/png',1);
    charts.push(new ol.style.Icon(({anchor: [0.5, 0.5], src: data})));
    var gdp = centroids.features[i].properties['gdp'];
    let colorGDP;
    if (gdp[newValue] < 17000) colorGDP = 'rgb(255, 255, 0)'; // Yellow
    if (gdp[newValue] > 17000 && gdp[newValue] < 22000) colorGDP = 'rgb(218, 178, 0)'; // Golden
    if (gdp[newValue] > 22000 && gdp[newValue] < 25000) colorGDP = 'rgb(255, 145, 0)'; // Orange
    if (gdp[newValue] > 25000 && gdp[newValue] < 28000) colorGDP = 'rgb(184, 67, 0)'; // Red
    if (gdp[newValue] > 28000) colorGDP = 'rgb(112, 41, 0)'; // Brown
    if (gdp[newValue] == 0) colorGDP = 'rgba(255, 255, 255, 0)'; // No color
    var newStyle = new ol.style.Style({stroke: new ol.style.Stroke({color: 'blue',width: 1}),fill: new ol.style.Fill({color: colorGDP}) });
    coropleths.push(newStyle);
  }*/
var styles2008 = {
  '01': new ol.style.Style({image: charts2008[0]}),
  '02': new ol.style.Style({image: charts2008[1]}),
  '03': new ol.style.Style({image: charts2008[2]}),
  '04': new ol.style.Style({image: charts2008[3]}),
  '05': new ol.style.Style({image: charts2008[4]}),
  '06': new ol.style.Style({image: charts2008[5]}),
  '07': new ol.style.Style({image: charts2008[6]}),
  '08': new ol.style.Style({image: charts2008[7]}),
  '09': new ol.style.Style({image: charts2008[8]}),
  '10': new ol.style.Style({image: charts2008[9]}),
  '11': new ol.style.Style({image: charts2008[10]}),
  '12': new ol.style.Style({image: charts2008[11]}),
  '13': new ol.style.Style({image: charts2008[12]}),
  '14': new ol.style.Style({image: charts2008[13]}),
  '15': new ol.style.Style({image: charts2008[14]}),
  '16': new ol.style.Style({image: charts2008[15]}),
  '17': new ol.style.Style({image: charts2008[16]})
};
var styles2009 = {
  '01': new ol.style.Style({image: charts2009[0]}),
  '02': new ol.style.Style({image: charts2009[1]}),
  '03': new ol.style.Style({image: charts2009[2]}),
  '04': new ol.style.Style({image: charts2009[3]}),
  '05': new ol.style.Style({image: charts2009[4]}),
  '06': new ol.style.Style({image: charts2009[5]}),
  '07': new ol.style.Style({image: charts2009[6]}),
  '08': new ol.style.Style({image: charts2009[7]}),
  '09': new ol.style.Style({image: charts2009[8]}),
  '10': new ol.style.Style({image: charts2009[9]}),
  '11': new ol.style.Style({image: charts2009[10]}),
  '12': new ol.style.Style({image: charts2009[11]}),
  '13': new ol.style.Style({image: charts2009[12]}),
  '14': new ol.style.Style({image: charts2009[13]}),
  '15': new ol.style.Style({image: charts2009[14]}),
  '16': new ol.style.Style({image: charts2009[15]}),
  '17': new ol.style.Style({image: charts2009[16]})
};
var styles2010 = {
  '01': new ol.style.Style({image: charts2010[0]}),
  '02': new ol.style.Style({image: charts2010[1]}),
  '03': new ol.style.Style({image: charts2010[2]}),
  '04': new ol.style.Style({image: charts2010[3]}),
  '05': new ol.style.Style({image: charts2010[4]}),
  '06': new ol.style.Style({image: charts2010[5]}),
  '07': new ol.style.Style({image: charts2010[6]}),
  '08': new ol.style.Style({image: charts2010[7]}),
  '09': new ol.style.Style({image: charts2010[8]}),
  '10': new ol.style.Style({image: charts2010[9]}),
  '11': new ol.style.Style({image: charts2010[10]}),
  '12': new ol.style.Style({image: charts2010[11]}),
  '13': new ol.style.Style({image: charts2010[12]}),
  '14': new ol.style.Style({image: charts2010[13]}),
  '15': new ol.style.Style({image: charts2010[14]}),
  '16': new ol.style.Style({image: charts2010[15]}),
  '17': new ol.style.Style({image: charts2010[16]})
};

var stylesPIB = {
  '01': coropleths[0],
  '02': coropleths[1],
  '03':  coropleths[2],
  '04':  coropleths[3],
  '05':  coropleths[4],
  '06':  coropleths[5],
  '07':  coropleths[6],
  '08':  coropleths[7],
  '09':  coropleths[8],
  '10':  coropleths[9],
  '11':  coropleths[10],
  '12':  coropleths[11],
  '13':  coropleths[12],
  '14':  coropleths[13],
  '15':  coropleths[14],
  '16':  coropleths[15],
  '17': coropleths[16]
};
window.styleFunction = function(feature) {
  var year = $scope.slider.value;
  if (year == 2008) return styles2008[feature.getProperties()['Codigo']];
  if (year == 2009) return styles2009[feature.getProperties()['Codigo']];
  if (year == 2010) return styles2010[feature.getProperties()['Codigo']];
  if (year == 2011) return styles2011[feature.getProperties()['Codigo']];
  if (year == 2012) return styles2012[feature.getProperties()['Codigo']];
  if (year == 2013) return styles2013[feature.getProperties()['Codigo']];
  if (year == 2014) return styles2014[feature.getProperties()['Codigo']];
  if (year == 2015) return styles2015[feature.getProperties()['Codigo']];
  if (year == 2016) return styles2016[feature.getProperties()['Codigo']];
  if (year == 2017) return styles2017[feature.getProperties()['Codigo']];
};

var styleFunctionCCAA = function(feature) {  return stylesPIB[feature.getProperties()['Codigo']]; };
// Vector layer for CCAA
var vectorSource = new ol.source.Vector({
  features: (new ol.format.GeoJSON()).readFeatures(geojsonSpain)
});
var vectorLayer = new ol.layer.Vector({
  name: 'ccaaLayer',
  source: vectorSource,
  style: styleFunctionCCAA,
  crossOrigin: 'Anonymous',
});
// Vector layer for centroids
var vectorSourceCentroids = new ol.source.Vector({
  features: (new ol.format.GeoJSON()).readFeatures(centroids)
});
var vectorLayerCentroids = new ol.layer.Vector({
  name: 'companiesLayer',
  source: vectorSourceCentroids,
  style: styleFunction,
  crossOrigin: 'Anonymous',
});
olMap.addLayer(vectorLayer);
olMap.addLayer(vectorLayerCentroids); // olMap.addLayer(vectorLayerPIB);
overviewMap.addLayer(vectorLayer);
overviewMap.addLayer(vectorLayerCentroids); // overviewMap.addLayer(vectorLayerPIB);
}, 5000);
