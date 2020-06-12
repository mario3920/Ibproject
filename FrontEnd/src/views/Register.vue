<template>
  <b-container fluid="true" id="loginContainer">
    <b-alert
      :show="contador"
      :variant= tipoMsg
      @dismissed="contador=0"
      @dismiss-count-down="contagemRegressiva"
    >
      <p>{{msgErro}}</p>
    </b-alert>

    <b-row class="login-container">
      <!-- blank left space -->
      <b-col sm="3"></b-col>

      <!-- login center space -->

      <b-col sm="6" align-self="center">
        <b-form-group>
          <!-- user input space -->
          <b-form-group label-cols="4" label="Email:" label-for="email" class="txtLogin">
            <b-form-input class id="email" v-model="email"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="4"
            label="Confirmar email:"
            label-for="confEmail"
            class="txtLogin"
          >
            <b-form-input class id="confEmail" v-model="confEmail"></b-form-input>
          </b-form-group>

          <!-- password input space -->
          <b-form-group label-cols="4" label="Senha:" label-for="Password" class="txtLogin">
            <b-form-input type="password" id="Pass" v-model="senha"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols="4"
            label="Confirmar senha:"
            label-for="confPassword"
            class="txtLogin"
          >
            <b-form-input type="password" id="Pass" v-model="confSenha"></b-form-input>
          </b-form-group>

          <b-button
            pill
            variant="primary"
            id="btnLogin"
            @click="cadastro"
            class="button-login"
          >confirmar cadastro</b-button>
        </b-form-group>
      </b-col>

      <!--blank right space -->
      <b-col sm="3"></b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  data() {
    return {
      segContador: 2,
      contador: 0,
      email: "",
      senha: "",
      confEmail: "",
      confSenha: "",
      msgErro: "",
      tipoMsg: "danger"
    };
  },

  methods: {
    contagemRegressiva(contador) {
      this.contador = contador;
      if(contador == 0){
        this.$router.replace("/");
      }
    },

    mostrarAlerta() {
      this.contador = this.segContador;
    }
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.login-container {
  width: 100%;
  max-width: 1520px;
  height: 65vh;
  margin: 0 auto;
  margin-bottom: 25px;

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
  margin-top: 15px;
  margin-left: 100px;
}
.txtLogin {
  font-size: 20px;
  font-weight: 700;
}
</style>