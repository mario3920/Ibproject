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

      <b-col sm="6" align-self="center">
        <b-form-group class="geral">
          <!-- user input space -->
          <b-form-group label-cols="4" label="Nome :" label-for="titulo" class="txt">
            <b-form-input class id="titulo" v-model="titulo"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="4" label="Tempo :" label-for="email" class="txt">
            <b-form-input class id="tempo" v-model="tempo"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="4" label="Ramo :" label-for="confEmail" class="txt">
            <b-form-input class id="ramo" v-model="ramo"></b-form-input>
          </b-form-group>

          <b-form-group label-cols="4" label="Descrição :" label-for="descricao" class="txt">
            <b-form-input class id="descricao" v-model="descricao"></b-form-input>
          </b-form-group>

          <b-button
            pill
            variant="primary"
            id="btnCAtividade"
            @click="cadastroAtividade"
            class="button-login"
            >atualizar dados</b-button>

          <b-form-group Label-cols="4" class="voltar">
            <router-link id="voltar" to="/atividades" class="btn-VAtividade">voltar</router-link>
          </b-form-group>
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
      id: localStorage.getItem("id"),
      segContador: 2,
      contador: 0,
      titulo: "",
      tempo: "",
      ramo: "",
      descricao: "",
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
    cadastroAtividade() {
      if (localStorage.getItem("id") == null) {
        this.msgErro = "usuário não logado!";
        this.mostrarAlerta()
      } else if (this.titulo == "") {
        this.msgErro = "Nome em branco!";
        this.mostrarAlerta();
      } else if (this.descricao == "") {
        this.msgErro = "Descrição em branco!";
        this.mostrarAlerta();
      } else {
        axios({
          method: "post",
          url: "/atividades",
          data: {
            escoteiros_id: this.id,
            title: this.titulo,
            ramo: this.ramo,
            tempo: this.tempo,
            description: this.descricao
          }
        }).then(this.$router.replace("/atividades"), window.location.reload());
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
.txt {
  font-size: 20px;
  font-weight: 700;
}
.voltar {
  padding-top: 5%;
  padding-left: 14%;
}
.geral {
  padding-top: 6%;
}
</style>