<template >
    <div class="post">
        <div>
            <div><strong>name of language:</strong> {{ post.title }}</div>
            <div><strong>description</strong> {{ post.body }}</div>
        </div>
        <myBTN :text="'delete'" />
    </div>
</template>
<script>
import myBTN from "./UI/myBTN.vue";
export default {
    components: {
        myBTN
    },
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