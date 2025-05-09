# Wikibase Console

![Just My Happy Project](https://img.shields.io/badge/Just%20My-Happy%20Project-ff69b4)
![Don't Expect Much](https://img.shields.io/badge/Don't%20Expect-Much%2C%20It's%20Just%20Fun!-a020f0)
![GitHub branch check runs](https://img.shields.io/github/check-runs/GaryB432/wikibase-console/master)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

ESM command line app for exploring the [Wikibase API](https://www.mediawiki.org/wiki/Wikibase/API).

Most of my repos are private but I wanted to show my friends.

## References

[maxlath/wikibase-sdk](https://github.com/maxlath/wikibase-sdk): JS utils functions to query a Wikibase instance and simplify its results

[Wikibase/API - MediaWiki](https://www.mediawiki.org/wiki/Wikibase/API)

[wikidata.org/w/api.php?action=wbgetentities&ids=Q33725&format=json&languages=en&props=info%7Clabels](https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q33725&format=json&languages=en&props=info%7Clabels)

[wikidata.org/w/api.php?action=wbgetentities&ids=Q125121451&format=json&languages=en&props=info%7Clabels](https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q125121451&format=json&languages=en&props=info%7Clabels)

## Common Properties

<!-- prettier-ignore -->
| Property | Peopwery | Note | 
| --- | --- | --- | 
| P166 | [AWARD_RECEIVED](https://www.wikidata.org/wiki/Property:P166) | Award received | 
| P1343 | [BIBLIOGRAPHY](https://www.wikidata.org/wiki/Property:P1343) | Bibliography | 
| P509 | [CAUSE_OF_DEATH](https://www.wikidata.org/wiki/Property:P509) | Cause of death | 
| P40 | [CHILD](https://www.wikidata.org/wiki/Property:P40) | Child | 
| P27 | [COUNTRY_OF_CITIZENSHIP](https://www.wikidata.org/wiki/Property:P27) | Country of citizenship | 
| P569 | [DATE_OF_BIRTH](https://www.wikidata.org/wiki/Property:P569) | Date of birth | 
| P570 | [DATE_OF_DEATH](https://www.wikidata.org/wiki/Property:P570) | Date of death | 
| P184 | [DOCTORAL_ADVISOR](https://www.wikidata.org/wiki/Property:P184) | Doctoral advisor | 
| P185 | [DOCTORAL_STUDENT](https://www.wikidata.org/wiki/Property:P185) | Doctoral student | 
| P69 | [EDUCATED_AT](https://www.wikidata.org/wiki/Property:P69) | Educated at | 
| P968 | [EMAIL_ADDRESS](https://www.wikidata.org/wiki/Property:P968) | Email address | 
| P108 | [EMPLOYER](https://www.wikidata.org/wiki/Property:P108) | Employer | 
| P2013 | [FACEBOOK_ID](https://www.wikidata.org/wiki/Property:P2013) | Facebook ID | 
| P734 | [FAMILY_NAME](https://www.wikidata.org/wiki/Property:P734) | Family name | 
| P22 | [FATHER](https://www.wikidata.org/wiki/Property:P22) | Father | 
| P101 | [FIELD_OF_WORK](https://www.wikidata.org/wiki/Property:P101) | Field of work | 
| P21 | [GENDER](https://www.wikidata.org/wiki/Property:P21) | Sex or gender | 
| P2037 | [GITHUB_USERNAME](https://www.wikidata.org/wiki/Property:P2037) | GitHub username | 
| P735 | [GIVEN_NAME](https://www.wikidata.org/wiki/Property:P735) | Given name | 
| P2048 | [HEIGHT](https://www.wikidata.org/wiki/Property:P2048) | Height | 
| P18 | [IMAGE](https://www.wikidata.org/wiki/Property:P18) | Image | 
| P31 | [INSTANCE_OF](https://www.wikidata.org/wiki/Property:P31) | Instance of (should be human Q5 for people) | 
| P1412 | [LANGUAGE_SPOKEN](https://www.wikidata.org/wiki/Property:P1412) | Languages spoken, written or signed | 
| P6634 | [LINKEDIN_ID](https://www.wikidata.org/wiki/Property:P6634) | LinkedIn ID | 
| P463 | [MEMBER_OF](https://www.wikidata.org/wiki/Property:P463) | Member of | 
| P25 | [MOTHER](https://www.wikidata.org/wiki/Property:P25) | Mother | 
| P103 | [NATIVE_LANGUAGE](https://www.wikidata.org/wiki/Property:P103) | Native language | 
| P800 | [NOTABLE_WORK](https://www.wikidata.org/wiki/Property:P800) | Notable work | 
| P106 | [OCCUPATION](https://www.wikidata.org/wiki/Property:P106) | Occupation | 
| P856 | [OFFICIAL_WEBSITE](https://www.wikidata.org/wiki/Property:P856) | Official website | 
| P496 | [ORCID_ID](https://www.wikidata.org/wiki/Property:P496) | ORCID ID (for academics) | 
| P19 | [PLACE_OF_BIRTH](https://www.wikidata.org/wiki/Property:P19) | Place of birth | 
| P20 | [PLACE_OF_DEATH](https://www.wikidata.org/wiki/Property:P20) | Place of death | 
| P102 | [POLITICAL_PARTY](https://www.wikidata.org/wiki/Property:P102) | Political party | 
| P39 | [POSITION_HELD](https://www.wikidata.org/wiki/Property:P39) | Position held | 
| P140 | [RELIGION](https://www.wikidata.org/wiki/Property:P140) | Religion | 
| P551 | [RESIDENCE](https://www.wikidata.org/wiki/Property:P551) | Residence | 
| P26 | [SPOUSE](https://www.wikidata.org/wiki/Property:P26) | Spouse | 
| P2002 | [TWITTER_USERNAME](https://www.wikidata.org/wiki/Property:P2002) | Twitter username |
