import * as utils from utils.js;

/*

IMPORTANT NOTES:

- This app is intended for use by multiple users, and this functionality is hard to show
- Most variables refer to objects on webpage.

*/


// these 3 code segments come from https://www.w3schools.com/js/js_cookies.asp#:~:text=With%20JavaScript%2C%20a%20cookie%20can,date%20(in%20UTC%20time).
    {

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
function checkCookie(cookie) {
    let user = getCookie(cookie);
    if (user != "") {
        return true;
    } else{
        return false;
    }
}

}

// Makes the save data by turning it into a 10 char hex string
// deal with it
function makeSaveDat(){
  // add more vars here for more dat.[unit] types
  var hexunits = utils.dat.units.toString(16);
  var hexprod1 = utils.dat.prod1.toString(16);
  var hexprod2 = utils.dat.prod2.toString(16);
  var hexprod3 = utils.dat.prod3.toString(16);
  var hexprod4 = utils.dat.prod4.toString(16);
  var hexprod5 = utils.dat.prod5.toString(16);
  var hexprestige = utils.dat.prestige.toString(16);
  var hexup1 = utils.dat.up1.toString(16);
  var hexup2 = utils.dat.up2.toString(16);
  var hexup3 = utils.dat.up3.toString(16);
  var hexup4 = utils.dat.up4.toString(16);
  var hexup5 = utils.dat.up5.toString(16);
  
  //Combined Serialized Data
  var CSD = '';
  
  while(hexunits.length < 25){
    hexunits = '0'+ hexunits;
  }if(hexunits.length === 25){
    CSD = CSD + hexunits;}
  
  while(hexprestige.length < 25){
    hexprestige = '0'+ hexprestige;
  }if(hexprestige.length === 25){
    CSD = CSD + hexprestige;}
  
  while(hexprod1.length < 10){
    hexprod1 = '0'+ hexprod1;
  }if(hexprod1.length === 10){
    CSD = CSD + hexprod1;}
    
  while(hexprod2.length < 10){
    hexprod2 = '0'+ hexprod2;
  }if(hexprod2.length === 10){
    CSD = CSD + hexprod2;}
    
  while(hexprod3.length < 10){
    hexprod3 = '0'+ hexprod3;
  }if(hexprod3.length === 10){
    CSD = CSD + hexprod3;}
    
  while(hexprod4.length < 10){
    hexprod4 = '0'+ hexprod4;
  }if(hexprod4.length === 10){
    CSD = CSD + hexprod4;}

  while(hexprod5.length < 10){
    hexprod5 = '0'+ hexprod5;
  }if(hexprod5.length === 10){
    CSD = CSD + hexprod5;}
    
  while(hexup1.length < 10){
    hexup1 = '0'+ hexup1;
  }if(hexup1.length === 10){
    CSD = CSD + hexup1;}
    
  while(hexup2.length < 10){
    hexup2 = '0'+ hexup2;
  }if(hexup2.length === 10){
    CSD = CSD + hexup2;}
    
  while(hexup3.length < 10){
    hexup3 = '0'+ hexup3;
  }if(hexup3.length === 10){
    CSD = CSD + hexup3;}

  while(hexup4.length < 10){
    hexup4 = '0'+ hexup4;
  }if(hexup4.length === 10){
    CSD = CSD + hexup4;}

  while(hexup5.length < 10){
    hexup5 = '0'+ hexup5;
  }if(hexup5.length === 10){
    CSD = CSD + hexup5;}


  // if the any piece of data is longer than 10 hex chars long, it breaks.
  // i could expand it, but I wont
  if(hexunits.length > 25 ||
      hexprestige.length > 25 ||
      hexprod1.length > 10 ||
      hexprod2.length > 10 ||
      hexprod3.length > 10 ||
      hexprod4.length > 10 ||
      hexprod5.length > 10 ||
      hexup1.length > 10 ||
      hexup2.length > 10 ||
      hexup3.length > 10 ||
      hexup4.length > 10 ||
      hexup5.length > 10){
    console.log('levelDat.saveData too large, fatal overflow error');
    console.log(CSD);
  }
  if(hexunits.length === 25 &&
      hexprestige.length === 25 &&
      hexprod1.length === 10 &&
      hexprod2.length === 10 &&
      hexprod3.length === 10 &&
      hexprod4.length === 10 &&
      hexprod5.length === 10 &&
      hexup1.length === 10 &&
      hexup2.length === 10 &&
      hexup3.length === 10 &&
      hexup4.length === 10 &&
      hexup5.length === 10){
    return CSD;
  }
}

// Decodes save data that you just made
function decodeSaveDat(data){
  var newunits = [];
  var oldunits = data;
  // units
  appendItem(newunits, parseInt(oldunits.substring(0,25), 16));
  // prestige
  appendItem(newunits, parseInt(oldunits.substring(26,50), 16));
  // amount of each production unit
  appendItem(newunits, parseInt(oldunits.substring(51,60), 16));
  appendItem(newunits, parseInt(oldunits.substring(61,70), 16));
  appendItem(newunits, parseInt(oldunits.substring(71,80), 16));
  appendItem(newunits, parseInt(oldunits.substring(81,90), 16));
  appendItem(newunits, parseInt(oldunits.substring(91,100), 16));
  // upgrades
  appendItem(newunits, parseInt(oldunits.substring(101,110), 16));
  appendItem(newunits, parseInt(oldunits.substring(111,120), 16));
  appendItem(newunits, parseInt(oldunits.substring(121,130), 16));
  appendItem(newunits, parseInt(oldunits.substring(131,140), 16));
  appendItem(newunits, parseInt(oldunits.substring(141,150), 16));
  
  return newunits;
}



// REMAKE SAVE FUNCTION!!!!




// Math functions
  {
// turns a number into scientific notation to fit screen better
// ONLY NUMBERS
function sciNot(num1){
  var num = num1.toString();
  if(num.length > 9){
  return num.substring(0,1)+'.'+ num.substring(1,3) + 'e' + num.substring(1,num.length).length;
  }else{
    return num;
  }
}

// rounds better because I don't like the inbuilt system
// ONLY NUMBERS
function round(int, places){
  var str = parseFloat(int);
  str *= Math.pow(10, places);
  str = Math.round(str);
  str /= Math.pow(10, places);
  return str;
}

// floating point error revision
function FPER(num1){
  var num = num1.toString();
  if(num.length > 9){
    return parseFloat(num.substring(0,num.length-8));
  }else{
    return parseFloat(num);
  }
}
}


// Gameplay design elements
// would do this in another file but that isn't supported in this program


//update screen

function US(){
  CPS = round((utils.dat.prod1) +
      (utils.dat.prod2*7) +
      (utils.dat.prod3*43) +
      (utils.dat.prod4*172) +
      (utils.dat.prod5*921), 1);
  
  setProperty('unitDisplay','text',sciNot(utils.dat.units) + ' code');
  setProperty('cpslabel','text','Code Per Second: ' + sciNot((CPS))*2);
  
  setProperty('uclabel','text',sciNot(dat.units) + ' code');
  setProperty('ucpslabel','text','Code Per Second: ' + sciNot((CPS))*2);
  
  setProperty('p1label','text',sciNot(dat.prod1.toString()));
  setProperty('p2label','text',sciNot(dat.prod2.toString()));
  setProperty('p3label','text',sciNot(dat.prod3.toString()));
  setProperty('p4label','text',sciNot(dat.prod4.toString()));
  setProperty('p5label','text',sciNot(dat.prod5.toString()));
  
  setProperty('cost1','text', sciNot(cost.c1.toString()));
  setProperty('cost2','text', sciNot(cost.c2.toString()));
  setProperty('cost3','text', sciNot(cost.c3.toString()));
  setProperty('cost4','text', sciNot(cost.c4.toString()));
  setProperty('cost5','text', sciNot(cost.c5.toString()));
  
  setProperty('up1cost','text', sciNot(cost.u1.toString()));
  setProperty('up2cost','text', sciNot(cost.u2.toString()));
  setProperty('up3cost','text', sciNot(cost.u3.toString()));
  setProperty('up4cost','text', sciNot(cost.u4.toString()));
  setProperty('up5cost','text', sciNot(cost.u5.toString()));
  
  dat.units = dat.units + parseFloat(CPS);
}


// update screen tick timer
setInterval(US(), 500);

// Opens intro screen if user has no saves
if (LLS(getUserId()) == false){
  setScreen("intro_screen");
}

// screen changing event handlers
onEvent('startbutton','click',function(){setScreen('home_screen')});
onEvent('creditsbutton','click',function(){setScreen('credits_screen')});
onEvent('introbutton','click',function(){setScreen('intro_screen')});
onEvent('upbutton','click',function(){setScreen('upgrade_screen')});
onEvent('creditsbb','click',function(){setScreen('home_screen')});
onEvent('upgradebb','click',function(){setScreen('home_screen')});



// dev tools, console, and functions (not working)
    {

var iids = false;
var clog = [];
setPosition('ds',320,0);
setPosition('di',320,0);

onEvent('devbutton','click',function(){
  if(iids == false){
    setPosition('ds',0,0);
    setPosition('di',0,415);
    iids = true;
    console.log('yes');
  }
  if(iids == true){
    setPosition('ds',320,0);
    setPosition('di',320,0);
    iids = false;
  }
});

onEvent('di','change',function(){
  eval(getText('di'));
  appendItem(clog, getText('di'));
  setProperty('di','text','');
  function nln(){
    var out = '';
    for(var i = 0; i<clog.length; i++){
      var temp = clog[i];
      out = out + '\n' + temp;
    }
    return out;
  }
  setText('ds', nln());
});


// dev functions
function earn(num){
  dat.units += num;
  US();
}
earn(1);

function esc(){
  iids = false;
  setProperty('ds','hidden',true);
  setProperty('di','hidden',true);
}

}

// upgrade functions. includes temp vars for values because it doesn't work otherwise??
{

dat.up1 = 0;
dat.up2 = 0;
dat.up3 = 0;
dat.up4 = 0;
dat.up5 = 0;

earn(100000000000);

// Upgrade 1 functions
    {
onEvent('up1','mouseover',function(){
  textLabel('ue1','This upgrade can be bought indefinitely, and doubles the production of workers each time it is bought. You have bought this upgrade ' + dat.up1 + ' times.');
  setPosition('ue1',175,70);
  setProperty('ue1','background-color','white');
});
onEvent('up1','mouseout',function(){
  deleteElement('ue1');
});
onEvent('up1','click',function(){
  if(dat.units >= cost.up1){
    dat.up1 += 1;
    dat.units -= cost.up1;
    cost.up1 = Math.round(cost.up1 + parseFloat((Math.pow(2,dat.up1).toString())));
  }
});
}



}

// production buying handlers
    {
      
onEvent('prod1','click',function(){
  if(dat.units >= cost.c1){
    dat.units -= round(cost.c1, 1);
    dat.prod1 += 1;
    cost.c1 = Math.ceil(cost.c1 + parseFloat((Math.pow(1.13,dat.prod1).toString())));
  }
});
onEvent('prod2','click',function(){
  if(dat.units >= cost.c2){
    dat.units -= round(cost.c2, 1);
    dat.prod2 += 1;
    cost.c2 = Math.round(cost.c2 + parseFloat((Math.pow(1.24,dat.prod2).toString())));
  }
});
onEvent('prod3','click',function(){
  if(dat.units >= cost.c3){
    dat.units -= round(cost.c3, 1);
    dat.prod3 += 1;
    cost.c3 = Math.round(cost.c3 + parseFloat((Math.pow(1.38,dat.prod3).toString())));
  }
});
onEvent('prod4','click',function(){
  if(dat.units >= cost.c4){
    dat.units -= round(cost.c4, 1);
    dat.prod4 += 1;
    cost.c4 = Math.round(cost.c4 + parseFloat((Math.pow(1.45,dat.prod4).toString())));
  }
});
onEvent('prod5','click',function(){
  if(dat.units >= cost.c5){
    dat.units -= round(cost.c5, 1);
    dat.prod5 += 1;
    cost.c5 = Math.round(cost.c5 + parseFloat((Math.pow(1.6,dat.prod5).toString())));
  }
});
}
