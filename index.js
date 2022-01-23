function scuberGreetingForFeet(distance){
  if(distance < 400){
    return "This one is on me!"
  }
  else if(distance > 2000 && distance < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else{
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  return (city == 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip){
  let resp;
  switch(tip){
    case 'generous':
      resp = "Thank you so much.";
      break;
    case 'not as generous':
      resp = "Thank you.";
      break;
    default:
      resp = "Bye."
  }
  return resp
}