<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../static/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Haycco</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <!-- search form (Optional) -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu">
        <li class="header">HEADER</li>
        <!-- Optionally, you can add icons to the links -->
        <li class="active"><router-link to="/"><i class="fa fa-link"></i> <span>Link</span></router-link></li>
        <li><router-link to="/"><i class="fa fa-link"></i> <span>Another Link</span></router-link></li>
        <li>
          <router-link to="/widgets">
            <i class="fa fa-th"></i> <span>Widgets</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span>
          </router-link>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-laptop"></i>
            <span>UI Elements</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link to="/ui/general"><i class="fa fa-circle-o"></i> General</router-link></li>
            <li><router-link to="/ui/icons"><i class="fa fa-circle-o"></i> Icons</router-link></li>
            <li><router-link to="/ui/buttons"><i class="fa fa-circle-o"></i> Buttons</router-link></li>
            <li><router-link to="/ui/sliders"><i class="fa fa-circle-o"></i> Sliders</router-link></li>
            <li><router-link to="/ui/timeline"><i class="fa fa-circle-o"></i> Timeline</router-link></li>
            <li><router-link to="/ui/modals"><i class="fa fa-circle-o"></i> Modals</router-link></li>
          </ul>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  export default {
    name: 'main-sidebar'
  }
</script>
