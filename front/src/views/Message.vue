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
        <Message />
        <Footer />
    </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import Capa from '../components/Capa.vue'
import Message from '../components/Message/Message.vue'
import Footer from '../components/Footer.vue'
    export default {
        data() {
            return {}
        },
        components: {
            NavBar,
            Message,
            Footer
        },
    }
</script>

<style scoped>
</style>