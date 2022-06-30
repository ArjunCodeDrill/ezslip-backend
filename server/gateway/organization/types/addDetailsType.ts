import { GraphQLObjectType,GraphQLString} from 'graphql';

const OrganizationDetailsType = new GraphQLObjectType({
    name: "Add_Organization_details",
    description: "Add and Update Organization Details",
    fields: () => ({
        message : { type: GraphQLString}
    })
})

export default OrganizationDetailsType;