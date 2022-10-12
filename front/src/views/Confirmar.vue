<template>
    <div>
        <NavBar 
            colorBack = 'white'
            shadowDisabled = '0px 0px 15px -5px black'
            shadowActivated = '0px 0px 1px 0px black'
            fontDisabled = 'black'
            fontActivated = 'black'
            logoActivated = 'jorge-giovana-black.png'
            logoDisable = 'jorge-giovana-black.png'
            colorNavDisable = '#fff'
            colorNavActivated = '#000'
            logoAlternative = 'jorge-giovana-white.png'
        />
        <Confirmar />
        <Footer />
    </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import Confirmar from '../components/ConfirmarPresenca/Confirmar.vue'
import Footer from '../components/Footer.vue'
    export default {
        data() {
            return {}
        },
        components: {
            NavBar,
            Confirmar,
            Footer
        },
    }
</script>

<style scoped>
</style>