<template>
  <div class="hero">
    <div class="container">
      <!-- <div class="video-reel">
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/261170910" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </div> -->
      <VideoPlayer
        link="https://player.vimeo.com/video/559327994"
        image="https://ik.imagekit.io/alexborecky/Nelisa/Screenshot_2021-06-16_at_10.00.44-min_gOm7HWmJD.png"
       class="home" />
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

.container {
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .player {
    margin-top: 40px;
    height: 100%;
    .start-video {
      height: 100%;
    }
  }
}

</style>
