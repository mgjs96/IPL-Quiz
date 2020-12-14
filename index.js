const chalk = require('chalk');
var readlineSync = require('readline-sync');
var username = readlineSync.question('Enter Your Name: ');
var iplLover = readlineSync.question('Do You watch IPL Just say Yes or No?: ');

if (iplLover.toLowerCase() === "Yes".toLowerCase()){
  console.log("Lets check Your IPL Knowledge")
  console.log(chalk.red('Hi ' + username  + ' Lets start "IPL Quiz"'));
console.log(chalk.yellow('Write the correct option.'))
console.log('Points:  Correct: +3   Incorrect: -1')
console.log('');



var questions = [
   {question: `In which country IPL 2020 Hosted?`,A: 'UAE', B:
   'South Africa', C:'West Indies',answer: 'a'},
   {question: `In the following list of teams which were banned for 2 years due to fixing allegations?`,A: 'Rajasthan Royals', B:
   'Delhi Daredevils', C:'Kings X1 Punjab',answer: 'a'},
   {question: `Which team is known as "King of Odd years"?`,A: 'Chennai Super Kings', B:'Sunrisers Hyderabad', C:'Mumbai Indians',answer: 'c'},
   {question: `In IPL 2020 there was a only match played in which 2 super overs were played to decide result. Can You guess the teams?`,A: 'Kings Xi punjab Vs Delhi Capitals', B:
   'Kolkata Knight Riders Vs Sunrisers Hyderabad', C:'Kings Xi punjab Vs Mumbai Indians',answer: 'c'},
   {question: `Who is the most succesful IPL captain?`,A: 'MS Dhoni', B:
   'Gautam Gambhir', C:'Rohit Sharma',answer: 'c'},

 ];
var score = 0;
var best = 5;

for(var i = 0;i<questions.length;i++){
  var n = i+1;
  console.log(chalk.inverse(n+'. '+questions[i].question));
  console.log('[a,b,c]');
  console.log(chalk.cyan('A: '+questions[i].A));
  console.log(chalk.cyan('B: '+questions[i].B));
  console.log(chalk.cyan('C: '+questions[i].C));
  console.log('');
  var answer = readlineSync.question('Answer: ');

  if(answer.toLowerCase() === questions[i].answer.toLowerCase()){
    console.log(chalk.bgGreen('Correct'));
    score = score + 3;
  }else{
    console.log(chalk.bgRed('Incorrect'));
    score = score -1;
  }
}
if(score > best){
    console.log(chalk.yellow('Congratulations ! This is the best score. Send us screenshot so that we can update it for other players. '))
    best = score
  }
console.log(chalk.red(username +' your final score is: '+ score));
}
else{
  console.log("Sorry " +username+ " This Quiz is not for You.")
}


