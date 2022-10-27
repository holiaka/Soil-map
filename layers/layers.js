ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3395").setExtent([2320987.231669, 5202287.930306, 4582817.967981, 7061943.926875]);
var wms_layers = [];


        var lyr_Background_0 = new ol.layer.Tile({
            'title': 'Background ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Blacksoilandchestnut_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Black soil and chestnut",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Blacksoilandchestnut_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2374656.596688, 5501554.167065, 4529159.299847, 6869212.503795]
                            })
                        });
var lyr_Forestgrayandpodsolized_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Forest gray and podsolized",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Forestgrayandpodsolized_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2376972.459521, 5458641.790221, 4526834.440429, 6868592.075686]
                            })
                        });
var lyr_Sodpodzolic_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sod-podzolic",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sodpodzolic_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2376536.145688, 5472536.748376, 4514890.820993, 6865312.000108]
                            })
                        });
var lyr_Peatswamps_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Peat swamps",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Peatswamps_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2375955.248496, 5490886.093980, 4491319.048312, 6864959.601948]
                            })
                        });

lyr_Background_0.setVisible(true);lyr_Blacksoilandchestnut_1.setVisible(true);lyr_Forestgrayandpodsolized_2.setVisible(true);lyr_Sodpodzolic_3.setVisible(true);lyr_Peatswamps_4.setVisible(true);
var layersList = [lyr_Background_0,lyr_Blacksoilandchestnut_1,lyr_Forestgrayandpodsolized_2,lyr_Sodpodzolic_3,lyr_Peatswamps_4];
