export default {
  showNavigation: false,
  items: [
    {
      title: "Home",
      icon: "home",
      path: { name: "home", params: { id: 1 } }
    },
    {
      title: "Price",
      icon: "euro_symbol",
      path: { name: "price", params: { id: 2 } }
    },
    
    {
      title: "Our Services",
      icon: "room_service",
      path: { name: "service", params: { id: 5 } }
    },
    {
      title: "Contact",
      icon: "phone",
      path: { name: "contact", params: { id: 6 } }
    }
  ]
};
