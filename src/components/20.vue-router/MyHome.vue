<template>
    <div>
        <h3>MyHome</h3>
        <router-link :to="{ name: 'mov', params: { id: 2 } }">go to movie</router-link>
        <el-button type="danger">Danger</el-button>
        <h3>{{ this.$store.state.count }}</h3>
        <h3>{{ count }}</h3>
        <!-- <el-button @click="handle">+3</el-button> -->
        <el-button @click="handle">+5</el-button>

        <hr>
        <h3>{{ this.$store.getters.showNum }}</h3>
        <h3>{{ showNum }}</h3>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'MyHome',
    // count: this.$store.state.count
    methods: {
        ...mapMutations(['addN']),
        // handle() {
        //     this.$store.commit('addN', 3)
        // }
        // handle() {
        //     this.$store.dispatch('addAsync', 5)
        // },
        ...mapActions(['addAsync']),
        handle() {
            this.addAsync(5)
        }
    },
    computed: {
        ...mapGetters(['showNum'])
    }
}
</script>

<style lang="less" scoped>
h3 {
    color: red;
}
</style>