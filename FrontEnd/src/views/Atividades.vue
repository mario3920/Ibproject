<template>
  <div class="container">
    <b-alert
      id="alerta"
      :show="contador"
      v-bind:variant="tipoMsg"
      @dismissed="contador=0"
      @dismiss-count-down="contagemRegressiva"
    >
      <p>{{msgErro}}</p>
    </b-alert>
    <b-modal id="visualizar-1" title="Relogio">
      <b>Sobre a atividade:</b>
      <p>
        As matilhas/patrulhas/equipes ficam formadas em forma de cruz com um círculo no meio,
        o último integrante deve correr ao redor de todas as equipes passar por baixo das
        pernas dos demais integrantes da equipe e deverá pegar um objeto(lenço, chapéu, bola)
        que estará no centro do círculo
      </p>
    </b-modal>
    <b-modal id="visualizar-2" title="Revezamento de pernas">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-modal id="visualizar-3" title="Corrida de Nós">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <div class="row">
      <div class="col-12" id="table">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nome da atividade</th>
              <th scope="col">Ramo</th>
              <th scope="col">tempo médio</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Relogio</td>
              <td>Todos</td>
              <td>30 minutos</td>
              <td>
                <b-button v-b-modal.visualizar-1 variant="primary"></b-button>
                <b-button variant="success"></b-button>
                <b-button class="btn btn-danger"></b-button>
              </td>
            </tr>
            <tr>
              <td>Revezamento de pernas</td>
              <td>Sênior</td>
              <td>20 minutos</td>
              <td>
                <b-button variant="primary"></b-button>
                <b-button variant="success"></b-button>
                <b-button class="btn btn-danger"></b-button>
              </td>
            </tr>
            <tr>
              <td>Corrida de nós</td>
              <td>Escoteiro</td>
              <td>40 minutos</td>
              <td>
                <b-button v-b-modal.modal-1 variant="primary"></b-button>
                <b-button variant="success"></b-button>
                <b-button variant="danger"></b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <b-form-group>
      <b-button
        pill
        variant="primary"
        @click="atividades"
        class="btn-atividades"
      >Adicionar Atividades</b-button>

      <div class="overflow-auto">
        <!-- Use emojis in props -->
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          first-text="⏮"
          prev-text="⏪"
          next-text="⏩"
          last-text="⏭"
          class="mt-4"
        ></b-pagination>
      </div>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      segContador: 2,
      contador: 0,
      msgErro: "",
      tipoMsg: "success",
      
      //conteudo para o pagination
      rows: 100,
      perPage: 10,
      currentPage: 5
    };
  },

  methods: {
    contagemRegressiva(contador) {
      this.contador = contador;
    },
    mostrarAlerta() {
      this.contador = this.segContador;
    },
    atividades() {
      this.msgErro = "Criar uma nova atividade foi pressionado";
      this.mostrarAlerta();
    }
  }
};
</script>

<style>
.btn-atividades {
  width: 30%;
  height: 45px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
}

#table {
  padding: 3rem 0rem;
  padding-bottom: 10%;
}

h4 {
  margin: 2rem 0rem 1rem;
}
</style>