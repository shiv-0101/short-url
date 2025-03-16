# URL Shortener - Clean Links

## Overview

This project is a full-stack URL shortener that lets you turn long, messy links into short, shareable ones. Built with a sleek tech stack, it’s got a simple and easy-to-use interface to make managing your shortened URLs a breeze. Right now, it’s hosted locally, but it’s ready.
## Features

*   **URL Shortening:**  Easily convert long URLs into shorter, more manageable links.

*   **Link Management:** View a history of all shortened URLs, along with their original links and click counts.
*   **Copy to Clipboard:** Quickly copy shortened URLs to your clipboard for easy sharing.
*   **Delete Links:** Remove unwanted shortened URLs from your history.
* **Responsive Design:** The application is designed to work seamlessly on various screen sizes.
* **The application has a clean and intuitive interface.** 

## Tech Stack

**Client (Frontend):**

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

**Server (Backend):**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   **Node.js:** Make sure you have Node.js (version 18 or higher recommended) installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).
*   **npm (Node Package Manager):** npm usually comes bundled with Node.js.
*   **MongoDB:** You'll need a running MongoDB instance. You can use a cloud-based service like MongoDB Atlas: [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```
    Replace `<repository-url>` with the actual URL of your project repository.

2.  **Navigate to the server directory:**

    ```bash
    cd server-app
    ```

3.  **Install server dependencies:**

    ```bash
    npm install
    ```

4.  **Start the server:**

    ```bash
    npm run dev
    ```
    This will start the server on `http://localhost:8080` (or the port you've configured).

5.  **Navigate to the client directory:**

    ```bash
    cd ../client-app/url-shortner
    ```

6.  **Install client dependencies:**

    ```bash
    npm install
    ```

7.  **Start the client:**

    ```bash
    npm run dev
    ```

    This will start the client development server, usually on `http://localhost:5173`.

8. **Open your browser** and go to `http://localhost:5173`

