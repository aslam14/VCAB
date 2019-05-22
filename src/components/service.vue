<template>
  <div id="app">
  <v-app id="inspire">
    <v-container fluid blue-grey lighten-5>
    
    <v-layout row wrap justify-space-around >
  <v-flex d-flex xs12 sm7 md5 pt-3>
        <v-hover>
      <v-card
        style="width: 100%;"
        slot-scope="{ hover }"
        :elevation="hover ? 12 : 2"
        class="mx-auto"
      >
          <v-img
            class="red--text"
            height="300px"
            aspect-ratio="2.75"
            :src="require('../assets/Sedan.png')"
          >
            <v-layout pa-2  fill-width class="lightbox white--text">
            <v-spacer></v-spacer>
            <v-flex >
              <div class="subheading">
                <h2>HATCHBACKS & SEDANS</h2></div>
              
            </v-flex>
          </v-layout>
          </v-img>
          <v-card-title>
            <ul>
              <li>Suzuki Alto</li>
              <li>Toyota Vitz</li>
              <li>Toyota Corolla 1.3/1.8</li>
              <li>Honda City 1.3</li>
              <li>Honda Civic 1.8</li>
            </ul>
          </v-card-title>
          <v-card-actions>
            <v-btn small color="blue"
             @click="show0 = !show0">Explore</v-btn>
            <v-icon>{{ show0 }}</v-icon>
        
          </v-card-actions>

          <v-expand-transition>
        <div v-show="show0">
          <v-card-text class="text-xs-justify">
            We have the best fleet to meet all your within local and out station needs. we have two hot hatchbacks for giving an ease to your ride within Islamabad and Rawalpindi. If you are planning to hire a Car for some occasion localy or out station then a brand new corolla or civic suits your style at best.
          </v-card-text>
        </div>
      </v-expand-transition>
        </v-card>
        </v-hover>
      </v-flex>
      

      <v-flex d-flex xs12 sm7 md5 pt-3>
        <v-hover>
      <v-card
        style="width: 100%;"
        slot-scope="{ hover }"
        :elevation="hover ? 12 : 2"
        class="mx-auto"
      >
          <v-img
            class="red--text"
            height="300px"
            :src="require('../assets/Hiace.png')"
            aspect-ratio="2.75"
          >
            <v-layout pa-2  fill-width class="lightbox white--text">
            <v-spacer></v-spacer>
            <v-flex >
              <div class="subheading">
                <h2>HIACE</h2></div>
              
            </v-flex>
          </v-layout>
          </v-img>
          <v-card-title>
            <ul>
              <li>Standard Roof (Diesel)</li>
              <li>Standard Roof Dual AC (Gasoline)</li>
              <li>Standard Roof Dual AC (Diesel)</li>
              <li>Mid Roof Dual AC (Gasoline)</li>
              <li>High Roof Dual AC (Diesel)</li>
            </ul>
          </v-card-title>
          <v-card-actions>
            <v-btn small color="blue"
             @click="show1 = !show1">Explore</v-btn>
            <v-icon>{{ show1 }}</v-icon>
          </v-card-actions>

          <v-expand-transition>
        <div v-show="show1">
          <v-card-text class="text-xs-justify">
           Our Hiace range has three variants fulfilling your traveliing needs. You can select either Gasoline or Disesel according to your requirements. Standard version for all travelling needs and Mid & High roofs for luxurious and Comfortable travel experience. All equipped with Dual AC.
          </v-card-text>
        </div>
      </v-expand-transition>
        </v-card>
        </v-hover>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-space-around style="padding-Top: 10px;">
  <v-flex d-flex xs12 sm7 md5 pt-3>
        <v-hover>
      <v-card
        style="width: 100%;"
        slot-scope="{ hover }"
        :elevation="hover ? 12 : 2"
        class="mx-auto"
      >
          <v-img
            class="red--text text-block"
            height="300px"
            aspect-ratio="2.75"
            :src="require('../assets/Coaster.png')"
          >
            <v-layout pa-2  fill-width class="lightbox white--text">
            <v-spacer></v-spacer>
            <v-flex >
              <div class="subheading">
                <h2>COASTERS</h2></div>
              
            </v-flex>
          </v-layout>
          </v-img>
          <v-card-title>
            <ul>
              <li>Coaster High Roof (29 Seater)</li>
              <li>Coaster High Roof (24 Seater)</li>
            </ul>
          </v-card-title>
          <v-card-actions>
            <v-btn small color="blue"
             @click="show2 = !show2">Explore</v-btn>
            <v-icon>{{ show2 }}</v-icon>
        
          </v-card-actions>

          <v-expand-transition>
        <div v-show="show2">
          <v-card-text class="text-xs-justify">
            You can select No. of seats depending upon your need out of two options available. Both variants are new model with in cabin multimedia screen and AC to spice up your journey.
          </v-card-text>
        </div>
      </v-expand-transition>
        </v-card>
        </v-hover>
      </v-flex>

      <v-flex d-flex xs12 sm7 md5 pt-3>
        <v-hover>
      <v-card
        style="width: 100%;"
        slot-scope="{ hover }"
        :elevation="hover ? 12 : 2"
        class="mx-auto"
      >
          <v-img
            class="red--text"
            height="300px"
            :src="require('../assets/SUV.png')"
            aspect-ratio="2.75"
          >
            <v-layout pa-2  fill-width class="lightbox white--text">
            <v-spacer></v-spacer>
            <v-flex >
              <div class="subheading">
                <h2>SUVs</h2></div>
              
            </v-flex>
          </v-layout>
          </v-img>
          <v-card-title>
            <ul>
              <li>Toyota Fortuner</li>
              <li>Toyota Land Cruiser (Prado)</li>
            </ul>
          </v-card-title>
          <v-card-actions>
            <v-btn small color="blue"
             @click="show3 = !show3">Explore</v-btn>
            <v-icon>{{ show3 }}</v-icon>
        
          </v-card-actions>

          <v-expand-transition>
        <div v-show="show3">
          <v-card-text class="text-xs-justify">
           In our SUVs saction we got power, style and luxury. Weather you are going on some occasion or on Hilly areas we got all answers to your requirements by providing well trained and educated staff with well maintained vehciles. 
          </v-card-text>
        </div>
      </v-expand-transition>
        </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    

    </v-container>
  </v-app>
</div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      show0: false,
      show1: false,
      show2: false,
      show3: false,
      cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
    ]
  }
     
      
    
  },

 
    
  };
</script>

<style>
.lightbox {
  margin: 10px;
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 100px);
}
</style>
