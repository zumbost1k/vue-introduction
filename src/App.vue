<template>
    <div class="app">
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
import postForm from './components/postForm'
import postList from './components/postList'
import axios from 'axios'
export default {
    components: {
        postForm, postList
    },

    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: '',
            searchQuery: '',
            currentPage: 1,
            limit: 10,
            totalPage: 0,
            sortOptions: [
                { value: 'title', name: 'by name' },
                { value: 'body', name: 'by body' },
            ],

        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
        },
        removePost(post) {
            this.posts = this.posts.filter(currentPost => currentPost.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        changeCurrentPage(newCurrentPage) {
            this.currentPage = newCurrentPage
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true;
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                })
                this.totalPage = Math.ceil(responce.headers['x-total-count'] / this.limit)
                this.posts = responce.data

            } catch (error) {
                console.log(error)
            }
            finally {
                this.isPostLoading = false;
            }

        },

    },
    mounted() {
        this.fetchPosts()
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => { post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]) })
        },
        sertedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {

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