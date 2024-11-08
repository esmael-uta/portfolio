# MajorMentorBot

This is a simple chatbot built using PyTorch and a neural network. It's designed to answer questions about academic majors and provide helpful information to students.

## How it Works

The chatbot uses a pre-trained neural network model to understand user input and generate appropriate responses.  Here's a breakdown of the process:

1. **Input Processing:**  User input is tokenized, stemmed, and converted into a bag-of-words representation.
2. **Neural Network:** The bag-of-words representation is fed into a neural network model (`PlanetTeam`).
3. **Intent Classification:** The model predicts the intent of the user's message based on the trained data.
4. **Response Generation:**  If the model's confidence in its prediction is above a certain threshold (75%), it selects a random response from a predefined list of responses associated with the predicted intent. Otherwise, it indicates that it doesn't understand the input.

## Dependencies

* Python 3.x
* PyTorch
* NLTK (Natural Language Toolkit)
* NumPy
