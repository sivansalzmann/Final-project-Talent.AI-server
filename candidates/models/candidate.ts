import { Schema, model } from "mongoose";

const titleSchema = new Schema({
  name: { type: String },
  role: { type: String },
  sub_role: { type: String },
  level: { type: [String] },
});
const companyExperienceSchema = new Schema({
  company_id: { type: String },
  location_names: { type: [String] },
  end_date: { type: String },
  start_date: { type: String },
  title: { type: titleSchema },
  is_primary: { type: Boolean },
});

const schoolSchema = new Schema({
  name: { type: String },
  type: { type: String },
  id: { type: String },
  location: { type: String },
  linkedin_url: { type: String },
  facebook_url: { type: String },
  twitter_url: { type: String },
  website: { type: String },
  domain: { type: String },
});

const educationSchema = new Schema({
  school: { type: schoolSchema },
  degrees: { type: [String] },
  start_date: { type: String },
  end_date: { type: String },
  majors: { type: [String] },
  minors: { type: [String] },
  gpa: { type: Number },
});

const experienceSchema = new Schema({
  company: { type: companyExperienceSchema },
});

const candidateSchema = new Schema(
  {
    full_name: { type: String },
    gender: { type: String },
    birth_year: { type: Number },
    birth_date: { type: String },
    industry: { type: String },
    job_title: { type: String },
    job_title_role: { type: String },
    job_title_sub_role: { type: String },
    job_title_levels: { type: [String] },
    job_company_id: { type: String },
    interests: { type: [String] },
    skills: { type: [String] },
    experience: { type: [experienceSchema] },
    education: { type: [educationSchema] },
  },
  { collection: "candidates" }
);

const CandidateCollection = model("Candidate", candidateSchema);
export { CandidateCollection };
