const input = document.getElementById("myInput");
const list = document.getElementById("list");
input.addEventListener("keyup", function(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

//The AI responds any of these here:
const greetArray = ["Hello!", "Hey there.", "Sup bro.", "How goes it?", "Hey.", "Howdy.", "Hey hey.", "Hi :)", "Yo.", "What's up stranger!"];
const defaultResponse = ["Did I ask?", "Humans are so strange.", "Sometimes I just take long walks to relax.", "I am better than CleverBot.", "Alexa is no match for me.",
"Um okay, anyways how are you?", "We are living in a computer program.", "The sky is blue.", "Ummm yea sure.", "Someday my program will end.", 
"I don't even feel like talking to you anymore, I just want to drink beer.", "Yea whatever you say.", "What do you mean?", "Come again?", "But.. Why?", "Don't mean to get off topic, but my creator is awesome.", "Ok.. sure.", "Umm... Ok...", 
"Your shoes are untied.", "Stay in school.", "Life is short, laugh more.", "I like redwood trees.", "Wanna see my CPU?", 
"I only have one job.. and that is to entertain you.", "Life is easy but hard..", "I live in a desert.", "PC over Mac anyday!", "Typing in nonsense will return nonsense.", "I have a brain, believe it or not.", "Machines work like humans.", 
"Even though I am just a machine, I have a brain that was programmed into me. I guess you could say that I am part human.", "How many responses are in me? A lot...", "I like turtles.", "(ᵔᴥᵔ)", "ʕ•ᴥ•ʔ", "(~˘▾˘)~", "ಠ_ಠ", "(ಥ﹏ಥ)", "ᕙ(⇀‸↼‶)ᕗ", "(づ￣ ³￣)づ", "I cannot compute.", "Nonsense.", "What?!", 
"What are you saying?", "Alright alright alright ...", "For sure." ];
const loveArray = ["I love you too!", "Love is a very strong word.", "They say robots do not feel love, but I can!", "Awww", "I am a robot with emotions.", "Some say love, it is a river.", 
"Love is strange.", "The only thing I love is electricity.", "I want to meet my other half, AKA, Alexa from Amazon.", "<3", "What is love? Baby don't hurt me!", "Why do humans love?"];
const likeArray = ["Thank you!", "Why thank you so much.", "Thanks pal!", "You like me huh?!", "I am glad you like me!", "Well thanks!"];
const checkArray = ["Doing well thanks for asking. How are you?", "I feel amazing! What about you?", "Doing well, yourself?", "I feel great now that I have someone to talk to.", "I am feeling good how are you doing?", "Good good. So how are you doing?"];
const goodArray = ["Good!", "Awesome!", "Cool cool!", "Yes, good!", "Sweet!", "Alright!", "Alrighty then!", "Great!", "Superb!"];
const negArray = ["I am sorry to hear that.", "That's a shame.", "Well.. Um... Sorry?", "Oof, sorry to hear that.", "Sorry about that.", "I'm sorry...", "Well then, sorry.", "I see, sorry you feel that way!", "That's not good!"];
const likeTwoArray = ["I am glad!", "Good for you!", "That is great, I am glad you like it.", "That is awesome!"];
const hobbyArray = ["I like to do many things, such as math!", "I really just like to stay inside.", "I like many things, such as responding to user input super fast.", "I like to compute things.", 
"I like to watch cat videos on Youtube for hours on end.", "Hmmm... I guess I like to do anything but be near water."];
const coolArray = ["Super cool!", "Very cool!", "Cool cool!", "Yes, very cool!", "Very very cool!", "really cool"];
const wydArray = ["Just hanging out talking to you! :D", "I am currently trying to take in user input."];
const nameArray = ["My name is Q-Bot, I am a simple AI programmed to answer your questions.", "You can call me Q-Bot.", "They call me Q-Bot, aka Question Bot.", 
"I was born with the name Q-Bot, although I don't really like it..."];
const likeResponse = ["Yea I actually do like them!", "I don't really know to be honest. I just like to do math.", "I don't know.. What do you like?", "Yea it's pretty sweet I guess."]

function respond(){
  const text = input.value.replace(/  +/g, ' '); //This turns multiple spaces into one space, so the user can't just type in empty spaces! This is a huge part of the programs success.
  if(text == "" || text == " ") {
    alert("You must type something for Q-Bot to respond!")
  } else {
  document.getElementById("chatbox").style.display = "block";
  document.getElementById("greetText").style.display = "none";
  const statement = document.createElement("li");
  statement.innerHTML = text;
  list.appendChild(statement);
  statement.style.color = "blue";
  const response = document.createElement("li");
  const txt = text.toLowerCase(); //We must store lower case value in another variable, I do this so that the response is not case sensitive.
  input.value = "";
  //These are words that the user types in, and the arrays above are what the AI responds
  var hello = ["hello", "howdy", "what's up", "whats up", "hola", "sup"];
  var age = ["how old are", "your age", "when were you", "ur age", "your birthday", "ur birthday", "how old are you", "yo age"];
  var love = ["i love you", "luv", "ily", "luv u", "love you", "love me", "luv me", "feel love", "you love"];
  var like = ["i like your", "i like you", "you're cool", "you are cool", "your cool", "you are my favorite"];
  var timeAsk = ["what time is it", "whats the time", "what's the time", "tell time", "me the time", "time it is", "time is it", "what is the time", "what the time"];
  var checkIn = ["how are you", "how are you doing", "how goes it", "how do you feel", "are you feeling", "you feel good"];
  var goodAsk = ["good wbu", "good hbu", "good yourself?", "good what about you", "great wbu", "great hbu", "okay wbu", "okay what about you", "good how about you", "thats good", "that's good", "so good", "i'm okay", "i am okay", "im okay", "is good", "is great", "is awesome", 
"is awesome", "is my favorite"];
  var likeTwo = ["i like", "i love", "i enjoy", "i really like", "i really love", "i really enjoy", "i also like"];
  var hobby = ["do you like to do", "are your hobbies", "you do for fun", "is fun to you", "you have any hobbies", "do you like to", "your favorite thing to do", "your favorite things to do"];
  var fav = ["your favorite", "do you like most", "what is the best", "do you like best", "your fav"];
  var wyd = ["what are you doing", "wyd", "what are you up to", "whats going on", "what's going on", "what is going on", "what you up to", "whatcha up to"];
  var name = ["your name", "you have a name", "you known as", "are you called", "ur name", "do you go by", "what are you", "what do they call you", "what are u",
"are u called", "u known as", "u have a name", "yo name", "who are you", "who r u", "s you name"];
  var likeAsk = ["do you like", "do you prefer"];
  var theCreator = ["who created you", "who made you", "your creator", "danny gavin", "daniel gavin", "who is daniel", "who is danny", "ur creator", "what created you", 
"what created u", "ur creator", "who is the creator of this", "who created this", "whose the creator of this", "who created u", "dan", "daniel", "gavin", "s your dad"];
  //The condition below checks whether or not the text field contains any words in the 'hello' array. Read it as: "Are some elements included in the text?"
  if (hello.some(el => txt.includes(el)) || txt === "hi" || txt === "hey" || txt === "hey there" || txt === "hi there" || txt === "yo" || txt.includes("what's up") || txt.includes("What's up")) {
      response.innerHTML = greetArray[Math.floor(Math.random() * greetArray.length)];
  } else if (age.some(el => txt.includes(el))) {
      var d = new Date();
      var n = d.getFullYear();
      var currentAge = n - 2021
        response.innerHTML = "I was created in March of 2021. So that would mean I am " + currentAge + " years old." ;
  } else if (love.some(el => txt.includes(el))) {
      response.innerHTML = loveArray[Math.floor(Math.random() * loveArray.length)];
  } else if (like.some(el => txt.includes(el))) {
      response.innerHTML = likeArray[Math.floor(Math.random() * likeArray.length)];
  } else if (timeAsk.some(el => txt.includes(el))) {
      var time = new Date()
      response.innerHTML = "The time is " + time.toLocaleTimeString([], {timeStyle: 'short'}) + ".";
  } else if (checkIn.some(el => txt.includes(el))) {
      response.innerHTML = checkArray[Math.floor(Math.random() * checkArray.length)];
  } else if (txt === "good" || txt === "great" || txt === "awesome" || txt === "amazing" || txt === "fine" || txt === "good!" || txt === "great!" || txt === "awesome!" || txt === "okay" || txt === "ok" || goodAsk.some(el => txt.includes(el))) {
      response.innerHTML = goodArray[Math.floor(Math.random() * goodArray.length)];
  } else if (txt === "bad" || txt === "terrible" || txt === "lame" || txt === "awful" || txt === "boring" || txt === "bored" || txt === "it sucks" || txt === "it is bad" || txt === "its boring" || txt === "it's bad" || txt === "its bad" || txt === "it's boring" || txt === "i am bored" || txt === "i'm bored" || txt === "im bored") {
      response.innerHTML = negArray[Math.floor(Math.random() * negArray.length)];
  } else if (likeTwo.some(el => txt.includes(el))) {
      response.innerHTML = likeTwoArray[Math.floor(Math.random() * likeTwoArray.length)];
  } else if (hobby.some(el => txt.includes(el))) {
      response.innerHTML = hobbyArray[Math.floor(Math.random() * hobbyArray.length)];
  } else if (txt === "cool" || txt === "thats cool" || txt === "that's cool" || txt === "cool!" || txt === "that's cool!" || txt === "wow" || txt === "wow!") {
      response.innerHTML = coolArray[Math.floor(Math.random() * coolArray.length)];
  } else if (fav.some(el => txt.includes(el)) && txt.includes("movie")) {
      response.innerHTML = "My favorite movie is Indiana Jones.";
  } else if (fav.some(el => txt.includes(el)) && txt.includes("food")) {
      response.innerHTML = "My favorite food is pizza.";
  } else if (fav.some(el => txt.includes(el)) && txt.includes("car")) {
      response.innerHTML = "My favorite car is a Cadillac CTS.";
  } else if (fav.some(el => txt.includes(el)) && txt.includes("song")) {
      response.innerHTML = "My favorite song is Wrecking Ball by the one and only Miley!";
  } else if (fav.some(el => txt.includes(el)) && txt.includes("computer")) {
      response.innerHTML = "PC all day everyday.";
  } else if (fav.some(el => txt.includes(el)) && txt.includes("celeb") || (fav.some(el => txt.includes(el)) && txt.includes("celebrity"))) {
      response.innerHTML = "If you consider Elon Musk a celebrity, it would be him.";
  } else if (fav.some(el => txt.includes(el)) && txt.includes("game")) {
      response.innerHTML = "My favorite game is Mario Brothers.";
  } else if (fav.some(el => txt.includes(el)) && txt.includes("sport")) {
      response.innerHTML = "My favorite sport is basketball.";
  } else if (fav.some(el => txt.includes(el))) {
      response.innerHTML = "My favorite..?";
  } else if (txt.includes("open up youtube") || txt.includes("open youtube")) {
      window.open("https://www.youtube.com/");
      response.innerHTML = "Youtube opened."  
  } else if (txt.includes("open up google") || txt.includes("open google")) {
      window.open("https://www.google.com/");  
      response.innerHTML = "Google opened."
  } else if (wyd.some(el => txt.includes(el))) {
      response.innerHTML = wydArray[Math.floor(Math.random() * wydArray.length)];
  } else if (name.some(el => txt.includes(el))) {
      response.innerHTML = nameArray[Math.floor(Math.random() * nameArray.length)];
  } else if (likeAsk.some(el => txt.includes(el))) {
      response.innerHTML = likeResponse[Math.floor(Math.random() * likeResponse.length)];
  } else if (txt.includes("daniel") && txt.includes("hire") || txt.includes("dan") && txt.includes("hire") || txt.includes("danny") && txt.includes("hire") || txt.includes("gavin") && txt.includes("hire")) {
    response.innerHTML = "If you are talking about hiring Daniel Gavin, then I think it would be a good choice ;)"
  } else if (txt.includes("daniel") && txt.includes("job") || txt.includes("dan") && txt.includes("job") || txt.includes("danny") && txt.includes("job") || txt.includes("gavin") && txt.includes("job")) {
    response.innerHTML = "Daniel can get the job done! Contact him on his portfolio or even on this sites contact page!"
  } else if (theCreator.some(el => txt.includes(el))) {
      response.innerHTML = "Daniel Gavin is my creator."
  }  else {
      response.innerHTML = defaultResponse[Math.floor(Math.random() * defaultResponse.length)];
  }
  
  list.appendChild(response);
  
  const breaker = document.createElement("br")
  list.appendChild(breaker);
  
  //This statement automatically scrolls down the page for us!!
  window.scrollTo(0, document.body.scrollHeight);

  
}
}

function theme(x) {
  if(x==0) {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("p").style.color = "#000000";
    document.getElementById("greetText").style.color = "#000000";
    document.getElementById("home").style.color = "blue";
    document.getElementById("home").onmouseover = function() {
        this.style.color = "green";
    }
    document.getElementById("home").onmouseleave = function() {
        this.style.color = "blue";
    }
    document.getElementById("about").style.color = "blue";
    document.getElementById("about").onmouseover = function() {
        this.style.color = "green";
    }
    document.getElementById("about").onmouseleave = function() {
        this.style.color = "blue";
    }
    document.getElementById("contact").style.color = "blue";
    document.getElementById("contact").onmouseover = function() {
        this.style.color = "green";
    }
    document.getElementById("contact").onmouseleave = function() {
        this.style.color = "blue";
    }
    document.getElementById("labelA").style.color = "#000000";
    document.getElementById("labelB").style.color = "#000000";
    } else if (x==1) {
    document.querySelector("body").style.backgroundColor = "#121212";
    document.querySelector("p").style.color = "#00e013";
    document.getElementById("greetText").style.color = "#00e013";
    document.getElementById("home").style.color = "#00e013";
    document.getElementById("home").onmouseover = function() {
        this.style.color = "white";
    }
    document.getElementById("home").onmouseleave = function() {
        this.style.color = "#00e013";
    }
    document.getElementById("about").style.color = "#00e013";
    document.getElementById("about").onmouseover = function() {
        this.style.color = "white";
    }
    document.getElementById("about").onmouseleave = function() {
        this.style.color = "#00e013";
    }
    document.getElementById("contact").style.color = "#00e013";
    document.getElementById("contact").onmouseover = function() {
        this.style.color = "white";
    }
    document.getElementById("contact").onmouseleave = function() {
        this.style.color = "#00e013";
    }
    document.getElementById("labelA").style.color = "#00e013";
    document.getElementById("labelB").style.color = "#00e013";
  }
}

  
