<template>
    <div class="hero about">
        <img src="https://ik.imagekit.io/alexborecky/Nelisa/PHOTOOFME-min_1-min_ypZDj8WlF.jpg" alt="">
        <div class="container">
            <div class="text">
                <h1 class="bigger">nelisa alcalde</h1>
                <p>Nelisa Alcalde is a cinematographer born in Spain. She has been developing her cinematography skills around the world in schools such us EICTV in Cuba and Universidad del Cine in Argentina. <br> <br> She holds a BA in TV and Filmmaking from the Edinburgh University and a MFA in Cinematography from FAMU. <br> <br> Her last film “Persephone”, directed by Dora Šustić, won the best student cinematography at the European and New York monthly awards 2020. “Persephone” also won the best student film in Moscow Shorts 2019 and Continental film festival 2020. <br> <br> Nelisa is currently shooting and co-directing a feature documentary “Isabel’s Independence”, funded by BBC Scotland and the Scottish Documentary Institute. <br> <br> Nelisa is mainly based in UK but free and happy to work around the globe!</p>
                <ul>
                    <h2>Equipment list</h2>
                    <li><p>1 x brain ( different setting depending on the project)</p></li>
                    <li><p>2 x eyes (observing every details)</p></li>
                    <li><p>2 x hands (smaller but usable)</p></li>
                    <li><p>2 x legs  (not very high but strong)</p></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.about {
    .text {
        text-align: left;
        margin-top: 20%;
        h1 {
            text-align: left !important;
            margin: 40px 0;
            font-size: 120px;
            @media (max-width: 450px) {
                font-size: 40px;
            }
        }
        p {
            max-width: 700px;
        }
        ul {
            margin-top: 80px;
            h2 {
                margin: 16px 0;
            }
            li {
                margin-left: 24px;
            }
        }
    }
    img {
        position: fixed;
        height: 100vh;
        top: 0;
        z-index: -100;
        right: 0;
        @media (max-width: 450px) {
            opacity: .4;
            right: -120px;
        }
    }
    padding-bottom: 80px;
}

</style>