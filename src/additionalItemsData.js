export default {
  success: true,
  data: {
    additional_items: [
      { item_id: 1, item_name: "Ac Window Unit", price_each: 22.0 },
      { itme_id: 2, item_name: "Area Rug (<=6'x9')", price: 22.0 },
      { item_id: 3, item_name: "Area Rug (> 6'x9')", price: 38.0 },
      { itme_id: 4, item_name: "Couch (4 Seater)", price: 55.0 },
      { item_id: 5, item_name: "Futon", price_each: 44.0 },
      { itme_id: 6, item_name: "Ottoman", price: 16.5 },
      { item_id: 7, item_name: "Trash Bin (35 Gallons)", price: 33.0 },
      { itme_id: 8, item_name: "Yard Debris (per cubic yard)", price: 55.0 },
      { item_id: 9, item_name: "Bagster (Small)", price: 110.0 },
      { itme_id: 10, item_name: "Fridge (Mini - Must be empty)", price: 22.0 },
    ],
    services_by_location: [
      {
        zip_code: 92028,
        services: [
          {
            name: "Waste Removal",
            price: 80,
          },
          {
            name: "Cardboard Removal",
            price: 90,
          },
          {
            name: "Dumpster rental",
            price: 110,
          },
        ],
        vehicles: ["Pick-Up Truck", "Truck"],
      },
      {
        zip_code: 9202,
        services: [
          {
            name: "Waste Removal",
            price: 80,
          },
          {
            name: "Cardboard Removal",
            price: 90,
          },
        ],
        vehicles: ["Pick-Up Truck", "Truck"],
      },
    ],
    price_quote: [
      {
        order_id: "1",
        service: "",
        date_time: {
          pickup_date: "",
          pickup_time: "",
          drop_off_date: "",
          drop_off_time: "",
        },
        tasks: {
          additional_items: [],
          vehicle: "",
          task_description: "",
        },
        frequency: "",
        coupon_code: "",
        address: {
          company_name: "",
          pickup_address: "",
          apt_number: "",
        },
        total: 0,
      },
    ],
  },
};
