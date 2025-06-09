# TweetAlert

TweetAlert is a web application designed to analyze tweets and classify them as either disaster-related or not, leveraging Natural Language Processing (NLP) techniques and transfer learning with Universal Sentence Encoder (USE).

## Project Overview

This project tackles a binary text classification task—detecting whether a tweet is about a real disaster or not. The solution leverages transfer learning with the Universal Sentence Encoder (USE) from TensorFlow Hub to extract meaningful sentence-level embeddings from tweets, which are then classified using a neural network.

### Model Architecture

- **Pretrained Model**: Universal Sentence Encoder (USE) for text encoding
- **Classification Head**: Dense layers for binary classification
- **Output**: Binary classification (1: Disaster-related, 0: Not disaster-related)

### Training Details

- **Loss Function**: Binary cross-entropy
- **Optimizer**: Adam
- **Evaluation Metric**: Accuracy
- **Training Approach**: Transfer learning with frozen USE embeddings

## Features

- **Intuitive Web Interface**: A modern, responsive, and beautifully designed user interface for seamless interaction.
- **Real-time Analysis**: Quickly process tweet texts to determine disaster relevance.
- **Engaging UI/UX**: Incorporates subtle animations and visual cues to enhance the user experience.
- **Easy Integration**: Designed for straightforward integration of trained NLP models.

## Technologies Used

- **Flask**: A lightweight Python web framework for the backend application.
- **HTML/CSS/JavaScript**: Frontend development for an interactive user interface.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TensorFlow**: For model inference and USE embeddings.
- **TensorFlow Hub**: For accessing the Universal Sentence Encoder.

## Setup and Installation

Follow these steps to get TweetAlert up and running on your local machine.

1.  **Clone the Repository**:

    ```bash
    git clone <repository-url>
    cd TweetAlert
    ```

2.  **Create a Virtual Environment**:

    It's recommended to use a virtual environment to manage project dependencies.

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use: .\venv\Scripts\activate
    ```

3.  **Install Dependencies**:

    Install all required Python packages using pip:

    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the Application**:

    Start the Flask development server:

    ```bash
    python app.py
    ```

5.  **Access the Application**:

    Open your web browser and navigate to `http://localhost:5000`.

## Project Structure

```
TweetAlert/
├── app.py                  # Main Flask application logic
├── requirements.txt        # Python dependencies list
├── static/                 # Static assets (CSS, JS, images)
│   ├── css/
│   │   ├── style.css       # Core UI styles and animations
│   │   └── twitter-bird.css # Styles for the animated Twitter bird
│   └── js/
│       └── main.js         # Frontend JavaScript for interactivity
├── templates/              # HTML templates rendered by Flask
│   └── index.html          # Main application page
├── model/                  # Directory containing the trained model
└── README.md               # Project documentation
```

## Model Integration

The application uses a pre-trained Universal Sentence Encoder (USE) model for text encoding, which handles text preprocessing internally. The model architecture consists of:

1. **Text Encoding**: The USE model converts input text into dense vector representations
2. **Classification**: A neural network processes these embeddings to classify tweets
3. **Output**: Binary classification result (disaster or not)

The model is loaded and used directly in the Flask application for real-time inference.

## Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests. Before contributing, please review the existing issues and discussion to avoid duplication.

## License

MIT License
