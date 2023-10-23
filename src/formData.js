export default {
  success: true,
  data: {
    services: ["Waste Removal", "Cardboard Removal", "Dumpster Rental"],
    additional_items: ["Ac Window Unit", "Area Rug (<=6'x9')"],
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
