<template>
  <div>
    <br>
    <br>
    <About />
    <Sales />
  </div>
</template>

<script>
import About  from '~/components/layouts/About'
import Sales from '~/components/layouts/Sales'
export default {
  layout: 'single',
  
  head() {
    return {
      title: `О нас`
    }
  },
  components: {
    About,
    Sales
  }
  
}
</script>

<style lang="scss" scoped>
</style>

