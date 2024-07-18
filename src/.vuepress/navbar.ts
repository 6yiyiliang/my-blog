import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "解题",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "洛谷",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "p1000", icon: "pen-to-square", link: "1" },
          { text: "p1001", icon: "pen-to-square", link: "2" },
          { text: "p1035", icon: "pen-to-square", link: "3" },
          { text: "p1046", icon: "pen-to-square", link: "4" },
          { text: "p1047", icon: "pen-to-square", link: "5" },
          { text: "p1085", icon: "pen-to-square", link: "6" },
          { text: "p1089", icon: "pen-to-square", link: "7" },
          { text: "p1150", icon: "pen-to-square", link: "8" },
          { text: "p1151", icon: "pen-to-square", link: "9" },
          { text: "p1152", icon: "pen-to-square", link: "10" },
        ],
      },
      {
        text: "力扣",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
