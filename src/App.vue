<template>
  <div id="app" class="wrapper">

    <!-- Main Header -->
    <main-header></main-header>

    <!-- Left side column. contains the logo and sidebar -->
    <main-sidebar></main-sidebar>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper"></div>
    <!--<transition name="fade" mode="out-in">-->
      <!--<router-view class="content-wrapper"></router-view>-->
    <!--</transition>-->
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <main-footer></main-footer>

    <!-- Control Sidebar -->
    <control-sidebar></control-sidebar>
    <!-- Add the sidebar's background. This div must be placed
     immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
  <!-- ./wrapper -->
</template>

<script>
  import MainHeader from './components/MainHeader.vue'
  import MainFooter from './components/MainFooter.vue'
  import MainSidebar from './components/MainSidebar.vue'
  import ControlSidebar from './components/ControlSidebar.vue'

  export default {
    name: 'avui-starter',
    components: { MainHeader, MainFooter, MainSidebar, ControlSidebar }
  }
</script>

<style>

</style>
