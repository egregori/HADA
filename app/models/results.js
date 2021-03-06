exports.definition = {
	config: {
		columns: {
			"result_id": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "created": "text",
		    "reference": "string",
		    "result": "string"
		},
		"defaults" : {
        	"created": new Date()
    	},
		adapter: {
			type: "sql",
			collection_name: "results",
			idAttribute: 'result_id'
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// funciones extend y propiedades van aqui
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// funciones extend y propiedades van aqui

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};
