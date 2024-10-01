# Job Interview OpenAI

This project is a simple application that uses AI as an assistant for job interviewers. The application features a chat format interface where users can interact with the AI, making it easier to simulate and prepare for job interviews. 

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express
- **AI**: OpenAI API
- **Others**: Axios (for API calls)

## Installation and Setup
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Avacia/JobInterviewOpenAI.git
   cd JobInterviewOpenAI
   ```
   
2. **Install dependencies:**
   For **Backend**:
   ```bash
   cd backend
   npm install
   ```
   For **Frontend**:
   ```bash
   cd ../frontend
   npm install
   ```
   
3. **Set up environment variables**:  
   Create a `.env` file in the backend folder with your API keys and configuration.
   
4. **Start the development server:**
   **Backend**:
   ```bash
   npm run dev
   ```
   **Frontend**:
   ```bash
   cd ../frontend
   npm start
   ```
   
5. **Open the application:**  
   Go to `http://localhost:3000` to access the chat interface.

## Application Structure
The backend follows an MVC (Model-View-Controller) architecture to keep the code organized and maintainable. Here’s a brief overview of the structure:
```
      backend/
      │
      ├── controllers/
      │   └── openAIController.js   # Handles AI requests and responses
      │
      ├── routes/
      │   └── openAIRoutes.js       # Routes for managing API requests
      |
      ├── server.js             # Main file for server setup
      └── package.json          # Project dependencies and scripts

```

## How It Works
The frontend consists of a chat interface where users can interact with the AI assistant. The server processes requests using a Controller that handles interactions with the AI and sends responses back to the client. Routes manage GET and POST requests, ensuring seamless communication between the frontend and backend. The `server.js` file serves as the main entry point, initializing middleware and setting up the server. The AI assists users by providing responses to interview questions, helping them prepare for job interviews effectively.

## Frontend Display
The frontend consists of a chat interface that displays the conversation between the user and the AI assistant.
[![Chat Interface](https://youtu.be/y1axMhLLNW8)](https://youtu.be/y1axMhLLNW8)

## Usage Instructions
1. **Start the Application**: Run the development servers for both the backend and frontend.
2. **Interact with the AI**: Open your web browser and navigate to `http://localhost:3000`. Start typing your interview questions in the chat interface to receive responses from the AI assistant.

## Contribution
Contributions are welcome! To contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact Information
If you have any questions or suggestions, feel free to reach out at:
- **GitHub**: [Avacia](https://github.com/Avacia)
- **Email**: wang80139@gmail.com
