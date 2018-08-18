export default {
  items: [
    {
      name: "Home",
      url: "",
      icon: "fa fa-home fa-2x"
    },
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "fa fa-tachometer"
    },

    {
      name: "Definitions",
      url: "/theme/typography",
      icon: "fa fa-book fa-2x",
      children: [
        {
          name: "Definition 1",
          url: "/buttons/buttons",
          icon: "fa fa-book"
        },
        {
          name: "Definition 2 ",
          url: "/buttons/button-dropdowns",
          icon: "fa fa-book"
        },
        {
          name: "Definition 3",
          url: "/buttons/button-groups",
          icon: "fa fa-book"
        },
        {
          name: "Definition 4",
          url: "/buttons/brand-buttons",
          icon: "fa fa-book"
        }
      ]
    },
    {
      name: "Logs",
      url: "/base",
      icon: "fa fa-folder fa-2x",
      children: [
        {
          name: "Log 1",
          url: "/base/breadcrumbs",
          icon: "fa fa-folder"
        },
        {
          name: "Log2",
          url: "/base/cards",
          icon: "fa fa-folder"
        },
        {
          name: "Log 3",
          url: "/base/forms",
          icon: "fa fa-folder"
        },
        {
          name: "Log 4",
          url: "/base/jumbotrons",
          icon: "fa fa-folder"
        },
        {
          name: "Log 5",
          url: "/base/list-groups",
          icon: "fa fa-folder"
        }
      ]
    },
    {
      name: "Reports",
      url: "/buttons",
      icon: "fa fa-clipboard fa-2x",
      children: [
        {
          name: "Report 1",
          url: "/buttons/buttons",
          icon: "fa fa-clipboard"
        },
        {
          name: "Report 2",
          url: "/buttons/button-dropdowns",
          icon: "fa fa-clipboard"
        },
        {
          name: "Report 3",
          url: "/buttons/button-groups",
          icon: "fa fa-clipboard"
        },
        {
          name: "Report 4",
          url: "/buttons/brand-buttons",
          icon: "fa fa-clipboard"
        }
      ]
    },
    {
      name: "Settings",
      url: "/charts",
      icon: "fa fa-cog fa-2x"
    },
    {
      name: "User & Groups",
      url: "/icons",
      icon: "fa fa-users fa-2x"
    }
  ]
};
