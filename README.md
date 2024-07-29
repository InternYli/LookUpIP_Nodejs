# IP Address Logger

This Node.js application retrieves and displays the user's local, private, and public IP addresses through a simple web interface. It also logs these IP addresses to a file named `User_logs.txt`. The application is composed of a server-side script and a frontend HTML file.

## Features

- Retrieves the local IP address of the user's machine.
- Retrieves the private IP address of the user's network interface.
- Fetches the public IP address using an external API.
- Logs the retrieved IP addresses to `User_logs.txt`.
- Displays the IP addresses on a web page.

## Files

- `server.js`: Node.js script that handles IP retrieval, logging, and serves the frontend.
- `ip_display.html`: Frontend HTML file that displays the IP addresses.
- `User_logs.txt`: File where the IP addresses are logged.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. Clone the repository or download the project files to your local machine.
2. Install Node.js if it's not already installed. You can download it from [nodejs.org](https://nodejs.org/).

## Usage

1. Navigate to the directory where `server.js` is located.
2. Install the required Node.js modules (if any) by running:

   ```bash
   npm install
