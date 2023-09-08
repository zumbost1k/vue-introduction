<template>
    <div class="app">
        <postForm @create="createPost" />
        <postList :posts="posts" />
    </div>
</template>

<script>
import postForm from './components/postForm'
import postList from './components/postList'
export default {
    components: {
        postForm, postList
    },

    data() {
        return {
            posts: [
                { id: 1, title: 'JS', body: 'lang desc' },
                { id: 2, title: 'c++', body: 'good lang' },
                { id: 3, title: 'python', body: 'bad lang' },
            ],
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 50px;
}
</style>