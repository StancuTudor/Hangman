var word = "";
var displayedWord = "";
var mistakes = 0;
var game = true;
var word_list = [
"ABRUPTLY", "ABSURD", "ABYSS", "AFFIX", "ASKEW", "AVENUE", "AWKWARD", "AXIOM", "AZURE", "BAGPIPES", "BANDWAGON", "BANJO", "BAYOU", "BEEKEEPER", "BIKINI", "BLITZ", "BLIZZARD", "BOGGLE", "BOOKWORM", "BOXCAR", "BOXFUL", "BUCKAROO", "BUFFALO", "BUFFOON", "BUXOM", "BUZZARD", "BUZZING", "BUZZWORDS", "CALIPH", "COBWEB", "COCKINESS", "CROQUET", "CRYPT", "CURACAO", "CYCLE", "DAIQUIRI", "DIRNDL", "DISAVOW", "DIZZYING", "DUPLEX", "DWARVES", "EMBEZZLE", "EQUIP", "ESPIONAGE", "EUOUAE", "EXODUS", "FAKING", "FISHHOOK", "FIXABLE", "FJORD", "FLAPJACK", "FLOPPING", "FLUFFINESS", "FLYBY", "FOXGLOVE", "FRAZZLED", "FRIZZLED", "FUCHSIA", "FUNNY", "GABBY", "GALAXY", "GALVANIZE", "GAZEBO", "GIAOUR", "GIZMO", "GLOWWORM", "GLYPH", "GNARLY", "GNOSTIC", "GOSSIP", "GROGGINESS", "HAIKU", "HAPHAZARD", "HYPHEN", "IATROGENIC", "ICEBOX", "INJURY", "IVORY", "IVY", "JACKPOT", "JAUNDICE", "JAWBREAKER", "JAYWALK", "JAZZIEST", "JAZZY", "JELLY", "JIGSAW", "JINX", "JIUJITSU", "JOCKEY", "JOGGING", "JOKING", "JOVIAL", "JOYFUL", "JUICY", "JUKEBOX", "JUMBO", "KAYAK", "KAZOO", "KEYHOLE", "KHAKI", "KILOBYTE", "KIOSK", "KITSCH", "KIWIFRUIT", "KLUTZ", "KNAPSACK", "LARYNX", "LENGTHS", "LUCKY", "LUXURY", "LYMPH", "MARQUIS", "MATRIX", "MEGAHERTZ", "MICROWAVE", "MNEMONIC", "MYSTIFY", "NAPHTHA", "NIGHTCLUB", "NOWADAYS", "NUMBSKULL", "NYMPH", "ONYX", "OVARY", "OXIDIZE", "OXYGEN", "PAJAMA", "PEEKABOO", "PHLEGM", "PIXEL", "PIZAZZ", "PNEUMONIA", "POLKA", "PSHAW", "PSYCHE", "PUPPY", "PUZZLING", "QUARTZ", "QUEUE", "QUIPS", "QUIXOTIC", "QUIZ", "QUIZZES", "QUORUM", "RAZZMATAZZ", "RHUBARB", "RHYTHM", "RICKSHAW", "SCHNAPPS", "SCRATCH", "SHIV", "SNAZZY", "SPHINX", "SPRITZ", "SQUAWK", "STAFF", "STRENGTH", "STRENGTHS", "STRETCH", "STRONGHOLD", "STYMIED", "SUBWAY", "SWIVEL", "SYNDROME", "THRIFTLESS", "THUMBSCREW", "TOPAZ", "TRANSCRIPT", "TRANSGRESS", "TRANSPLANT", "TRIPHTHONG", "TWELFTH", "TWELFTHS", "UNKNOWN", "UNWORTHY", "UNZIP", "UPTOWN", "VAPORIZE", "VIXEN", "VODKA", "VOODOO", "VORTEX", "VOYEURISM", "WALKWAY", "WALTZ", "WAVE", "WAVY", "WAXY", "WELLSPRING", "WHEEZY", "WHISKEY", "WHIZZING", "WHOMEVER", "WIMPY", "WITCHCRAFT", "WIZARD", "WOOZY", "WRISTWATCH", "WYVERN", "XYLOPHONE", "YACHTSMAN", "YIPPEE", "YOKED", "YOUTHFUL", "YUMMY", "ZEPHYR", "ZIGZAG", "ZIGZAGGING", "ZILCH", "ZIPPER", "ZODIAC", "ZOMBIE"
]
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
	l.onclick="";
	for(let i = 0; i < word.length; i++)
		if(word[i] === letter) displayedWord = displayedWord.substring(0, i) + String(letter) + displayedWord.substring(i + 1);
	document.getElementById('word').innerHTML=String(displayedWord);
	checkWin();
}

function mistake(letter)
{
	let l=document.getElementById(String(letter));
	l.style.backgroundColor="red";
	l.onclick="";
	mistakes++;
	document.getElementById('drawing').src="images/" + drawings[mistakes];
	checkLose();
}

function letterPressed(letter)
{
	if(!game) return;
	let appears = false;
	for(let i = 0; i < word.length; i++)
		if(word[i] == letter) appears = true;
	if(appears) displayLetter(letter);
		else mistake(letter);
}