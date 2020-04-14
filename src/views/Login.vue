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

      <b-col sm="6" align-self="center">
        <b-form-group>
          <!-- user input space -->
          <b-form-group label-cols="2" label="Login:" label-for="user">
            <b-form-input class id="user"></b-form-input>
          </b-form-group>

          <!-- password input space -->
          <b-form-group label-cols="2" label="Senha:" label-for="Password">
            <b-form-input type="Password" id="Pass"></b-form-input>
          </b-form-group>

          <b-button id="btnLogin" @click="mostrarAlerta">Button</b-button>
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
      segContador: 10,
      contador: 0
    };
  },

  methods: {
    contagemRegressiva(contador) {
      this.contador = contador;
    },

    mostrarAlerta() {
      this.contador = this.segContador;
    }
  }
};
</script>


<style lang="scss">
.login-container{
  width: 100%;
  max-width: 1220px;
  height: 65vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>