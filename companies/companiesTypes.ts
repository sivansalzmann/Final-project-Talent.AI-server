export interface Company {
  _id: String;
  name: string;
  size: string;
  employee_count: Number;
  founded: Number;
  industry: string;
  location: location;
  linkedin_id: string;
  linkedin_url: string;
  facebook_url: string;
  twitter_url: string;
  profiles: string[];
  website: string;
  ticker: string;
  type: string;
  summary: string;
  tags: string[];
  headline: string;
  alternative_names: string[];
  alternative_domains: string[];
  affiliated_profiles: string[];
}

export interface location {
  name: string;
  locality: string;
  region: string;
  metro: string;
  country: string;
  continent: string;
  street_address: string;
  address_line_2: string;
  postal_code: string;
  geo: string;
}

export interface GetCompanyInput {
  companyID: string;
}

export interface CompanyInput {
  companyID: string;
  name: string;
  size: string;
  employee_count: string;
  founded: string;
  industry: string;
  location: location;
  linkedin_id: string;
  linkedin_url: string;
  facebook_url: string;
  twitter_url: string;
  profiles: [string];
  website: string;
  ticker: string;
  type: string;
  summary: string;
  tags: [string];
  headline: string;
  alternative_names: [string];
  alternative_domains: [string];
  affiliated_profiles: [string];
}

export interface AddCompanyInput {
  companyInfo: CompanyInput;
}

export interface UpdateCompanyInput {
  companyID: string;
  companyInfo: CompanyInput;
}

export interface DeleteCompanyInput {
  companyID: string;
}
