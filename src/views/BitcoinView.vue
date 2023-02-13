<template>
    <div>
      <h1>Price</h1>
      <button @click="loadmenu()">SHOW</button>
      <!-- {{ item[1].Population }} -->
      <h3 v-for="Bit in menudata" :key="Bit.symbol">
      {{"Coin  Name : "+Bit.baseAsset+" ,  Low Price : "+Bit.lowPrice+" USD "+" ,  High Price : "+Bit.highPrice +" USD " }}</h3>
    </div>
  </template>
  
  
  
  
  <script setup>
  import axios from "axios";
  import { ref } from "vue";
  
  
  const menudata = ref();
  const url = ref("https://api.wazirx.com/sapi/v1/tickers/24hr");
  
  function loadmenu() {
    axios
      .get(url.value)
      .then((response) => {
        menudata.value = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  </script>