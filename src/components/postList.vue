<template lang="">
    <div>
        <h3>list of posts</h3>
         <postItem  v-for="post in posts"
         :post="post"
         />
    </div> 
</template>
<script>
import postItem from "./postItem";
export default {

    components: {
        postItem
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>
<style>
</style>