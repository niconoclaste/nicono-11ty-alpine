const EleventyFetch = require("@11ty/eleventy-fetch");
module.exports = async function() {
	try {
    let url = "http://niconoclaste.jp/lib/works/";

		/* This returns a promise */
		return EleventyFetch(url, {
			duration: "*",
			type: "json"
		});
	} catch(e) {
		return {
			// my failure fallback data
		}
	}
};
