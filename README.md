# Money Tracking Application

This is a money tracking application that helps users keep track of their expenses. The frontend is built using React and CSS, while the backend is powered by Node.js, Express, and MongoDB. The app allows users to log in, log out, input their expenses, and view their total expenditures. If the total expenditure exceeds the earned amount, the total amount will be displayed in red.

## Features

- **User Authentication**: Users can sign up, log in, and log out.
- **Expense Tracking**: Users can input their expenses which will be added to a list.
- **Total Expenditure Calculation**: The app calculates the total money spent.
- **Visual Indicator**: If the total money spent exceeds the earned amount, the total amount is highlighted in red.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/money-tracking-app.git
    cd money-tracking-app
    ```

2. Install backend dependencies:
    ```sh
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```sh
    cd ../frontend
    npm install
    ```

4. Configure environment variables:
    - Create a `.env` file in the `backend` directory.
    - Add the necessary environment variables for MongoDB and JWT secret:
        ```plaintext
        MONGO_URI=<Your MongoDB URI>
        JWT_SECRET=<Your JWT Secret>
        ```

### Running the App

1. Start the backend server:
    ```sh
    cd backend
    npm start
    ```

2. Start the frontend development server:
    ```sh
    cd ../frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Authentication

- **Sign Up**: Create a new account by providing an email and password.
- **Log In**: Log in to your account with your email and password.
- **Log Out**: Log out from your account.

### Expense Management

- **Add Expense**: Enter the expense amount and description, then click "Add Expense" to add it to your list.
- **View Total Expenditure**: The total expenditure is automatically calculated and displayed.
- **Visual Indicator**: If your total expenditure exceeds your earned amount, the total amount is highlighted in red.
