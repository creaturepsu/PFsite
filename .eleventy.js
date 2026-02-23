module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/_includes/");
    eleventyConfig.addPassthroughCopy("./src/CSS/");
    eleventyConfig.addPassthroughCopy("./src/img/");
    return{
        dir: {
            input: "src",
            output: "_site"
        },
    };
};
