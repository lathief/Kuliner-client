<template>
  <div class="home">
    <Navbar />    
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2>Best<strong> Foods</strong></h2>
        </div>
        <div class="col">
          <RouterLink to="/foods" class="btn btn-success float-end">Lihat Semua</RouterLink>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="food in foods" :key="food.id">
          <CartProduct :food="food"/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue';
import CartProduct from '../components/CartProduct.vue';
import axios from 'axios';
import Footer from '../components/Footer.vue';

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CartProduct,
    Footer,
  },
  data() {
    return {
      foods: []
    }
  },
  methods: {
    setFoods(data) {
      this.foods = data;
    }
  },
  mounted() {
    axios.get('http://localhost:3000/best-products')
      .then((response) => {
        this.setFoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>


