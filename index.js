// add solution here
var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']

function theBeatlesPlay(musicians,instruments){
  var musicianInstrument = [];
  
  for(let i = 0; i < musicians.length; i++){
    musicianInstrument.push (musicians[i] + ' plays ' + instruments[i]);
  }
  return musicianInstrument;
}
console.log(theBeatlesPlay(musicians, instruments));


var facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'
];

function johnLennonFacts(facts){
 var i = 0;
while(i < facts.length){
  facts[i] += '!!!';
  i++;
}
console.log(facts);
}
johnLennonFacts('facts')


function iLoveTheBeatles(){
  var empty = [];
  var num = 0;
  
  for (i=0; i<num; i++) {
	fact[i] = "";
		}
	
	do {
		empty  += "I love the Beatles!";}
		
	while (num < 15);
}

iLoveTheBeatles(15);