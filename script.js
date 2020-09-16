This assignment has multiple parts, follow this sequence in order. Normally I will just give you a problem and ask you to figure out how to code the solution, but for now, because we're just getting started I am going to break the assignment out into steps. Test each step using the console before moving on to the next step!

Create a variable called "firstName", set this variable equal to the value of a prompt asking the user "What is your first name?"
Create a variable called "birthMonth", set this variable equal to the value of a prompt asking the user "What month were you born (full month name)?"
Using a series of if, if else statements determine the user's birth sign using the following as the key. Set the user's birth sign to the variable "zodiacSign" If the answer doesn't match any of these choices set "zodiacSign" to unknown.

Place the following info to the HTML page: firstName, your birth sign for the month of birthMonth is probably zodiacSign."
Submit the assignment through repl as you did last week.

let firstName = prompt("What is your first name?"; 

let birthMonth = prompt("what month were you born? (full month name)").toUpperCase(); 

let zodiacSign = "Unknown"; 

if (birthMonth === "JANUARY"){
  zodiacSign = "Capricorn"; 
}
else if (birthMonth === "FEBRUARY"){
  zodiacSign = "Aquarius";
} 
else if (birthMonth === "MARCH"){ 
  zodiacSign = "Pisces";
}
else if (birthMonth === "APRIL"){ 
  zodiacSign = "Aries";
}
else if (birthMonth === "MAY"){ 
  zodiacSign = "Taurus";
}
else if (birthMonth === "JUNE"){ 
  zodiacSign = "Gemini";
}
else if (birthMonth === "JULY"){ 
  zodiacSign = "Cancer";
}
else if (birthMonth === "AUGUST"){ 
  zodiacSign = "Leo";
}
else if (birthMonth === "SEPTEMBER"){ 
  zodiacSign = "Virgo";
}
else if (birthMonth === "OCTOBER"){ 
  zodiacSign = "Libra";
}
else if (birthMonth === "NOVEMBER"){
  zodiacSign = "Scorpio";
}
else if (birthMonth === "DECEMBER"){ 
  zodiacSign = "Sagittarius";
}

toHtmlPage(firstName + ", your sign for the month of birthMonth is probably zodiacSign.");
