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
	HUNGER: 0,
	FATIGUE: 1,
	REBELLIOUSNESS: 2,
	BOREDOM: 3
}

melon.onload = function() 
{ 
    ctx.drawImage(melon,0,250);
};

ctx.font="20px Ariel";
ctx.textAlign="center";
	  
MULTIPLIER = .5;

var attributeCurrent  = [0., 0., 0., 0.];
var attributeFloor    = new Array(Object.keys(Attributes).length);
var attributeCeiling  = new Array(Object.keys(Attributes).length);
var attributeIncrease = new Array(Object.keys(Attributes).length);
var attributeDecrease = new Array(Object.keys(Attributes).length);

for(var i = 0; i < Object.keys(Attributes).length; i++)
{
	attributeFloor  [i] = -1*((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
	attributeCeiling[i] =    ((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
	
	attributeIncrease[i] = Math.random() * 1.5 + 0.5;
	attributeDecrease[i] = Math.random() * 1.5 + 0.5;
}

dead = false;
turns = 0;

var s1 = "";
var s2 = "";
var s3 = "";
var s4 = "";

ctx.fillText("Turns lasted: " + turns, 258, 200);

function drawMelon()
{
	ctx.clearRect(0, 250, 517, 402);
	
	if(s2 == "Your watermelon is loafing!"){
		ctx.drawImage(loafing, 0, 250);}
	ctx.drawImage(melon,0,250);
	if(s1 == "Your watermelon is stuffed!"){
		ctx.drawImage(stuffed, 0, 250);}
	if(s1 == "Your watermelon is stuffed!" || s1 == "Your watermelon is satisfied!"){
		ctx.drawImage(satisfied, 0, 250);}
	if(s2 == "Your watermelon is lazy!" || s2 == "Your watermelon is loafing!"){
		ctx.drawImage(lazy, 0, 250);}
	if(s3 == "Your watermelon is rebelling!" || s3 == "Your watermelon is revolting!"){
		ctx.drawImage(rebelling, 0, 250);}
	if(s3 == "Your watermelon is revolting!"){
		ctx.drawImage(revolting, 0, 250);}
	if(s1 == "Your watermelon is hungry!" || s1 == "Your watermelon is starving!"){
		ctx.drawImage(hungry, 0, 250);}
	if(s3 == "Your watermelon is bruised!" || s3 == "Your watermelon is battered!"){
		ctx.drawImage(bruised, 0, 250);}
	if(s1 == "Your watermelon is starving!"){
		ctx.drawImage(starving, 0, 250);}
	if(s2 == "Your watermelon is comatose!"){
		ctx.drawImage(comatose, 0, 250);}
	if(s2 == "Your watermelon is tired!" || s2 == "Your watermelon is comatose!"){
		ctx.drawImage(tired, 0, 250);}
	if(s3 == "Your watermelon is battered!"){
		ctx.drawImage(battered, 0, 250);}
	if(s4 == "Your watermelon is bored!" || s4 == "Your watermelon is spiritless!"){
		ctx.drawImage(minusfun, 0, 250);}
	if(s4 == "Your watermelon is bored!"){
		ctx.drawImage(bored, 0, 250);}
	if(s4 == "Your watermelon is spiritless!"){
		ctx.drawImage(spiritless, 0, 250);}
	if(s4 == "Your watermelon is excited!" || s4 == "Your watermelon is hyperactive!"){
		ctx.drawImage(excited, 0, 250);}
	if(s4 == "Your watermelon is hyperactive!"){
		ctx.drawImage(hyperactive, 0, 250);}
}

function deathPrint(ripsign)
{
	dead = true;
	ctx.clearRect(0, 0, 517, 250);
	ctx.fillText(ripsign, 258, 50);
	ctx.fillText("Turns lasted: " + turns, 258, 200);
}

function checkDeath()
{
    /*if (explosion == 5) {
        explosion = 0;
        return EXPLODE;        
    }*/
    if (attributeCurrent[Attributes.HUNGER] < attributeFloor[Attributes.HUNGER]){
		deathPrint("Your watermelon exploded from eating too much!");}
    if (attributeCurrent[Attributes.HUNGER] > attributeCeiling[Attributes.HUNGER]){
		deathPrint("Your watermelon died of starvation!");}
    if (attributeCurrent[Attributes.FATIGUE] < attributeFloor[Attributes.FATIGUE]){
		deathPrint("Your watermelon died from laziness!");}
    if (attributeCurrent[Attributes.FATIGUE] > attributeCeiling[Attributes.FATIGUE]){
		deathPrint("Your watermelon died from fatigue!");}
    if (attributeCurrent[Attributes.REBELLIOUSNESS] < attributeFloor[Attributes.REBELLIOUSNESS]){ 
		deathPrint("Your watermelon died from blunt force trauma!");}
    if (attributeCurrent[Attributes.REBELLIOUSNESS] > attributeCeiling[Attributes.REBELLIOUSNESS]){ 
		deathPrint("Your watermelon died from anarchy!");}
    if (attributeCurrent[Attributes.BOREDOM] < attributeFloor[Attributes.BOREDOM]){ 
		deathPrint("Your watermelon died from excitement!");}
    if (attributeCurrent[Attributes.BOREDOM] > attributeCeiling[Attributes.BOREDOM]){ 
		deathPrint("Your watermelon died from boredom!");}
};

function checkStatus()
{
	outputState = 0;

	if(attributeCurrent[Attributes.HUNGER] < .33 * attributeCeiling[Attributes.HUNGER] && attributeCurrent[Attributes.HUNGER] > .33 * attributeFloor[Attributes.HUNGER]){
		s1 = "";}
    if(attributeCurrent[Attributes.HUNGER] <= .33 * attributeFloor[Attributes.HUNGER] && attributeCurrent[Attributes.HUNGER] > .66 * attributeFloor[Attributes.HUNGER]){
        s1 = "Your watermelon is satisfied!";}
    if(attributeCurrent[Attributes.HUNGER] <= .66 * attributeFloor[Attributes.HUNGER]){
        s1 = "Your watermelon is stuffed!";}
    if(attributeCurrent[Attributes.HUNGER] >= .33 * attributeCeiling[Attributes.HUNGER] && attributeCurrent[Attributes.HUNGER] < .66 * attributeCeiling[Attributes.HUNGER]){
        s1 = "Your watermelon is hungry!";}
    if(attributeCurrent[Attributes.HUNGER] >= .66 * attributeCeiling[Attributes.HUNGER]){
        s1 = "Your watermelon is starving!";}
	if(attributeCurrent[Attributes.FATIGUE] < .33 * attributeCeiling[Attributes.FATIGUE] && attributeCurrent[Attributes.FATIGUE] > .33 * attributeFloor[Attributes.FATIGUE]){
		s2 = "";}
    if(attributeCurrent[Attributes.FATIGUE] <= .33 * attributeFloor[Attributes.FATIGUE] && attributeCurrent[Attributes.FATIGUE] > .66 * attributeFloor[Attributes.FATIGUE]){
        s2 = "Your watermelon is lazy!";}
    if(attributeCurrent[Attributes.FATIGUE] <= .66 * attributeFloor[Attributes.FATIGUE]){
        s2 = "Your watermelon is loafing!";}
    if(attributeCurrent[Attributes.FATIGUE] >= .33 * attributeCeiling[Attributes.FATIGUE] && attributeCurrent[Attributes.FATIGUE] < .66 * attributeCeiling[Attributes.FATIGUE]){
        s2= "Your watermelon is tired!";}
    if(attributeCurrent[Attributes.FATIGUE] >= .66 * attributeCeiling[Attributes.FATIGUE]){
        s2 = "Your watermelon is comatose!";}
	if(attributeCurrent[Attributes.REBELLIOUSNESS] < .33 * attributeCeiling[Attributes.REBELLIOUSNESS] && attributeCurrent[Attributes.REBELLIOUSNESS] > .33 * attributeFloor[Attributes.REBELLIOUSNESS]){
		s3 = "";}
    if(attributeCurrent[Attributes.REBELLIOUSNESS] <= .33 * attributeFloor[Attributes.REBELLIOUSNESS] && attributeCurrent[Attributes.REBELLIOUSNESS] > .66 * attributeFloor[Attributes.REBELLIOUSNESS]){
        s3 = "Your watermelon is bruised!";}
    if(attributeCurrent[Attributes.REBELLIOUSNESS] <= .66 * attributeFloor[Attributes.REBELLIOUSNESS]){
        s3 = "Your watermelon is battered!";}
    if(attributeCurrent[Attributes.REBELLIOUSNESS] >= .33 * attributeCeiling[Attributes.REBELLIOUSNESS] && attributeCurrent[Attributes.REBELLIOUSNESS] < .66 * attributeCeiling[Attributes.REBELLIOUSNESS]){
        s3= "Your watermelon is rebelling!";}
    if(attributeCurrent[Attributes.REBELLIOUSNESS] >= .66 * attributeCeiling[Attributes.REBELLIOUSNESS]){
        s3 = "Your watermelon is revolting!";}
	if(attributeCurrent[Attributes.BOREDOM] < .33 * attributeCeiling[Attributes.BOREDOM] && attributeCurrent[Attributes.BOREDOM] > .33 * attributeFloor[Attributes.BOREDOM]){
		s4 = "";}
    if(attributeCurrent[Attributes.BOREDOM] <= .33 * attributeFloor[Attributes.BOREDOM] && attributeCurrent[Attributes.BOREDOM] > .66 * attributeFloor[Attributes.BOREDOM]){
        s4 = "Your watermelon is excited!";}
    if(attributeCurrent[Attributes.BOREDOM] <= .66 * attributeFloor[Attributes.BOREDOM]){
        s4 = "Your watermelon is hyperactive!";}
    if(attributeCurrent[Attributes.BOREDOM] >= .33 * attributeCeiling[Attributes.BOREDOM] && attributeCurrent[Attributes.BOREDOM] < .66 * attributeCeiling[Attributes.BOREDOM]){
        s4 = "Your watermelon is bored!";}
    if(attributeCurrent[Attributes.BOREDOM] >= .66 * attributeCeiling[Attributes.BOREDOM]){
        s4 = "Your watermelon is spiritless!";}
		
	if(s1 != ""){ outputState += 1; }
	if(s2 != ""){ outputState += 2; }
	if(s3 != ""){ outputState += 4; }
	if(s4 != ""){ outputState += 8; }
		
	return outputState;
}
	
function updateTicker()
{
	ctx.clearRect(0, 0, 400, 250);
	ctx.fillText("Turns lasted: " + turns, 258, 200);
	
	switch(checkStatus())
	{
		case 0:
			ctx.fillText("Your watermelon is great!", 258, 50);
			break;
		case 1:
			ctx.fillText(s1, 258, 50);
			break;
		case 2:
			ctx.fillText(s2, 258, 50);
			break;
		case 3:
			ctx.fillText(s1, 258, 50);
			ctx.fillText(s2, 258, 75);
			break;
		case 4:
			ctx.fillText(s3, 258, 50);
			break;
		case 5:
			ctx.fillText(s1, 258, 50);
			ctx.fillText(s3, 258, 75);
			break;
		case 6:
			ctx.fillText(s2, 258, 50);
			ctx.fillText(s3, 258, 75);
			break;
		case 7:
			ctx.fillText(s1, 258, 50);
			ctx.fillText(s2, 258, 75);
			ctx.fillText(s3, 258, 100);
			break;
		case 8:
			ctx.fillText(s4, 258, 50);
			break;
		case 9:
			ctx.fillText(s1, 258, 50);
			ctx.fillText(s4, 258, 75);
			break;
		case 10:
			ctx.fillText(s2, 258, 50);
			ctx.fillText(s4, 258, 75);
			break;
		case 11:
			ctx.fillText(s1, 258, 50);
			ctx.fillText(s2, 258, 75);
			ctx.fillText(s4, 258, 100);
			break;
		case 12:
			ctx.fillText(s3, 258, 50);
			ctx.fillText(s4, 258, 75);
			break;
		case 13:
			ctx.fillText(s1, 258, 50);
			ctx.fillText(s3, 258, 75);
			ctx.fillText(s4, 258, 100);
			break;
		case 14:
			ctx.fillText(s2, 258, 50);
			ctx.fillText(s3, 258, 75);
			ctx.fillText(s4, 258, 100);
			break;
		case 15:
			ctx.fillText(s1, 258, 50);
			ctx.fillText(s2, 258, 75);
			ctx.fillText(s3, 258, 100);
			ctx.fillText(s4, 258, 125);
			break;		
	}
}

function feed() 
{
	if(dead == false)
	{
		attributeCurrent[Attributes.HUNGER] -= attributeDecrease[Attributes.HUNGER];
		attributeCurrent[Attributes.FATIGUE] += attributeIncrease[Attributes.FATIGUE] * MULTIPLIER;
		attributeCurrent[Attributes.REBELLIOUSNESS] += attributeIncrease[Attributes.REBELLIOUSNESS] * MULTIPLIER;
		attributeCurrent[Attributes.BOREDOM] += attributeIncrease[Attributes.BOREDOM] * MULTIPLIER;
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

function sleep()
{
	if(dead == false)
	{
		attributeCurrent[Attributes.HUNGER] += attributeIncrease[Attributes.HUNGER] * MULTIPLIER;
		attributeCurrent[Attributes.FATIGUE] -= attributeDecrease[Attributes.FATIGUE];
		attributeCurrent[Attributes.REBELLIOUSNESS] += attributeIncrease[Attributes.REBELLIOUSNESS] * MULTIPLIER;
		attributeCurrent[Attributes.BOREDOM] += attributeIncrease[Attributes.BOREDOM] * MULTIPLIER;    
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

function disc()
{
	if(dead == false)
	{
		attributeCurrent[Attributes.HUNGER] += attributeIncrease[Attributes.HUNGER] * MULTIPLIER;
		attributeCurrent[Attributes.FATIGUE] += attributeIncrease[Attributes.FATIGUE] * MULTIPLIER;
		attributeCurrent[Attributes.REBELLIOUSNESS] -= attributeDecrease[Attributes.REBELLIOUSNESS];
		attributeCurrent[Attributes.BOREDOM] += attributeIncrease[Attributes.BOREDOM] * MULTIPLIER;   
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

function play()
{
	if(dead == false)
	{
		attributeCurrent[Attributes.HUNGER] += attributeIncrease[Attributes.HUNGER] * MULTIPLIER;
		attributeCurrent[Attributes.FATIGUE] += attributeIncrease[Attributes.FATIGUE] * MULTIPLIER;
		attributeCurrent[Attributes.REBELLIOUSNESS] += attributeIncrease[Attributes.REBELLIOUSNESS] * MULTIPLIER;
		attributeCurrent[Attributes.BOREDOM] -= attributeDecrease[Attributes.BOREDOM];
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

ctx.fillText("Your watermelon is great!", 258, 50);