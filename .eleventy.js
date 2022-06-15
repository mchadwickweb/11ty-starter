const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  // Pass Through Config
  eleventyConfig.addPassthroughCopy("src/assests/");
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addPassthroughCopy("src/css/");

  // Watch Targets
  eleventyConfig.addWatchTarget("src/");

  // Inline and Minify CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    htmlTemplateEngine: "njk",
  };
};
