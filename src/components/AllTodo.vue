<template>
    <div class="allTodo">
        <input-bar />
        <div class="displayTodo">
            <ul>
                <li v-for="(item, index) in todos" :key="item">
                    <div class="todosList">
                        <input type="checkBox" @click="changeStatus(index)" />
                        <span
                            :class="
                                item.status === 'completed' ? 'completed' : ''
                            "
                            >{{ item.name }}</span
                        >
                    </div>
                    <edit-item :index="index" v-if="item.status == 'active'" />
                    <delete-todo
                        :index="index"
                        v-if="item.status == 'completed'"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import DeleteTodo from "./deleteTodo.vue";
import EditItem from "./editItem.vue";
import InputBar from "./inputBar.vue";
export default {
    name: "allTodo",
    components: { InputBar, EditItem, DeleteTodo },
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
@import "../assets/variable.scss";

.completed {
    text-decoration: line-through;
    color: $gray-600;
    font-style: italic;
}
</style>