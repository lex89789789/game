
// Code Per Second def
var CPS;

// all buttons

var buttons = ['prod1','prod2','prod3','prod4','prod5',
  'upbutton','introbutton','creditsbutton','creditsbb','startbutton','upgradebb',
  'up1','up2','up3','up4','up5'
];


// current ingame save data
var dat = {
  units: 0,
  prestige: 0,
  prod1: 0,
  prod2: 0,
  prod3: 0,
  prod4: 0,
  prod5: 0,
  up1: 0,
  up2: 0,
  up3: 0,
  up4: 0,
  up5: 0
};

// initial costs for all production units and upgrades
var cost = {
  c1: 1,
  c2: 1000,
  c3: 10000,
  c4: 900000,
  c5: 4000000,
  u1: 1000,
  u2: 100000,
  u3: 1000000,
  u4: 9000000,
  u5: 40000000,
};

// Player data
// this is what gets saved
var userDat = makeSaveDat();