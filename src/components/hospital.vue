<template>
    <v-container>
    <v-layout wrap justify-center>
        <v-flex xs12 mb-4>
            <h1
                class="text-xs-center font-weight-bold mb-3"
                :class="[ $vuetify.breakpoint.xs || $vuetify.breakpoint.sm? '' :' display-2']"
            >
                Cost Calculator</h1>
            <v-divider></v-divider>

            <v-flex pt-4 class="subheading justify font-weight-regular">
            In most cities, your cost is calculated up front, before you confirm your ride. Here are some basic tariff/rates for our available fleet:
            </v-flex>
    </v-flex>
    <v-divider></v-divider>
    
    <v-flex sm12 md10 pb-8>
      <v-data-iterator :items="items" hide-actions>
        
        <template v-slot:item="props">
          <v-flex>
            <v-hover>
              <v-card color="blue" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                <v-card-title class="subheading font-weight-bold">{{ props.item.name }}
                </v-card-title>
                <v-divider></v-divider>
                <v-card color="yellow" >
                <v-card-title class="subheading font-weight-bold">
                 {{props.item.name1}}   
                </v-card-title>

                <v-list>
                  <v-list-tile>
                    <v-layout justify-space-between class="font-weight-bold">
                      <v-list-tile-content> Make/Description... </v-list-tile-content>
                      <v-list-tile-content>3-6 Days/Daily Rate</v-list-tile-content>
                      <v-list-tile-content>7-13 Days/Daily Rate</v-list-tile-content>
                      <v-list-tile-content>14-29 Days/Daily Rate</v-list-tile-content>
                      <v-list-tile-content>30+ Days/Daily Rate</v-list-tile-content>        
                    </v-layout>
                    </v-list-tile>
                </v-list>
                <v-list>
                  <v-list-tile>
                    <v-layout justify-space-between>
                      <v-list-tile-content wrap class="align-left">Suzuki Alto 660CC</v-list-tile-content>
                      <v-list-tile-content class="align-left">{{ props.item.BaseRate.BRate1 }}</v-list-tile-content>
                      <v-list-tile-content class="align-left">{{ props.item.BaseRate.BRate2 }}</v-list-tile-content>
                      <v-list-tile-content class="align-left">{{ props.item.BaseRate.BRate3 }}</v-list-tile-content>
                      <v-list-tile-content class="align-left">{{ props.item.BaseRate.BRate4 }}</v-list-tile-content>
                    </v-layout>
                  </v-list-tile>

                  <v-list-tile>
                    <v-layout justify-space-between>
                      <v-list-tile-content class="align-center">Daihatsu Mira </v-list-tile-content>
                      <v-list-tile-content class="align-center">{{ props.item.BookingFee }}</v-list-tile-content>
                      <v-list-tile-content class="align-center">{{ props.item.BookingFee }}</v-list-tile-content>
                      <v-list-tile-content class="align-center">{{ props.item.BookingFee }}</v-list-tile-content>
                      <v-list-tile-content class="align-center">{{ props.item.BookingFee }}</v-list-tile-content>
                    </v-layout>
                  </v-list-tile>

                  <v-list-tile>
                    <v-layout justify-space-between>
                      <v-list-tile-content class="align-center">Toyota Passo</v-list-tile-content>
                      <v-list-tile-content
                        class="align-center"
                      >{{ props.item.BookingHours }}</v-list-tile-content>
                      <v-list-tile-content
                        class="align-center"
                      >{{ props.item.BookingHours }}</v-list-tile-content>
                      <v-list-tile-content
                        class="align-center"
                      >{{ props.item.BookingHours }}</v-list-tile-content>
                      <v-list-tile-content
                        class="align-center"
                      >{{ props.item.BookingHours }}</v-list-tile-content>
                    </v-layout>
                  </v-list-tile>

                  <v-list-tile>
                    <v-layout justify-space-between>
                      <v-list-tile-content class="align-center">Toyota Vitz </v-list-tile-content>
                      <v-list-tile-content
                        class="align-end"
                      >{{ props.item.BookingArea }}</v-list-tile-content>
                    </v-layout>
                  </v-list-tile>

                  <v-list-tile>
                    <v-layout justify-space-between>
                      <v-list-tile-content class="align-center">Toyota Belta </v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.selfChaufer }}</v-list-tile-content>
                    </v-layout>
                  </v-list-tile>
                </v-list>
              </v-card>
              </v-card>
            </v-hover>
          </v-flex>
        </template>
      </v-data-iterator>
    </v-flex>
    </v-layout>
    

</v-container>

</template>

<script>
export default {
  name: "price",
  data() {
    return {
      
      items: [
        {
          name: "Basic Rates",
          name1: "Self-Drive Tariff/Rates(PKR)",
          BaseRate: {
              BRate1: "2100 PKR",
              BRate2: "2000 PKR",
              BRate3: "3000 PKR",
              BRate4: "5000 PKR"
          }, 
          BookingFee: "1000 PKR",
          BookingHours: "3000 PKR",
          BookingArea: "500 PKR",
          selfChaufer: "1000 PKR"
        }
      ]
      
    };
  },
  metaInfo: {
    title: "price",
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

<style>
.v-card__title {
  justify-content: center;
}
</style>

       