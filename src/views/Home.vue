<template>
  <div class="app">
    <div class="half">
      <h1>United States dollar</h1>
      <form @submit="convert">
        <p class="number">
          1249 <span class="symbol">$</span>
        </p>
      </form>
    </div>
    <div class="half">
      <h1>United States dollar</h1>
      <form @submit="convert">
        <p class="number">
          1249 <span class="symbol">$</span>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    convert() {
      console.log("fuck")
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/variables";
.half {
    height: 50%;
    text-align: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    &:nth-child(2) {
        background-color: $main-color;
        color: #ffffff;
    }
    .number {
        justify-content: center;
        display: flex;
        font-size: 5em;
        margin: 20px 0;
        .symbol {
            font-size: 0.3em;
            opacity: 0.8;
            align-self: flex-end;
        }
    }
}
</style>
