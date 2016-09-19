//Exporting this function for external usage.
exports.insertInfo = function(dbName, username, password, uuid, ratingWatson, ratingVoicebase, email) {

    var Sequelize = require('sequelize');

    var connection = new Sequelize(dbName, username, password, {
        dialect: 'postgres'
    });


    var Entity = connection.define('conference_transcription_db', {
        UUID: {
            type: Sequelize.UUID,
            allowNull: false
        },
        voicebase_rating: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        watson_rating: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });



    connection.sync().then(function() {

      var data =
      {
        UUID: uuid,
        voicebase_rating: ratingVoicebase,
        watson_rating: ratingWatson,
        user_email: email
      };

      Entity.create(data).then(function(post){
        console.dir(post.get());
      })



    }).catch(function(error) {
        console.log(error);
    });

}