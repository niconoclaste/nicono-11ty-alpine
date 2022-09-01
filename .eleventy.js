
module.exports = function(eleventyConfig) {
  // eleventyConfig.addWatchTarget('src/assets/styles.css');
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': '/assets/js/alpine.js',
  });
	eleventyConfig.addPassthroughCopy({ static: "/" });
	eleventyConfig.addPassthroughCopy({ 'src/assets/': "/assets" });
	eleventyConfig.addPassthroughCopy({ 'src/data/': "/data" });
  eleventyConfig.setBrowserSyncConfig({
    open: true,
  });
	eleventyConfig.setQuietMode(true);
  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
			input: "src/pages",
			includes: "../components",
			layouts: "../layouts",
			data: "../data",
			output: "dist",
    },
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		// markdownTemplateEngine: "njk"
  };
};