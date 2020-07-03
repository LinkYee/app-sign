const hmacSHA1 = require('crypto-js/hmac-sha1');
const Base64 = require('crypto-js/enc-base64');

exports.sign = function (appsecret, message) {
  return Base64.stringify(hmacSHA1(message, appsecret));
};

exports.verify = function (appsecret, message, token) {
  return Base64.stringify(hmacSHA1(message, appsecret)) === token; 
};
