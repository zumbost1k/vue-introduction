<template >
    <div>
        <h1>posts page</h1>
        <my-input v-model="searchQuery" placeholder="search..." />
        <div class="app_btns">
            <my-button style="" @click="showDialog">create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>

        <my-dialog v-model:show="dialogVisible">
            <postForm @create="createPost" />
        </my-dialog>

        <postList v-if="!isPostLoading" :posts="sertedAndSearchedPosts" @remove="removePost" />
        <div v-else>...Loading</div>
        <div class="page_wrapper">
            <div v-for="page in totalPage" :key="page" class="page" :class="{ 'current-page': currentPage == page }"
                @click="() => { changeCurrentPage(page) }">
                {{ page
                }}</div>
        </div>
    </div>
</template>
<script>
import postForm from '@/components/postForm'
import postList from '@/components/postList'
import axios from 'axios'
export default {
    components: {
        postForm, postList
    },

    data() {
        return {


        }
    },
    methods: {

    },
    mounted() {
        this.fetchPosts()
    },
    computed: {

    },
    watch: {
        currentPage() {
            this.fetchPosts()
        }
    }
}
</script>
<style >
.app_btns {
    margin: 15px 0px;
    display: flex;
    justify-content: space-between;
}

.page_wrapper {
    display: flex;
    margin-top: 15px;
    justify-content: center;
    cursor: pointer;
    gap: 5px;
}

.page {
    border: 1px solid black;
    padding: 5px 10px;
}

.current-page {
    background: rgb(187, 186, 186);
}
</style>