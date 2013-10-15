
function nevershowagain(){
    window.localStorage.setItem("touched","true");
    
	if(inAnyang==true){
        $.mobile.changePage('#page1',
                            {
                            reverse: false
                            }
                            );
    }
	else{
		$.mobile.changePage('#page2',
                            {
                            reverse: false
                            }
                            );
    }
}

function goToMain(){
    if(revisiting){
        detectMyLocation();
    }
    $.mobile.changePage('#page3',
                        {
                        reverse: false
                        }
                        );
    
}


function goToMainRev(){
    $.mobile.changePage('#page3',
                        {
                        reverse: true
                        }
                        );
   
}

function goToMainRevDeleteVideo(){
    $.mobile.changePage('#page3',
                        {
                        reverse: true
                        }
                        );
}

function goToInformation(){
    $.mobile.changePage('#page4',
                        {
                        reverse: false
                        }
                        );
}

function goToInformationRev(){
    $.mobile.changePage('#page4',
                        {
                        reverse: true
                        }
                        );
}


function goToGeneralInfo(){
    $.mobile.changePage('#generalinfo');
}

function goToArtistInformation1(){
    $.mobile.changePage('#a1info');
}

function goToArtistInformation2(){
    $.mobile.changePage('#a2info');
    
}
function goToArtistInformation3(){
    $.mobile.changePage('#a3info');
    
}
function goToArtistInformation4(){
    $.mobile.changePage('#a4info');
    
}
function goToArtistInformation5(){
    $.mobile.changePage('#a5info');
    
}
function goToArtistInformation6(){
    $.mobile.changePage('#a6info');
    
}

function goToArtistInformation1Rev(){
    $.mobile.changePage('#a1info',
                        {
                        reverse: true
                        }
                        );
}

function goToArtistInformation2Rev(){
    $.mobile.changePage('#a2info',
                        {
                        reverse: true
                        }
                        );
    
}
function goToArtistInformation3Rev(){
    $.mobile.changePage('#a3info',
                        {
                        reverse: true
                        }
                        );
    
}
function goToArtistInformation4Rev(){
    $.mobile.changePage('#a4info',
                        {
                        reverse: true
                        }
                        );
    
}
function goToArtistInformation5Rev(){
    $.mobile.changePage('#a5info',
                        {
                        reverse: true
                        }
                        );
    
}
function goToArtistInformation6Rev(){
    $.mobile.changePage('#a6info',
                        {
                        reverse: true
                        }
                        );
    
}


function goToList1(){
    $.mobile.changePage('#a1list');
}
function goToList2(){
    $.mobile.changePage('#a2list');
}
function goToList3(){
    $.mobile.changePage('#a3list');
}
function goToList4(){
    $.mobile.changePage('#a4list');
}
function goToList5(){
    $.mobile.changePage('#a5list');
}
function goToList6(){
    $.mobile.changePage('#a6list');
}



function goBackToTest(){
    revisiting=true;
    navigator.geolocation.getCurrentPosition(testPosition,onError,options);
}