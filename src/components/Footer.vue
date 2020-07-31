<template>
  <div class="footer">
    <div class="title">
      <div class="dot"></div>
      <div class="text">о пожертвованиях</div>
    </div>
    <div class="container">
      <ul class="list">
        <li>Садака</li>
        <li>Закят</li>
        <ul class="gradient">
          <li>Фитр</li>
          <li>Садака</li>
          <li>Фитр</li>
        </ul>
      </ul>

      <div class="wrapper">
        <p class="description">
          один из пяти столпов ислама, обязательный ежегодный налог в исламском
          праве, выплачиваемый с различного вида доходов и имущества (движимого
          и недвижимого) всеми самостоятельными, свободными, дееспособными и
          взрослыми мусульманами в пользу нуждающихся единоверцев. Согласно
          шариату, его выплата означает, что полученные доходы и нажитое
          богатство не являются греховными. Точные размеры закята, как и то на
          какие виды собственности он распространяется, являются предметом
          дискуссий среди знатоков мусульманского права
        </p>
        <button class="btn">
          <div class="heart">
            рассчитать
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  background-color: #005ef3;
  display: flex;
  flex-direction: column;
  padding: 5% 10% 0;
}

.container {
  display: flex;
}

.title {
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
  margin: 0;
  padding: 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
}

.list {
  margin-right: 10%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 60px;
  letter-spacing: -0.01em;
  color: #ffffff;
  & li {
    margin-bottom: 20px;
  }
  & li:last-child {
    margin-bottom: 0;
  }
  & li:first-child {
    color: #4c8ef7;
  }
  & .gradient {
    background: -webkit-linear-gradient(90deg, rgba(0, 94, 243, 0.3), #4c8ef7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.wrapper {
  justify-self: flex-start;
  margin: 40px;
  & .btn {
    width: 198px;
    height: 80px;
    margin-top: 40px;
    margin-bottom: 80px;
    background: linear-gradient(180deg, #e3d1a0 0.52%, #a79156 100%);
    border-radius: 10px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    outline: none;
    border: none;
    cursor: pointer;
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);
  }
}

.description {
  width: 100%;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
}

@media screen and (max-width: 768px) {
  .footer {
    padding: 40px;
  }
  .container {
    width: 100%;
    flex-direction: column;
  }
  .list {
    display: inline-flex;
  }
  .description {
    width: 100%;
  }
  .wrapper {
    margin: 0;
    padding: 0;
  }
  .list {
    margin-right: 0%;
    display: flex;
    justify-content: space-between;
    & li {
      margin-bottom: 0;
    }
  }
  .gradient {
    & li {
      background: -webkit-linear-gradient(
        180deg,
        rgba(0, 94, 243, 0.3),
        #4c8ef7
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    & li:nth-child(n + 2) {
      display: none;
    }
  }
}

@media screen and (max-width: 560px) {
  .footer {
    padding: 5% 5% 0;
  }
  .text {
    font-size: 10px;
    line-height: 20px;
  }
  .list {
    display: inline-flex;
    font-size: 30px;
    line-height: 35px;
  }
  .description {
    width: 100%;
    font-size: 14px;
    line-height: 24px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    & .btn {
      width: 268px;
      height: 60px;
      margin-bottom: 60px;
      & .heart {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-image: url(../assets/heart.png);
        background-repeat: no-repeat;
        background-size: 92px;
        background-position-x: center;
      }
    }
  }
}
</style>
