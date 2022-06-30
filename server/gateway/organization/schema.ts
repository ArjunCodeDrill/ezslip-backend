import OrganizationDetails from './resolver/orgnizationDetailsResolver'
import AddOrganizationDetails from './resolver/addOrganizationDetailsType';

import OrganizationDetailsType from './types/OrganizationDetailsType';
import AddDetailsInput from './types/addDetailsInputType';
import AddDetailsType from './types/addDetailsType'

export const organizationQuery = {
    getOrganizationDetails : {
        type : OrganizationDetailsType,
        description : 'Details of organization',
        resolve : OrganizationDetails
    },
}

export const organizationMutation = {
    updateOrganizationDetails : {
        type: AddDetailsType,
        description: "User Organization Details Updated",
        args : {
            input: {
                type: AddDetailsInput,
              },
        },
        resolve : AddOrganizationDetails
    }
}