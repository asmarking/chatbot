// Function to add a user message to the chat container
function addUserMessage(message) {
  const userMessageDiv = document.createElement("div");
  userMessageDiv.classList.add("user-message");
  userMessageDiv.textContent = "me: " + message;
  const chatContainer = document.getElementById("chat-history");
  chatContainer.appendChild(userMessageDiv);
}

// Function to add a bot message to the chat container
function addBotMessage(message) {
  const botMessageDiv = document.createElement("div");
  botMessageDiv.classList.add("bot-message");
  botMessageDiv.textContent = message;
  const chatContainer = document.getElementById("chat-history");
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
    //const chatContainer = document.getElementById("chat-container");
    const userInput = document.getElementById("user-input");
    dataToSend = userInput.value
    fetch('/runPythonScript', {
      method: 'POST',                         // Use POST method to send data
      headers: {
        'Content-Type': 'text/plain'    // Specify content type
      },
      body: dataToSend        // Convert data to JSON and send as the body
    })
      .then(response => response.text())
      .then(data => {
        // Update the output div with the response from the server
        addBotMessage(data)
        userInput.value = "";
      })
      .catch(error => {
        console.error('Error calling Python script:', error);
      });
  }
}

// Example: Simulating a bot response after a delay (Replace this with actual backend integration)
function simulateBotResponse() {
  const botResponse = "Hello! This is the chatbot response.";
  setTimeout(() => addBotMessage(botResponse), 1000);
}

sendMessage()