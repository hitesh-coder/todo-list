<template>
    <div class="editBox">
        <i class="material-icons" @click="updateTodo">edit</i>
    </div>
</template>

<script>
export default {
    name: "editItem",
    props:{
        index: Number
    },
    methods: {
        updateTodo() {
            this.$store.dispatch("updateTodo", this.index);
            this.$store.dispatch("changeCurrentMode");
            this.$store.dispatch("setIndex", this.index);
        },
    },
};
</script>