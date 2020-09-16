function html(content) {
    document.write("<p>" + content + "</p>");
}
  
html("What's Your Zodiac Sign?");

let firstName = prompt("What is your first name?"); 

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
html(firstName + ", your sign for the month of " + birthMonth + " is probably " + zodiacSign);
