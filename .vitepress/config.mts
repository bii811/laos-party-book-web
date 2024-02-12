import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/laos-party-book-web/",
  title: "ປຶ້ມກົດລະບຽບພັກປະຊາຊົນປະຕິວັດລາວ",
  description: "ເວັບໄຊປຶ້ມກົດລະບຽບພັກປະຊາຊົນປະຕິວັດລາວ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "ໜ້າຫຼັກ", link: "/" },
      { text: "ປຶ້ມກົດລະບຽບພັກປະຊາຊົນປະຕິວັດລາວ", link: "/intro" },
    ],

    sidebar: [
      {
        text: "ປຶ້ມກົດລະບຽບພັກປະຊາຊົນປະຕິວັດລາວ",
        items: [
          { text: "ກ່ຽວກັບ", link: "/intro" },
          { text: "ໝວດ 1", link: "/chapter1" },
        ],
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
});
