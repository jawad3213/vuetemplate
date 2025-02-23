<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Your Best Value Proposition</h1>
      <button>Learn More</button>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature">
        <img src="" alt="Feature 1">
        <div class="feature-text">
          <h2>Feature that is amazing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <button>Learn More</button>
        </div>
      </div>

      <div class="feature reverse">
        <div class="feature-text">
          <h2>Feature that is amazing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <button>Learn More</button>
        </div>
        <img src="" alt="Feature 2">
      </div>

      <div class="feature">
        <img src="" alt="Feature 3">
        <div class="feature-text">
          <h2>Feature that is amazing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <button>Learn More</button>
        </div>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="cards">
      <h2>Your Best Value Proposition</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <div class="card-container">
        <div class="card">
          <div class="card-image"></div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="card">
          <div class="card-image"></div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="card">
          <div class="card-image"></div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-logo">BOOKSHARE</div>
      <div class="footer-links">
        <a href="#">Home</a>
        <a href="#">Bookshelf</a>
        <a href="#">Book Circulation</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </div>
      <p>© 2024 BOOKSHARE. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
};
</script>

<style scoped>
/* General Styling */
.landing-page {
  font-family: 'Poppins', serif;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  background: #22469C;
  color: white;
}

.nav-links a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
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
  color: #22469C;
}

.signin-btn {
  background: #0066cc;
  color: white;
}

/* Hero Section */
.hero {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: white;
}

.hero h1 {
  font-size: 48px;
}

.hero button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: #0066cc;
  color: white;
}

/* Features Section */
.features {
  margin: 60px auto;
  width: 80%;
}

.feature {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.feature.reverse {
  flex-direction: row-reverse;
}

.feature img {
  width: 50%;
  border-radius: 16px;
}

.feature-text {
  padding: 20px;
  width: 50%;
}

.feature-text h2 {
  font-size: 32px;
}

.feature-text p {
  margin: 10px 0;
}

.feature-text button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: #0066cc;
  color: white;
}

/* Cards Section */
.cards {
  text-align: center;
  margin: 80px 0;
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 20px;
}

.card-image {
  width: 100%;
  height: 150px;
  background: #4A6EC4;
  border-radius: 16px;
}

/* Footer */
.footer {
  background: #22469C;
  color: white;
  text-align: center;
  padding: 40px 0;
}

.footer-links a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
</style>