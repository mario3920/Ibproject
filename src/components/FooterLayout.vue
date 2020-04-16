<template>
    <b-card-footer id="rodape">
        <b-row >
            <b-col sm="6" align-self="center">
                <div id="GeInfo">
                    <img src="../assets/logoGE.jpg" alt=""/>
                    <span id="nomeGE">
                        6º Grupo Escoteiro Santos Dumont
                    </span>
                </div>
            </b-col>

            <b-col sm="6" align-self="center">
                <div id="devInfo">
                    <span>Criadores: Mario Massari</span>
                </div>
            </b-col>
        </b-row>
    </b-card-footer>
</template>

<script>
export default {

}
</script>

<style>
#rodape {
    border-top: 5px solid #feca08;
    background-color:#1e2a78;
    color: #FFF;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;

    
}

img {
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 5px;
}
</style>