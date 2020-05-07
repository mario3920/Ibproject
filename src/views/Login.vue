<template>
  <b-container fluid="true" id="loginContainer">
    <b-alert
      :show="contador"
      dismissible
      variant="danger"
      @dismissed="contador=0"
      @dismiss-count-down="contagemRegressiva"
    >
      <p>Login ou senha incorreta ...</p>
      <b-progress variant="danger" :max="segContador" :value="contador" height="4px"></b-progress>
    </b-alert>

    <b-row class="login-container">
      <!-- blank left space -->
      <b-col sm="3"></b-col>

      <!-- login center space -->

      <b-col class="login-col" sm="6" align-self="center">
        <b-form-group>
          <!-- user input space -->
          <b-form-group label-cols="2" label="Login:" label-for="user" class="txtLogin">
            <b-form-input class id="user" v-model="email"></b-form-input>
          </b-form-group>

          <!-- password input space -->
          <b-form-group label-cols="2" label="Senha:" label-for="Password" class="txtLogin">
            <b-form-input type="password" id="Pass" v-model="senha"></b-form-input>
          </b-form-group>

          <b-button pill variant="primary" @click="login" class="button-login">Fazer login</b-button>
        </b-form-group>
      </b-col>

      <!--blank right space -->
      <b-col sm="3"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      segContador: 10,
      contador: 0,
      email: "",
      senha: ""
    };
  },

  methods: {
    contagemRegressiva(contador) {
      this.contador = contador;
    },

    mostrarAlerta() {
      this.contador = this.segContador;
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then(this.$router.replace("/"), alert("Login realizado com sucesso!"));
    }
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.login-container {
  width: 100%;
  max-width: 1220px;
  height: 65vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button-login {
  width: 35%;
  height: 45px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
}
.txtLogin {
  font-size: 20px;
  font-weight: 700;
}
</style>