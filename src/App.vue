<template>
  <div class="app">
    <h1>Шифр Цезаря</h1>
    <h2>Кирилиця</h2>
    <div class="block-cipher">
      <user-text />
      <cript-text />
    </div>
    <letter-shift />
  </div>
</template>
 

<script>
import UserText from './components/UserText.vue';
import CriptText from './components/CriptText.vue';
import LetterShift from './components/LetterShift.vue'
export default {
  name: "App",
  components: { UserText, CriptText, LetterShift }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
}

body,
#root {
  height: 100%;

}

.app {
  width: 1300px;
  height: 100vh;
  margin: 0 auto;
  background-color: #FFB48F;
  text-align: center;
}

.app h1 {
  font-size: 2.5rem;
  padding-top: 10px;
  color: green;
  font-style: italic;
}

.app h2 {
  font-size: 2rem;
  color: green;
  margin-top: 10px;
}

.block-cipher {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  /* padding: 0 50px; */
}
</style>
