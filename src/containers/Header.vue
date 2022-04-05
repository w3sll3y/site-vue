<template>
  <header class="container">
    <b-navbar toggleable="lg">

      <b-navbar-brand class="tallos-logo">
        <router-link :to="{ name: 'home'}">
          <img id="navbar-main-logo" src="../assets/img/logo-tallos.png" draggable="false" alt="Tallos Tecnologias" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item class="items" v-for="(link, key) in links" :key="key" :href="link.href" @click.prevent="$root.goTo(link.href)" :class="currentPage===link.href?'active':''">
              {{link.name}}
            </b-nav-item>
          </b-navbar-nav>

          <b-nav-form>
            <b-button pill class="my-2 my-sm-0 btn-login" type="submit" :href="linkTallos">Entrar</b-button>
          </b-nav-form>

<!--          <b-nav-item-dropdown text="Lang" right>-->
<!--            <b-dropdown-item href="#">EN</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">ES</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">PT-BR</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      homeUrl: `${process.env.VUE_APP_DEFAULT_SITE}`,
      linkTallos: 'https://app.tallos.com.br',
      links: [
        {
          name: 'Home',
          href: '/',
        },
        {
          name: 'Plataforma',
          href: '/platform',
        },
        {
          name: 'Planos',
          href: '/plans',
        },
        {
          name: 'Sobre Nós',
          href: '/about-us',
        },
        {
          name: 'Blog',
          href: '/blog',
        },
      ]
    }
  },

  computed: {
    currentPage() {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss">

// .container{ 
//   position: fixed;
//   z-index: 1000;
//   padding: 0 10%;
//   height: 100px;
//   max-width: 100%;
// }

.tallos-logo img {
  width: 170px;
  height: 60px !important;
}

.btn-login {
  background: #0199ca;
  border: none;
}

.btn-login:hover {
  background: #022e6f;
}

.items
{
  z-index: 1;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 900;
  // text-transform: uppercase;
}
#navbar-main-logo {
  height: 50px;
}
#t-container > header > nav > a {
  z-index: 1;
}
#nav-collapse {
  a {
    z-index: 1;
    font-weight: bold;
  }
}
.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
    color: #022e6f;
}

// #nav-collapse > ul > ul > li.active {
// color: red !important;
// }


@media (max-width:991px)
{
  .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
    color: #fff;
  }
  
    #navbar-main-logo
    {
      z-index: 1;
      position: absolute;
      top: 0;
      bottom: 10;
      left: 0;
      right: 0;
      margin: auto;
        
    }

  .tallos-logo img {
    width: 128px;
    height: 50px !important;
  }
    /*.navbar-toggler-icon{
        width: 20px;
    }*/ 
    // .navbar-toggler{
    //   background: rgba(1, 153, 202, 0.2);
    //   position: absolute;
    //   overflow: hidden;
    //   color: #fff;
    // }
    .navbar-collapse
    {
      z-index: 1000;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(#022e6f ,#029bcd);
      }
      .navbar-light .navbar-nav .nav-link {
        color: white;
      }
      .form-inline
      {
        display: flex;
        justify-content: center;

      }
    .navbar-collapse ul a
    {
        text-align: center;
        text-transform: uppercase;
        color: white;
        margin: auto;
    }
    .btn-primary{
        margin-left: 25%;
      }

    .navbar-toggler{
      z-index: 1  ;
      position: relative;
      right: 90%;
      bottom: 5px;
    }
    .items
    {
      padding: 10px;
    } 
}
</style>