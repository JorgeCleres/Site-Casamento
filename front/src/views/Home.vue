<template>
    <div>
        <Popup />
        <!-- <Music /> -->
        <NavBar 
            colorBack = 'transparent'
            shadowDisabled = '0px 0px 0px 0px black'
            shadowActivated = '0px 0px 1px 0px black'
            fontDisabled = 'white'
            fontActivated = 'black'
            logoActivated = 'jorge-giovana-black.png'
            logoDisable = 'jorge-giovana-white.png'
            colorNavDisable = '#fff'
            colorNavActivated = '#000'
            logoAlternative = 'jorge-giovana-white.png'
        />
        <SlidePrincipal2 />
        <Contador />
        <Imagem />
        <ImagemBackground />
        <History />
        <Fotos />
        <CardPadMad />
        <div id="fundo">
            <div id="together">
                <Questions />
                <ComoChegar />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Music from '@/components/Music.vue'
import Popup from '@/components/popup.vue'
import NavBar from '@/components/Navbar.vue'
import SlidePrincipal2 from '@/components/SlidePrincipal2.vue'
import Contador from '../components/Contador.vue'
import Imagem from '../components/About.vue'
import ImagemBackground from '../components/ImagemBackground.vue'
import History from '../components/History.vue'
import Fotos from '../components/Fotos.vue'
import CardPadMad from '@/components/CardPadMad.vue'
import Questions from '@/components/Questions.vue'
import ComoChegar from '@/components/ComoChegar.vue'
import Footer from '@/components/Footer.vue'


export default {
    components: {
        Popup,
        NavBar,
        SlidePrincipal2,
        Contador,
        Imagem,
        ImagemBackground,
        History,
        Fotos,
        CardPadMad,
        Questions,
        ComoChegar,
        Footer,
        Music
    }
}
</script>

<style scoped>
    #fundo {
        background-image: url('../assets/background_14.jpg');
        background-size: cover;
    }
    #together {
        display: flex;
        padding: 50px;
        height: 800px;
    }
    #together .accordion {
        width: 50%;
    }

    @media(max-width:992px) {
        #together {
            display: grid !important;
            padding: 0px;
            height: 550px;
        }
        #together .accordion {
            width: 100%;
        }
    }
</style>