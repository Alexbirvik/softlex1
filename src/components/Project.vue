<template>
  <div>
    <div class="container">
      <div class="project" v-for="(project, index) in toPercent" :key="index">
        <div class="responsive">
          <img class="content shadow" v-bind:src="project.photo" />
          <div class="title content">{{ project.Title }}</div>
          <p class="content description">{{ project.Description }}</p>
          <div class="content sum">
            <div class="circle">
              <span class="percent">{{ project.percent }}</span>
            </div>
            <!-- sum numbers start -->
            <div class="sum-container space">
              <div>
                <span class="need">необходимо собрать</span>
              </div>
              <div>
                <span class="date collected"
                  >{{ project.SumCollected.toLocaleString("ru-RU") }}
                </span>
                <span class="date"
                  >из {{ project.Sum.toLocaleString("ru-RU") }} RUB
                </span>
              </div>
            </div>
            <!-- sum numbers end -->
            <!-- sum date start -->
            <div class="sum-container">
              <div>
                <span class="need">конец</span>
              </div>
              <div>
                <span class="date" v-if="tomorrow() == project.Date">{{
                  "завтра"
                }}</span>
                <span class="date" v-else>{{ project.Date }}</span>
              </div>
            </div>
            <!-- sum date end -->
          </div>
          <div class="tag-container">
            <div class="tags" v-for="tag in project.Tags" :key="tag">
              <span class="text">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div class="btn-all">
          <button class="hand">
            <img class="icon" src="../assets/hand.png" />
          </button>
        </div>
      </div>
    </div>
    <div class="btn-all">
      <div class="line"></div>
      <button class="see-all">Cмотреть все проекты</button>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Project",
  // data() {
  //   return {
  //     Sum: []
  //   };
  // },
  // mounted() {
  //   this.FETCH_PROJECTS().then(res => {
  //     if (res.projects) {
  //       console.log("Data is here!");
  //     }
  //   });
  // },
  methods: {
    ...mapActions(["FETCH_PROJECTS"]),
    tomorrow() {
      const date = this.$moment().add(1, "days");
      const tomorrow = date.format("DD.MM.YYYY");
      return tomorrow;
    }
  },
  computed: {
    ...mapState(["projects"]),
    toPercent() {
      return this.projects.map(item => {
        const percent = (item.SumCollected / item.Sum) * 100;
        return Object.assign({}, item, {
          percent: percent.toFixed(0) + "%"
        });
      });
    }
    // onResize() {
    //   this.screen.width = window.innerWidth;
    //   this.screen.height = window.innerHeight;
    //   this.$store.commit("screen", this.screen);
    //   this.$store.commit("isMobile", this.screen.width < 1024);
    //   return this.projects.slice(0, 2);
    // }
  },
  beforeMount() {
    this.FETCH_PROJECTS();
  }
  // mounted() {
  //   this.onResize();
  //   window.addEventListener("resize", this.onResize);
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  padding: 0 10%;
  margin-top: 40px;
  margin-left: -20px;
  display: flex;
  justify-content: space-between;
  & :hover {
    background-image: url(../assets/background1.png);
    border-radius: 0 0 10px 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right 0 top 31px;
  }
  & :hover .hand {
    display: flex;
    margin-bottom: -30px;
  }
  & .project {
    width: 360px;
    padding-left: 20px;
    & .content {
      width: 320px;
      margin-bottom: 20px;
    }
    & .shadow {
      box-shadow: 20px 31px 0px #f3f3f3;
      border-radius: 0 10px 10px 10px;
    }
    & .title {
      font-family: Rubik;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: #000000;
    }
    & .description {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 26px;
      color: #000000;
    }
    & .tag-container {
      display: flex;
      flex-wrap: wrap;
      & .tags {
        width: fit-content;
        background: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        & .text {
          font-family: Rubik;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          color: #7d7d7d;
          padding: 7px 10px;
          background: none;
        }
      }
    }
  }
}

.btn-all {
  display: flex;
  justify-content: center;
  align-items: center;
  & .see-all {
    margin: 76px 0 100px;
    width: 201px;
    height: 40px;
    background: #ffffff;
    box-shadow: 0px 10px 25px rgba(177, 155, 105, 0.3);
    border-radius: 40px;
    color: #b19b69;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  & .line {
    margin: 76px 10px 100px;
    width: 33%;
    height: 1px;
    background: #e5decc;
    align-self: center;
  }
  & .hand {
    background: linear-gradient(360deg, #005ef3 0%, #689ef4 100%);
    box-shadow: 0px 15px 25px rgba(0, 94, 243, 0.4);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    border: none;
    outline: none;
    margin-right: 20px;
    cursor: pointer;
    display: none;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    & .icon {
      width: 16px;
      background: none;
    }
  }
}

.sum {
  display: flex;
  text-align: center;
  align-items: center;
  & .circle {
    width: 40px;
    height: 40px;
    background: #ffffff;
    border: 3px solid #e0e0e0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .percent {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: 0.05em;
    color: #8dca78;
    background: none;
  }
  & .date {
    font-family: Rubik;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #7d7d7d;
  }
  & .collected {
    color: #8dca78;
  }
  & .sum-container {
    text-align: left;
    margin-left: 9px;
  }
  & .space {
    margin-right: 30px;
  }
  & .need {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.01em;
    color: #7d7d7d;
  }
}

@media screen and (max-width: 1224px) {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
    column-gap: 38px;
    margin-top: 20px;
    & :hover {
      background: none;
    }
    & :hover .hand {
      display: flex;
      margin-bottom: 0;
      background: linear-gradient(360deg, #005ef3 0%, #689ef4 100%);
      box-shadow: 0px 15px 25px rgba(0, 94, 243, 0.4);
    }
    & .project {
      margin: 20px;
      width: 325px;
      & .content {
        width: 285px;
      }
      & .responsive {
        width: 325px;
        background-image: url(../assets/background1.png);
        border-radius: 0 0 10px 10px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right 0 top 31px;
        padding-left: 20px;
        margin-right: 20px;
        padding-bottom: 40px;
        margin-left: -20px;
      }
    }
  }

  .btn-all {
    display: flex;
    justify-content: center;
    align-items: center;
    & .line {
      margin: 76px 10px 100px;
      width: 30%;
    }
    & .hand {
      display: flex;
      margin-top: -30px;
      margin-right: 0;
      margin-left: -20px;
    }
  }
}

@media screen and (max-width: 560px) {
  .container {
    padding: 0 5%;
    & .project {
      width: 320px;
      & .content {
        width: 280px;
        padding-left: 5px;
      }
    }
  }
  .btn-all {
    display: flex;
    justify-content: center;
    align-items: center;
    & .line {
      margin: 76px 0 100px;
    }
  }
}
</style>
