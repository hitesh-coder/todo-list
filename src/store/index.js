import { createStore } from "vuex";

export default createStore({
  state: {
    todo: "",
    todoList: [],
    currentMode: "new",
    index: null
  },
  mutations: {
    setTodoList(state){
      state.todoList.push({name:state.todo,status:"active"});
    },
    changeStatus(state,payload){
      if (state.todoList[payload].status === "completed") {
        state.todoList[payload].status = "active";
      }
      else{
        state.todoList[payload].status = "completed";
      }
    },
    updateTodo(state,payload){
      state.todo = state.todoList[payload].name
    },
    updateCurrentTodo(state,payload){
      state.todo = payload
    },
    updateOldTodo(state){
      state.todoList[state.index].name = state.todo
    },
    changeCurrentMode(state){
      if (state.currentMode === "new") {
        state.currentMode = "update"
      }
      else{
        state.currentMode = "new"
      }
    },
    setIndex(state,payload){
      state.index = parseInt(payload)
    },
    deleteTodo(state,payload){
      state.todoList.splice(payload,1)
    },
  },
  actions: {
    //asyncrous
    async setTodoList(state){
      state.commit("setTodoList")
    },
    async changeStatus(state, index){
      state.commit("changeStatus",index)
    },
    async updateTodo(state,index){
      state.commit("updateTodo",index)
    },
    async changeCurrentMode(state){
      state.commit("changeCurrentMode")
    },
    async updateOldTodo(state){
      state.commit("updateOldTodo")
    },
    async setIndex(state,index){
      state.commit("setIndex",index)
    },
    async deleteTodo(state,index){
      state.commit("deleteTodo",index)
    },
  },
  modules: {},
  getters:{
    getAllTodo: state => state.todoList,
    currentTodo: state => state.todo,
    currentMode: state => state.currentMode
  }
});
