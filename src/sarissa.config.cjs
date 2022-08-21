export default {
  siteTitle: "Shooting Star Geeks",
  siteDescription: "Geeking out to the stars!",
  favicon: "/favicon.ico",
  siteImagePath: "/images/SSGLogo.png",
  footer: "© 2021 Shooting Star Comapny, LLC.",
  dateFormat: "dd.MM.yyyy HH:mm",
  socialMedia: {
    reddit: "shootingstargeeks",
    twitter: "sstargeeks",
    linkedin: "victor-lam-3769524",
    github: "victorlamssc",
  },
  pageSize: 5,
  categories: [
    {
      name: "theme",
      color: "btn-warning",
      image: "/images/theme.jpg",
      order: 1,
    },
  ],
  categorySettings: {
    order: "name", // name | count
    layout: "card", //button | card
    image: "",
    color: "btn-primary",
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
    ],
  },
  i18n: {
    search: {
      placeholder: "Search post title and description...",
    },
    archive: {
      select: "Select Year",
    },
    page: "Page",
    resultFound: " result(s) found",
  },
};
