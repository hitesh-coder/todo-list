<template>
  <div class="active">
    <active-todo />
  </div>
</template>

<script>
import activeTodo from '../components/activeTodo.vue'
export default {
    components: { activeTodo },
  name:"active"
}
</script>