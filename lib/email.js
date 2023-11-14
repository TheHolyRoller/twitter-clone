import { Appwrite } from "appwrite";

// Replace with your appwrite variables
const appwrite = new Appwrite();
appwrite
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT)
  .setKey(process.env.APPWRITE_API_KEY);




export const sendEmail = async (data) => {
  const { to, subject, html } = data;

  return await appwrite.account.createVerification(
    to,
    subject,
    html,
    process.env.APPWRITE_FUNCTION_ID
  );
};

