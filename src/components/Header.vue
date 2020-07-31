<template>
  <div class="container">
    <div class="dot"></div>
    <div class="text">проекты, которым необходимо помочь</div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  padding: 0 10%;
  display: flex;
  justify-content: left;
  align-items: baseline;
}

.dot {
  background: #f64d40;
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
  margin-right: 20px;
}

.text {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

@media screen and (max-width: 560px) {
  .container {
    padding: 0 5%;
  }
  .text {
    font-size: 10px;
    line-height: 20px;
  }
}
</style>
