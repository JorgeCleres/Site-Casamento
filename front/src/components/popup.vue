<template>
  <div>
    <b-modal ref="my-modal" hide-footer>
      <div class="d-block text-center">
        <h4>Nós estamos usando nossas fotos antigas ainda, Volte após o dia 01/04 para ver as fotos do nosso Pré-Wedding</h4>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            qtdAtivated: 0
        }
    },
    mounted() {
        if(localStorage.getItem('qtdativacao') == 0 || localStorage.getItem('qtdativacao') < 0)  {
            this.showModal()
            localStorage.setItem('qtdativacao', 1)
        }
    },
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
    }
  }
</script>