var wms_layers = [];

var format_BOSQUE_0 = new ol.format.GeoJSON();
var features_BOSQUE_0 = format_BOSQUE_0.readFeatures(json_BOSQUE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOSQUE_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOSQUE_0.addFeatures(features_BOSQUE_0);
var lyr_BOSQUE_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOSQUE_0, 
                style: style_BOSQUE_0,
                popuplayertitle: "BOSQUE",
                interactive: true,
                    title: '<img src="styles/legend/BOSQUE_0.png" /> BOSQUE'
                });
var format_CURVAS_1 = new ol.format.GeoJSON();
var features_CURVAS_1 = format_CURVAS_1.readFeatures(json_CURVAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CURVAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CURVAS_1.addFeatures(features_CURVAS_1);
var lyr_CURVAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CURVAS_1, 
                style: style_CURVAS_1,
                popuplayertitle: "CURVAS",
                interactive: true,
                title: 'CURVAS'
            });
var format_DRENAJE_2 = new ol.format.GeoJSON();
var features_DRENAJE_2 = format_DRENAJE_2.readFeatures(json_DRENAJE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRENAJE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAJE_2.addFeatures(features_DRENAJE_2);
var lyr_DRENAJE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRENAJE_2, 
                style: style_DRENAJE_2,
                popuplayertitle: "DRENAJE",
                interactive: true,
                    title: '<img src="styles/legend/DRENAJE_2.png" /> DRENAJE'
                });
var format_VIAS_3 = new ol.format.GeoJSON();
var features_VIAS_3 = format_VIAS_3.readFeatures(json_VIAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIAS_3.addFeatures(features_VIAS_3);
var lyr_VIAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIAS_3, 
                style: style_VIAS_3,
                popuplayertitle: "VIAS",
                interactive: true,
                title: 'VIAS'
            });
var format_CONSTRUCCION_4 = new ol.format.GeoJSON();
var features_CONSTRUCCION_4 = format_CONSTRUCCION_4.readFeatures(json_CONSTRUCCION_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONSTRUCCION_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCCION_4.addFeatures(features_CONSTRUCCION_4);
var lyr_CONSTRUCCION_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSTRUCCION_4, 
                style: style_CONSTRUCCION_4,
                popuplayertitle: "CONSTRUCCION",
                interactive: true,
                    title: '<img src="styles/legend/CONSTRUCCION_4.png" /> CONSTRUCCION'
                });
var group_Zona7Escala10000 = new ol.layer.Group({
                                layers: [lyr_BOSQUE_0,lyr_CURVAS_1,lyr_DRENAJE_2,lyr_VIAS_3,lyr_CONSTRUCCION_4,],
                                fold: "open",
                                title: "Zona 7 Escala 10000"});

lyr_BOSQUE_0.setVisible(true);lyr_CURVAS_1.setVisible(true);lyr_DRENAJE_2.setVisible(true);lyr_VIAS_3.setVisible(true);lyr_CONSTRUCCION_4.setVisible(true);
var layersList = [group_Zona7Escala10000];
lyr_BOSQUE_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CURVAS_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'talt': 'talt', 'ttcn': 'ttcn', });
lyr_DRENAJE_2.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'stream_typ': 'stream_typ', 'type_code': 'type_code', 'network': 'network', });
lyr_VIAS_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'CLASIFICACION VIA': 'CLASIFICACION VIA', });
lyr_CONSTRUCCION_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_BOSQUE_0.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_CURVAS_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'talt': 'TextEdit', 'ttcn': 'TextEdit', });
lyr_DRENAJE_2.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'stream_typ': 'TextEdit', 'type_code': 'TextEdit', 'network': 'TextEdit', });
lyr_VIAS_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'CLASIFICACION VIA': 'Range', });
lyr_CONSTRUCCION_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_BOSQUE_0.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CURVAS_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'talt': 'no label', 'ttcn': 'no label', });
lyr_DRENAJE_2.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'stream_typ': 'no label', 'type_code': 'no label', 'network': 'no label', });
lyr_VIAS_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'CLASIFICACION VIA': 'no label', });
lyr_CONSTRUCCION_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CONSTRUCCION_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});