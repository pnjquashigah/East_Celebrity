var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_East_Celebrity_Roads_1 = new ol.format.GeoJSON();
var features_East_Celebrity_Roads_1 = format_East_Celebrity_Roads_1.readFeatures(json_East_Celebrity_Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_East_Celebrity_Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_East_Celebrity_Roads_1.addFeatures(features_East_Celebrity_Roads_1);
var lyr_East_Celebrity_Roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_East_Celebrity_Roads_1, 
                style: style_East_Celebrity_Roads_1,
                popuplayertitle: 'East_Celebrity_Roads',
                interactive: true,
                title: '<img src="styles/legend/East_Celebrity_Roads_1.png" /> East_Celebrity_Roads'
            });

lyr_Satellite_0.setVisible(true);lyr_East_Celebrity_Roads_1.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_East_Celebrity_Roads_1];
lyr_East_Celebrity_Roads_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_East_Celebrity_Roads_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_East_Celebrity_Roads_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - visible with data', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_East_Celebrity_Roads_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});