<template>
    <div>
       <h3>MyHome</h3>
       <input type="text" v-focus>
    </div>
</template>

<script>
export default {
    name: 'MyHome',
    directives: {
        focus: {
            mounted(el) {
                el.focus()
            }
        }
    }
}
</script>

<style scoped></style>