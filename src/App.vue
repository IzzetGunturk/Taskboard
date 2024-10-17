<script>
import Board from './views/Board.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Board,
    Navbar
  }
};
</script>

<template>
  <Navbar/>
  <Board/>
</template>