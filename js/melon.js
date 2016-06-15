var c = document.getElementById("output1");
var ctx = c.getContext("2d");

var loafing = new Image();
var melon = new Image();
var stuffed = new Image();
var satisfied = new Image();
var lazy = new Image();
var rebelling = new Image();
var revolting = new Image();
var hungry = new Image();
var bruised = new Image();
var starving = new Image();
var comatose = new Image();
var tired = new Image();
var battered = new Image();
var minusfun = new Image();
var bored = new Image();
var spiritless = new Image();
var excited = new Image();
var hyperactive = new Image();

loafing.src = "imgs/loafing.png";
stuffed.src = "imgs/stuffed.png";
satisfied.src = "imgs/satisfied.png";
lazy.src = "imgs/lazy.png";
rebelling.src = "imgs/rebelling.png";
revolting.src = "imgs/revolting.png";
hungry.src = "imgs/hungry.png";
bruised.src = "imgs/bruised.png";
starving.src = "imgs/starving.png";
comatose.src = "imgs/comatose.png";
tired.src = "imgs/tired.png";
battered.src = "imgs/battered.png";
minusfun.src = "imgs/minusfun.png";
bored.src = "imgs/bored.png";
spiritless.src = "imgs/spiritless.png";
excited.src = "imgs/excited.png";
hyperactive.src = "imgs/hyperactive.png";

melon.src = "imgs/melon.png";

var Attributes =
{
	HUNGER        : 0,
	FATIGUE       : 1,
	REBELLIOUSNESS: 2,
	BOREDOM       : 3
}

var Level =
{
	DEAD_LOW : 0,
	VERY_LOW : 1,
	LOW      : 2,
	NORMAL   : 3,
	HIGH     : 4,
	VERY_HIGH: 5,
	DEAD_HIGH: 6
}
	

melon.onload = function() 
{ 
    ctx.drawImage(melon,0,250);
};

ctx.font="20px Ariel";
ctx.textAlign="center";
	  
MULTIPLIER_DOWN = 1  ;
MULTIPLIER_UP   = 0.5;

var attributeCurrent  = [0., 0., 0., 0.];
var attributeMessage  = ["", "", "", ""];

var attributeFloor    = new Array(Object.keys(Attributes).length);
var attributeCeiling  = new Array(Object.keys(Attributes).length);
var attributeIncrease = new Array(Object.keys(Attributes).length);
var attributeDecrease = new Array(Object.keys(Attributes).length);

var attributeAdjective =
[
	["", "stuffed"    , "satisfied", "", "hungry"   , "starving"  ],
	["", "loafing"    , "lazy"     , "", "tired"    , "comatose"  ],
	["", "battered"   , "bruised"  , "", "rebelling", "revolting" ],
	["", "hyperactive", "excited"  , "", "bored"    , "spiritless"]
]

var deathMessageLow =
[
	"exploded from eating too much",
	"died from laziness",
	"died from blunt force trauma",
	"died from excitement"
]

var deathMessageHigh =
[
	"died of starvation",
	"died from fatigue",
	"died from anarchy",
	"died from boredom"
]

for(var i = 0; i < Object.keys(Attributes).length; i++)
{
	attributeFloor  [i] = -1*((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
	attributeCeiling[i] =    ((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
	
	attributeIncrease[i] = Math.random() * 1.5 + 0.5;
	attributeDecrease[i] = Math.random() * 1.5 + 0.5;
}

dead = false;
turns = 0;

ctx.fillText("Turns lasted: " + turns, 258, 200);

function level(attribute)
{
	if(attributeCurrent[attribute] <        attributeFloor[attribute]) return Level.DEAD_LOW;
	if(attributeCurrent[attribute] <= .66 * attributeFloor[attribute]) return Level.VERY_LOW;
	if(attributeCurrent[attribute] <= .33 * attributeFloor[attribute]) return Level.LOW;
	
	if(attributeCurrent[attribute] >        attributeCeiling[attribute]) return Level.DEAD_HIGH;
	if(attributeCurrent[attribute] >= .66 * attributeCeiling[attribute]) return Level.VERY_HIGH;
	if(attributeCurrent[attribute] >= .33 * attributeCeiling[attribute]) return Level.HIGH;
	
	return Level.NORMAL;
}

function drawMelon()
{
	ctx.clearRect(0, 250, 517, 402);
	
	if(level(Attributes.FATIGUE        ) == Level.VERY_LOW  ) ctx.drawImage(loafing     , 0, 250);
	ctx.drawImage(melon, 0, 250);
	if(level(Attributes.HUNGER         ) == Level.VERY_LOW  ) ctx.drawImage(stuffed     , 0, 250);
	if(level(Attributes.HUNGER         ) <  Level.NORMAL    ) ctx.drawImage(satisfied   , 0, 250);
	if(level(Attributes.FATIGUE        ) <  Level.NORMAL    ) ctx.drawImage(lazy        , 0, 250);
	if(level(Attributes.REBELLIOUSNESS ) >  Level.NORMAL    ) ctx.drawImage(rebelling   , 0, 250);
	if(level(Attributes.REBELLIOUSNESS ) == Level.VERY_HIGH ) ctx.drawImage(revolting   , 0, 250);
	if(level(Attributes.HUNGER         ) >  Level.NORMAL    ) ctx.drawImage(hungry      , 0, 250);
	if(level(Attributes.REBELLIOUSNESS ) <  Level.NORMAL    ) ctx.drawImage(bruised     , 0, 250);
	if(level(Attributes.HUNGER         ) == Level.VERY_HIGH ) ctx.drawImage(starving    , 0, 250);
	if(level(Attributes.FATIGUE        ) == Level.VERY_HIGH ) ctx.drawImage(comatose    , 0, 250);
	if(level(Attributes.FATIGUE        ) >  Level.NORMAL    ) ctx.drawImage(tired       , 0, 250);
	if(level(Attributes.REBELLIOUSNESS ) == Level.VERY_LOW  ) ctx.drawImage(battered    , 0, 250);
	if(level(Attributes.BOREDOM        ) >  Level.NORMAL    ) ctx.drawImage(minusfun    , 0, 250);
	if(level(Attributes.BOREDOM        ) == Level.HIGH      ) ctx.drawImage(bored       , 0, 250);
	if(level(Attributes.BOREDOM        ) == Level.VERY_HIGH ) ctx.drawImage(spiritless  , 0, 250);
	if(level(Attributes.BOREDOM        ) <  Level.NORMAL    ) ctx.drawImage(excited     , 0, 250);
	if(level(Attributes.BOREDOM        ) == Level.VERY_LOW  ) ctx.drawImage(hyperactive , 0, 250);
}

function deathPrint(deathMessage)
{
	dead = true;
	ctx.clearRect(0, 0, 517, 250);
	ctx.fillText("Your watermelon " + deathMessage + "!", 258, 50);
	ctx.fillText("Turns lasted: " + turns, 258, 200);
}

function checkDeath()
{
	for(var i = 0; i < Object.keys(Attributes).length; i++)
	{
		if(level(i) == Level.DEAD_LOW ) deathPrint(deathMessageLow [i]);
		if(level(i) == Level.DEAD_HIGH) deathPrint(deathMessageHigh[i]);
	}
}

function updateMessages()
{
	for(var i = 0; i < Object.keys(Attributes).length; i++)
	{
		if(level(i) == Level.NORMAL) attributeMessage[i] = "";
		else attributeMessage[i] = "Your watermelon is " + attributeAdjective[i][level(i)] + " !";
	}
}
	
function updateTicker()
{
	ctx.clearRect(0, 0, 400, 250);
	ctx.fillText("Turns lasted: " + turns, 258, 200);
	
	ticker = [];
	ticker_y = 50;
	
	for(var i = 0; i < Object.keys(Attributes).length; i++) { if(attributeMessage[i] != "") ticker.push(attributeMessage[i]); }
	
	if(ticker.length == 0) ctx.fillText("Your watermelon is great!", 258, ticker_y);
	else for(var i = 0; i < ticker.length; i++)
	{
		ctx.fillText(ticker[i], 258, ticker_y);
		ticker_y += 25;
	}
}

function attributeDown(attribute) { attributeCurrent[attribute] -= attributeDecrease[attribute] * MULTIPLIER_DOWN; }
function attributeUp  (attribute) { attributeCurrent[attribute] += attributeIncrease[attribute] * MULTIPLIER_UP  ; }

function feed() 
{
	if(dead == false)
	{
		attributeDown(Attributes.HUNGER);
		attributeUp(Attributes.FATIGUE);
		attributeUp(Attributes.REBELLIOUSNESS);
		attributeUp(Attributes.BOREDOM);
		updateMessages();
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

function sleep()
{
	if(dead == false)
	{
		attributeUp(Attributes.HUNGER);
		attributeDown(Attributes.FATIGUE);
		attributeUp(Attributes.REBELLIOUSNESS);
		attributeUp(Attributes.BOREDOM);
		updateMessages();		
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

function disc()
{
	if(dead == false)
	{
		attributeUp(Attributes.HUNGER);
		attributeUp(Attributes.FATIGUE);
		attributeDown(Attributes.REBELLIOUSNESS);
		attributeUp(Attributes.BOREDOM);
		updateMessages();
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

function play()
{
	if(dead == false)
	{
		attributeUp(Attributes.HUNGER);
		attributeUp(Attributes.FATIGUE);
		attributeUp(Attributes.REBELLIOUSNESS);
		attributeDown(Attributes.BOREDOM);
		updateMessages();
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

ctx.fillText("Your watermelon is great!", 258, 50);