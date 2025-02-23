<template>
<link rel="preconnect" href="https://fonts.googleapis.com">

<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<header>
  <nav>
    <div class="logo"><img src="assets/Blue Illustration University Circle Brand Logo (1).png" width="auto" height="164px"  alt="nothing"></div>
  <div class="contentpages">
    <router-link to="/">HomePage</router-link> 
    <router-link to="BookshelfPage">Bookshelf</router-link> 
    <router-link to="/BookcirculationPage">Book Circulation</router-link> 
    <router-link to="/AboutPage">About</router-link> 
    <router-link to="/ContactPage">Contact us</router-link>
  </div>
  <div class="sign">
    <router-link to="/SigninPage">Sign in</router-link> 
    <router-link to="/SignupPage">Sign Up</router-link>
  </div> 
  </nav>
</header>

<main>
  <router-view/>
</main>

<footer>

</footer>
</template>

<style>

body {
  height: 100%;
  padding:0px;
  box-sizing: border-box;
  margin: 0px;
  font-family: "Poppins",serif;

}
header {
display: flex;
justify-content: center;
align-items: center;
}
nav{
  display: flex;
  justify-content:space-evenly;
  align-items:center;
  gap: 200px;
  
  background-color: #EBEBEB;
  width:100%;
  height:90px;
  
}
.logo {
transition: traslateY(30px)
}
.contentpages {
 display: flex;
 justify-content:space-evenly;
 gap: 32px;
}
.contentpages a {
 text-decoration: none;
 font-weight: 600;
 color: black;
 transition: 0.3s ease-in-out;
}
.contentpages a:hover {
color: #1443eb;
scale: 1.11;
font-weight: 700;

}



.sign{
  display: flex;
  justify-content:space-evenly;
  gap: 20px;
  position: relative;
}






/* 1. Define the keyframes for a subtle breathing effect */
@keyframes breathe {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(34, 70, 156, 0);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(34, 70, 156, 0.5);
  }
}

/* 2. Apply the animation to your .sign a element */
.sign a {
  width: 133px;
  text-decoration: none;
  font-weight: 600;
  color: white;
  background-color: #22469C;
  padding: 16px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
}

/* 3. Hover effect: make background transparent, keep the border, scale down slightly */
.sign a:hover {
  background-color: transparent;
  font-weight: 600;
  border: 2px solid #22469C;
  color: #22469C;
  scale: 1.11;
  
}





</style>
