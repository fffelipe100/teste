<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 p-2">
        <h2 class="text-dark text-left font-weight-bold">SYSTEM TOP</h2>
      </div>
      <div class="col-9 p-2 text-left form-inline">
        <div class="form-group">
          <span>
            Busca pela descrição:
            <input type="text" class="form-control" />
          </span>
        </div>
        <div class="form-group ml-4">
          <label for="palavrasnegadas">Palavras negadas:</label>
          <input type="text" class="form-control" id="palavrasnegadas" />
        </div>
        <div class="form-group ml-4">
          <button class="btn btn-dark">BUSCAR</button>
        </div>
      </div>
      <div class="col-1 p-2">
        <button class="btn btn-outline-dark">Voltar</button>
      </div>
      <div class="col-1 p-2">
        <button class="btn btn-outline-dark">Avançar</button><br/>
      </div>  
    </div>
    <div class="row mt-3 table-responsive">
      <table class="col-12 table table-striped">
        <thead class="bg-dark text-white">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Variação</th>
            <th scope="col">Descrição</th>
            <th scope="col">Preço Atual</th>
            <th scope="col">Preço Anterior</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(id,idx) in data_dash.listing" :key="idx">
            <th scope="row">{{id._id}}</th>
            <td>{{id.absolute_variation}}</td>
            <td>{{id.description}}</td>
            <td>{{id.price_after}}</td>
            <td>{{id.price_before}}</td>
            <td>
              <a :href="id.url_store" target="_blank">{{id.url_store}}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      data_dash: null
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$store.dispatch("getDash").then(response => {
        this.data_dash = response.data;
      });
    }
  }
};
</script>
