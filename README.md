# Practice Tracker

A web application for tracking instrument practice sessions. This application helps musicians monitor their practice time, analyze their practice habits, and maintain a consistent practice schedule.

## Features

- **Practice Session Timer**
  - Start/stop timer for accurate time tracking
  - Manual time entry option
  - Instrument and category selection
  - Notes and comments for each session

- **Practice History**
  - View all logged practice sessions
  - Filter sessions by date, instrument, and category
  - Delete individual practice sessions

- **Data Visualization**
  - Practice time trends over time
  - Practice time breakdown by instrument
  - Practice time breakdown by category
  - Daily, weekly, monthly, and yearly views

- **Settings Management**
  - Add, edit, and delete instruments
  - Add, edit, and delete practice categories
  - Timezone settings
  - Data persistence using localStorage

## Technical Requirements

- Modern web browser with JavaScript enabled
- No server-side requirements (runs entirely in the browser)

## Installation

1. Clone the repository or download the source code
2. Open `index.html` in your web browser
3. No additional setup required - the application runs entirely in the browser

## Usage

### Starting a Practice Session

1. Navigate to the Timer section
2. Select your instrument and practice category
3. Click "Start" to begin timing your practice session
4. Add any notes about your practice session
5. Click "Stop" when finished
6. Click "Save Practice Session" to record your session

### Viewing Practice History

1. Navigate to the History section
2. Use the filters to find specific practice sessions
3. View details of each session including date, duration, instrument, and notes
4. Delete sessions if needed

### Analyzing Practice Data

1. Navigate to the Reports section
2. Select a time range (daily, weekly, monthly, or yearly)
3. View various charts showing your practice patterns
4. Analyze practice time distribution across instruments and categories

### Managing Settings

1. Navigate to the Settings section
2. Add, edit, or delete instruments
3. Add, edit, or delete practice categories
4. Set your timezone preference

## Data Storage

All data is stored locally in your browser using localStorage. This means:
- Your data persists between sessions
- No internet connection is required
- Data is private and secure on your device
- Data can be cleared by clearing your browser data

## Browser Support

The application is compatible with all modern browsers including:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Practice Tracker Backend

This is the backend server for the instrument practice tracking application.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=10000
   ```

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- POST `/api/register` - Register a new user
- POST `/api/login` - Login user
- GET `/api/user` - Get user data
- PUT `/api/user` - Update user data
- POST `/api/user/practice` - Add practice session
- DELETE `/api/user` - Delete account

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Server port (default: 3000) 