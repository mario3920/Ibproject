<template>
  <b-card-header id="cabecalho" slot>
    <b-row>
      <!-- logo space -->
      <b-col sm="3" align-self="center">
        <span id="titulo">Almanaque do Escoteiro</span>
      </b-col>

      <!-- navegation space -->
      <b-col sm="6">
        <b-navbar-nav id="navbar">
          <router-link id="navBtn" to="/">Inicio</router-link>
          <router-link id="navBtn" to="/atividades">Atividades</router-link>
          <router-link id="navBtn" to="/projetos">Projetos</router-link>
          <router-link id="navBtn" to="/cancoes">Canções</router-link>
        </b-navbar-nav>
      </b-col>

      <template id="logoutTemplate" v-if= logado != null >
        <b-col sm="3" align-self="center">
        <span id="tituloUser" >Bem vindo novamente, {{user}} </span>
          <button @click="logout" id="login" to="/">Logout</button>
        </b-col>
      </template>

      <template id="loginTemplate" v-else>
        <!--login button space -->
        <b-col sm="3" align-self="center">
          <router-link id="login" to="/login">Login</router-link>
          <router-link id="register" to="/cadastro">Cadastrar-se</router-link>
        </b-col>
      </template>
    </b-row>
  </b-card-header>
</template>

<script>
export default {
  data(){
    return{
      logado: localStorage.getItem("id"),
      user: localStorage.getItem("nome")
    }
  },
    watch: {
    logado(){
      console.log("a");
      
    }
    },

  methods: {
    logout(){
      this.$router.replace("/")
      localStorage.removeItem("id");
      localStorage.removeItem("nome")
      window.location.reload()
    }
  }

};


</script>

<style>
#cabecalho {
  border-bottom: 5px solid #feca08;
  color: white;
  font-size: 1.5em;
  background-color: #1e2a78;
}

#navbar {
  display: flex;
  flex-direction: row;
}

#titulo {
  letter-spacing: 0.2em;
  font-weight: 500;
}

#navBtn,
#nomeGrupo {
  padding: 1em 1.2em;
  color: white;
}

#login {
  color: black;
  font-weight: 500;
  background-color: #feca08;
  border: 0;
  border-radius: 8px;
  padding: 0.5rem 1rem 0.5rem 1rem;
}

#register {
  color: black;
  font-weight: 500;
  background-color: #feca08;
  border: 0;
  border-radius: 8px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin-left: 15px;
  margin-right: 5px;
}
#tituloUser {
  font-size: 0.6em;
  font-weight: 500;
  padding: 1rem 1.5rem 1.5rem 1rem;
}
</style>