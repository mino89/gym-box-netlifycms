<template>
  <Layout>
      <div>
          <h1>{{$page.post.title}}</h1>
          <div class="post__content" v-html="$page.post.content" />
      </div>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
      title
      content
  }
}
</page-query>