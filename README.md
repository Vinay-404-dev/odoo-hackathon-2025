# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Skill Swap is an innovative platform where users can register, list their skills and interests, and find others on the platform to teach and learn from each other. It's a community-driven skill exchange network designed to foster collaborative learning and personal growth.
Features
User Registration: Easy signup process to create an account.
Profile Setup: Users can list their skills and interests.
Matchmaking: Find users with complementary skills.
Skill Exchange: Connect with others to teach and learn new skills.
Usage
Register
Open the app and click on the 'Get started' button.
Fill in the required details and create your account.
Profile Setup
After registration, log in to your account.
Navigate to the 'Profile' section.
Add your skills and interests to your profile.
Finding a Match
Use the swipe functionality to find users with the skills you're interested in.
Browse profiles and send connection requests to potential matches.
Skill Exchange
Once connected, you can find contact info in matches section, arrange a skill exchange session.
Give feedback to us after the session to help improve the community.
Getting Started
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (v20.0+)
Express.js (v4.19.2+)
React.js (v18.2.0+)
MongoDB Atlas
Installation
Clone the repository:

git clone https://github.com/Wellitsabhi/Skillswap
Navigate to the project directory:

cd Skillswap
Install dependencies:

npm install
Set up environment variables: Create two .env files (seperate for backend and frontend) and add the following variables- Backend env :

 DATABASE_USERNAME=your_mongodb_database_username
 DB_PASSWORD=your_mongodb_database_username
 SECRET_KEY=your_secret_key
 PORT=3000
 FRONTEND_URL=http://localhost
Frontend env :

 VITE_BACKEND_URL=http://localhost:3000/
Start the application:

npm run dev
The app should now be running on http://localhost:5173.

Contributing
We welcome contributions! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
Future Plans
Messaging: In-app messaging to communicate with matches.
Mobile App: Develop a mobile application for iOS and Android.
Group Skill Swaps: Allow users to join group sessions for skill exchanges.
Video Tutorials: Integrate video tutorials for popular skills.
Gamification: Introduce badges and rewards to motivate users.
Advanced Matchmaking: Implement AI-based matchmaking to find the best skill exchange partners.
