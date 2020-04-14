<template>
  <b-card-header id="cabecalho" slot="">
    <b-row>

      <!-- logo space -->
      <b-col sm="4" align-self="center">
        <span id="titulo">Almanaque do Escoteiro</span>
      </b-col>

      <!-- navegation space -->
      <b-col sm="6"> 
        <b-navbar-nav id="navbar">
          <router-link id="navBtn" to="/about">Inicio</router-link>
          <router-link id="navBtn" to="#">Atividades</router-link>
          <router-link id="navBtn" to="#">Projetos</router-link>
          <router-link id="navBtn" to="#">Canções</router-link>
        </b-navbar-nav>
      </b-col>

      <!--login button space -->
      <b-col sm="2" align-self="center">
          <router-link id="login" to="/login">Login</router-link>
      </b-col>

    </b-row>
  </b-card-header>
</template>

<script>
export default {};
</script>

<style>

#cabecalho  {
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

#navBtn, #nomeGrupo {
  padding: 1em 1.2em;
  color: white;
}

#cabecalho #login {
  color: black;
  font-weight: 500;
  background-color: #feca08;
  padding: 0.5rem 1rem 0.5rem 1rem;
}
</style>