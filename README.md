# NY Times Most Popular Articles

## Project Description

This project is a simple **React** web application that fetches and displays the most popular articles from the **NY Times API**. The articles are shown in a clean, user-friendly layout, and users can click on an article to see more details. The project also includes **unit tests**, **end-to-end tests with Cypress**, and **code quality checks** using **ESLint** and **SonarQube** (optional).

### Key Features:

1. **Fetch Most Popular Articles** from the **NY Times API**.
2. **Display Articles**: Shows titles, abstracts, and links for each article.
3. **Responsive Design**: Ensures the app works on both desktop and mobile devices.
4. **Unit Tests**: Written using **Jest** and **React Testing Library**.
5. **End-to-End Tests**: Conducted using **Cypress** for full integration testing.
6. **Code Quality**: Ensured through **ESLint**.

## Installation and Running the Project

### Prerequisites

- **Node.js** (version 14.x or later)
- **npm** (Node package manager)

### Steps to Run the Project

1. **Clone the Repository**:

   - First, clone the repository to your local machine:
     ```bash
     git clone https://github.com/khalilahmd/nyt-popular-articles.git
     cd nyt-popular-articles
     ```

2. **Install Dependencies**:

   - Install all the required dependencies by running:
     ```bash
     npm install --legacy-peer-deps
     ```

3. **Run the Development Server**:

   - Start the development server to view the app in your browser:
     ```bash
     npm start
     ```
   - The app will be accessible at `http://localhost:3000`.

4. **Run Unit Tests**:

   - Unit tests are written using **Jest** and **React Testing Library**. Run the tests with:
     ```bash
     npm test
     ```
   - This will run the tests and display the results in the terminal.

5. **Run End-to-End Tests with Cypress**:

   - To test the app’s full functionality, use **Cypress** for end-to-end tests:
     ```bash
     npx cypress open
     ```
   - This will open the Cypress test runner in your browser. You can then run the tests interactively.

6. **Code Quality and Linting**:
   - The project uses **ESLint** to ensure the code quality and **Prettier** for formatting.
     - To check code quality with ESLint:
       ```bash
       npm run lint
       ```
     - To format the code with Prettier:
       ```bash
       npm run format
       ```
