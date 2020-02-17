<template>
  <Layout>
      <div>
          <h1>{{$page.coach.name}}</h1>
          <div class="post__content" v-html="$page.coach.content" />
      </div>
  </Layout>
</template>

<page-query>
query Coach ($id: ID!) {
  coach: coach (id: $id) {
      name
      content
  }
}
</page-query>