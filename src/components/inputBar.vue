<template>
    <div>
        <div class="input">
            <input type="text" v-model="todo" placeholder="add details" />
            <button @click="addNewTodo" v-if="currentMode == 'new'">
                Add
            </button>
            <button @click="updateOldTodo" v-else>update</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "inputBar",
    computed: {
        todo: {
            get() {
                return this.$store.getters.currentTodo;
            },
            set(value) {
                this.$store.commit("updateCurrentTodo", value);
            },
        },
        currentMode() {
            return this.$store.getters.currentMode;
        },
    },
    methods: {
        addNewTodo() {
            if (this.todo != "") {
                this.$store.dispatch("setTodoList");
            }
            this.todo = "";
        },
        updateOldTodo() {
            if (this.todo != "") {
                this.$store.dispatch("updateOldTodo");
                this.$store.dispatch("changeCurrentMode");
            }
            this.todo = "";
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/variable.scss";

.input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0rem;

    input {
        width: 82%;
        padding: 1rem;
        border-radius: $border-radius;
        border: 1px solid $gray-500;
        outline: none;

        font-size: 14px;
        line-height: 17px;
        color: $light-black;
    }

    button {
        width: 15%;
        padding: 1rem;
        border-radius: $border-radius;
        border: none;
        outline: none;
        cursor: pointer;

        color: $white;
        background: $primary;

        font-size: 14px;
        line-height: 17px;
        font-weight: 600;

        &:hover{
            background: $primary-hover;
        }
    }
}
</style>