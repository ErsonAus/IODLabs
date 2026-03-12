class Logger {
  // Log a message with caller ID and result
  static log(callerId, result, operation) {
    console.log(`[${new Date().toISOString()}] Operation: ${operation}, Caller ID: ${callerId}, Result: ${result}`);
  }
}

module.exports = Logger;