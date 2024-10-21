# Simple Social Login App - React + Vite

This is a simple React app that demonstrates social login using **Facebook** and **Google**. The app displays a login button for each provider and shows basic user information (name and profile picture) after authentication.

## Features

- Login with **Facebook**
- Login with **Google**
- Display user profile information (name and picture)
- Logout functionality

## Technologies

- **React** for building the user interface
- **Vite** for fast build and development
- **reactjs-social-login** for social login integration
- **react-social-login-buttons** for pre-styled login buttons

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/vmantovani/vite-oauth.git

2. Install the dependencies:
   ```bash
   npm install

3. Set up environment variables:
   - Create a .env file in the root of the project and add your Facebook and Google client IDs:
   ```bash
   VITE_FB_APP_ID=your_facebook_app_id
   VITE_GOOGLE_CLIENT_ID=your_google_client_id

4. Start the development server:
   ```bash
   npm run dev

## How it Works

- Click on the Facebook or Google login buttons to authenticate.
- Once logged in, the user's profile picture and name will be displayed.
- You can log out by clicking the Logout button.
