<template>
    <div class="slide-principal">
        <VueSlickCarousel v-bind="settings">
            <div class="one">
                <b-container class="bv-example-row top">
                <div class="slide-principal--imagemAndText">
                    <img src="../assets/desenho-enfeite-up.png" alt="">
                    <h4>Celebração do casamento de</h4>
                    <h2>Jorge & Giovana</h2>
                    <img src="../assets/desenho-enfeite-bottom.png" alt="">
                </div>
                </b-container>
            </div>
                 
            <!-- <div class="two">
                <b-container class="bv-example-row top">
                <div class="slide-principal--imagemAndText">
                    <img src="../assets/desenho-enfeite-up.png" alt="">
                    <h4>Nós decidimos ser felizes juntos</h4>
                    <h2>Ela disse sim</h2>
                    <img src="../assets/desenho-enfeite-bottom.png" alt="">
                </div>
                </b-container>
            </div> -->
        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components: {VueSlickCarousel},
    data() {
      return {
        settings: {
            arrows: false,
            dots: false,
            fade: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        },
      }
    },
  }
</script>

<style scoped>
    .slide-principal {
        margin-top: 0px;
        z-index: -10;
    }
    .slide-principal--imagemAndText {
        padding: 250px 0;
    }
    .slide-principal--imagemAndText img {
        width: 280px;
        margin: 15px auto;
    }
    .slide-principal--imagemAndText h4 {
        font-size: clamp(1.8rem,2vw,6rem);
        font-weight: 300;
        color: white;
    }
    .slide-principal--imagemAndText h2 {
        font-size: clamp(4rem,8vw,8rem);
        color: white;
        font-weight: 100;
        margin: 0px;
    }
    .one {
        /*background-image: url('../assets/nossasfotos/EBM_1343FotografodeCasamento.jpg');*/
        background-image: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(../assets/nossas-fotos/EBM_1343FotografodeCasamento.jpg);
        background-size: cover;
        max-height: 850px;
        z-index: 100 !important;
    }
    @media(max-width:992px) {
        .one {
           background-image: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(../assets/nossas-fotos/EBM_1068FotografodeCasamento.jpg);
        }
        .slide-principal--imagemAndText {
            padding: 140px 0;
        }
    }

</style>