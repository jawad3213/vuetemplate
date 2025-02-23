<template>
   <div class="contact-page">
     
     <div class="contact-container">
       <div class="contact-form">
         <h1>Get in touch</h1>
         <p>Our friendly team would love to hear from you.</p>
 
         <form>
           <div class="name-fields">
             <div>
               <label for="first-name">First name</label>
               <input type="text" id="first-name" placeholder="First name" required />
             </div>
             <div>
               <label for="last-name">Last name</label>
               <input type="text" id="last-name" placeholder="Last name" required />
             </div>
           </div>
 
           <label for="email">Email</label>
           <input type="email" id="email" placeholder="you@company.com" required />
 
           <label for="phone">Phone number</label>
           <div class="phone-fields">
             <select id="country-code">
               <option value="US">US +1</option>
               <option value="UK">UK +44</option>
               <option value="CA">CA +1</option>
             </select>
             <input type="tel" id="phone" placeholder="(555) 000-0000" required />
           </div>
 
           <label for="message">Message</label>
           <textarea id="message" placeholder="Your message" required></textarea>
 
           <div class="checkbox">
             <input type="checkbox" id="privacy-policy" required />
             <label for="privacy-policy">You agree to our friendly <a href="#">privacy policy</a>.</label>
           </div>
 
           <button type="submit">Send message</button>
         </form>
       </div>
 
       <div class="contact-image"> <img/> </div>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   name: 'ContactPage'
 };
 </script>
 
 <style scoped>
 .contact-page {
   font-family: Arial, sans-serif;
 }
 
 .navbar {
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding: 1rem 5%;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 }
 
 .logo {
   font-size: 1.5rem;
   font-weight: bold;
   color: #0066cc;
 }
 
 .nav-links a {
   margin: 0 10px;
   text-decoration: none;
   color: #333;
 }
 
 .auth-buttons button {
   margin-left: 10px;
   padding: 8px 16px;
   border: none;
   border-radius: 20px;
   font-weight: bold;
 }
 
 .signup-btn {
   background: white;
   color: #0066cc;
   border: 1px solid #0066cc;
 }
 
 .signin-btn {
   background: #0066cc;
   color: white;
 }
 
 .contact-container {
   display: flex;
   max-width: 1100px;
   width: 100%;
   border: 1px solid #ddd;
   border-radius: 16px;
   overflow: hidden;
   margin: 50px auto;
 }
 
 .contact-form {
   width: 50%;
   padding: 40px;
   background: #f7f7f7;
 }
 
 .contact-form h1 {
   font-size: 2rem;
   margin-bottom: 10px;
 }
 
 .contact-form p {
   color: #555;
   margin-bottom: 20px;
 }
 
 .name-fields {
   display: flex;
   gap: 15px;
 }
 
 .contact-form label {
   display: block;
   font-weight: bold;
   margin-bottom: 8px;
 }
 
 .contact-form input, .contact-form textarea, .contact-form select {
   width: 100%;
   padding: 10px;
   border: 1px solid #ccc;
   border-radius: 8px;
   margin-bottom: 15px;
   font-size: 16px;
 }
 
 .phone-fields {
   display: flex;
   gap: 10px;
 }
 
 .contact-form textarea {
   height: 120px;
   resize: none;
 }
 
 .contact-form .checkbox {
   display: flex;
   align-items: center;
   margin-bottom: 20px;
 }
 
 .contact-form .checkbox input {
   margin-right: 10px;
 }
 
 .contact-form button {
   width: 100%;
   padding: 12px;
   border: none;
   border-radius: 8px;
   background: #0066cc;
   color: white;
   font-size: 16px;
   font-weight: bold;
   cursor: pointer;
   transition: background 0.3s;
 }
 
 .contact-form button:hover {
   background: #004a99;
 }
 
 .contact-image {
   width: 50%;
   
 }
 </style>