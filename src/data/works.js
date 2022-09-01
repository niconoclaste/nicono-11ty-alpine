const EleventyFetch = require("@11ty/eleventy-fetch");
module.exports = async function() {
  let url = "http://niconoclaste.jp/lib/works/";

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "*", // 2y
    type: "json"
  });
};