<template>
    <div class="displayTodo">
        <ul>
            <li
                v-for="(item, index) in todos"
                :key="item"
                :class="item.status === 'completed' ? '' : 'none'"
            >
                <div class="todosList">
                    <!-- <input type="checkBox" @click="changeStatus(index)" /> -->
                    <span v-if="item.status == 'completed'">{{
                        item.name
                    }}</span>
                </div>
                <delete-todo :index="index" />
            </li>
        </ul>
    </div>
</template>

<script>
import DeleteTodo from "./deleteTodo.vue";
export default {
    name: "completedTodo",
    components: { DeleteTodo },
    computed: {
        todos() {
            return this.$store.getters.getAllTodo;
        },
    },
    methods: {
        changeStatus(index) {
            this.$store.dispatch("changeStatus", index);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>