export const defaultMetaKeys = [
  'PROPOSAL_NAME',
  'OPPORTUNITY_NUMBER',
  'CUSTOMER_NAME',
  'CUSTOMER_SALES_AREA_ID',
  'SALES_USER',
  'INTERESTED_CUSTOMER_NUMBER',
  'DEBITOR_CUSTOMER_NUMBER',
  'CUSTOMER_ASSET_NUMBER',
  'CUSTOMER_CONTRACT_NUMBER',
  'PROPOSAL_CREATED_BY',
  'PROPOSAL_CREATOR',
  'PROPOSAL_CREATED_AT'
]

export const allMetaKeys = defaultMetaKeys.concat([
  'ORIGINAL_ID',
  'VERSION'
])

export const proposalGeneralSettingsSections = {
  "proposal": "proposal",
  "document_settings": "document_settings",
  "customer_data": "customer_data",
  "proposal_creator": "proposal_creator",
  "calculation": "calculation",
  "sales": "sales",
  "bbg": "bbg"
}

export const proposalGeneralSettingsSectionHeaders = {
  "proposal": "required",
  "document_settings": "document_language",
  "customer_data": "customer_data",
  "proposal_creator": "proposal_creator",
  "calculation": "calculation",
  "sales": "sales_agent",
  "bbg": "bbg_numbers"
}

export const proposalSettingsTabs = {
  "generalSettings": "generalSettings",
  "primeGroup": "primeGroup",
  "calculationManager": "calculationManager",
  "layouts": "layouts",
  "versions": "versions"
}

export const containerColumnCheckboxes = {
  type_info: 'TYPE_INFO',
  system_id: 'SYSTEM_ID',
  xeasy_key: 'XEASY_KEY',
  name: 'NAME',
  layouts: 'LAYOUTS',
  language: 'LANGUAGE',
  languages: 'LANGUAGES',
  tags: 'TAGS',
  type: 'TYPE',
  created_at: 'CREATED_AT',
  created_by_id: 'CREATED_BY_ID',
  created_by: 'CREATED_BY',
  last_modified_at: 'LAST_MODIFIED_AT',
  last_modified_by_id: 'LAST_MODIFIED_BY_ID',
  last_modified_by: 'LAST_MODIFIED_BY',
  origin_id: 'ORIGIN_ID',
  origin_name: 'ORIGIN_NAME',
  origin_version: 'ORIGIN_VERSION',
  origin_created_by_id: 'ORIGIN_CREATED_BY_ID',
  origin_created_by: 'ORIGIN_CREATED_BY',
  rating: 'RATING',
  used_by_id: 'USED_BY_ID',
  usage_counter: 'USAGE_COUNTER',
  usage_counter_clone: 'USAGE_COUNTER_CLONE',
  last_usage_at: 'LAST_USAGE_AT',
  visible: 'VISIBLE',
  editable: 'EDITABLE',
  cloneable: 'CLONEABLE',
  moveable: 'MOVEABLE',
  chapter_lock: 'CHAPTER_LOCK',
  allowed_chapters: 'ALLOWED_CHAPTERS',
  archive: 'ARCHIVE',
  published: 'PUBLISHED',
  has_comments: 'HAS_COMMENTS',
  latest_version: 'LATEST_VERSION'
}