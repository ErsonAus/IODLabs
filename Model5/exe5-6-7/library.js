class Logger {
  // Log a message to the console
  static log(message) {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
  }
}

module.exports = Logger;