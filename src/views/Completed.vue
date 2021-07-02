<template>
    <div class="completed">
        <completed-todo />
    </div>
</template>

<script>
import completedTodo from '../components/completedTodo.vue'
export default {
    components: { completedTodo },
    name:"completed"
}
</script>