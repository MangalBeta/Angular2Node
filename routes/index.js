module.exports = function(app, express) {
      let router = express.Router();

      router.get('/*', function (req, res, next) {
             res.sendFile(path.join(__dirname, "/../client/dist", "index.html"));
        });
      app.use('/', router);
}
