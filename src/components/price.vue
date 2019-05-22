<template>
<v-layout wrap justify-center>
<v-flex mb-4>
            <h1
                class="text-xs-center font-weight-bold mb-3"
                :class="[ $vuetify.breakpoint.xs || $vuetify.breakpoint.sm? '' :' display-2']"
            >
                OUR RATES</h1>
            <v-divider></v-divider>

            <v-flex pt-4 class="subheading text-xs-justify font-weight-regular">
              In most cities, your cost is calculated up front, before you confirm your ride. Here are some basic tariff/rates for our available fleet within city limits:
            </v-flex>
    </v-flex>
  <v-divider></v-divider>

  <v-layout wrap justify-center pt-5>
      <v-flex xs12 sm12 md8>
          <v-carousel :height="height">
            <v-carousel-item v-for="(item,i) in images" :aspect-ratio="1.75" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
        </v-flex>
      
    <v-layout v-resize="onResize" column pt-5>
        
        <v-subheader class="blue justify-center red--text">
          <h1>Rates and Tariff</h1>
        </v-subheader>

        <v-data-table :headers="headers" :items="rates" :search="search" :pagination.sync="pagination" :hide-headers="isMobile" :class="{mobile: isMobile}">
          
          <template slot="items" slot-scope="props">
            
              <tr v-if="!isMobile">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.period1 }}</td>
                <td class="text-xs-center">{{ props.item.period2 }}</td>
                <td class="text-xs-center">{{ props.item.period3 }}</td>
                <td class="text-xs-center">{{ props.item.period4 }}</td>
                
              </tr>
              <tr v-else>
                <td>
                  <ul class="flex-content">
                    <li class="flex-item" data-label="Make/Description">{{ props.item.name }}</li>
                    <li class="flex-item" data-label="3-6 Days/Daily Rate">{{ props.item.period1 }}</li>
                    <li class="flex-item" data-label="7-13 Days/Daily Rate">{{ props.item.period2 }}</li>
                    <li class="flex-item" data-label="14-29 Days/Daily Rate">{{ props.item.period3 }}</li>
                    <li class="flex-item" data-label="30+ Days/Daily Rate">{{ props.item.period4 }}</li>
                    
                  </ul>
                </td>
              </tr>
          </template>
            
          
      </v-data-table>
    </v-layout>
</v-layout>
</v-layout>
</template>

<script>
export default {
    name: "price",
    
  data() {
      return{
        images: [
          { src: require("@/assets/Alto.jpg") },
          { src: require("@/assets/Vitz.jpg") },
          { src: require("@/assets/Gli.jpg") },
          { src: require('../assets/Sedan.png') },
          { src: require("@/assets/City.jpg") },
          { src: require("@/assets/Civic.jpg") },
          { src: require("@/assets/Prado.jpg") },
          { src: require("@/assets/Cruiser.jpg") }
      ],
      
      height() {
        if (this.$vuetify.breakpoint.xs) {
          return 200;
        }
        if (this.$vuetify.breakpoint.sm) {
          return 300;
        }
        if (this.$vuetify.breakpoint.md) {
          return 300;
        }
      },
        pagination: {
          sortBy: 'name'
        },
        selected: [],
        search: '',
        isMobile: false,
        headers: [{
            text: 'Self-Drive Tariff/Rates(PKR)',
            value: 'name'
          },
          {
            text: '3-6 Days/Daily Rate',
            value: 'period1'
          },
          {
            text: '7-13 Days/Daily Rate',
            value: 'period2'
          },
          {
            text: '14-29 Days/Daily Rate',
            value: 'period3'
          },
          {
            text: '30+ Days/Daily Rate',
            value: 'period4'
          }
        ],
        rates: [{
            value: false,
            name: 'SUZUKI Alto 1000CC',
            period1: "2900 PKR",
            period2: "2700 PKR",
            period3: "2500 PKR",
            period4: "2400 PKR"
          },
          {
            value: false,
            name: 'TOYOTA Vitz 1000CC',
            period1: "3200 PKR",
            period2: "2900 PKR",
            period3: "2700 PKR",
            period4: "2500 PKR"
          },
          {
            value: false,
            name: 'TOYOTA Corolla 1300CC',
            period1: "3500 PKR",
            period2: "3000 PKR",
            period3: "2800 PKR",
            period4: "2600 PKR"
          },
          {
            value: false,
            name: 'TOYOTA Corolla 1800CC',
            period1: "4500 PKR",
            period2: "4300 PKR",
            period3: "4000 PKR",
            period4: "3800 PKR"
          },
          {
            value: false,
           name: 'HONDA City 1300CC',
            period1: "3500 PKR",
            period2: "3200 PKR",
            period3: "3000 PKR",
            period4: "2800 PKR"
          },
          {
            value: false,
            name: 'HONDA Civic 1800CC',
            period1: "5000 PKR",
            period2: "4800 PKR",
            period3: "4500 PKR",
            period4: "4300 PKR"
          },
          {
            value: false,
            name: 'SUZUKI Alto 1000CC',
            period1: "2100 PKR",
            period2: "2000 PKR",
            period3: "3000 PKR",
            period4: "5000 PKR"
          },
          {
            value: false,
            name: 'TOYOTA Prado 3000CC',
            period1: "5000 PKR",
            period2: "4800 PKR",
            period3: "4500 PKR",
            period4: "4300 PKR"
          },
          {
            value: false,
            name: 'TOYOTA LandCruiser 4800CC',
            period1: "10,000 PKR",
            period2: "8000 PKR",
            period3: "7000 PKR",
            period4: "5000 PKR"
          },
          {
            value: false,
            name: 'SUZUKI Alto 1000CC',
            period1: "2100 PKR",
            period2: "2000 PKR",
            period3: "3000 PKR",
            period4: "5000 PKR"
          },
          
        ]
      }
    },
      methods: {
        onResize() {
          if (window.innerWidth < 769)
            this.isMobile = true;
          else
            this.isMobile = false;
        },
        toggleAll() {
          if (this.selected.length) this.selected = []
          else this.selected = this.rates.slice()
        },
        changeSort(column) {
          console.log(column);
          if (this.pagination.sortBy === column) {
            this.pagination.descending = !this.pagination.descending
          } else {
            this.pagination.sortBy = column
            this.pagination.descending = false
          }
        }
      },

  computed: {
    columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0])
    },
        
  }
};
</script>

<style>

table th {
  text-transform: uppercase;
  text-align: center;
  background: yellow;
  color: #FFF;
  padding: 8px;
  border: 3px solid #44475C;
  font-weight: bold;
  min-width: 30px;
}
table caption {
  text-transform: uppercase;
  text-align: center;
  background: yellow;
  font-weight: bolder;
  color: black;
  padding: 8px;
  border: 3px solid #44475C;
  border-bottom: 0px;
  min-width: 30px;
}
table td {
  text-align: center;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

.mobile {
      color: #333;
    }

    @media screen and (max-width: 768px) {
      .mobile table.v-table tr {
        max-width: 100%;
        position: relative;
        display: block;
      }

      .mobile table.v-table tr:nth-child(odd) {
        border-left: 6px solid rgb(236, 65, 157);
      }

      .mobile table.v-table tr:nth-child(even) {
        border-left: 6px solid cyan;
      }

      .mobile table.v-table tr td {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
        height: auto;
        padding: 10px;
        color: blueviolet
      }

      .mobile table.v-table tr td ul li:before {
        content: attr(data-label);
        padding-right: .5em;
        text-align: left;
        display: block;
        color: red;

      }
      .v-datatable__actions__select
      {
        width: 50%;
        margin: 0px;
        justify-content: flex-start;
      }
      .mobile .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
        background: transparent;
      }

    }
    .flex-content {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    .flex-item {
      padding: 5px;
      width: 50%;
      height: 20%;
      font-weight: bold;
      color: blue;
    }

 </style>   


