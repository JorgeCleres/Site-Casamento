<template>
    <div class="imagem-background">
        <b-container class="bv-example-row">
            <div class="imagem-background--box" data-aos="fade-up" data-aos-duration="1000">
                <!-- <h2 data-aos="fade-up" data-aos-duration="1000">Um pouco da nossa história</h2> -->
                <h2 data-aos="fade-up" data-aos-duration="1000">UM POUCO DA NOSSA HISTÓRIA</h2>
                <p data-aos="fade-up" data-aos-duration="2000">Nossa história começou no final de 2018, nos conhecemos na empresa em que trabalhávamos juntos, estaremos mentindo se a gente dissesse que foi amor à primeira vista, mas a segunda vista com certeza foi. Eu (Giovana) que tomei a iniciativa, chamei o Jorge pra sair e no começo ele ficou receoso de se relacionar com alguém do trabalho, mas seu charme não durou muito. Nosso primeiro encontro foi um encontro de almas que já estavam destinadas a estar juntas. Nós conversamos tanto no nosso primeiro encontro que faltou tempo, como se a gente já se conhecesse e tivesse ficado anos sem nos falar, falando até das coisas mais íntimas e profundas, depois disso não nos desgrudamos mais e até hoje não falta assunto. Tudo foi tão verdadeiro e leve desde o início, fluiu naturalmente. Colocamos o nosso amor e o amor de Deus a frente de tudo e arriscamos, já fazem mais de 3 anos que nossa história permanece forte, doida, alegre e cheia de capítulos. Nosso casamento é um dos capítulos mais esperado e mais importante para nós e agora você faz parte disso também!</p>
            </div>
        </b-container>
    </div>
</template>

<style scoped>
    .imagem-background {
        background-image: url('../assets/IMG-20191110-WA0006.jpg');
        background-size: cover;
        /* background-attachment: fixed; */
        padding: 80px 0;
    }
    .imagem-background--box {
       background: #ffffffb8;
        margin: 20px auto;
        padding: 50px;
        width: 60%;
        position: relative;
        right: 25%;
    }
    .imagem-background h2 {
        font-size: clamp(1.8rem, 2.1vw, 3rem);
        color: #000000;
        font-weight: 200 !important;
        margin-bottom: 20px;
    }
    .imagem-background p {
        font-weight: 300;
        color: #000000;
        font-size: 20px;
    }

    @media(max-width:992px) {
        .imagem-background {
            background-size: cover;
            background-attachment: fixed;
            padding: 20px 0;
        }
        .imagem-background--box {
            background: white;
            margin: 60px auto;
            padding: 30px;
            width: 100%;
            position: relative;
            right: 0%;
        }
        .imagem-background p[data-v-80d39520] {
            font-size: 18px;
        }
    }
</style>