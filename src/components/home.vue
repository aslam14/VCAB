<template>
<v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/Hiace.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3"
        :class="[ $vuetify.breakpoint.xs || $vuetify.breakpoint.sm? '' :' display-2']">
          Welcome to VCab
        </h1>
        <p class="display-2 font-weight-regular">
          Our goal: your satisfaction
          </p>
          <v-divider></v-divider>
          <br>
          <p class="subheading font-weight-regular">
            VCAB is catering the needs of citizens by providing devoted, professional and hostile service at your door step. We are available for you 24x7, 365 days a year to provide efficient and reliable service to our esteem customers. Inorder to meet increasing demand we are providing multitude of services for our clients. Now you can relax and enjoy the comfortable and safe journey ranging from day to day travel to long trips. Wheather you are a corporation, organization, institute or person we have got all traveling solutions for you. Do you have questions or would you like to order a taxi? Then just call us:
          </p>
        <v-divider></v-divider>
      </v-flex>
      
      <v-layout
        py-2
        row wrap
        class="text-xs-center font-weight-bold mb-3"
        :class="[ $vuetify.breakpoint.xs || $vuetify.breakpoint.sm? '' :' display-1']"
      >
      <v-flex xs12>
        <span>DAY AND NIGHT</span><br/>
        <span class="font-weight-regular">
        <a class="number" href="tel:+923335249626">+92 333 5249626</a>
        </span><br/>
      </v-flex>
      <v-spacer></v-spacer>
      
        <v-flex xs12 style="padding-Top: 20px;">
          <v-card>
            <v-card-actions class="white justify-center">
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                class="white--text"
                fab
                icon
                small
              >
                <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
          
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "home",
    data () {
      return {
      socials: [
        {
        icon: 'fab fab-facebook',
        color: 'indigo'
      },
      {
        icon: 'fab fa-linkedin',
        color: 'cyan darken-1'
      },
      {
        icon: 'fab fa-instagram',
        color: 'red lighten-3'
      }
      ],
      
    }
    },
    
  metaInfo: {
    title: "home",
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
        content: `VCab Islamabad `
      }
    ]
  }
};

</script>

