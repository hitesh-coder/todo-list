<template>
    <div class="deleteTodo">
        <i class="material-icons" @click="deleteTodo">delete_outline</i>
    </div>
</template>

<script>
export default {
    name: "deleteTodo",
    props: {
        index: Number,
    },
    methods: {
        deleteTodo() {
            this.$store.dispatch("deleteTodo", this.index);
        },
    },
};
</script>

<style lang="scss" scoped>
i{
    &:hover{
        color: #dc3545;
    }
}
</style>