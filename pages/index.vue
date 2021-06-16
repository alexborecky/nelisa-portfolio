<template>
  <div class="hero">
    <div class="container">
      <!-- <div class="video-reel">
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/261170910" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </div> -->
      <VideoPlayer
        link="https://player.vimeo.com/video/505660704"
        image="https://ik.imagekit.io/alexborecky/Films/empty_06Vxy1Y6H8Ve.jpg"
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
