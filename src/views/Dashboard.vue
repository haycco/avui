<template>
  <div class="wrapper">

    <!-- Main Header -->
    <main-header></main-header>

    <!-- Left side column. contains the logo and sidebar -->
    <main-sidebar></main-sidebar>

    <!-- Content Wrapper. Contains page content -->
    <!-- Content Header (Page header) -->
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          Page Header
          <small>Optional description</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
          <li class="active">Here</li>
        </ol>
      </section>
      <!-- Main content -->
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <!-- /.content -->
    </div>
    <!--/.content-wrapper -->

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
  import MainHeader from '../components/MainHeader.vue'
  import MainFooter from '../components/MainFooter.vue'
  import MainSidebar from '../components/MainSidebar.vue'
  import ControlSidebar from '../components/ControlSidebar.vue'

  export default {
    name: 'dashboard-view',
    components: { MainHeader, MainFooter, MainSidebar, ControlSidebar }
  }
</script>
