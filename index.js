function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  /*var uppercase = string.toUpperCase();
  var lowercase = string.toLowerCase();

  if (string === lowercase) {
    return "I can\'t hear you!";
  }
  else if (string === uppercase) {
    return "YES INDEED!"
  }
  else {
    
  }*/
  switch (string) {
    case (string.toUpperCase()):
      return "YES INDEED!"
      break;
    case (string.toLowerCase()):
      return "I can\'t hear you!";
      break;
    case ("I love you, Grandma."):
      return "I love you, too.";
      break;
    default:
      return "please enter a valid text";
  }
}
