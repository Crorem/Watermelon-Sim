
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

melon.onload = function() 
{ 
    ctx.drawImage(melon,0,250);
};

ctx.font="20px Ariel";
ctx.textAlign="center";
	  
MULTIPLIER = .5;

hunger = 0.;
fatigue = 0.; 
discipline = 0.; 
fun = 0.;

hungerBottom = -1*((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
hungerTop = ((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
fatigueBottom = -1*((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
fatigueTop = ((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
disciplineBottom = -1*((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
disciplineTop = ((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
funBottom = -1*((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));
funTop = ((Math.random() * 5. + 1.) + (Math.random() * 5. + 1.));

hUp = Math.random() * 1.5 + 0.5;
hDown = Math.random() * 1.5 + 0.5;
fatUp = Math.random() * 1.5 + 0.5;
fatDown = Math.random() * 1.5 + 0.5;
dUp = Math.random() * 1.5 + 0.5;
dDown = Math.random() * 1.5 + 0.5;
funUp = Math.random() * 1.5 + 0.5;
funDown = Math.random() * 1.5 + 0.5;

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
    if (hunger < hungerBottom){
		deathPrint("Your watermelon exploded from eating too much!");}
    if (hunger > hungerTop){
		deathPrint("Your watermelon died of starvation!");}
    if (fatigue < fatigueBottom){
		deathPrint("Your watermelon died from laziness!");}
    if (fatigue > fatigueTop){
		deathPrint("Your watermelon died from fatigue!");}
    if (discipline < disciplineBottom){ 
		deathPrint("Your watermelon died from anarchy!");}
    if (discipline > disciplineTop){ 
		deathPrint("Your watermelon died from blunt force tramua!");}
    if (fun < funBottom){ 
		deathPrint("Your watermelon died from boredom!");}
    if (fun > funTop){ 
		deathPrint("Your watermelon died from excitement!");}
};

function checkStatus()
{
	outputState = 0;

	if(hunger < .33 * hungerTop && hunger > .33 * hungerBottom){
		s1 = "";}
    if(hunger <= .33 * hungerBottom && hunger > .66 * hungerBottom){
        s1 = "Your watermelon is satisfied!";}
    if(hunger <= .66 * hungerBottom){
        s1 = "Your watermelon is stuffed!";}
    if(hunger >= .33 * hungerTop && hunger < .66 * hungerTop){
        s1 = "Your watermelon is hungry!";}
    if(hunger >= .66 * hungerTop){
        s1 = "Your watermelon is starving!";}
	if(fatigue < .33 * fatigueTop && fatigue > .33 * fatigueBottom){
		s2 = "";}
    if(fatigue <= .33 * fatigueBottom && fatigue > .66 * fatigueBottom){
        s2 = "Your watermelon is lazy!";}
    if(fatigue <= .66 * fatigueBottom){
        s2 = "Your watermelon is loafing!";}
    if(fatigue >= .33 * fatigueTop && fatigue < .66 * fatigueTop){
        s2= "Your watermelon is tired!";}
    if(fatigue >= .66 * fatigueTop){
        s2 = "Your watermelon is comatose!";}
	if(discipline < .33 * disciplineTop && discipline > .33 * disciplineBottom){
		s3 = "";}
    if(discipline <= .33 * disciplineBottom && discipline > .66 * disciplineBottom){
        s3 = "Your watermelon is rebelling!"}
    if(discipline <= .66 * disciplineBottom){
        s3 = "Your watermelon is revolting!";}
    if(discipline >= .33 * disciplineTop && discipline < .66 * disciplineTop){
        s3 = "Your watermelon is bruised!";}
    if(discipline >= .66 * disciplineTop){
        s3 = "Your watermelon is battered!";}
	if(fun < .33 * funTop && fun > .33 * funBottom){
		s4 = "";}
    if(fun <= .33 * funBottom && fun > .66 * funBottom){
        s4 = "Your watermelon is bored!";}
    if(fun <= .66 * funBottom){
        s4 = "Your watermelon is spiritless!";}
    if(fun >= .33 * funTop && fun < .66 * funTop){
        s4 = "Your watermelon is excited!";}
    if(fun >= .66 * funTop){
        s4 = "Your watermelon is hyperactive!";}
		
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
		hunger -= hDown;
		fatigue += fatUp * MULTIPLIER;
		discipline -= dDown * MULTIPLIER;
		fun -= funDown * MULTIPLIER;
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

function sleep()
{
	if(dead == false)
	{
		hunger += hUp * MULTIPLIER;
		fatigue -= fatDown;
		discipline -= dDown * MULTIPLIER;
		fun -= funDown * MULTIPLIER;    
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

function disc()
{
	if(dead == false)
	{
		hunger += hUp * MULTIPLIER;
		fatigue += fatUp * MULTIPLIER;
		discipline += dUp;
		fun -= funDown * MULTIPLIER;   
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

function play()
{
	if(dead == false)
	{
		hunger += hUp * MULTIPLIER;
		fatigue += fatUp * MULTIPLIER;
		discipline -= dDown * MULTIPLIER;
		fun += funUp;
		updateTicker();
		checkDeath();
		if(dead == false){turns++; drawMelon();}
	}
};

ctx.fillText("Your watermelon is great!", 258, 50);