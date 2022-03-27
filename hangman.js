var word = "";
var displayedWord = "";
var mistakes = 0;
var game = true;
var word_list = [
"ABOUT", "ACCOUNT", "ACROSS", "ADDITION", "ADJUSTMENT", "ADVERTISEMENT", "AFTER", "AGAIN", "AGAINST", "AGREEMENT", "ALMOST", "AMONG", "AMOUNT", "AMUSEMENT", "ANGLE", "ANGRY", "ANIMAL", "ANSWER", "APPARATUS", "APPLE", "APPROVAL", "ARGUMENT", "ATTACK", "ATTEMPT", "ATTENTION", "ATTRACTION", "AUTHORITY", "AUTOMATIC", "AWAKE", "BALANCE", "BASIN", "BASKET", "BEAUTIFUL", "BECAUSE", "BEFORE", "BEHAVIOUR", "BELIEF", "BERRY", "BETWEEN", "BIRTH", "BITTER", "BLACK", "BLADE", "BLOOD", "BOARD", "BOILING", "BOTTLE", "BRAIN", "BRAKE", "BRANCH", "BRASS", "BREAD", "BREATH", "BRICK", "BRIDGE", "BRIGHT", "BROKEN", "BROTHER", "BROWN", "BRUSH", "BUCKET", "BUILDING", "BURST", "BUSINESS", "BUTTER", "BUTTON", "CAMERA", "CANVAS", "CARRIAGE", "CAUSE", "CERTAIN", "CHAIN", "CHALK", "CHANCE", "CHANGE", "CHEAP", "CHEESE", "CHEMICAL", "CHEST", "CHIEF", "CHURCH", "CIRCLE", "CLEAN", "CLEAR", "CLOCK", "CLOTH", "CLOUD", "COLLAR", "COLOUR", "COMFORT", "COMMITTEE", "COMMON", "COMPANY", "COMPARISON", "COMPETITION", "COMPLETE", "COMPLEX", "CONDITION", "CONNECTION", "CONSCIOUS", "CONTROL", "COPPER", "COTTON", "COUGH", "COUNTRY", "COVER", "CRACK", "CREDIT", "CRIME", "CRUEL", "CRUSH", "CURRENT", "CURTAIN", "CURVE", "CUSHION", "DAMAGE", "DANGER", "DAUGHTER", "DEATH", "DECISION", "DEGREE", "DELICATE", "DEPENDENT", "DESIGN", "DESIRE", "DESTRUCTION", "DETAIL", "DEVELOPMENT", "DIFFERENT", "DIGESTION", "DIRECTION", "DIRTY", "DISCOVERY", "DISCUSSION", "DISEASE", "DISGUST", "DISTANCE", "DISTRIBUTION", "DIVISION", "DOUBT", "DRAIN", "DRAWER", "DRESS", "DRINK", "DRIVING", "EARLY", "EARTH", "EDUCATION", "EFFECT", "ELASTIC", "ELECTRIC", "ENGINE", "ENOUGH", "EQUAL", "ERROR", "EVENT", "EVERY", "EXAMPLE", "EXCHANGE", "EXISTENCE", "EXPANSION", "EXPERIENCE", "EXPERT", "FALSE", "FAMILY", "FATHER", "FEATHER", "FEEBLE", "FEELING", "FEMALE", "FERTILE", "FICTION", "FIELD", "FIGHT", "FINGER", "FIRST", "FIXED", "FLAME", "FLIGHT", "FLOOR", "FLOWER", "FOOLISH", "FORCE", "FORWARD", "FRAME", "FREQUENT", "FRIEND", "FRONT", "FRUIT", "FUTURE", "GARDEN", "GENERAL", "GLASS", "GLOVE", "GOVERNMENT", "GRAIN", "GRASS", "GREAT", "GREEN", "GROUP", "GROWTH", "GUIDE", "HAMMER", "HANGING", "HAPPY", "HARBOUR", "HARMONY", "HEALTHY", "HEARING", "HEART", "HISTORY", "HOLLOW", "HORSE", "HOSPITAL", "HOUSE", "HUMOUR", "IMPORTANT", "IMPULSE", "INCREASE", "INDUSTRY", "INSECT", "INSTRUMENT", "INSURANCE", "INTEREST", "INVENTION", "ISLAND", "JELLY", "JEWEL", "JOURNEY", "JUDGE", "KETTLE", "KNIFE", "KNOWLEDGE", "LANGUAGE", "LAUGH", "LEARNING", "LEATHER", "LETTER", "LEVEL", "LIBRARY", "LIGHT", "LIMIT", "LINEN", "LIQUID", "LITTLE", "LIVING", "LOOSE", "MACHINE", "MANAGER", "MARKET", "MARRIED", "MATCH", "MATERIAL", "MEASURE", "MEDICAL", "MEETING", "MEMORY", "METAL", "MIDDLE", "MILITARY", "MINUTE", "MIXED", "MONEY", "MONKEY", "MONTH", "MORNING", "MOTHER", "MOTION", "MOUNTAIN", "MOUTH", "MUSCLE", "MUSIC", "NARROW", "NATION", "NATURAL", "NECESSARY", "NEEDLE", "NERVE", "NIGHT", "NOISE", "NORMAL", "NORTH", "NUMBER", "OBSERVATION", "OFFER", "OFFICE", "OPERATION", "OPINION", "OPPOSITE", "ORANGE", "ORDER", "ORGANIZATION", "ORNAMENT", "OTHER", "OWNER", "PAINT", "PAPER", "PARALLEL", "PARCEL", "PASTE", "PAYMENT", "PEACE", "PENCIL", "PERSON", "PHYSICAL", "PICTURE", "PLACE", "PLANE", "PLANT", "PLATE", "PLEASE", "PLEASURE", "PLOUGH", "POCKET", "POINT", "POISON", "POLISH", "POLITICAL", "PORTER", "POSITION", "POSSIBLE", "POTATO", "POWDER", "POWER", "PRESENT", "PRICE", "PRINT", "PRISON", "PRIVATE", "PROBABLE", "PROCESS", "PRODUCE", "PROFIT", "PROPERTY", "PROSE", "PROTEST", "PUBLIC", "PUNISHMENT", "PURPOSE", "QUALITY", "QUESTION", "QUICK", "QUIET", "QUITE", "RANGE", "REACTION", "READING", "READY", "REASON", "RECEIPT", "RECORD", "REGRET", "REGULAR", "RELATION", "RELIGION", "REPRESENTATIVE", "REQUEST", "RESPECT", "RESPONSIBLE", "REWARD", "RHYTHM", "RIGHT", "RIVER", "ROUGH", "ROUND", "SCALE", "SCHOOL", "SCIENCE", "SCISSORS", "SCREW", "SECOND", "SECRET", "SECRETARY", "SELECTION", "SENSE", "SEPARATE", "SERIOUS", "SERVANT", "SHADE", "SHAKE", "SHAME", "SHARP", "SHEEP", "SHELF", "SHIRT", "SHOCK", "SHORT", "SILVER", "SIMPLE", "SISTER", "SKIRT", "SLEEP", "SLOPE", "SMALL", "SMASH", "SMELL", "SMILE", "SMOKE", "SMOOTH", "SNAKE", "SNEEZE", "SOCIETY", "SOLID", "SOUND", "SOUTH", "SPACE", "SPADE", "SPECIAL", "SPONGE", "SPOON", "SPRING", "SQUARE", "STAGE", "STAMP", "START", "STATEMENT", "STATION", "STEAM", "STEEL", "STICK", "STICKY", "STIFF", "STILL", "STITCH", "STOCKING", "STOMACH", "STONE", "STORE", "STORY", "STRAIGHT", "STRANGE", "STREET", "STRETCH", "STRONG", "STRUCTURE", "SUBSTANCE", "SUDDEN", "SUGAR", "SUGGESTION", "SUMMER", "SUPPORT", "SURPRISE", "SWEET", "SYSTEM", "TABLE", "TASTE", "TEACHING", "TENDENCY", "THEORY", "THERE", "THICK", "THING", "THOUGHT", "THREAD", "THROAT", "THROUGH", "THROUGH", "THUMB", "THUNDER", "TICKET", "TIGHT", "TIRED", "TOGETHER", "TOMORROW", "TONGUE", "TOOTH", "TOUCH", "TRADE", "TRAIN", "TRANSPORT", "TRICK", "TROUBLE", "TROUSERS", "TWIST", "UMBRELLA", "UNDER", "VALUE", "VERSE", "VESSEL", "VIOLENT", "VOICE", "WAITING", "WASTE", "WATCH", "WATER", "WEATHER", "WEIGHT", "WHEEL", "WHERE", "WHILE", "WHISTLE", "WHITE", "WINDOW", "WINTER", "WOMAN", "WOUND", "WRITING", "WRONG", "YELLOW", "YESTERDAY", "YOUNG"]
var drawings = ["step1.png", "step2.png", "step3.png", "step4.png", "step5.png", "step6.png", "step7.png"];

window.onload = function()
{
	let random_index = Math.floor(Math.random() * word_list.length);
	word = word_list[random_index];
	
	for(let i = 0; i < word.length; i++)
		displayedWord = displayedWord + "-";
	document.getElementById('drawing').src="images/" + drawings[mistakes];
	document.getElementById('word').innerHTML=String(displayedWord);
}



function checkWin()
{
	let win = true;
	for(let i = 0; i < displayedWord.length; i++)
		if(displayedWord[i] === '-') win = false;
	if(win){
		game=false;
		m = document.getElementById('message');
		m.innerHTML="Congrats!";
		m.style.color = "green";
	}
}

function checkLose()
{
	if(mistakes <= 5)return;
	game = false;
	displayedWord = word;
	document.getElementById('word').innerHTML=String(displayedWord);
	m = document.getElementById('message');
		m.innerHTML="Better luck next time!";
		m.style.color = "red";
}

function displayLetter(letter)
{
	let l=document.getElementById(String(letter));
	l.style.backgroundColor="green";
	for(let i = 0; i < word.length; i++)
		if(word[i] === letter) displayedWord = displayedWord.substring(0, i) + String(letter) + displayedWord.substring(i + 1);
	document.getElementById('word').innerHTML=String(displayedWord);
	checkWin();
}

function mistake(letter)
{
	let l=document.getElementById(String(letter));
	l.style.backgroundColor="red";
	mistakes++;
	document.getElementById('drawing').src="images/" + drawings[mistakes];
	checkLose();
}

function letterPressed(letter)
{
	if(!game) return;
	let b = document.getElementById(String(letter));
	if(b.value == "1") return;
	b.value = "1";
	let appears = false;
	for(let i = 0; i < word.length; i++)
		if(word[i] == letter) appears = true;
	if(appears) displayLetter(letter);
		else mistake(letter);
}

document.addEventListener("keypress", function onEvent(event) {
    letterPressed(event.key.toUpperCase());
});