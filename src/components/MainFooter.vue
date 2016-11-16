<template>
  <footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right hidden-xs">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; {{ year }} <a href="#">Company</a>.</strong> All rights reserved.
  </footer>
</template>

<script>
  export default {
    name: 'main-footer',
    data () {
        return { year: (new Date()).getFullYear() }
    }
  }
</script>
