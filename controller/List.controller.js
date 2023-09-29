const { ListItems } = require("../model/List.model");

const getList = async (req, res) => {

  console.log(req.query)
  const {
    year,
    topic,
    sector,
    region,
    pest,
    pestle,
    source,
    swot,
    country,
    likelihood,
    added
  } = req.query;

  // console.log(added)
  try {
    const filter = {};
  
    if (year) filter.year = year;
    if (topic) filter.topic = topic;
    if (sector) filter.sector = sector;
    if (region) filter.region = region;
    if (pest) filter.pest = pest;
    if(pestle) filter.pestle = pestle;
    if(added) filter.added = added;
    if (source) filter.source = source;
    if (country) filter.country = country;


 if(likelihood){
filter.likelihood = likelihood;
// console.log(typeof(likelihood))
 }
 console.log(filter)
    // console.log(filter,"filter")
    const data = await ListItems.find(filter);
    res.send({ "meassage": data });
  } catch (er) {
    res.send({ "meassage": er + "er" });
  }
};


// const filteredGet = async 




const postList = async (req, res) => {
  try {
    const data = await ListItems.insertMany();

    res.send({ msg: "data upload" });

  } catch (er) {
    res.send({ msg: er });
  }
};





module.exports = { getList ,postList};
