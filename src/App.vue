<template lang="pug">
#app
  loading(ref="loading")
  router-view(:is="layout")
</template>

<script>

window.config = {
  'appName': 'Dreamteam Survey',
  'locale': 'de-DE',
  'locales': {
    'de-DE':'DE',
    'en-EN':'EN',
    'es-ES':'ES',
    'zh-CN':'\u4e2d\u6587'
  },
  'githubAuth':null
}

import Loading from "@/components/Loading";

// Load layout components dynamically.
const requireContext = require.context("@/layouts", false, /.*\.vue$/);

const layouts = requireContext
  .keys()
  .map((file) => [file.replace(/(^.\/)|(\.vue$)/g, ""), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component;
    return components;
  }, {});

export default {
  el: "#app",

  components: {
    Loading,
  },

  data: () => ({
    layout: null,
    defaultLayout: "AppLayout",
  }),

  metaInfo() {
    const { appName } = window.config;

    return {
      title: appName,
      titleTemplate: `%s · ${appName}`,
    };
  },

  created: function () {
    this.updateViewportHeightOnResize();
  },

  mounted() {
    this.$loading = this.$refs.loading;
  },

  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout(layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout;
      }

      this.layout = layouts[layout];
    },

    updateViewportHeightOnResize() {
      // We listen to the resize event
      window.addEventListener("resize", () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });
    },
  },
};
</script>
