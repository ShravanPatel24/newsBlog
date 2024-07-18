# Blog App

A React-based blog application that lists blog posts, displays detailed views of individual posts, and includes a fixed navigation bar. The app supports pagination and is styled with Material-UI.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)

## Project Overview

This project is a simple blog application built with React. It fetches blog posts from an external API and displays them in a paginated list. Users can click on a blog post to see more details. The app uses Material-UI for styling and is deployed using GitHub Pages.

## Features

- List of blog posts with pagination.
- Detailed view of individual blog posts.
- Fixed navigation bar with links to Home and About pages.
- Loading indicator while fetching data.
- Error handling for network requests.
- Responsive design.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<username>/blog-app.git
   cd blog-app
   ```

2. **Install dependencies:**

   ```bash
    npm install
   ```

3. **Set up environment variables:**

   ```bash
   REACT_APP_NEWS_API_KEY=your_news_api_key_here
   ```

## Usage

To run the application locally, use the following command:

    npm start

This will start the development server and open the app in your default browser at http://localhost:3000.

## Deployment

The application is deployed using GitHub Pages. Follow these steps to deploy your own version:

1. **Ensure the homepage field in package.json is set to:**

"homepage": "https://<username>.github.io/<repository-name>"
Replace <username> with your GitHub username and <repository-name> with the name of your repository.

2. **Deploy the app:**

npm run deploy

3. **Access the hosted app:**

The app will be available at https://<username>.github.io/<repository-name>.

Project Structure
blog-app/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── BlogPostDetails.jsx
│ │ ├── BlogPostItem.jsx
│ │ ├── BlogPostList.jsx
│ │ └── Navbar.jsx
│ ├── App.jsx
│ ├── index.css
│ ├── index.js
│ └── ...
├── .env
├── .gitignore
├── package.json
└── README.md

Feel free to modify any section as per your specific project details or requirements.
