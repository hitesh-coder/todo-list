<template>
  <div class="All">
    <all-todo/>
  </div>
</template>

<script>
// @ is an alias to /src
import allTodo from "@/components/AllTodo"

export default {
  name: "ALL",
  components: {
    allTodo
  },
  data(){
    return{
      todo:'',
      todoList: []
    }
  },
 
};
</script>
