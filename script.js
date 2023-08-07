// Function to add a user message to the chat container
function addUserMessage(message) {
  const userMessageDiv = document.createElement("div");
  userMessageDiv.classList.add("user-message");
  userMessageDiv.textContent = message;
  chatContainer.appendChild(userMessageDiv);
}

// Function to add a bot message to the chat container
function addBotMessage(message) {
  const botMessageDiv = document.createElement("div");
  botMessageDiv.classList.add("bot-message");
  botMessageDiv.textContent = message;
  chatContainer.appendChild(botMessageDiv);
}

// Function to handle the user's message
function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();
  if (message !== "") {
    addUserMessage(message);
    // Call your chatbot backend API or function here with the user's message
    // Receive the bot's response and call the addBotMessage function with the response
    const chatContainer = document.getElementById("chat-container");
    const userInput = document.getElementById("user-input");
    const spawner = require('child_process').spawn;
    const data_to_pass_in = 'Send this to python script';
    console.log("Data to send to python script",data_to_pass_in);
    const python_process = spawner('python',['chat2.py',data_to_pass_in]);
    python_process.stdout.on('data',(data) => {
    console.log('Data received from python script:',data.toString())
    });
    addBotMessage(data)
    userInput.value = ""; // Clear the input field
  }
}

// Example: Simulating a bot response after a delay (Replace this with actual backend integration)
function simulateBotResponse() {
  const botResponse = "Hello! This is the chatbot response.";
  setTimeout(() => addBotMessage(botResponse), 1000);
}

sendMessage()