export default {
  success: true,
  data: {
    // accordion_step: "",
    texts: {
      service_availability: "Check if we serve in your area.",
    },
    // custom_radio_btn_index: "",
    form_disabled: {
      choose_a_service: false,
      date_time: true,
      tasks: true,
      review_order: true,
      pre_payment: true,
    },

    basic_services: [
      {
        name: "Waste Removal",
        desc: "description",
        price: 88,
        icon: "waste.png",
      },
      {
        name: "Cardboard Removal",
        desc: "",
        price: 999,
        icon: "cardboard.png",
      },
      // {
      //   service_name: "Dumpster Rental",
      //   base_price: 180,
      //   icon: "",
      // },
    ],

    services_by_location: [
      {
        zip_code: 92028,
        services: [
          {
            name: "Waste Removal",
            desc: "",
            price: 80,
            icon: "waste.png",
          },
          {
            name: "Cardboard Removal",
            desc: "description",
            price: 90,
            icon: "cardboard.png",
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
            desc: "6ft long",
            price: 14.99,
            icon: "truck.png",
          },
          {
            name: "Truck",
            desc: "8ft long",
            price: 25.0,
            icon: "truck-large.png",
          },
        ],
      },
      {
        zip_code: 92029,
        services: [
          {
            name: "Waste Removal",
            desc: "",
            price: 80.0,
            icon: "waste.png",
          },
          {
            name: "Cardboard Removal",
            desc: "",
            price: 90.0,
            icon: "cardboard.png",
          },
        ],
        vehicles: [
          {
            name: "Pick-Up Truck",
            desc: "6ft long",
            price: 19.99,
            icon: "truck.png",
          },
          {
            name: "Truck",
            desc: "8ft long",
            price: 18.0,
            icon: "truck-large.png",
          },
        ],
      },
      {
        zip_code: 92030,
        services: [
          {
            name: "Waste Removal",
            desc: "",
            price: 90.0,
            icon: "waste.png",
          },
        ],
        vehicles: [
          {
            name: "Pick-Up Truck",
            desc: "6ft long",
            price: 19.99,
            icon: "truck.png",
          },
          {
            name: "Truck",
            desc: "8ft long",
            price: 18.0,
            icon: "truck-large.png",
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
        service: "",
        service_price: 0,
        vehicle_name: "",
        vehicle_price: 0,
      },
      date_time: {
        pickup_date: "",
        pickup_time: "",
        // drop_off_date: "",
        // drop_off_time: "",
      },
      tasks: {
        additional_items: [],
        stairs_dismantling: [],
        task_description_note: "",
      },
      frequency: "",
      coupon_code: "",
      address: {
        postal_code: "",
        address_type: "Residential",
        company_name: "",
        pickup_street_address: "",
        apt_number: "",
      },
      customer: {
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
      },
      grand_total: 0,
    },
  },
};
