<template>
   
    <div class="fb-comments" :data-href='data' data-width="100%" data-numposts="5"></div>
        
</template>

<script>
  export default {
    data() {
        return {
            data: `${process.env.VUE_APP_DEFAULT_SITE}/blog/post/${this.$route.params.slug}`
        }
    },
    async mounted(){
    await this.init()    
  },
    methods: {
        init () {
            if (window.FB) {
                window.FB.init({
                    appId      : '283851453398401',
                    status     : true,
                    xfbml      : true,
                    version    : 'v10.0'
                })
            }
        }
    }
  }
</script>