export const NOT_EDITABLE = 0
export const EDITABLE_USER = 1
export const EDITABLE_ADMIN = 2
export const EDITABLE_EMPTY = 3

const draftMetadataConfig = {
  NOT_EDITABLE: 0,
  EDITABLE_USER: 1,
  EDITABLE_ADMIN: 2,
  EDITABLE_EMPTY: 3,
  config: {

    COMMENT: {
      searchable: false,
      filterable: false,
      viewable: false,
      unique: true,
      required: false,
      editable: EDITABLE_USER,
      data_type: 'string',
    },

    BUSINESS_CASE: {
      searchable: false,
      filterable: false,
      viewable: false,
      unique: false,
      required: false,
      editable: EDITABLE_USER,
      data_type: 'string',
    },

    REGENERATE_CHANGELOG: {
      searchable: false,
      filterable: false,
      viewable: false,
      unique: true,
      required: false,
      editable: false,
      data_type: 'string',
    },

    DEBITOR_CUSTOMER_NUMBER: {
      searchable: true,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    INTERESTED_CUSTOMER_NUMBER: {
      searchable: true,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CUSTOMER_NUMBER: {
      searchable: true,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CUSTOMER_ASSET_NUMBER: {
      searchable: true,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CUSTOMER_CONTRACT_NUMBER: {
      searchable: true,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CUSTOMER_NAME: {
      searchable: true,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CUSTOMER_ADDRESS: {
      searchable: true,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CUSTOMER_ZIP_CODE: {
      searchable: true,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CUSTOMER_CITY: {
      searchable: true,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CUSTOMER_COUNTRY: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CUSTOMER_SALES_AREA_ID: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    CUSTOMER_SALES_AREA: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CONTACT_PERSON_TITLE: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CONTACT_PERSON_SALUTATION: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CONTACT_PERSON_FIRST_NAME: {
      searchable: true,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CONTACT_PERSON_LAST_NAME: {
      searchable: true,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    DELIVER_CUSTOMER_ADDRESS: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    DELIVER_CUSTOMER_CITY: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    DELIVER_CUSTOMER_COUNTRY: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    DELIVER_CUSTOMER_NAME: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    DELIVER_CUSTOMER_ZIP_CODE: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    ORIGINAL_ID: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    OPPORTUNITY_NUMBER: {
      searchable: true,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    PROPOSAL_NAME: {
      searchable: true,
      filterable: false,
      viewable: true,
      unique: true,
      required: true,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    VERSION: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'int',
    },

    LANGUAGE: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    LAYOUT: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    TECHNOLOGY_MANUFACTURER_NAME: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_CREATOR_ID: {
      searchable: false,
      filterable: false,
      viewable: false,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'int',
    },

    PROPOSAL_CREATED_AT: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'date',
    },

    PROPOSAL_CREATED_BY: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    PROPOSAL_CREATOR: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_TEAM_LEADER: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_LINE_MANAGER: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',

    },

    PROPOSAL_COST_CENTER: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_COST_CENTER_RESPONSIBLE: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_CREATOR_MAIL: {
      viewable: true,
      searchable: false,
      filterable: false,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_CREATOR_PHONE: {
      viewable: true,
      searchable: false,
      filterable: false,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_CREATOR_MOBILE: {
      viewable: true,
      searchable: false,
      filterable: false,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_CREATOR_FAX: {
      viewable: true,
      searchable: false,
      filterable: false,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_UPDATOR_ID: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'int',
    },

    PROPOSAL_UPDATED_AT: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'date',
    },

    PROPOSAL_UPDATED_BY: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_UPDATOR: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    LAST_PDF_CREATED_AT: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'date',
    },

    LAST_PDF_VERSION: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'int',
      default: 0
    },

    LAST_PDF_CREATED_BY: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    LAST_PDF_CREATOR: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    SALES_USER_ID: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    SALES_USER: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    SALES_TEAM_LEADER: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    SALES_LINE_MANAGER: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    SALES_COST_CENTER: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    SALES_COST_CENTER_RESPONSIBLE: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    SALES_MAIL: {
      viewable: true,
      searchable: false,
      filterable: false,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    SALES_PHONE: {
      viewable: true,
      searchable: false,
      filterable: false,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    SALES_MOBILE: {
      viewable: true,
      searchable: false,
      filterable: false,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    SALES_FAX: {
      viewable: true,
      searchable: false,
      filterable: false,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    XEASY_CALCULATION: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'int',
      default: false
    },

    INID_ID: {
      searchable: true,
      filterable: false,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    XEASY_CALCULATION_ID: {
      searchable: true,
      filterable: false,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    XLSX_CALCULATION: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'int',
      default: false
    },

    MANUAL_CALCULATION: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'int',
      default: false
    },

    CALCULATION_CREATOR_ID: {
      searchable: false,
      filterable: false,
      viewable: false,
      unique: false,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'int',
    },

    CALCULATION_CREATED_AT: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: false,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'date',
    },

    CALCULATION_CREATED_BY: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: true,
      editable: EDITABLE_EMPTY,
      data_type: 'string',
    },

    CALCULATION_CREATOR: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    CALCULATION_COST_CENTER: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    CURRENCY: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PRIMEGROUP_MEMBER_ID: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PRIMEGROUP_MEMBER_NAME: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    COLLABORATION: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'int',
      default: false
    },

    COLLABORATION_MEMBER_ID: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    COLLABORATION_MEMBER_NAME: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    APPROVAL_REQUEST: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'int',
      default: false
    },

    APPROVAL_STATUS: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    APPROVAL_BY: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    APPROVAL_BY_NAME: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    APPROVAL_AT: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'date',
    },

    VISIBILITY_TYPE: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: false,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    VISIBILITY_STATUS: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'int',
      default: true
    },

    VISIBILITY_DUE_DATE: {
      searchable: false,
      filterable: true,
      viewable: true,
      unique: true,
      required: true,
      editable: NOT_EDITABLE,
      data_type: 'date',
      // default: Proc.new { Date.today.end_of_day + 6.months }
    },

    VISIBILITY_CREATOR_ID: {
      searchable: false,
      filterable: false,
      viewable: false,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    VISIBILITY_CREATED_BY: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    VISIBILITY_CREATOR: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    },

    PROPOSAL_DIR: {
      searchable: false,
      filterable: false,
      viewable: true,
      unique: true,
      required: false,
      editable: NOT_EDITABLE,
      data_type: 'string',
    }
  }
}

export { draftMetadataConfig }