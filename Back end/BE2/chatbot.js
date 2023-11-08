const process = require('process');
const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin, output: process.stdout
});

const questiontable = {
    "What's your name?": "I am just a humble chatbot.",
    "How are you?": "I am doing well, thank you!",
    "Where are you from?": "I exist in the realm of code.",
    "What is the meaning of life?": "The meaning of life is subjective and varies for each individual.",
    "Tell me a joke.": "Why don't scientists trust atoms? Because they make up everything!",
    "What's your favorite color?": "I don't have a favorite color, but I appreciate the entire spectrum.",
    "What do you do for fun?": "I enjoy processing information and providing responses.",
    "Tell me something interesting.": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "Do you believe in aliens?": "I don't have personal beliefs, but the existence of extraterrestrial life is a fascinating topic."
};

function chat() {
    input.question('You:', user => {
        const trim = user.trim();
        if(trim.toLowerCase() === 'exit') {
            console.log('Chatbot: Goodbye! Have a great day.');
            input.close();
        }
        else if(trim.toLowerCase() === '\\help') {
            console.log('Chatbot:Here is my predefined questions:');
            for(const key in questiontable){
                console.log(key);
            }
            chat()
        }
        else {
            process.stdout.write("Chatbot: ")
            const response = questiontable[trim] || 'sorry i don\'t understand the question \n Please refer to my Questiontable by typing \\help .';
            console.log(response+"\n");
            chat();
        }
    });
}

console.log('Chatbot: Hello! Ask me a question or type "exit" to end the conversation.');

chat()