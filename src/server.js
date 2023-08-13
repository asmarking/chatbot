const express = require('express');
const { spawn } = require('child_process'); 
const app = express();

const PORT = 6066; // Choose any available port number

app.use(express.static(__dirname + '/'));


// API endpoint to call your function
app.post('/runPythonScript', express.text(), (req, res) => {
  // Data received from the client-side JavaScript (string)
  const inputData = req.body;

  // Path to the Python script
  const pythonScriptPath = 'chat2.py';

  const pythonProcess = spawn('python', [pythonScriptPath, inputData]);

  let pythonOutput = '';

  pythonProcess.stdout.on('data', (data) => {
    pythonOutput += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error('Error from Python script:', data.toString());
  });

  pythonProcess.on('close', (code) => {
    console.log('Python script exited with code:', code);
    return res.send(pythonOutput);
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});