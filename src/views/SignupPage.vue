<template>
  <div class="signup-container">

    <div class="main-content">
      <img src="..\assets\Signup.jpg" alt="Bookshelf" class="book-image" />

      <div class="signup-form">
        <h1>Join us today👋</h1>
        <p>Unlock your next chapter—create your account and step into a realm of endless narratives. Dive into our treasure trove of books.</p>
         <div class="icon">

        <button class="google-signup-btn">Sign up with Google</button>
      </div>

        <form>
          <label for="name">First & Last Name</label>
          <input type="text" id="name" placeholder="e.g., Dawson Lazar" />

          <label for="email">Email address</label>
          <input type="email" id="email" placeholder="e.g., dawson@gmail.com" />

          <label for="password">Password</label>
          <input type="password" id="password" placeholder="**********" />

          <div class="remember-me">
            <input type="checkbox" id="remember" />
            <label for="remember">Remember me</label>
          </div>

          <button type="submit" class="create-account-btn">Create Account</button>
        </form>
         <div class="thelink">
        <p class="signin-link">Already have an account?</p>
         <p id="target"><router-link to="/SigninPage">Sign in</router-link> </p>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage'
};
</script>

<style scoped>
.signup-container {
  font-family: 'Poppins', serif;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); 
}

.signup-btn:hover {
  
  background-color: #163273;
  color: #ffffff;
  
  border-radius: 35px;

  font-weight:700;
  
}

.signin-btn {
  background: #0066cc;
  color: white;
}

.main-content {
  display: flex;
  align-items: center;
  margin: 0px 100px ;
  max-width: 1200px;
  max-width: 1200px;
  gap: 150px;
}

.book-image {
  width: 450px;
  border-radius: 16px;
}

.signup-form {
  margin-left: 50px;
  width: auto;
}

.signup-form h1 {
  margin-bottom:6px;
  color:#22469C;
  font-size: 52px;
  
}

.signup-form p {
  color: #22469C;
  margin: 0px 10px 10px 10px;
  margin-top: 0px;
  font-size: 18px;
  font-weight: 400;
  
}

.google-signup-btn {
  width: 100%;
  height: 57px;
  padding: 10px;
  background: #22469C;
  color: white;
  border: none;
  border-radius: 35px;
  margin-bottom: 20px;
  font-weight:700;
  font-size: 17px;

}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 400;
  margin-bottom: 5px;
  font-size: 14px;
  color:#22469C;
}
input::placeholder {
  color: #4B70F5;
  font-size: 16px;
  font-weight: 400px;
}
input {
  padding: 17px 22px;
  border: 1px solid #4A6EC4;
  border-radius: 35px;
  margin-bottom: 15px;
}

.remember-me {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 6px;
}

.remember-me input {
  margin-right: 8px;
}

.create-account-btn {
  width: 100%;
  height: 57px;
  padding: 10px;
  background: #22469C;
  color: white;
  border: none;
  border-radius: 35px;
  margin-bottom: 20px;
  font-weight:700;
  font-size: 17px;
  margin: 0px;
  transition: 0.2s ease-in-out;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); 
}

.create-account-btn:hover {
  
  background-color: #163273;
  color: #ffffff;
  
  border-radius: 35px;

  font-weight:700;
  
}

.signin-link {
  padding-top: 15px;
  text-align:left;
  
}
router-link {
  text-decoration: none;
  color: #4B70F5;
  display: inline-block;
  margin: 4px;
}

.signin-link a:hover {
  transform: scale(1.1);
  font-weight:bold;
}

.thelink {
  display:flex;
  justify-content: center;
  align-items: center;
}
.thelink p {
 text-align: center;
}




img {
  max-width: 200%;
  max-height: 600px;
}
</style>
