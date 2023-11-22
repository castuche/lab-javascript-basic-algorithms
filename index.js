// Iteration 1: Names and Input
let hacker1 = "Catherine";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Hristina";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else if (hacker1.length===hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }
  else {console.log(`There seems to be an issue...`)}

// Iteration 3: Loops
//3.1
for(let i=0; i<hacker1.length ; i++){
    console.log(`${hacker1[i].toUpperCase()} `)
    
//3.2
let reversedname=""
for(let i=hacker2.length-1; i>=0; i--){
    reversedname+=hacker2[i];
  }
console.log(reversedname);

//3.3
if (hacker1===hacker2){
    console.log(`What?! You both have the same name?`);
  }
  
else {
  for (let i=0 ; i<Math.min(hacker1.length, hacker2.length) ; i++){
    if(hacker1[i]<hacker2[i]){
     console.log(`The driver's name goes first`)
     break;
   }
    else if (hacker1[i]>hacker2[i]){
      console.log(`Yo, the navigator goes first, definitely.`)
      break;}
  }
  }

// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at cursus eros. Sed non lacinia risus. Vivamus commodo interdum felis ultricies ultricies. Mauris sit amet suscipit lorem. Duis laoreet ipsum nisi, quis varius eros suscipit id. Nunc condimentum, eros vitae rhoncus finibus, enim elit blandit lacus, ac imperdiet lorem ipsum vel tortor. Vestibulum at nibh sagittis lacus elementum mattis ut vitae neque. Nullam risus eros, condimentum cursus justo a, pharetra gravida metus. Aliquam vestibulum sem et dolor euismod accumsan. Etiam malesuada, dolor et mollis vestibulum, urna sapien imperdiet mauris, nec auctor libero nisi eget arcu. Donec sed luctus nisl. Sed luctus tristique eros, nec hendrerit nibh euismod eget. Donec hendrerit aliquam massa, sed fermentum purus convallis eget. Nunc scelerisque urna lorem, eget bibendum ante auctor ac. Mauris rutrum felis rhoncus, bibendum velit et, hendrerit lectus. Donec consequat nibh enim, non elementum risus malesuada ut. Aenean cursus bibendum erat, et egestas nisl varius condimentum. Nam lobortis ullamcorper libero vitae viverra. Donec lobortis metus non lorem tincidunt, et lacinia velit sollicitudin. Nulla mi justo, tempor at erat vel, semper lacinia nisi. Nulla eleifend dapibus enim, quis tincidunt lorem laoreet non. Vestibulum et faucibus ante. Suspendisse porttitor ornare dolor. Aenean lacinia molestie lorem. Nulla posuere feugiat odio ut condimentum. Mauris varius auctor porta. Etiam ultrices in neque sed vestibulum. Nam sit amet fringilla neque, ac suscipit felis. Morbi vehicula nisi elit, at aliquam felis iaculis ac. Nunc pellentesque neque vitae nulla finibus pharetra. Integer ut egestas odio. Praesent volutpat orci non velit suscipit, sit amet luctus sem elementum. Sed posuere eu mi id efficitur. Suspendisse mattis et justo vitae pharetra. Ut vestibulum dui augue, ut gravida neque porta a. Morbi non diam lorem. Nulla auctor eros sed lacinia varius.`

let countSpaces = 0;
for (let i=0 ; i<longText.length ; i++){
  if(longText[i]===" "){
    countSpaces++ ;
  }
}
console.log (countSpaces+1);

let countEt = 0;
for (let i=0 ; i<longText.length ; i++){
  switch(longText[i]+longText[i+1]+longText[i+2]+longText[i+3]){
    case " et ":
    case ".Et ":
    case " et,":
    case " et:":
    case " et?":
    case " et!":
    case " et;":
    countEt++ ;
    break;
  }
}
console.log (countEt);


// Bonus 2
let phraseToCheck="Engage le jeu, que je le gagne"
let phraseLettersOnly= phraseToCheck.toLowerCase().replace(/[ ,'-.?!:;']/g, "");
let reversedPhrase="";
for(let i=phraseLettersOnly.length-1; i>=0; i--){
  reversedPhrase+=phraseLettersOnly[i];
}
if(reversedPhrase===phraseLettersOnly){
  console.log(`""${phraseToCheck}" is a palyndrome.`)
}
else {
  console.log(`""${phraseToCheck}" is NOT a palyndrome.`)
}
