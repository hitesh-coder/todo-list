<template>
    <div>
        <input-bar />
        <div class="displayTodo">
            <ul>
                <li v-for="(item,index) in todos" :key="item" :class="item.status === 'completed' ? 'none':''">
                    <div class="todosList">
                        <input type="checkBox" @click="changeStatus(index)">
                        <span>{{ item.name }}</span>
                    </div>
                    <edit-item :index="index" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import EditItem from './editItem.vue';
import InputBar from './inputBar.vue';
export default {
    name: "activeTodo",
    components:{InputBar, EditItem},
    computed: {
        todos() {
            return this.$store.getters.getAllTodo;
        },
    },
    methods: {
        changeStatus(index){
            this.$store.dispatch("changeStatus",index)
        },
    },
};
</script>

<style lang="scss" scoped>

</style>