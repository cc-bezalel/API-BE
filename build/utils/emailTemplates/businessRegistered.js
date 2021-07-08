"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Template for new admin welcome mail
 * @return {string} new admin mail template with login details
 */
var _default = function _default(text) {
  return "<!DOCTYPE html>\n  <html>\n    <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html charset=UTF-8\" />\n      <link href=\"https://fonts.googleapis.com/css?family=Montserrat:300,400|Nunito:300,400&display=swap\" rel=\"stylesheet\">\n    </head>\n    <body>\n      <table style=\"width:750px;height:1035px;background: #F5F5F5 0% 0% no-repeat padding-box;opacity: 1; color: #354052;\">\n        <tr style=\"height: 50px;\">\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td></td>\n          <td style=\"width:700px; height:687px;background: #FFFFFF 0% 0% no-repeat padding-box;opacity: 1;\">\n            <table>\n              <tr>\n                <td style=\"padding-left: 40px; padding-bottom: 40px;\"><img src=\"https://mcusercontent.com/ba0e9849358e861f16cbd8cff/images/4bf48d2a-cce5-40a7-8127-d0610c42f8d8.png\" alt=\"StartRite logo\"></td>\n              </tr>\n              <tr>\n                <td style=\"font-size: 30px;padding-left: 40px; padding-top: 60px; font-family: 'Montserrat', sans-serif;\">New admin account</span></td>\n                <td></td>\n              </tr>\n              <tr>\n                <td style=\"padding-left: 40px; padding-top: 10px; font-size: 18px; font-weight: lighter; font-family: 'Nunito', sans-serif; text-align: left;\">A new admin account has been created for you with details below. Please log into your account and change your password and ensure to keep your details safe.</td>\n              </tr>\n              <tr>\n                <td style=\"padding-top: 30px; padding-left: 40px; width: 100%\">\n                  <span style=\"font-weight: bold;\">".concat(text, "</span> <br />\n                </td>\n              </tr>\n              <tr>\n                <td style=\"padding-top: 30px; padding-left: 40px; width: 100%\">\n                </td>\n              </tr>\n            </table>\n          </td>\n          <td></td>\n        </tr>\n        <tr>\n          <td></td>\n          <td>\n            <table style=\"text-align: center; width: 100%;\">\n              <tr>\n                <td style=\"font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 30px; letter-spacing: 0;\">We'd love to hear from you!</td>\n              </tr>\n              <tr>\n                <td style=\"font-size: 14px; font-family: 'Nunito', sans-serif;\">\n                  Help us improve by sharing your feedback in this short survey.\n                </td>\n              </tr>\n              <tr>\n                <td style=\"padding-top: 30px;\"><span style=\"padding: 7px;font-size: 25px;\"><img src=\"https://mcusercontent.com/ba0e9849358e861f16cbd8cff/images/ff70d617-4f02-4950-b1ae-c49ce80dad9f.png\" alt=\"Facebook logo\"></span> <span style=\"padding: 7px; font-size: 25px;\"><img src=\"https://mcusercontent.com/ba0e9849358e861f16cbd8cff/images/999fbe47-fd4b-4679-9eff-9cc0301cd523.png\" alt=\"Twitter logo\"></span> <span style=\"padding: 7px; font-size: 25px;\"><img src=\"https://mcusercontent.com/ba0e9849358e861f16cbd8cff/images/a8e97e7c-436c-47a0-b28d-53ec9f2922a1.png\" alt=\"Instagram logo\"></span></td>\n              </tr>\n              <tr>\n                <td style=\"font-family: 'Nunito', sans-serif;font-size: 16px; padding-top: 20px;\">\n                  Copyright &copy; 2020 <span style=\"font-weight: bold !important;\">SABEXNG</span> All Rights Reserved.\n                </td>\n              </tr>\n              <tr>\n                <td style=\"font-weight: bold; font-size: 16px;\">\n                </td>\n              </tr>\n            </table>\n          </td>\n          <td></td>\n        </tr>\n      </table>\n    </body>\n   </html>");
};

exports["default"] = _default;