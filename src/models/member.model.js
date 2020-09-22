// define a Sequelize model mapped with corresponding PostgreSQL
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define({
    id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  firstname: {
			type: DataTypes.STRING
	  },
	  lastname: {
			type: DataTypes.STRING
  	},
	  address: {
			type: DataTypes.STRING
	  },
	  age: {
			type: DataTypes.INTEGER
    },
  }, function(require, factory) {
    'use strict';
    
	});
	return Member
}