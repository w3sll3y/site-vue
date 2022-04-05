<template>
  <div role="main" id="form-site-home-fc58818c4bc8241de63a"></div>
</template>

<script>
export default {
    mounted() {
      //this.$nextTick(() => {
        let RDStationForms = window['RDStationForms']
        new RDStationForms('form-site-home-fc58818c4bc8241de63a', 'UA-91797132-2').createForm()
      //})
    }
}
</script>

<style scoped>

</style>