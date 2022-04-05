<template>
  <article class="container-fluid flex-grow-1 px-0">
    <b-row class="m-0 p-0">
      <b-col sm="12" md="12" xs="12" lg="12" xl="12" class="px-0">
        <router-view />
      </b-col>
    </b-row>
  </article>
</template>

<script>
export default {
  name: 'Article'
}
</script>