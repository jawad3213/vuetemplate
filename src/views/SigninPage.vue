<template>
  <div class="signin-container">
    <div class="main-content">
      <img src="..\assets\pexels-pixabay-207636.jpg" alt="Bookshelf" class="book-image" />

      <div class="signin-form">
        <h1>Welcome Back 👋</h1>
        <p>Sign in to continue your journey through our endless collection of books.</p>

        <div class="icon">
          <button class="google-signin-btn">Sign in with Google</button>
        </div>

        <form>
          <label for="email">Email address</label>
          <input type="email" id="email" placeholder="e.g., dawson@gmail.com" />

          <label for="password">Password</label>
          <input type="password" id="password" placeholder="**********" />

          <div class="remember-me">
            <input type="checkbox" id="remember" />
            <label for="remember">Remember me</label>
          </div>

          <button type="submit" class="signin-btn">Sign In</button>
        </form>

        <p class="signup-link">Forget your Passowrd</p> <a href="http://"> Reset</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SigninPage'
};
</script>

<style scoped>
.signin-container {
  font-family: 'Poppins', serif;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); 
}

.main-content {
  display: flex;
  align-items: center;
  margin: 0px 100px;
  max-width: 1200px;
  gap: 150px;
}

.book-image {
  width: 450px;
  border-radius: 16px;
}

.signin-form {
  margin-left: 50px;
  width: auto;
}

.signin-form h1 {
  margin-bottom: 6px;
  color: #22469C;
  font-size: 52px;
}

.signin-form p {
  color: #22469C;
  margin: 0px 8px 8px 10px;
  font-size: 17px;
  font-weight: 400;
}

.google-signin-btn {
  width: 100%;
  height: 57px;
  padding: 10px;
  background: #22469C;
  color: white;
  border: none;
  border-radius: 35px;
  margin-bottom: 20px;
  font-weight: 700;
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
  color: #22469C;
}

input::placeholder {
  color: #4B70F5;
  font-size: 16px;
  font-weight: 400;
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

.signin-btn {
  width: 100%;
  height: 57px;
  padding: 10px;
  background: #22469C;
  color: white;
  border: none;
  border-radius: 35px;
  font-weight: 700;
  font-size: 17px;
  transition: 0.2s ease-in-out;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.signin-btn:hover {
  background-color: #163273;
  color: #ffffff;
}

.signup-link {
  padding-top: 15px;
  text-align: left;
}

.signup-link a {
  text-decoration: none;
  color: #4B70F5;
  display: inline-block;
  margin: 4px;
}

.signup-link a:hover {
  transform: scale(1.1);
  font-weight: bold;
}

img {
  max-width: 640px;
  max-height: 600px;
}
</style>