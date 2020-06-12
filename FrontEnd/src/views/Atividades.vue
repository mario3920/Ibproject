<template>
  <div class="container">
      <b-modal id="visualizar-1" title="Relogio">
    <b>Sobre a atividade: </b>
    <p>As matilhas/patrulhas/equipes ficam formadas em forma de cruz com um círculo no meio,
         o último integrante deve correr ao redor de todas as equipes passar por baixo das 
         pernas dos demais integrantes da equipe e deverá pegar um objeto(lenço, chapéu, bola)
          que estará no centro do círculo</p>
  </b-modal>
      <b-modal id="visualizar-2" title="Corrida de Nós">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
      <b-modal id="visualizar-3" title="Corrida de Nós">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
  <div class="row">
    <div class="col-12">
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
</div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  padding: 3rem 0rem;
}

h4 {
  margin: 2rem 0rem 1rem;
}

</style>