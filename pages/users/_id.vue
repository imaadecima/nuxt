<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        User
      </h1>
      <h2 class="info">
        info
      </h2>
      <nuxt-link class="button" to="/users">
        Users
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
