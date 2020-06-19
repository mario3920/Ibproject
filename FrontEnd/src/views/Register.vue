<template>
  <b-container fluid="true" id="loginContainer">
    <b-alert
      :show="contador"
      :variant="tipoMsg"
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
          <b-form-group label-cols="4" label="Nome:" label-for="nome" class="txtLogin">
            <b-form-input class id="nome" v-model="nome"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="4" label="Email:" label-for="email" class="txtLogin">
            <b-form-input class id="email" v-model="email"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="4" label="Confirmar email:" label-for="confEmail" class="txtLogin"
          >
            <b-form-input class id="confEmail" v-model="confEmail"></b-form-input>
          </b-form-group>

          <!-- password input space -->
          <b-form-group label-cols="4" label="Senha:" label-for="Password" class="txtLogin">
            <b-form-input type="password" id="Pass" v-model="senha"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="4" label="Confirmar senha:" label-for="confPassword" class="txtLogin"
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
import axios from "axios";
export default {
  data() {
    return {
      segContador: 2,
      contador: 0,
      nome: "",
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
    },

    mostrarAlerta() {
      this.contador = this.segContador;
    },

    cadastro() {
      if(this.nome == ""){
        this.msgErro = "Nome em branco!";
        this.mostrarAlerta();
      }else if ( this.email == "" || this.confEmail == "" || this.email != this.confEmail) {
        this.msgErro = "email não autenticado";
        this.mostrarAlerta();
      } else if ( this.senha == "" || this.confSenha == "" || this.senha != this.confSenha) {
        this.msgErro = "senha não autenticada";
        this.mostrarAlerta();
      } else {
        axios({
          method: "post",
          url: "/escoteiros",
          data: {
            nome: this.nome,
            email: this.email,
            senha: this.senha
          }
        }).then(resp => {          
            if(resp.data == 409){
              this.msgErro = "Email já existente!"
              this.mostrarAlerta()
            }else{
              localStorage.setItem("nome", this.nome);
              this.$router.replace("/")
              localStorage.setItem("id", resp.data.id);
              window.location.reload()
            }
          });
      }
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