module.exports = app => {
    var artists= require("../controllers/artists.controller.js");

    var router= require ("express").Router();

    router.get('/artists', artists.findAllArtists);

    app.use('/api', router);
    
}