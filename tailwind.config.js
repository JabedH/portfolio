module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      display: ["group-hover"],
      colors: {
        myColor: "#04C2C9",
      },
    },
  },
  plugins: [require("daisyui")],
};
