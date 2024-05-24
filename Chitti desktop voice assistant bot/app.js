const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon...");
    } else {
        speak("Good Evening...");
    }
}

window.addEventListener('load', () => {
    speak("Hi, I'm Chitti the Robot. Speed 1 terahertz, memory 1 zigabyte...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello, I'm Chitti , How can I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open spotify")) {
        window.open("https://open.spotify.com", "_blank");
        speak("Opening Spotify...");
     } else if (message.includes("open wynk")) {
        window.open("https://wynk.in", "_blank");
        speak("Opening Wynk...");
    } else if (message.includes("open whatsapp")) {
        window.open("https://web.whatsapp.com", "_blank");
        speak("Opening Whatsapp...");
    } else if (message.includes("open snapchat")) {
        window.open("https://www.snapchat.com", "_blank");
        speak("Opening Snapchat...");    
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    }else if (message.includes("open instagram")) {
        window.open("https://www.instagram.com", "_blank");
        speak("Opening Instagram...");
     }else if (message.includes("open linkedin")) {
        window.open("https://www.linkedin.com", "_blank");
        speak("Opening Linkedin...");
    }else if (message.includes("open amazon")) {
        window.open("https://www.amazon.in", "_blank");
        speak("Opening Amazon...");
     }else if (message.includes("open canva")) {
        window.open("https://www.canva.com", "_blank");
        speak("Opening Canva...");
     }else if (message.includes("open github")) {
        window.open("https://github.com", "_blank");
        speak("Opening Github...");
     }else if (message.includes("open colab")) {
        window.open("https://colab.research.google.com", "_blank");
        speak("Opening Colab...");
    }else if (message.includes("open mail")) {
        window.open("https://mail.google.com", "_blank");
        speak("Opening Google Mail...");
    }else if (message.includes("open flipkart")) {
        window.open("https://www.flipkart.com", "_blank");
        speak("Opening Flipkart...");  
    }else if (message.includes("open netflix")) {
        window.open("https://www.netflix.com", "_blank");
        speak("Opening netflix...");
    }else if (message.includes("open disneyplushotstar")) {
        window.open("https://www.hotstar.com", "_blank");
        speak("Opening Disneyplushotstar...");
     }else if (message.includes("open prime")) {
        window.open("https://www.primevideo.com", "_blank");
        speak("Opening Prime...");  
     }else if (message.includes("open zee5")) {
        window.open("https://www.zee5.com", "_blank");
        speak("Opening Zee5..."); 
     }else if (message.includes("open jiocinema")) {
        window.open("https://www.jiocinema.com", "_blank");
        speak("Opening JioCinema...");
     }else if (message.includes("open chatgpt")) {
        window.open("https://chatgpt.com", "_blank");
        speak("Opening ChatGPT...");
     }else if (message.includes("open bardai")) {
        window.open("https://gemini.google.com", "_blank");
        speak("Opening BardAI...");      
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes('Whatsapp')) {
        window.open('whatsapp:///');
        const finalText = "Opening whatsapp";
        speak(finalText); 
    } else if (message.includes('this pc')) {
        window.open('this pc:///');
        const finalText = "Opening this pc";
        speak(finalText);
    } else if (message.includes('documents')) {
        window.open('documents:///');
        const finalText = "Opening documents";
        speak(finalText); 
    } else if (message.includes('download')) {
        window.open('download:///');
        const finalText = "Opening download";
        speak(finalText); 
    } else if (message.includes('telegram')) {
        window.open('telegram:///');
        const finalText = "Opening telegram";
        speak(finalText);     
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
