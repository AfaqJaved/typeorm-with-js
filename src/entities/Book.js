const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Book", // Will use table name `category` as default behaviour.
    tableName: "books", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        title: {
            type: "varchar",
        },
        price : {
            type : "int"
        }
    },
})