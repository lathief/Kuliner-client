<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4 mb-4">
        <div class="col">
          <h2>Daftar<strong> Makanan</strong></h2>
        </div>
      </div>
      <div class="input-group mb-3">      
      <input
        v-model="search"
        type="text"
        class="form-control"
        placeholder="Cari Makanan"
        aria-label="Cari"
        aria-describedby="basic-addon1"
        @keyup="searchFood"
      />
      <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
    </div>
    <div class="row mb-4">
      <div class="col-md-4 mt-4" v-for="food in foods" :key="food.id">
        <CartProduct :food="food" />
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import CartProduct from "../components/CartProduct.vue";
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
  name: "Foods",
  components: {
    Navbar,
    CartProduct,
  },
  data() {
    return {
      foods: [],
      search: ''
    };
  },
  methods: {
    setFoods(data) {
      this.foods = data;
    },
    searchFood(event) {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => {
          this.setFoods(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        this.setFoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
