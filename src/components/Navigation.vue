<template>
  <v-card class="toolbar-custom">
    <v-toolbar app extended dense class="toolbar-custom-levelone">
      <v-toolbar-title class="headline text-uppercase">
        <span>VCAB: Let's Go</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in items" :key="item.title" :to="item.path">
          <v-icon class="pr-2">{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>

      <v-spacer class="hidden-lg-and-up"></v-spacer>
      <v-flex class="hidden-lg-and-up text-xs-right">
        <v-toolbar-side-icon @click.stop="toggleSideBar"></v-toolbar-side-icon>
      </v-flex>
    </v-toolbar>

    <v-layout row>
      <v-flex xs12>

      <v-card class="card--flex-toolbar">
          <v-toolbar dense color="blue" fixed class="toolbar-custom-leveltwo">
            <v-layout wrap justify-space-between class="subheading font-weight-bold text-uppercase">
              <v-flex class="text-xs-left">Day and Night</v-flex>
              <v-flex class="text-xs-right">
                <v-icon class="pr-2">phone</v-icon>
                <span class="font-weight-bold">
                  <a class="number" href="tel:+923335249626">0333 5249626</a>
                </span>
              </v-flex>
            </v-layout>
          </v-toolbar>
        </v-card>

      </v-flex>
    </v-layout>

  </v-card>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      showItems: false,
      items: null
    };
  },
  mounted() {
    this.items = this.$store.getters.getNavigationItems;
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("setNavigationStatus", true);
    }
  }
};
</script>

<style>
.toolbar-custom-levelone {
  z-index: 50;
}
.toolbar-custom-leveltwo {
  z-index: 51;
  top: 46px;
}
</style>
