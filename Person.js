//Class:
class Person1 {
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }
  sleep(hour){
    if(hour == 7){
      this.sleepMood = "Happy";
    }else if(hour < 7){
      this.sleepMood =  "Tired";
    }else if(hour > 7){
      this.sleepMood =  "Lazy";
    }
    return this.sleepMood;
  }
  eat(meals){
    if(meals == 3){
      this.healthRate = 100;
    }else if(meals == 2){
      this.healthRate =  75;
    }else if(meals == 1){
      this.healthRate =  50;
    }
    return this.healthRate;
  }
  buy(item){
    return this.money -= item * 10;
  }
}

//OLOO:
const Person2 = {
  init(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  },
  sleep(hour){
    if(hour == 7){
      this.sleepMood = "Happy";
    }else if(hour < 7){
      this.sleepMood =  "Tired";
    }else if(hour > 7){
      this.sleepMood =  "Lazy";
    }
    return this.sleepMood;
  },
  eat(meals){
    if(meals == 3){
      this.healthRate = 100;
    }else if(meals == 2){
      this.healthRate =  75;
    }else if(meals == 1){
      this.healthRate =  50;
    }
    return this.healthRate;
  },
  buy(item){
    return this.money -= item * 10;
  }
}

//Factory Functions:
function Person3 (fullName, money, sleepMood, healthRate) {
  return {
    fullName,
    money,
    sleepMood,
    healthRate,
    sleep(hour){
      if(hour == 7){
        this.sleepMood = "Happy";
      }else if(hour < 7){
        this.sleepMood =  "Tired";
      }else if(hour > 7){
        this.sleepMood =  "Lazy";
      }
      return this.sleepMood;
    },
    eat(meals){
      if(meals == 3){
        this.healthRate = 100;
      }else if(meals == 2){
        this.healthRate =  75;
      }else if(meals == 1){
        this.healthRate =  50;
      }
      return this.healthRate;
    },
    buy(item){
      return this.money -= item * 10;
    }
  }
}

//========================================================
// Just Testing:

const man = new Person1('Ali Abdul', 100, 'lazy', 100);
console.log(man);
console.log(man.fullName);
console.log(man.buy(2));
console.log(man.sleep(4.5));
console.log(man.eat(2));

const woman = Object.create(Person2);
woman.init('Haya Holland', 500, 'Happy', 50);
console.log(woman);
console.log(woman.fullName);
console.log(woman.buy(58));
console.log(woman.sleep(15));
console.log(woman.eat(3));

const kid = Person3('Lara Lary', 10, 'Happy', 100);
console.log(kid);
console.log(kid.fullName);
console.log(kid.buy(1));
console.log(kid.sleep(7));
console.log(kid.eat(3));

//========================================================
// Guessing game:
var answer;
Person1.prototype.currentSituation;
//Person2.prototype.currentSituation;
Person3.prototype.currentSituation;

man.currentSituation = "What a fool, he doesn't know that he is robbed yet!";
woman.currentSituation = ">>> Arrested <<<";
kid.currentSituation = "Where was your mind when you were questioning him, he is a kid!";

function riddleGame(){
  riddle();
  if (answer == man.fullName || answer == woman.fullName || answer == kid.fullName) {
	  correctAnswer();
  }else{
    confirm("Please, enter the (fullName Value) of the objects in the console window.");
  }
}

function riddle() {
  alert("Lets play a game!");
  alert("Who is the pickpocket?");
  answer = prompt(`( ${man.fullName}, ${woman.fullName}, ${kid.fullName} )`);
  return answer;
}

function correctAnswer(){
  switch(answer){
    case 'Ali Abdul':
      confirm("No, I'm so tired to think of stealing.\n\
      I fell asleep a couple of times today.\n\
      I'm not sleeping well these days!... (-_-)");
      console.log(`${man.currentSituation}`);
      break;
    case 'Haya Holland':
      confirm("Ao no!\n\
      I was so carefull not to get cought.\n\
      I'm really sorry.\n\
      But this was out of my well.\n\
      I really needed to buy this Versace shoes!... (0_0)");
      console.log(`${woman.currentSituation}`);
      break;
    case 'Lara Lary':
      confirm("Hah, What is pocket picking?\n\
    My mum have a red pocket with three flowers, one, and two, and three!... (^_^)");
    console.log(`${kid.currentSituation}`);  
    break;
  }
}

