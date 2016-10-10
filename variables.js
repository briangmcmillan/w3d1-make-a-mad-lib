//Intentionally made global by leaving off var before variable
log = console.log.bind(console);

var defaultName = 'Brian';

function sayHello(name) {
    if (name ===undefined) {
        console.log('Hello, ' + defaultName + '!');
    }
    else {
        console.log ('Hello, ' + name + '!')
    }
}

//sayHello();
/*sayHello('Carys');
sayHello('Cyrus');
sayHello('Caius');*/

//console.log('Hello');

var transportationName = '4Runner';
var transportationType = 'SUV';
var $cost = 'Cheap';
var _silver = 'true';
var transportationNumber1 = true;
var snake_case_variable_is_okay = true;
var camelCaseIsBest = true;

var thisIsAVariable = true;
let thisBeTrue = true;
const thisNeverChange = true;

function testVariables () {
    var thisIsNotAvailableOutside = true;
    console.log(thisIsAVariable);
}

//console.log(thisIsNotAvailableOutside);

if (true === true) {
    let thisIsAVariableOutside = true;
}

//log(thisIsAVariableOutside);

const thisCannotChange = true;
//thisCannotChange = false;

var firstName = 'Brian';
firstName = 'Cyrus';

var lastName;
console.log(lastName); //<- output at this point in the code

var thisIsUndefined;
var thisIsNull = null; //Empty Value
var thisIsBoolean = true; //Recognized as True or False
var thisIsNumber = 12.34; //Recognized as a number
var thisIsString = 'Hello World' //String of Text
var thisIsExpression = (1 + 1 * 100 / 4 - 8); //Expression is anything that returns a value. Expression can be the above. Is it a right hand side thing? Declarations are on the left side. AKA a statement.
//var thisIsInput = inputs.first_name;

var titleOfMovie = 'Inception';
var movieDirector = 'Christopher Nolan';
var yearOfRelease = 2012;
var genreOfTitle = 'Sci-Fi';
var isMovie = true;

//console.log(titleOfMovie, movieDirector, yearOfRelease, genreOfTitle, isMovie);

var verb = 'ran';
var sentence = 'Flying by the tower, I ' + verb + ' to ' +
'to safety.';
console.log(sentence);

var verb = '1'; //Single quotes will treat this as text. Value would be 12112.
var sentence = 12 + verb + 12;
console.log(sentence);

/*var verb = '1'; //Single quotes will treat this as text. Value would be 12112.
var sentence = 12 + Number(verb) + 12;
console.log(sentence);*/

var verb = 'ran';
var sentence = `Flying by the tower, I ${verb} to
safety.`;
console.log(sentence);


var on = false;
var lightSwitch = (on ? 'The light is on.' : 'The light is off.');
console.log(lightSwitch);
