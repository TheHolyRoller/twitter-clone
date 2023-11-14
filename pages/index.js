'use client'
import Image from 'next/image'
import  { Client, Databases, Account } from 'appwrite'

import { Inter } from 'next/font/google'

/**


// Appwrite 

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6550a20b1201de8cdc7b');

appwrite api key name: 
API_Key

Appwrite API key secret 

97be481159190df905975c03a11cfc2e4b1428475dd17da51986c1258507fd3882357e1244734857f082e3fea91a5d55fc4d5cb1e09d7b71e7c9dacc9442d0d165807dc40795850148036a3d92bc4aba36091996fbb5a9a488c2357cdffb3577419a4c4efda43bc8c3ca8f188df5e9f18204c5af638d1a56faf1d215793bf34e




API Token Mail Trap 
d6a9a960d0c37023264bbbfc07a3766e

*/



/** 
const { MailtrapClient } = require("mailtrap");

const TOKEN = "d6a9a960d0c37023264bbbfc07a3766e";
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const sender = {
  email: "mailtrap@twitx.vercel.app",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "danielwakeley7@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);

*/

const inter = Inter({ subsets: ['latin'] })




export default function Home({tweets}) {
  
  
  

const createUser = async () => {
  
  const client = new Client(); 
  
  const account = new Account(client); 
  
  client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT);
  
  const response = account.create('jack', 'jack@gmail.com', 'password'); 

  
  response.then(function (response) {
    
    console.log(response); 
    console.log('this was the response')

    (function (error) {
    
      console.log(error); 
    })
    
    
    
  })
}
  
  console.log(tweets);
  
  
  
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    
    
    <button onClick={createUser} style={{cursor: 'pointer', position: 'absolute', zIndex: '1000'}}  >
      CREATE USER 
    </button> 
    <button onClick={createUser} style={{cursor: 'pointer', position: 'absolute', zIndex: '1000', padding: '3rem'}}  >
      CREATE USER VIA EMAIL 
    </button> 
    
    
     
    </main>
  )
}




export async function getServerSideProps(context){
  
  const client = new Client(); 
   
   
   client
   .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT).setProject(process.env.NEXT_PUBLIC_PROJECT);

   
   const databases = new Databases(client); 
   
   const tweets = await databases.listDocuments(
   
   process.env.NEXT_PUBLIC_DATABASE, 
   process.env.NEXT_PUBLIC_TWEETS_COLLECTION
   

   );
   
   
   return{
    
    props: {tweets}, 
    
    
    
   }
  

  
}
