<template>
    <v-navigation-drawer
        class="sidebar blue lighten-2 hidden-md-and-up"
        hide-overlay
        app
         :style="customStyle"
         dark
         touchless
         v-model="navigation" >

         <v-divider></v-divider>
         
        <v-list class="pt-0">
        <template v-for="item in items">
        <v-list-tile
          :key="item.title"
          :to="item.path"
          @click="navigation=false"
          class="white--text"
        >
          <v-list-tile-action>
            <v-icon color="#003399">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content class="red--text">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "sidebar",
  computed: {
    navigation: {
      get() {
        return this.$store.getters.getNavigationStatus;
      },
      set(state) {
        if (state !== this.$store.getters.getNavigationStatus) {
          this.$store.dispatch("setNavigationStatus", state);
        }
      }
    },
    customStyle() {
      if (this.$store.getters.getNavigationStatus) {
        return `transition: 0.5s; transform: translateY(0%)`;
      } else {
        return `transition: 1s; transform: translateY(-300%)`;
      }
    }
  },
  data() {
    return {
      items: null,
      right: null
    };
  },
  mounted() {
    this.items = this.$store.getters.getNavigationItems;
  }
};
</script>

<style>
.sidebar {
  top: 96px !important;
  width: 100% !important;
  overflow-y: scroll !important;
}

@media only screen and (min-height: 500px) {
  .sidebar {
    top: 96px !important;
    width: 100% !important;
    height: fit-content !important;
    overflow-y: scroll !important;
  }
}

@media only screen and (min-height: 320px) {
  .sidebar {
    max-height: 59% !important;
  }
}

@media only screen and (max-height: 413px) and (min-height: 375px) {
  .sidebar {
    max-height: 65% !important;
  }
}

@media only screen and (max-height: 500px) and (min-height: 414px) {
  .sidebar {
    max-height: 68% !important;
  }
}
.v-list__tile--active{
  color: blue !important;
    caret-color: blue!important;
}

.v-list__tile {
  padding: 8px;
  border: 1px solid #996699;
  border-bottom: 0px;
}


</style>
