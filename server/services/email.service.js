const mailer = require("nodemailer");
const {
  UserRegistrationMailContent,
  forgotPasswordMailContent,
} = require("../utils/constants/emailConstants.js");
//const logger = require("../log/logger.js");

let mailTransporterCreater = () =>
  mailer.createTransport({
    service: process.env.SERVICE,
    host: process.env.HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD, //This should be a password generated by google App password
    },
  });

const mailSender = async (emailDetails) => {
  try {
    const mailTransporter = mailTransporterCreater();
    await mailTransporter.sendMail(emailDetails);
    return {
      success: true,
      message: "Email Sent Successfully",
    };
  } catch (error) {
    //logger.log("crit",`Error:- ${error?.message}`,{emailError:true})
    throw error;
  }
};

const forgotPasswordEmail = async (userEmail, otp) => {
  try {
    forgotPasswordMailContent.to = userEmail;
    forgotPasswordMailContent.from = {
      name: process.env.APP_NAME,
      address: process.env.EMAIL_ID,
    };
    forgotPasswordMailContent.html = forgotPasswordMailContent.html.replace(
      "{{OTP}}",
      otp
    );
    const response = await mailSender(forgotPasswordMailContent);
    return response;
  } catch (error) {
    throw error;
  }
};

const userRegistrationEmail = async (userEmail, username) => {
  try {
    UserRegistrationMailContent.to = userEmail;
    UserRegistrationMailContent.from = {
      name: process.env.APP_NAME,
      address: process.env.EMAIL_ID,
    };
    UserRegistrationMailContent.html = UserRegistrationMailContent.html.replace(
      "{{username}}",
      username
    );
    const response = await mailSender(UserRegistrationMailContent);
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports={forgotPasswordEmail,userRegistrationEmail};
