<template>
  <div class="app">
    <h1>About FX-GO</h1>
    <br>
    <p>
      FX-GO is a currency converter app, built by <a href="//ogbeniore.com">Oreoluwa Ojo</a>   
      <br>
      <br>
      FX-Go combines the technology of service workers and IndexeDB to bring you an app that allows you convert currencies on the fly wether you are offline or online,
      you have the ability to check the <router-link to="/history">history</router-link>  of all your searches. <br>
      <br>Fx-Go is not finished yet as it is just a side projects i picked up recently, I plan to make it an open source project hence here is the <a href="//github.com/ogbeniore/fx-go">code</a>  on github, Pull requests are welcomes, or you can just star the project                                                                                                       
    </p>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/variables";
p {
    text-align: left;
    line-height: 1.5em;
    margin: 0 1em;
    font-size: 1.3em;
}
a {
    color: $black;
    font-weight: 600;
}
</style>
