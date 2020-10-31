<template>
  <div class="hello">
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#545c64"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item index="left">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index="./application">
            <i class="el-icon-menu"></i>
            <span slot="title">应用管理</span>
          </el-menu-item>
          <el-menu-item index="/config">
            <i class="el-icon-document"></i>
            <span slot="title">配置管理</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航四</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <!-- {{mes}} -->

          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"
              >
              <!-- <a href="https://www.ele.me" target="_blank" -->
              <a 
                >订单管理</a
              ></el-menu-item
            >
          </el-menu>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      mes: "首页数据",
       activeIndex: '1',
        activeIndex2: '1'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
</style>
