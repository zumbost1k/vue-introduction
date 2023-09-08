<template lang="">
     <form class="post_form" @submit.prevent>
            <h3>create post</h3>
            <input v-model="post.title" class="post_input" type="text"
                placeholder="name">
            <input v-model="post.body" class="post_input" type="text"
                placeholder="description">
            <button  type="sumbit" @click="createPost">add comment</button>
        </form>
</template>
<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            },
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }

        }
    }
}
</script>
<style >
.post_input {
    width: 100%;
    border: 2px solid green;
    padding: 10px 15px;
    margin-top: 15px;
}

.post_form {
    display: flex;
    flex-direction: column;
}
</style>