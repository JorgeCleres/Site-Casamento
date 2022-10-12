<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/Navbar.vue'
  export default {
    components: {
        NavBar,
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');  
@font-face {
    font-family: 'Ruthligos';
    src: url('./assets/fonts/Ruthligos.ttf') format('truetype');
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
#app {
  font-family: system-ui;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 100 !important;
}

h4, h5, h6, p {
  font-family: revert;
}
h5 {
  font-weight: 200 !important;
}
.slick-prev:before, .slick-next:before {
    color: #71a077 !important;
    opacity: 1 !important;
}
.vuejs-countdown .digit {
    font-size: 70px !important;
    font-weight: 100 !important;
    font-family: 'Poppins' !important;
    color: #5a5a5a !important;
}
.vuejs-countdown li:after {
    content: "" !important;
}
.vuejs-countdown li {
    background: white !important;
    padding: 10px !important;
}
.swal-text {
    text-align: center;
}
.modal-content button.close {
  border-radius: 5px !important;
  background: #71a077 !important;
  border: 2px solid #71a077 !important;
  color: white !important;
  padding: 0px 5px 3px !important;
  font-size: 15px !important;
}
.modal-content button.btn.btn-secondary, .modal-content button.btn.btn-primary {
  display: none;
}
.modal-content .btn-secondary:focus {
    color: #fff !important;
    background-color: #71a077 !important;
    border-color: #71a077 !important;
}

@media(max-width:992px) {
  .vuejs-countdown .digit {
    font-size: 40px !important;
  }
}
</style>
