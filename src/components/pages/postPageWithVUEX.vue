<template>
  <div>
    <h1>posts page</h1>
    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="search..."
    />
    <div class="app_btns">
      <my-button style="" @click="showDialog">create post</my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <postForm @create="createPost" />
    </my-dialog>

    <postList
      v-if="!isPostLoading"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />
    <div v-else>...Loading</div>
    <div class="page_wrapper">
      <div
        v-for="page in totalPage"
        :key="page"
        class="page"
        :class="{ 'current-page': currentPage == page }"
        @click="
          () => {
            changeCurrentPage(page);
          }
        "
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>
<script>
import postForm from "@/components/postForm";
import postList from "@/components/postList";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  components: {
    postForm,
    postList,
  },

  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
    }),
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      currentPage: (state) => state.post.currentPage,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
  // watch: {
  //   currentPage() {
  //     this.fetchPosts();
  //   },
  // },
};
</script>
<style>
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
