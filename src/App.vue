<template>
  <div id="app">
    <label>Show Single Post</label>
    <Post :title="post.title" :body="post.body" />

    <br />
    <br />
    <br />

    <label>Show All Posts</label>
    <div v-for="post in posts" :key="post.id">
      <Post :title="post.title" :body="post.body" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Post from "@/components/Post";

export default {
  name: "App",

  components: {
    Post,
  },

  created() {
    this.$store.dispatch("post/fetchPosts");
    this.$store.dispatch("post/fetchPost", { id: 1 });
  },

  computed: {
    ...mapState("post", ["posts", "post"]),
  },
};
</script>
