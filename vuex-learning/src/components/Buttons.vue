<template>
    <div class="buttons">
        <button @click="$store.dispatch('decreasCounter')">-</button>
        <button @click="$store.dispatch('increasCounter')">+</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>