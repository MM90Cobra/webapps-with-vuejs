// let dark = false;
// const btn = document.querySelector("button");
// btn.addEventListener("click", function (e) {
//   dark = !dark;
//   if (dark) {
//     document.body.classList.add("body--dark");
//     btn.classList.add("button-dark");
//     document.title = "Good Night";
//   } else {
//     document.body.classList.remove("body--dark");
//     btn.classList.remove("button-dark");
//     document.title = "Good Morning";
//   }
// });

// Vue.createApp({
//   data() {
//     return {
//       text: "button",
//       onClassName: "body-dark"
//     };
//   },
//   methods: {
//     active() {
//       this.onClassName = !this.onClassName;
//       this.text = this.onClassName ? "button-dark" : "button";
//       document.title = this.text;
//       document.body.classList.add(this.onClassName);
//     }
//   }
// }).mount("#app");

Vue.createApp({
  data() {
    return {
      isDark: false
    };
  },
  computed: {
    buttonText() {
      return this.isDark ? "Light Mode" : "Dark Mode";
    },
    buttonClass() {
      return this.isDark ? "button button-dark" : "button";
    }
  },
  methods: {
    toggleMode() {
      this.isDark = !this.isDark;
      document.body.classList.toggle("body--dark");
    }
  }
}).mount("#app");
