<template lang="">
     <form class="post_form" @submit.prevent>
            <h3>create post</h3>
            <my-input v-model="post.title" type="text"
                placeholder="name"/>
            <my-input  v-model="post.body"  placeholder="description"/>
                <my-button @click="createPost" type="sumbit" style="margin-top: 15px;">
                    add comment
                </my-button>
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
.post_form {
    display: flex;
    flex-direction: column;
}
</style>