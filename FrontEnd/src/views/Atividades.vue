<template>
  <div class="container">
    <div class="row">
      <div class="col-12" id="table">
        <b-table
          id="my-table"
          :items="atividades"
          :per-page="perPage"
          :current-page="currentPage"
          large
        ></b-table>
      </div>
    </div>
    <div id="paginaEBtn">
      <b-row>
        <b-form-input id="procurar" v-model="procurar"></b-form-input>    
      <!--update btn-->
        <router-link
        variant="success"
        to="/upAtividade"
        class="btn-update"
      >Update</router-link>
      <!--delete btn-->
        <b-button
          @click="deletar"
          class="btn-delete"
        >Delete</b-button>
      </b-row>

      <router-link
        id="novaAtividade"
        to="/cadastrarAtividade"
        class="btn-atividades"
      >Adicionar Atividades</router-link>
      <!-- Use emojis in props -->
      <b-pagination
        align="center"
        id="paginacao"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        first-text="⏮"
        prev-text="⏪"
        next-text="⏩"
        last-text="⏭"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      procurar: "",
      rows: "0",
      perPage: 3,
      currentPage: 1,
      atividades: [],
      segContador: 2,
      msgErro: "",
      tipoMsg: "success"

      //conteudo para o pagination
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "/atividades"
    }).then(resp => {
      this.contador(resp.data);
      this.atividades = resp.data;
    });
  },

  methods: {
    contagemRegressiva(contador) {
      this.contador = contador;
    },
    mostrarAlerta() {
      this.contador = this.segContador;
    },
    contador(array) {
      return (this.rows = array.length);
    },
    deletar(){
      axios({
        method: "delete",
        url: "/atividades",
        data:{
          escoteiros_id: localStorage.getItem("id"),
          id: this.procurar 
        }
      }).then(window.location.reload());
    },
    update(){}
  }
}
</script>

<style>
.btn-atividades {
  color: black;
  font-size: 18px;
  font-weight: 500;
  background-color: #feca08;
  border: 0;
  border-radius: 8px;
  padding: 0.5rem 1rem 0.5rem 1rem;
}

#table {
  padding: 0.5rem 0rem;
  padding-bottom: 60px;
}
#paginacao {
  padding: 20px;
  padding-top: 5%;
}

#paginaEBtn #procurar {
  width: 20%;
  height: 45px;
  text-align: left;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
}

.btn-delete{
  color: white;
  font-size: 18px;
  font-weight: 500;
  background-color: #ff0800;
  border: 0;
  border-radius: 8px;
  padding: 0.5rem 1rem 0.5rem 1rem;
}
.btn-update{
  color: white;
  font-size: 18px;
  font-weight: 500;
  background-color: #4d4dff;
  border: 0;
  border-radius: 8px;
  padding: 0.5rem 1rem 0.5rem 1rem;
}

h4 {
  margin: 2rem 0rem 1rem;
}
</style>
