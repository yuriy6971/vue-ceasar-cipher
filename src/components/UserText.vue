<template>
    <div class="text-container">
        <textarea name="text" class="user-text" cols="50" rows="8" placeholder="наберіть текст для шифрування..." 
         :value="userText"
         @input="updateUserText"
        ></textarea>
        <div class="block-buttons" >
            <button class="butt butt-encrypt" @click="goCipher" >Encript</button>
            <button  class="butt butt-clear" @click=" clearFieldUserText" >Clear Text</button>
        </div>
    
    </div>
</template>

<script>

export default {
name : "UserText",


computed : {
    userText() {
        return this.$store.state.userText
    },
  
},
methods : {
    updateUserText (event) {
        this.$store.commit("updateFieldUserText",event.target.value)
    },
    goCipher(){
        if(this.userText.trim()){  
        this.$store.dispatch('goCipher')
    }
    else alert ("Пустое поле для ввода")
    },
    clearFieldUserText(){
        this.$store.commit("clearFieldUserText")
    }
}
}

</script>


<style scoped >
.user-text {
    font-size: 1.25rem;
}
.user-text:focus {
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

.butt-encrypt {
    background-color: green;
}
.butt-clear {
    background-color: red;
}

</style>