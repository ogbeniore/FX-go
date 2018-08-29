<template>
  <div class="app">
    <div class="overlay" :class="{ flex: showOverlay }" @click="toggleOverlay">
      <div class="currencies">
        <ul>
          <li v-for="currency in currencies" :key="currency.id">
            <label>
              <input v-if="to" type="radio" :name="currency.currencyName" :id="currency.id" v-model="toCurrency" v-bind:value="currency" @change="toggleOverlay">
              <input v-else type="radio" :name="currency.currencyName" :id="currency.id" v-model="fromCurrency" v-bind:value="currency" @change="toggleOverlay">
              <span class="text">{{currency.id}}: {{currency.currencyName}}</span>
              <div class="check"></div>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <div class="half">
      <h1 @click="toggleFromOverlay">{{fromCurrency.currencyName}}</h1>
      <!-- <form @submit="convert"> -->
        <p class="number" v-show="!showFromInput">
          <span class="amount" @click="editToConvert">
            {{toConvert}}
          </span>
          <span class="symbol" @click="toggleFromOverlay">{{fromCurrency.currencySymbol}}</span>
        </p>
        <input v-todo-focus="toConvert == editedToConvert" class="edit" type="number" v-show="showFromInput" v-model="editedToConvert" @blur="doneEditToConvert" @keyup.enter="doneEditToConvert" @keyup.esc="cancelEditToConvert">
      <!-- </form> -->
      <p class="shortname" @click="toggleFromOverlay">{{fromCurrency.id}}</p>
    </div>
    <div class="half">
      <p class="shortname" @click="toggleToOverlay">{{toCurrency.id}}</p>
      <form @submit="convert">
        <p class="number">
          1249 <span class="symbol" @click="toggleToOverlay">{{toCurrency.currencySymbol}}</span>
        </p>
      </form>
      <h1 @click="toggleToOverlay">{{toCurrency.currencyName}}</h1>
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
      toConvert: 1,
      converted: 0,
      showOverlay: false,
      to: false,
       beforeEditCache: 0,
       editedToConvert: 0,
       showFromInput: false
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
    },
    editToConvert() {
      this.beforeEditCache = this.toConvert;
      this.editedToConvert = this.toConvert;
      this.showFromInput = true;
    },
    doneEditToConvert() {
      if (this.editedToConvert) {
        this.toConvert = this.editedToConvert
      this.showFromInput = false;

        return
      }
      this.showFromInput = false;

      this.editedToConvert = null
    },
    cancelEditToConvert() {
      this.editedToConvert = null
      this.showFromInput = false;
      this.toConvert = this.beforeEditCache
    },
  },
  mounted() {
    this.$axios
    .get("https://free.currencyconverterapi.com/api/v5/currencies")
    .then(response => {
      this.currencies = response.data.results.sort()
    }).catch(error => {
      console.log(error)
    })
  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
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
.edit {
    border: none;
    font-size: 5em;
    text-align: center;
    margin: 0 auto;
    width: 70%;
    border-bottom: 2px solid $main-color;
    color: $main-color;
    font-family: "Dosis", sans-serif;
}
@media screen and (min-width: 768px) {
    .app {
        display: flex;
    }
    .half {
        height: 100%;
        width: 50%;
        justify-content: center;
    }
}
</style>
