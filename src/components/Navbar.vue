<script>
export default {
  name: 'Navbar'
};
</script>

<template>
  <div class="header">
    <h1>Taskboard</h1>
  </div>
</template>

<style>
.header {
  background-color: #004065;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 15px;
  position: fixed;
  width: 100%;
  z-index: 999;
}
</style>
