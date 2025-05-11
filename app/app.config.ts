export default defineAppConfig({
  installed: true,
  ui: {
    input: {
      variants: {
        size: {
          xxl: {
            base: "px-5 py-4 text-xl gap-2",
            leading: "ps-10",
            trailing: "pe-5",
            leadingIcon: "size-6",
            leadingAvatarSize: "xs",
            trailingIcon: "size-6",
          },
        },
      },
    },
  },
  mainMenu: [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "logs",
      to: "/logs",
    },
    {
      label: "About",
      to: "/about",
    },
  ],
  dashMenu: [
    {
      label: "Dashboard",
      to: "/manage",
    },
    {
      label: "Comments",
      to: "/manage/comments",
    },
    {
      label: "Newsletter",
      to: "/manage/newsletter",
    },
    {
      label: "Users",
      to: "/manage/users",
    },
    {
      label: "Builds",
      to: "/manage/builds",
    },
    {
      label: "Settings",
      to: "/manage/settings",
    },
  ],
  app: {
    site_name_fa: "بَگ چه",
    title_fa: "بَگـ چِـــ",
    description_fa: "کوچولو و بازیگوش",
    site_name_en: "BagChe",
    title_en: "Bag Che",
    description_en: "Tiny & Playful",
    footer_fa:
      ' همه چیز به شکل شگفت انگیزی خوب باید باشد، ساخته شده توسط <a href="https://github.com/Bagche/Mamoochi" target="_blank">مَموچی</a>',
    footer_en:
      'Everything should be wonderfully perfect in every way, crafted by <a href="https://github.com/Bagche/Mamoochi" target="_blank">Mamoochi</a>',
    default_banner: "/content/gnu.webp",
    default_avatar: "/content/gnu.webp",
  },
  cats: ["books", "notes", "projects"],
});
