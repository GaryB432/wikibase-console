import type { PropertyId } from "wikibase-sdk";

// Common Wikidata properties for people
export const WIKIDATA_PERSON_PROPERTIES = {
  INSTANCE_OF: "P31", // Instance of (should be human Q5 for people)
  GIVEN_NAME: "P735", // Given name
  FAMILY_NAME: "P734", // Family name
  DATE_OF_BIRTH: "P569", // Date of birth
  DATE_OF_DEATH: "P570", // Date of death
  PLACE_OF_BIRTH: "P19", // Place of birth
  PLACE_OF_DEATH: "P20", // Place of death
  GENDER: "P21", // Sex or gender
  OCCUPATION: "P106", // Occupation
  EDUCATED_AT: "P69", // Educated at
  EMPLOYER: "P108", // Employer
  COUNTRY_OF_CITIZENSHIP: "P27", // Country of citizenship
  AWARD_RECEIVED: "P166", // Award received
  FIELD_OF_WORK: "P101", // Field of work
  NOTABLE_WORK: "P800", // Notable work
  IMAGE: "P18", // Image
  OFFICIAL_WEBSITE: "P856", // Official website
  ORCID_ID: "P496", // ORCID ID (for academics)
  TWITTER_USERNAME: "P2002", // Twitter username
  FACEBOOK_ID: "P2013", // Facebook ID
  LINKEDIN_ID: "P6634", // LinkedIn ID
  GITHUB_USERNAME: "P2037", // GitHub username
  NATIVE_LANGUAGE: "P103", // Native language
  LANGUAGE_SPOKEN: "P1412", // Languages spoken, written or signed
  RELIGION: "P140", // Religion
  POSITION_HELD: "P39", // Position held
  DOCTORAL_ADVISOR: "P184", // Doctoral advisor
  DOCTORAL_STUDENT: "P185", // Doctoral student
  CHILD: "P40", // Child
  FATHER: "P22", // Father
  MOTHER: "P25", // Mother
  SPOUSE: "P26", // Spouse
  CAUSE_OF_DEATH: "P509", // Cause of death
  RESIDENCE: "P551", // Residence
  BIBLIOGRAPHY: "P1343", // Bibliography
  POLITICAL_PARTY: "P102", // Political party
  HEIGHT: "P2048", // Height
  MEMBER_OF: "P463", // Member of
  EMAIL_ADDRESS: "P968", // Email address
};

export const WIKIDATA_OTHER_PROPERTIES = {
  START_TIME: "P580", // time an entity begins to exist or a statement starts being valid
};
export const propertyNames: Map<PropertyId, string> = new Map([
  ["P9", "CAUSE_OF_DEATH"],
  ["P18", "IMAGE"],
  ["P19", "PLACE_OF_BIRTH"],
  ["P20", "PLACE_OF_DEATH"],
  ["P21", "GENDER"],
  ["P22", "FATHER"],
  ["P25", "MOTHER"],
  ["P26", "SPOUSE"],
  ["P27", "COUNTRY_OF_CITIZENSHIP"],
  ["P31", "INSTANCE_OF"],
  ["P39", "POSITION_HELD"],
  ["P40", "CHILD"],
  ["P69", "EDUCATED_AT"],
  ["P101", "FIELD_OF_WORK"],
  ["P102", "POLITICAL_PARTY"],
  ["P103", "NATIVE_LANGUAGE"],
  ["P106", "OCCUPATION"],
  ["P108", "EMPLOYER"],
  ["P140", "RELIGION"],
  ["P166", "AWARD_RECEIVED"],
  ["P184", "DOCTORAL_ADVISOR"],
  ["P185", "DOCTORAL_STUDENT"],
  ["P463", "MEMBER_OF"],
  ["P496", "ORCID_ID"],
  ["P551", "RESIDENCE"],
  ["P569", "DATE_OF_BIRTH"],
  ["P570", "DATE_OF_DEATH"],
  ["P734", "FAMILY_NAME"],
  ["P735", "GIVEN_NAME"],
  ["P800", "NOTABLE_WORK"],
  ["P856", "OFFICIAL_WEBSITE"],
  ["P968", "EMAIL_ADDRESS"],
  ["P1343", "BIBLIOGRAPHY"],
  ["P1412", "LANGUAGE_SPOKEN"],
  ["P2002", "TWITTER_USERNAME"],
  ["P2013", "FACEBOOK_ID"],
  ["P2037", "GITHUB_USERNAME"],
  ["P2048", "HEIGHT"],
  ["P6634", "LINKEDIN_ID"],
]);
