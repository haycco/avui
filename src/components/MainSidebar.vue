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
        <router-link tag="li" to="/" class="active"><a><i class="fa fa-link"></i> <span>Link</span></a></router-link>
        <router-link tag="li" to="/"><a><i class="fa fa-link"></i> <span>Another Link</span></a></router-link>
        <router-link tag="li" to="/widgets">
          <a>
            <i class="fa fa-th"></i> <span>Widgets</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span>
          </a>
        </router-link>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-laptop"></i>
            <span>UI Elements</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <router-link tag="li" to="/ui/general"><a><i class="fa fa-circle-o"></i> General</a></router-link>
            <router-link tag="li" to="/ui/icons"><a><i class="fa fa-circle-o"></i> Icons</a></router-link>
            <router-link tag="li" to="/ui/buttons"><a><i class="fa fa-circle-o"></i> Buttons</a></router-link>
            <router-link tag="li" to="/ui/sliders"><a><i class="fa fa-circle-o"></i> Sliders</a></router-link>
            <router-link tag="li" to="/ui/timeline"><a><i class="fa fa-circle-o"></i> Timeline</a></router-link>
            <router-link tag="li" to="/ui/modals"><a><i class="fa fa-circle-o"></i> Modals</a></router-link>
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
