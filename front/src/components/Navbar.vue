<template>
    <b-navbar toggleable="lg" type="dark" :class="this.scroll ? 'ativado' : 'desativado'" :style="cssVars">
        <b-container>
            <b-navbar-brand to="/">
                <img v-if="this.scroll" :src="require(`../assets/${logoActivated}`)" alt="jorge e giovana">
                <img v-else :src="require(`../assets/${logoDisable}`)" alt="jorge e giovana">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-right">
                    <b-nav-item to="/home">Inicio </b-nav-item>
                    <b-nav-item to="/presentes">Presentes </b-nav-item>
                    <b-nav-item to="/confirmar">Confirmar Presença </b-nav-item>
                    <b-nav-item to="/message">Mensagem</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
    export default {
    props: [
        'colorBack', 
        'shadowDisabled', 
        'fontDisabled', 
        'fontActivated', 
        'logoActivated', 
        'logoDisable', 
        'shadowActivated', 
        'colorNavDisable', 
        'colorNavActivated',
        'logoAlternative'
    ],
    data() {
        return {
            scroll: false,
        }
    },
    computed: {
        cssVars() {
            return {
                '--colorBack': this.colorBack,
                '--shadowDisabled': this.shadowDisabled,
                '--shadowActivated': this.shadowActivated,
                '--fontDisabled': this.fontDisabled,
                '--fontActivated': this.fontActivated,
                '--colorNavDisable': this.colorNavDisable,
                '--colorNavActivated': this.colorNavActivated
            }
        }
    },
    methods: {
        handleScroll () {
            if(window.scrollY > 50) {
                this.scroll = true
                if(window.screen.width < 992) {
                    this.logoDisable = this.logoAlternative
                }
            } else {
                this.scroll = false
            }
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
    .navbar-dark .navbar-toggler {
        color: var(--colorNavDisable);
        border-color: var(--colorNavDisable);
    }
    .ativado .navbar-toggler {
        color: var(--colorNavActivated);
        border-color: var(--colorNavActivated);
    }
    #nav a.router-link-exact-active {
        color: #42b983;
        font-weight: 700;
    }
    .ativado {
        background: white;
        transition: 0.9s !important;
        box-shadow: var(--shadowActivated)
    }
    .ativado a {
        color: var(--fontActivated) !important;
        font-weight: 400 !important;
    }
    .desativado {
        background: var(--colorBack);
        transition: 0.9s !important;
        box-shadow: var(--shadowDisabled)
    }
    .desativado a {
        color: var(--fontDisabled) !important;
        font-weight: 200 !important;
    }
    .desativado .navbar-dark .navbar-nav .nav-link {
        color: var(--fontDisabled) !important;
        font-weight: 400;
    }
    #nav {
        z-index: 1000;
        position: fixed;
    }
    .navbar-expand-lg .navbar-collapse {
        justify-content: end;
    }
    .navbar {
        z-index: 1000;
        border-bottom: 0.1px solid #ffffff73;
        position: fixed;
        width: 100%;
    }
    img {
        width: 40%;
    }
    .navbar-dark .navbar-nav .nav-link {
        color: rgba(255, 255, 255, 0.55);
        font-size: 17px;
        font-weight: 300;
        letter-spacing: 1px;
        font-variant: all-small-caps;
        transition: 0.2s;
    }
    a.nav-link:hover {
        font-weight: 400 !important;
        color: #71a077 !important;
    }

    @media(max-width:992px) {
        img {
            position: relative;
            right: 20%;
        }
        a.nav-link {
            text-align: initial;
            margin: 10px 30px;
        }
        .desativado {
            background: #c58e8e;
            transition: 0.9s !important;
            box-shadow: var(--shadowDisabled)
        }
        .navbar {
            z-index: 1000;
            position: initial !important;
        }
        .desativado a {
            color: white !important;
        }
    }
</style>