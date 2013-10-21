var map;
var overlay;
var current_id;
var markers = [];
var isClose=false;
var location_marker;
var markerSize=12;

$("div:jqmData(role='page'):last").bind('pageinit', function() {
                                        initialize(startLat,startLon,currentLat,currentLon);
                                        });

function initialize(slat,slng,clat,clng) {
    var current_latlng = new google.maps.LatLng(clat,clng);
    var start_latlng=new google.maps.LatLng(slat,slng);
    var myOptions = {
    zoom: 13,center: start_latlng,mapTypeId: google.maps.MapTypeId.ROADMAP, zoomControl:false, mapTypeControl:false, streetViewControl: false
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
    
    jQuery.get("http://interface-assets.apap.or.kr/dataxml/data.xml", {}, function(data) {
               jQuery(data).find("marker").each(function() {
                                                var markerxml = jQuery(this);
                                                var marker_latlng = new google.maps.LatLng(parseFloat(markerxml.attr("lat")),
                                                                                           parseFloat(markerxml.attr("lon")));
                                                var marker = new google.maps.Marker({position: marker_latlng, map: map,zIndex:null});
                                                markers.push(marker);
                                                
                                                var distance=google.maps.geometry.spherical.computeDistanceBetween(current_latlng,marker.getPosition());
                                                
                                                if(distance<parseFloat(markerxml.attr("dist"))){
                                                
                                                marker.set("isClose",true);
                                                marker.setAnimation(google.maps.Animation.BOUNCE);
                                                }
                                                else{
                                                
                                                marker.set("isClose",false);
                                                marker.setAnimation(null);
                                                }
                                                
                                                marker.set("distcriteria",markerxml.attr("dist"));
                                                marker.set("id",markerxml.attr("id"));
                                                marker.set("oldtitle",markerxml.attr("title"));
                                                marker.set("chosen",markerxml.attr("cnumber"));
                                                marker.set("oldartist",markerxml.attr("artist"));
                                                marker.set("oldyear",markerxml.attr("year"));
                                                
                                                marker.set("bool1",markerxml.attr("bool1"));
                                                marker.set("bool2",markerxml.attr("bool2"));
                                                marker.set("bool3",markerxml.attr("bool3"));
                                                marker.set("bool4",markerxml.attr("bool4"));
                                                marker.set("bool5",markerxml.attr("bool5"));
                                                marker.set("bool6",markerxml.attr("bool6"));
                                                
                                                
                                                
                                                var pinIcon = new google.maps.MarkerImage("img/markericons/"+marker.get("chosen")+".png",
                                                                                          null,
                                                                                          null,
                                                                                          new google.maps.Point(markerSize/2.0,markerSize/2.0),
                                                                                          new google.maps.Size(markerSize, markerSize));
                                                marker.setIcon(pinIcon);
                                                
                                                
                                                
                                                
                                                
                                                
                                                google.maps.event.addListener(map, 'click', function(event) {
                                                                              infobox.hide();
                                                                              });
                                                
                                                
                                                google.maps.event.addListener(marker, 'click', function() {
                                                                              
                                                                              current_id=marker.get("id");
                                                                              isClose=marker.get("isClose");
                                                                              //                                                                              var _id=marker.get("chosen");
                                                                              $("#a0").html(marker.get("oldartist")+"<br>"+marker.get("oldtitle")+", "+marker.get("oldyear"));
                                                                              var bool1=marker.get("bool1");
                                                                              var bool2=marker.get("bool2");
                                                                              var bool3=marker.get("bool3");
                                                                              var bool4=marker.get("bool4");
                                                                              var bool5=marker.get("bool5");
                                                                              var bool6=marker.get("bool6");
                                                                              
                                                                              if(bool1=="1"){                                                                          $("#a1").show();
                                                                              }
                                                                              else{
                                                                              $("#a1").hide();
                                                                              }
                                                                              
                                                                              
                                                                              if(bool2=="1"){                                                                          $("#a2").show();
                                                                              }
                                                                              else{
                                                                              $("#a2").hide();
                                                                              }
                                                                              
                                                                              if(bool3=="1"){                                                                          $("#a3").show();
                                                                              }
                                                                              else{
                                                                              $("#a3").hide();
                                                                              }
                                                                              
                                                                              if(bool4=="1"){                                                                          $("#a4").show();
                                                                              }
                                                                              else{
                                                                              $("#a4").hide();
                                                                              }
                                                                              
                                                                              if(bool5=="1"){                                                                          $("#a5").show();
                                                                              }
                                                                              else{
                                                                              $("#a5").hide();
                                                                              }
                                                                              
                                                                              if(bool6=="1"){                                                                          $("#a6").show();
                                                                              }
                                                                              else{
                                                                              $("#a6").hide();
                                                                              }
                                                                              
                                                                              infobox.open(map,this);
                                                                              infobox.show();
                                                                              });
                                                
                                                });
               
               });
    
    
    var infobox = new InfoBox({
                              content: document.getElementById("infobox"),
                              disableAutoPan: true,
                              pixelOffset: new google.maps.Size(0, 0),
                              zIndex: null,
                              boxStyle: {
                              opacity: 1.00
                              },
                              closeBoxURL: "",
                              infoBoxClearance: new google.maps.Size(1, 1)
                              });
    
    
    
    location_marker=new google.maps.Marker({position: current_latlng, map: map});
    
    var pinIcon = new google.maps.MarkerImage("img/markericons/myLocation.png",
                                              null,
                                              null,
                                              new google.maps.Point(markerSize/2.0,markerSize/2.0),
                                              new google.maps.Size(markerSize, markerSize));
    location_marker.setIcon(pinIcon);
    
    infobox.open(map,location_marker);
    infobox.hide();
    
}

function a1show(){
    if(isClose){
        videoBoot(1);
        window.localStorage.setItem("cc1_"+current_id,"true");
        $('#cc1_'+current_id).css("color","rgb(50,50,100)");
    }
}
function a2show(){
    if(isClose){
        videoBoot(2);
        window.localStorage.setItem("cc2_"+current_id,"true");
        $('#cc2_'+current_id).css("color","rgb(50,50,100)");
    }
}
function a3show(){
    if(isClose){
        videoBoot(3);
        window.localStorage.setItem("cc3_"+current_id,"true");
        $('#cc3_'+current_id).css("color","rgb(50,50,100)");
    }
}
function a4show(){
    if(isClose){
        photoBoot(4);
        window.localStorage.setItem("cc4_"+current_id,"true");
        $('#cc4_'+current_id).css("color","rgb(50,50,100)");
    }
}
function a5show(){
    if(isClose){
        videoBoot(5);
        window.localStorage.setItem("cc5_"+current_id,"true");
        $('#cc5_'+current_id).css("color","rgb(50,50,100)");
    }
}
function a6show(){
    if(isClose){
        videoBoot(6);
        window.localStorage.setItem("cc6_"+current_id,"true");
        $('#cc6_'+current_id).css("color","rgb(50,50,100)");
    }
}




function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


function videoBoot(_id){
    
    jQuery.get("http://interface-assets.apap.or.kr/dataxml/streaminginfo.xml", {}, function(data) {
               jQuery(data).find("c"+_id+"_"+current_id).each(function() {
                                                              var markerxml = jQuery(this);
                                                              var connection=markerxml.attr("fileurl");
                                                              $("#videofile").attr("src",connection);
                                                              })
               });
    
    $.mobile.changePage('#videogallery');
    
    
}

function photoBoot(_id){    
    jQuery.get("http://interface-assets.apap.or.kr/dataxml/streaminginfo.xml", {}, function(data) {
               jQuery(data).find("c"+_id+"_"+current_id).each(function() {
                                                              var markerxml = jQuery(this);
                                                              var filenumbers=markerxml.attr("fileurl");
                                                              var sequence=new Array(filenumbers-1);
                                                              for (var i = 0; i < filenumbers-1; i++) {
                                                              sequence[i]=i+1;
                                                              
                                                              }
                                                              shuffled_sequence=shuffle(sequence);
                                                              shuffled_sequence[filenumbers-1]=filenumbers;
                                                              
                                                              var photo='<ul class="slides">';
                                                              for (var i = 0; i < filenumbers; i++) {
                                                              photo=photo+'<li><img src="http://interface-assets.apap.or.kr/works/'+_id+'/'+_id+'_'+current_id+'_'+shuffled_sequence[i]+'.jpg"/></li>'
                                                              
                                                              }
                                                              photo=photo+'</ul>';
                                                              $('#myflexslider').before('<div id="element_temp" class="flexslider"></div>');
                                                              $('#myflexslider').remove();
                                                              $('#element_temp').html(photo);
                                                              $('#element_temp').flexslider({useCSS:true,controlNav:false,slideshow:false,directionNav:false,animationLoop:false,animationSpeed:100});
                                                              $('#element_temp').attr('id','myflexslider');
                                                              })
               });
    $.mobile.changePage('#photogallery');
    
}


var options2 = {
enableHighAccuracy: true, timeout:30000000, maximumAge:0
};

function getPosition(position){
    var current_latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    
    for (var i = 0; i < markers.length; i++) {
//        
        var marker_latlng = markers[i].getPosition();
//        
        var distance=google.maps.geometry.spherical.computeDistanceBetween(current_latlng,marker_latlng);
//        
//        
        if(distance<markers[i].get("distcriteria")){
            markers[i].set("isClose",true);
            markers[i].setAnimation(google.maps.Animation.BOUNCE);
        }
        else{
            markers[i].set("isClose",false);
            markers[i].setAnimation(null);
        }
    }
    location_marker.setPosition(current_latlng);
    map.panTo(current_latlng);
}

function ifError(error){
    navigator.geolocation.getCurrentPosition(getPosition,ifError,options2);
}


function detectMyLocation(){
    if(inAnyang){
        navigator.geolocation.getCurrentPosition(getPosition,ifError,options2);
    }
    else{
        for (var i = 0; i < markers.length; i++) {
            markers[i].setAnimation(null);
        }
        var start_latlng=new google.maps.LatLng(startLat,startLon);
        map.panTo(start_latlng);
    }
}
