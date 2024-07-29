process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const fs = require("fs");
const os = require("os");
const https = require("https");

// Disable certificate verification (not recommended for production)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Function to get the user's local IP address
function getUserLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const alias of iface) {
      if (alias.family === "IPv4" && !alias.internal) {
        return alias.address;
      }
    }
  }
  return "No local IP found";
}

// Function to get the private IP address
function getPrivateIP() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const alias of iface) {
      if (alias.family === "IPv4" && !alias.internal) {
        return alias.address;
      }
    }
  }
  return "No private IP found";
}

// Function to get the public IP address
function getPublicIP(callback) {
  https
    .get("https://api64.ipify.org?format=json", (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          const ip = JSON.parse(data).ip;
          callback(ip);
        } catch (e) {
          console.error("Error parsing public IP:", e.message);
          callback("No public IP found");
        }
      });
    })
    .on("error", (err) => {
      console.error("Error fetching public IP:", err.message);
      callback("No public IP found");
    });
}

// Function to log access
function logAccess(localIP, privateIP, publicIP) {
  const logEntry =
    `Accessed on: ${new Date().toISOString()}\n` +
    `User Local IP Address: ${localIP}\n` +
    `Private IP Address: ${privateIP}\n` +
    `Public IP Address: ${publicIP}\n\n`;

  fs.appendFileSync("User_logs.txt", logEntry, (err) => {
    if (err) throw err;
  });
}

// Main function to display IPs and log them
function displayIPs() {
  const localIP = getUserLocalIP();
  const privateIP = getPrivateIP();

  // Get and display the public IP address
  getPublicIP((publicIP) => {
    logAccess(localIP, privateIP, publicIP);
  });
}

// Run the function to display IPs
displayIPs();
