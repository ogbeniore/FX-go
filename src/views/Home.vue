<template>
  <div class="app">
    <div class="overlay" :class="{ flex: showOverlay }" @click="toggleOverlay">
      <div class="currencies">
        <ul>
          <li v-for="currency in currencies" :key="currency.id">
            <label>
              <input v-if="to" type="radio" name="currency.currencyName" id="currency.id" v-model="toCurrency" v-bind:value="currency" @change="toggleOverlay">
              <input v-else type="radio" name="currency.currencyName" id="currency.id" v-model="fromCurrency" v-bind:value="currency" @change="toggleOverlay">
              <span class="text">{{currency.id}}: {{currency.currencyName}}</span>
              <div class="check"></div>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <div class="half">
      <h1 @click="toggleFromOverlay">{{fromCurrency.currencyName}}</h1>
      <form @submit="convert">
        <p class="number">
          1249 <span class="symbol">{{fromCurrency.currencySymbol}}</span>
        </p>
      </form>
      <p class="shortname">{{fromCurrency.id}}</p>
    </div>
    <div class="half">
      <p class="shortname">{{toCurrency.id}}</p>
      <form @submit="convert">
        <p class="number">
          1249 <span class="symbol">{{toCurrency.currencySymbol}}</span>
        </p>
      </form>
      <h1 @click="toggleToOverlay(!from)">{{toCurrency.currencyName}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      currencies: [],
      toCurrency: {
        id: "USD",
        currencyName: "United States Dollar",
        currencySymbol: "$"
      },
      fromCurrency: {
        id: "NGN",
        currencyName: "Nigerian Naira",
        currencySymbol: "₦"
      },
      toConvert: 0,
      converted: 0,
      showOverlay: false,
      to: false
    }

  },
  methods: {
    convert() {
      console.log("fuck")
    },
    toggleOverlay() {
      this.showOverlay = !this.showOverlay
    },
    toggleFromOverlay() {
      this.to = false;
      this.showOverlay = !this.showOverlay
    },
    toggleToOverlay() {
      this.to = true;
      this.showOverlay = !this.showOverlay
    }
  },
  mounted() {
    this.$axios
    .get("https://free.currencyconverterapi.com/api/v5/currencies")
    .then(response => {
      this.currencies = response.data.results
    }).catch(error => {
      console.log(error)
    })
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
    &:last-child {
        background-color: $main-color;
        color: #ffffff;
    }
    .number {
        justify-content: center;
        display: flex;
        font-size: 5em;
        margin: 0;
        .symbol {
            font-size: 0.3em;
            align-self: flex-end;
        }
    }
    .shortname {
        font-size: 2em;
    }
}
.overlay {
    &.flex {
        display: flex;
    }
    position: absolute;
    background-color: rgba(0, 0, 0, 0.624);
    text-align: left;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    top: 0;
    display: none;
    .currencies {
        .navbar_toggle.open {
            span {
                background: $main-color;
            }
        }
        margin: auto;
        background-color: #ffffff;
        overflow: scroll;
        height: calc(100vh - 100px);
        ul {
            list-style: none;
            padding: 1em;
            li {
                padding: 0.5em 1em;
                font-size: 1.3em;
                label {
                    display: flex;
                    align-content: center;
                    flex-direction: row-reverse;
                    justify-content: flex-end;
                    .text {
                        margin-left: 10px;
                    }
                }
                label .check {
                    max-width: 12px;
                    max-height: 12px;
                    min-width: 12px;
                    min-height: 12px;
                    border: 4px solid $main-color;
                    border-radius: 50%;
                }
                input[type="radio"] {
                    position: absolute;
                    visibility: hidden;
                }
                input[type="radio"]:checked ~ .check {
                    background: $main-color;
                }
            }
        }
    }
}
</style>
