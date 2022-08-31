module.exports = function(eleventyConfig) {
  // eleventyConfig.addWatchTarget('src/assets/styles.css');
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './assets/js/alpine.js',
  });
  eleventyConfig.addPassthroughCopy('src/assets/');
  eleventyConfig.setBrowserSyncConfig({
    open: true,
  });
  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};