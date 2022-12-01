ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32636").setExtent([-8573.999408, 5105196.863478, 747325.533696, 5721430.897518]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WorldLightGrayBasebyESRIBackground_1 = new ol.layer.Tile({
            'title': 'World Light Gray Base by ESRI (Background)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Organic_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Organic",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Organic_2.png",
    attributions: ' ',
                                projection: 'EPSG:32636',
                                alwaysInRange: true,
                                imageExtent: [-276745.059988, 4939434.061345, 1002454.940012, 5799634.061345]
                            })
                        });
var lyr_Clay_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clay",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clay_3.png",
    attributions: ' ',
                                projection: 'EPSG:32636',
                                alwaysInRange: true,
                                imageExtent: [-303261.215307, 4947177.328245, 1025738.784693, 5803377.328245]
                            })
                        });
var lyr_Loam_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Loam",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Loam_4.png",
    attributions: ' ',
                                projection: 'EPSG:32636',
                                alwaysInRange: true,
                                imageExtent: [-301810.915107, 4915954.053141, 1024389.084893, 5802954.053141]
                            })
                        });
var lyr_Sand_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sand",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sand_5.png",
    attributions: ' ',
                                projection: 'EPSG:32636',
                                alwaysInRange: true,
                                imageExtent: [-302957.585654, 4926074.555011, 1017242.414346, 5801874.555011]
                            })
                        });
var lyr_Forestmask_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Forest mask",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Forestmask_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2464845.837429, 5525689.025473, 4476968.637150, 6868083.841050]
                            })
                        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_WorldLightGrayBasebyESRIBackground_1.setVisible(true);lyr_Organic_2.setVisible(true);lyr_Clay_3.setVisible(true);lyr_Loam_4.setVisible(true);lyr_Sand_5.setVisible(true);lyr_Forestmask_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_WorldLightGrayBasebyESRIBackground_1,lyr_Organic_2,lyr_Clay_3,lyr_Loam_4,lyr_Sand_5,lyr_Forestmask_6];
