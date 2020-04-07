<template>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    <header>
      <div id="cabecalho">
        <span id="titulo">Almanaque do Escoteiro</span>
        <b-navbar-nav id="navbar">
          <router-link id="navBtn" to="/about">Inicio</router-link>
          <router-link id="navBtn" to="#">Atividades</router-link>
          <router-link id="navBtn" to="#">Projetos</router-link>
          <router-link id="navBtn" to="#">Canções</router-link>
        </b-navbar-nav>
        <span>
          <router-link id="login" to="#">Login</router-link>
        </span>
      </div>
    </header>
  </body>
</html>
</template>

<script>
export default {};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

header {
  width: 100%;
  align-content: space-between;
  display: inline-block;
  border-bottom: 1em solid #feca08;
  color: white;
  font-size: 1.5em;
}

#navbar {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  height: 100%;
  text-align: center;
}

#cabecalho {
  background-color: #1e2a78;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  height: 80%;
  align-items: center;
}

#titulo {
  letter-spacing: 0.2em;
  font-weight: 500;
  text-align: left;
}

#navBtn,
#nomeGrupo {
  padding: 1em 1.2em;
  color: white;
}

#login {
  text-align: right;
  color: black;
  font-weight: 500;
  height: 60%;
  background-color: #feca08;
  padding: 10px 30px 10px 30px;
}

footer {
  display: inline-block;
  font-size: 1.2em;
  margin-bottom: 0px;
  height: 100px;
  width: 100%;
  background-color: #1e2a78;
  color: white;
}
</style>