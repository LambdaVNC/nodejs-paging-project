const axios = require("axios");

const doSearch = async (req, res) => {
  let text = req.body.search;
  let paging = "";
  let activePage = 1;

  if (req.query.page) {
    paging = "page=" + req.query.page;
    activePage = req.query.page;
  }
  console.log("arama metni alındı --> " + text);
  try {
    const apiData = await axios.get(
      "https://emrealtunbilek.com/wp-json/wp/v2/posts?search=" + text
    );
    res.render("./articles/index.ejs", {
      articles: apiData.data,
      paging: apiData.headers,
      activePage: activePage,
    });
  } catch (err) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.header);
  }
};

const getAllArticle = async (req, res) => {
  let paging = "";
  let activePage = 1;

  if (req.query.page) {
    paging = "page=" + req.query.page;
    activePage = req.query.page;
  }
  try {
    const apiData = await axios.get(
      "https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20&" + paging
    );
    res.render("./articles/index.ejs", {
      articles: apiData.data,
      paging: apiData.headers,
      activePage: activePage,
    });
  } catch (err) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.header);
    res.json({
      "hata var : ": err.response.data,
    });
  }
};

const getOneArticle = async (req, res) => {
  let articleId = req.params.id;
  try {
    const apiDatas = await axios.get(
      "https://emrealtunbilek.com/wp-json/wp/v2/posts/" + articleId
    );
    console.log(apiDatas);
    res.render("./articles/article.ejs", { article: apiDatas.data });
  } catch (err) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.header);
  }
};
module.exports = {
  getAllArticle,
  getOneArticle,
  doSearch,
};
