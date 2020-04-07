<template>
  <footer>
      <div id="GeInfo">
          <img src="../assets/logoGE.jpg" alt=""/>
          <span id="nomeGE">
              6º Grupo Escoteiro Santos Dumont
          </span>
      </div>
      <div id="devInfo">
          <span>Criadores: Mario Massari</span>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
    display: inline-flex;
    align-items: baseline;
    height: 100%;
    border-top: 1em solid #feca08;
    text-align: center;
    background-color:#1e2a78;
    color: #FFF;
    
}

img {
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 5px;
}

#devInfo{
    width: 50%;
    text-align: right;
    margin: 10px;
}

#GeInfo {
    width: 50%;
    text-align: left;
}
</style>