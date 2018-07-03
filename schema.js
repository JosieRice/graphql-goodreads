/*jshint esversion: 6 */

const fetch = require('node-fetch');
const util = require('util');
const parseXML = util.promisify(require('xml2js').parseString);
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt
} = require('graphql');

// fetch(
//     'https://www.goodreads.com/author/show.xml?id=2778055&key=3kdu7Yubf42nWWIKFKXIDQ'
// )
// .then(response => response.text())
// .then(parseXML);

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: '...',

    fields: () => ({

    })
});

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',

        fields: () => ({
            author: {
                type: AuthorType,
                args: {
                    id: { type: GraphQLInt }
                }
            }
        })
    })
});