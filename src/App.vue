<template>
    <h1>#todo</h1>
    <div id="nav">
        <router-link :to="{ name: 'ALL' }"><a>All </a></router-link>
        <router-link :to="{ name: 'Active' }"><a>Active </a></router-link>
        <router-link :to="{ name: 'Completed' }"><a>Completed </a></router-link>
    </div>
    <hr />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
    <credits />

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Raleway:wght@700&display=swap"
        rel="stylesheet"
    />
    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
    />
</template>

<script>
import Credits from './components/credits.vue'

export default {
    components:{Credits}
}
</script>

<style lang="scss">
@import "./assets/variable.scss";

* {
    font-family: "Montserrat", sans-serif;
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

#app {
    padding: 10vh 25%;

    h1 {
        text-align: center;
        font-family: "Raleway", sans-serif;
        font-size: 36px;
        line-height: 42px;

        margin-bottom: 2rem;
    }
}

#nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a {
        text-decoration: none;
        color: $light-black;
        padding: 1rem;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
    }
}

.router-link-active,
a:hover {
    border-bottom: 4px solid $primary;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.displayTodo {
    ul {
        li {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 1rem 0rem;
        }
    }
}

.todosList {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
        height: 1.4rem;
        width: 1.4rem;
        margin-right: 0.5rem;
    }

    span {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: $light-black;
    }
}

.none {
    display: none !important;
}

li {
    list-style-type: none;
}

hr {
    margin: 0%;
}

i {
    color: $gray-500;
    cursor: pointer;

    &:hover {
        color: $primary;
    }
}

@media screen and (max-width: 900px) {
    #app {
        padding: 10vh 10vw;
    }
}

@media screen and (max-width: 600px) {
    #app {
        padding: 7vh 5vw;
    }
}

@media screen and (max-width: 450px) {
    #app {
        padding: 5vh 5vw;
    }
}

@media screen and (max-width: 340px) {
    #app {
        padding: 5vh 1vw;
    }
}
</style>
