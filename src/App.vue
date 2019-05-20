<template>
  <v-app>
    <Navigation></Navigation>
    <sidebar></sidebar>
    <v-layout justify-center>
      <v-flex xs10 class="custom-container">
        <transition :name="transitionName">
         <router-view class="view"></router-view>
        </transition>
      </v-flex>
      
    </v-layout>
  
  </v-app>
  
</template>

<script>
import Navigation from '@/components/Navigation'
import sidebar from '@/components/navigation-drawer/sidebar'
import GoogleMap from "./components/service";

 


export default {
  name: 'App',
  components: {
    Navigation,
    sidebar,
    GoogleMap
  },
  data () {
    return {
      transitionName: "slide-left"
      //
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.params.id;
      const fromDepth = from.params.id || 0;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  },
  metaInfo: {
    title: "VCab",
    titleTemplate: "%s | VCab Islamabad",
    meta: [
      {
        name: "description",
        content: "VCab Islamabad"
      }
    ]
  },
  head: {
    meta: [
      {
        name: "description",
        content: `VCab Islamabad`
      }
    ]
  }
};
</script>
<style>
.custom-container {
  position: relative;
  top: 120px !important;
}
html {
  overflow-y: auto;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(300px, 0);
  transform: translate(300px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-300px, 0);
  transform: translate(-300px, 0);
}
.view {
  position: absolute;
  width: 100%;
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}
.number {
  text-decoration: none !important;
  color: black !important;
  font-weight: bold;
}
</style>

