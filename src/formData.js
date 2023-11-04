export default {
  success: true,
  data: {
    services: ["Waste Removal", "Cardboard Removal", "Dumpster Rental"],
    additional_items: [
      { item_id: 1, item: "Ac Window Unit", price_each: 22.0 },
      { itme_id: 2, item: "Area Rug (<=6'x9')", price: 22.0 },
      { item_id: 3, item: "Area Rug (> 6'x9')", price: 38.0 },
      { itme_id: 4, item: "Couch (4 Seater)", price: 55.0 },
      { item_id: 5, item: "Futon", price_each: 44.0 },
      { itme_id: 6, item: "Ottoman", price: 16.5 },
      { item_id: 7, item: "Trash Bin (35 Gallons)", price: 33.0 },
      { itme_id: 8, item: "Yard Debris (per cubic yard)", price: 55.0 },
      { item_id: 9, item: "Bagster (Small)", price: 110.0 },
      { itme_id: 10, item: "Fridge (Mini - Must be empty)", price: 22.0 },
    ],
    vehicles: ["Pick-Up Truck", "Truck"],
    locations: ["92028", "9202"],
    prices_by_location: [
      {
        zip_code: 92028,
        prices: {
          waste_removal: 80,
          cardboard_removal: 90,
          dumpster_rental: 110,
        },
      },
      {
        zip_code: 9202,
        prices: {
          waste_removal: 80,
          cardboard_removal: 90,
          dumpster_rental: 110,
        },
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
