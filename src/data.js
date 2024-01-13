export default {
  success: true,
  data: {
    basic_services: [
      {
        service_name: "Waste Removal",
        base_price: 85,
        image: "",
      },
      {
        service_name: "Cardboard Removal",
        base_price: 120,
        image: "",
      },
      // {
      //   service_name: "Dumpster Rental",
      //   base_price: 180,
      //   image: "",
      // },
    ],
    services_by_location: [
      {
        zip_code: 92028,
        services: [
          {
            name: "Waste Removal",
            price: 80,
            image: "",
          },
          {
            name: "Cardboard Removal",
            price: 90,
            image: "",
          },
          // {
          //   name: "Dumpster Rental",
          //   price: 118,
          //   image: "",
          // },
        ],
        vehicles: [
          {
            name: "Pick-Up Truck",
            price: 14.99,
          },
          {
            name: "Truck",
            price: 25.0,
          },
        ],
      },
      {
        zip_code: 92029,
        services: [
          {
            name: "Waste Removal",
            price: 80.0,
            image: "",
          },
          {
            name: "Cardboard Removal",
            price: 90.0,
            image: "",
          },
        ],
        vehicles: [
          {
            name: "Pick-Up Truck",
            price: 19.99,
          },
          {
            name: "Truck",
            price: 18.0,
          },
        ],
      },
      {
        zip_code: 92030,
        services: [
          {
            name: "Waste Removal",
            price: 90.0,
            image: "",
          },
        ],
        vehicles: [
          {
            name: "Pick-Up Truck",
            price: 19.99,
          },
          {
            name: "Truck",
            price: 18.0,
          },
        ],
      },
    ],
    additional_items: [
      { item_id: 1, item_name: "Ac Window Unit", price: 22.0 },
      { item_id: 2, item_name: "Area Rug (<=6'x9')", price: 22.0 },
      { item_id: 3, item_name: "Area Rug (> 6'x9')", price: 38.0 },
      { item_id: 4, item_name: "Couch (4 Seater)", price: 55.0 },
      { item_id: 5, item_name: "Futon", price: 44.0 },
      { item_id: 6, item_name: "Ottoman", price: 16.5 },
      { item_id: 7, item_name: "Trash Bin (35 Gallons)", price: 33.0 },
      { item_id: 8, item_name: "Yard Debris (per cubic yard)", price: 55.0 },
      { item_id: 9, item_name: "Bagster (Small)", price: 110.0 },
      { item_id: 10, item_name: "Fridge (Mini - Must be empty)", price: 22.0 },
    ],
    stairs_dismantling: [
      { item_id: 1, item_name: "Stairs", price: 5 },
      { item_id: 2, item_name: "Dismantling", price: 10 },
    ],
    price_quote: {
      basic_services: {
        service: "Waste Removal",
        service_price: 85,
        vehicle_name: "Pick-Up Truck",
        vehicle_price: 14.99,
      },
      postal_code: "",
      date_time: {
        pickup_date: "",
        pickup_time: "",
        drop_off_date: "",
        drop_off_time: "",
      },
      tasks: {
        additional_items: [],
        stairs_dismantling: [],
        task_description_note: "",
      },
      frequency: "",
      coupon_code: "",
      address: {
        address_type: "Residential",
        company_name: "",
        pickup_address: "",
        apt_number: "",
      },
      grand_total: 0,
    },
  },
};
