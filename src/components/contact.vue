<template>
<v-container fluid grid-list-md blue-grey lighten-5>
<v-layout row wrap>
  <v-flex xs12>
      <h1
        class="text-xs-center font-weight-bold mb-3"
        :class="[ $vuetify.breakpoint.xs || $vuetify.breakpoint.sm? '' :' display-2']"
      >
        Contact Us</h1>
    <v-divider></v-divider>            
  </v-flex>
    <v-divider></v-divider>
</v-layout>

<v-layout row wrap justify-space-around >
  <v-flex d-flex xs12 sm6 md5>
    
    <v-card 
     class="mx-auto"
     style="width: 100%;"
    >
    <v-card-title class="indigo lighten-4 red--text">
      <H4>Write to us:</H4>
    </v-card-title>
    <v-form 
      ref="form"
      v-model="valid"
      class="pa-3 pt-4"
      style="width: 100%"
    >
     <v-text-field 
         v-model="name"
         :counter="10"
         :rules="nameRules"
         label="Name"
         required
         box
         color="deep-purple"
         style="min-height: 96px"
         type="text"
         > </v-text-field>
         <v-text-field
         v-model="phone"
         box
         color="deep-purple"
         label="Phone"
         mask="####-#######"
         ></v-text-field>
         <v-text-field
         v-model="email"
         :rules="emailRules"
         label="E-mail"
         required
         box
         color="deep-purple"
         type="email"
         ></v-text-field>
         <v-textarea
         v-model="Message"
         auto-grow
         box
         color="deep-purple"
         label="Message"
         rows="3"
         ></v-textarea>  
        </v-form>
  <v-divider></v-divider>
      <v-card-actions>
        <v-btn
            :disabled="!valid"
            :loading="isLoading"
            class="white--text"
            color="deep-purple accent-4"
            style="width: 95px"
            depressed
          > Send Us</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>

  <v-flex d-flex xs12 sm7 md5>
    <v-layout row wrap>
      <v-subheader class="red--text">Find us here:</v-subheader>
      <v-flex d-flex xs12>
        
        <gmap-map 
          :center="center"
          :zoom="13"
          style="width:400px;  height: 300px; "
        >
        <gmap-marker 
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </v-flex>
    
    <v-subheader class="red--text">Address:</v-subheader>
    
    <v-flex d-flex xs12 sm12 >
      <v-card
        color="red lighten-2"
        dark
      >
        <v-card-text>
          <div>
            <span>Office No: 2, Block 20-B</span><br>
            <span>F-10 Markaz, Islamabad</span><br>
            <span>Ph: 051-2152658, Fax: 051-2152659</span><br>
            <span>Email: vcab@gmail.com</span>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    </v-layout>
  </v-flex>
       
</v-layout>
</v-container>
</template>

<script>
export default {
   data () {
       return {
           phone: undefined,
           subject: 'your message',
           isLoading: false,
           name: '',
           nameRules: [ v => !!v || 'Name is required',
           v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
           email: '',
           emailRules: [ v => !!v || 'E-mail is required',
           v => /.+@.+/.test(v) || 'E-mail must be valid'
           ],
           center: { lat: 33.690388, lng: 73.011054 },
           markers: [{
           position: {lat: 33.690388, lng: 73.011054}
          }],
     
      }
       
    } 
};
</script>

<style>

</style>


