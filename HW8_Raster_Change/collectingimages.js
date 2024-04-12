var yearBefore = '2012'
var yearAfter = '2020'

var datasetBefore = ee.ImageCollection('USDA/NAIP/DOQQ')
                .filter(ee.Filter.bounds(geometry))
                .filter(ee.Filter.date(yearBefore + '-01-01', yearBefore + '-12-31'))

var datasetAfter = ee.ImageCollection('USDA/NAIP/DOQQ')
                .filter(ee.Filter.bounds(geometry))
                .filter(ee.Filter.date(yearAfter + '-01-01', yearAfter + '-12-31'))

var befImg = datasetBefore.select(['R', 'G', 'B'])
befImg = befImg.median().clip(geometry);

var aftImg = datasetAfter.select(['R', 'G', 'B'])
aftImg = aftImg.median().clip(geometry);

var trueColorVis = {
    min: 0,
    max: 255,
};

Map.setCenter(-77.53103, 35.89001, 15);
Map.addLayer(aftImg, trueColorVis, yearAfter);
Map.addLayer(befImg, trueColorVis, yearBefore);