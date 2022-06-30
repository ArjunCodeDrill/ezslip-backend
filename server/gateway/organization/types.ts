

export type OrganizationDetailsType = {
    organizationImage?: string,
    organizationLegalName?: string,
    organizationType?: string,
    address?: string,
    basicSalary?: string,
    HRA?: string,
    CIN?: string,
    EPF?: string,
    ESI?: string,
    message?: string,
}

export type AddOrganizationDetailsType = {
    input : {
        organizationImage?: string,
        organizationLegalName?: string,
        organizationType?: string,
        address?: string,
        basicSalary?: string,
        HRA?: string,
        CIN?: string,
        EPF?: string,
        ESI?: string,
        message?: string,
    }
} 

export type AddDetailsType = {
    message : string
}