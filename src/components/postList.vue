<template lang="">
    <div v-if="posts.length>0">
        <h3>list of posts</h3>
        <transition-group name="post-list">
         <postItem 
          v-for="post in posts"
         :post="post"
         :key="post.id"
         @remove="$emit('remove',post)"
         />
        </transition-group>
        
    </div> 
    <h2 v-else style="color:red">post list is clear
    </h2>
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
.post-list-enter-active,
.post-list-leave-active {
    transition: opacity 0.3s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
}
</style>