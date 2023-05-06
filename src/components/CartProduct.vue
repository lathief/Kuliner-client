<template>
    <div class="card shadow card-product">
        <img :src="'images/' + food.gambar" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ food.nama }}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.</p>

            <button class="btn btn-lg" :class="[food.is_ready ? 'btn-success' : 'btn-danger']" @click="checkReadyFood">Harga :
                Rp.{{ food.harga }}</button>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    name: "CartProduct",
    props: ["food"],
    methods: {
        setFoods(data) {
            this.foods = data;
        },
        checkReadyFood() {
            if (this.food.is_ready) {
                this.$router.push({ path: "/foods/" + this.food.id });
                console.log("Sukses");
            } else {
                toast("Stok kosong", {
                    type: "error",
                    autoClose: 3000,
                });
            }
        }
    },
}
</script>

<style></style>