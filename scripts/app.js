/*Calculate the zakat value, first, create a variable named "zakatPercentage" and
store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
named "userInput" and take the input from the user using the prompt. Make sure
the input value is of a type number by converting the input string to a number
using a suitable method. Then, create a variable named "result" and assign its value
to the multiplication of the zakat percentage and user input. Finally, use an alert
message to display the calculated zakat value. The message should look like this:
"Your zakat value is xxx".*/


var zakatPercentage = 0.025;
var userInput = parseInt(prompt("Enter a Value"));

 var result = userInput * zakatPercentage;
 alert("Your Zakat value is " + result);

//task  2 

/*calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message.*/

var userinput1= prompt ("enter numbers of family member");
var items= prompt("Select your type:\n wheat \n barley \n dates \n raisin");
var wheat = 250
var barley = 450
var dates = 2100
var raisin = 2800
      if (items=="wheat")
      {alert("Your fitra amount is " + userinput1*wheat )}

      if (items=="barley")
      {alert("Your fitra amount is " + userinput1*barley )}

      if (items=="dates")
      {alert("Your fitra amount is " + userinput1*dates )}

      if (items=="raisin")
      {alert ("Your fitra amount is " + userinput1*raisin )}
 

//task 3
/*Create a program that generates a random number between 1 and 10 and stores it
in a variable called "secretNumber". Then, ask the user to enter a guess for the
secret number using a prompt.
Use an if-else statement to check if the user's guess matches the secret number. If
the guess is correct, display a message using an alert saying "Congratulations! You
guessed the secret number". Otherwise, if the guess is too high or too low, display
an appropriate message informing the user to guess again.*/

    var userNumber = prompt("Guess the Number between 1 to 10")
       var secretNumber = 6

       if (userNumber==secretNumber)
       {alert("CONGRATULATIONS! YOU WON!");}

       else if (userNumber < secretNumber)
       {alert("your number is low, Please guess again.");}

       else if (userNumber > secretNumber)
       {alert("your number is heigh, Please guess again.");}
 
//task 5





       //task 7
/*
Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote.
First, the program should check if the person is Pakistani or Indian. If they are not, the
program should display a message saying they are not eligible to vote.
If they are Pakistani or Indian, the program should then check their gender. If the person is
male and over the age of 18, they are eligible to vote. If the person is female and over the
age of 18, the program should ask if they are married. If they are married, they are eligible
to vote. If they are not married, they are not eligible to vote.
If the person is under 18, the program should display a message saying they are not eligible
to vote*/

  var nationality = alert("What is your nationalty?")
 if (nationality="pakistani"){alert("you are eligable to vote")}

 
 else if (("you ar are not eliagle to vote"))


 var nationality = prompt("Your Nationality Please")
 var age = +prompt("Your age Please")
 var gender = prompt("Your Gender Please")
 var mStatus = prompt("your marital status please")

 if(nationality == "Pakistani" || nationality == "pakistani"  && age>=18 && gender =="male"){
     alert('you are eligable to vote')
 }
 if (gender=="female" && mStatus=="married"){
   alert("you are eligable for vote")}
 else{
     alert("You are not eligeble for vote")
 }