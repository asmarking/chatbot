## Table of Contents

- [Project Overview](#project-overview)
- [Set Up](#set-up)
- [How to Run](#how-to-run)
- [How to Customize Chatbot](#how-it-works)


## Project Overview <a name="project-overview"></a>
<!-- Your content for the project overview section goes here -->
Python-based chatbot using PyTorch and NumPy, implementing a feed-forward neural network architecture to facilitate natural language understanding and response generation.
![chatbotImage](chatbotCapture.png)
## Set Up <a name="set-up"></a>
<!-- Your content for explaining how to run the project goes here -->
1. fork repository
2. install the following dependencies
   - pip install pytorch
   - pip install numpy
   - npm install express
   - install nodejs
## How To Run <a name="how-to-run"></a>
<!-- Your content for explaining how the project works goes here -->
python nltk_utils.py  
python train.py  
node server.js  

## How To Customize Chatbot <a name="how-it-works"></a>
to add new training data add a dictionary to intents.json with the following formatt
<pre>
```javascript
{
      "tag": "greeting",  
      "patterns": [  
        "Hi",  
        "Hey",  
        "How are you",  
        "Is anyone there?",  
        "Hello",  
        "Good day"  
      ],  
      "responses": [  
        "Hey :-)",  
        "Hello, thanks for visiting",  
        "Hi there, what can I do for you?",  
        "Hi there, how can I help?"  
      ]  
    }
```
</pre>

