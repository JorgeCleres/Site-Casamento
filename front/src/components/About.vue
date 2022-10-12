<template>
    <div class="imagem">
        <b-container>
            <div class="names" data-aos="fade-up" data-aos-duration="3000">
                <h2>SEJAM BEM-VINDOS AO NOSSO SITE!</h2>
                <h4>A Melhor forma de compartilhar esse momento com vocês é vivendo juntos esse sonho!</h4>
                <!-- <img src="../assets/hr-desenho.png"> -->
            </div>

            <div class="imagem__personas">
                <div class="imagem__personas--unit" data-aos="fade-right" data-aos-duration="2000">
                    <img src="../assets/jorge.png" alt="">
                    <h3>Jorge Willian</h3>
                </div>

                <img class="heart" src="../assets/Component8.png" >

                <div class="imagem__personas--unit" data-aos="fade-left" data-aos-duration="2000">
                    <img src="../assets/giovana.png" alt="">
                    <h3>Giovana Veiga
                    </h3>
                </div>
            </div>

        </b-container>
    </div>
</template>

<style scoped>
    .imagem{
        background: whitesmoke;
    }
    .imagem {
        padding: 180px 0 150px;
        display: flex;
        justify-content: space-evenly;
    }
    .heart {
        margin-top: 5%;
        width: 15%;
        height: 100%;
    }
    .imagem__personas {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .imagem__personas--unit {
        width: 40%;
    }
    .imagem__personas--unit h3 {
        font-weight: 200 !important;
        font-size: 38px;
        font-size: clamp(1.8rem, 2vw, 3rem);
        margin-top: 15px;
        color: #5a5a5a;
    }
    .names {
        display: grid
    }
    .names h2 {
        font-weight: 200 !important;
        font-size: clamp(2rem, 2.5vw, 3.5rem);
        color: #5a5a5a;
    }
    .names h4 {
        font-size: clamp(1.3rem, 1.5vw, 2rem);
        font-weight: 200 !important;
        color: #5a5a5a;
        margin: 10px auto 75px;
    }
    .names img {
        margin: 10px auto 35px;
    }
    .heart {
        animation: heart 0.9s infinite;
        margin: 0 auto;
        display: table;
        margin-top: 50px;
        animation-direction: alternate;
        -webkit-animation-name: heart;
        animation-name: heart;
    }

    @-webkit-keyframes heart {
        0% {
            -webkit-transform: scale(1);
            -webkit-filter: brightness(100%);
        }
        100% {
            -webkit-transform: scale(1.1);
            
        }
    }
    @keyframes heart {
        0% {
            transform: scale(1);
            filter: brightness(100%);
        }
        100% {
            transform: scale(1.1);
            
        }
    }

    @media(max-width:992px) {
        .imagem[data-v-c226fde6] {
            padding: 30px 0 150px;
        }
        .imagem__personas {
            width: 100%;
            display: grid;
            justify-content: center;
        }
        .imagem__personas--unit.aos-init.aos-animate {
            width: 100%;
            margin: 10px auto 30px;
        }
        .heart {
            margin: 10px auto;
            width: 60%;
            padding: 40px;
            height: 80%;
        }
        .imagem__personas--unit img {
            width: 90%;
        }

    }
</style>