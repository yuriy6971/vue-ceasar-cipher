
<template>
    <div class="block-shift">
        <label>
            <input type="number" min="2" max="32" placeholder="Выбрати"
            :value="$store.state.shift"
            @input="changeShift"
            >
            <span>shift</span>
        </label>

    </div>
</template>

<script>

export default {
    name: "LetterShift",

    methods : {
     changeShift (event){
        this.$store.commit('updateShift',+event.target.value)
     }
    }
}

</script>

<style scoped >
.block-shift {
    margin-top: 30px;
    padding-left: 80px;
    text-align: left;
}
.block-shift input {
    width: 110px;
    font-size: 1.2rem;
}
.block-shift span  {
    padding-left: 10px;
    font-size: 1.3rem;
    font-weight: bold;
}


</style>