<template>
    <div class="cipher-text-container" >
     <textarea  class="cipher-text" name="cipher-text"  cols="50" rows="8" placeholder="зашифрованний текст... " 
     :value="cipherText"
     @input="updateCipherText"
     ></textarea>
     <div class="block-buttons">
      <button class="butt clear-cript" @click="clearFieldCipherText" >Clear cript text</button>
      <button class=" butt back-text"  @click="goDeCipher" >Back text</button>
     </div>
    </div>
</template>

<script>

export default {
name : "CriptText",

computed : {
    cipherText(){
        return this.$store.state.cipherText
    }
},
methods : {
    updateCipherText(event){
      this.$store.commit('updateFieldCipherText',event.target.value)
    },

    clearFieldCipherText(){
        this.$store.commit('clearFieldCipherText')
    },

    goDeCipher() {
        this.$store.dispatch('goDeCipher')
    }

}
}
</script>


<style scoped >
.cipher-text {
    font-size: 1.25rem;
}
.cipher-text:focus {
    outline: none;
    border: 2px solid blue;
}
.block-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding:  0 20px;
}
.butt {
    font-size: 1.4rem;
    padding: 6px 12px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
.clear-cript {
    background-color: red;
}
.back-text {
    background-color: violet;
}

</style>