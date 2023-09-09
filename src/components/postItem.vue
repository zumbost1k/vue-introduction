<template >
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>name of language:</strong> {{ post.title }}</div>
            <div><strong>description</strong> {{ post.body }}</div>
        </div>
        <my-button @click="$emit('remove', post)" style="align-self:flex-end ;">
            delete
        </my-button>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>
<style >
.post {
    border: 2px solid green;
    padding: 15px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>