# Wikibase Console

![Just My Happy Project](https://img.shields.io/badge/Just%20My-Happy%20Project-a020f0)
![GitHub branch check runs](https://img.shields.io/github/check-runs/GaryB432/wikibase-console/master)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Command line app for exploring the [Wikibase API](https://www.mediawiki.org/wiki/Wikibase/API).

Most of my repos are private but this one is in front of my [loyal followers](https://github.com/GaryB432?tab=followers) (you know who you are 😎).

# Goals

Be a repo that

- keeps me young and enthused
- uses modules (ESM)
- can be used to reproduce any dependency issues
- takes baby-steps with LLM and co-pilot (commit messages for now and just a bit of code generation which is documented)
- serves as dogfood and a laboratory for my other projects

  - [eslint-plugin-gb - npm](https://www.npmjs.com/package/eslint-plugin-gb)
  - [gb-schematics - npm](https://www.npmjs.com/package/gb-schematics)
  - [humanaccomplishment.com](https://www.humanaccomplishment.com)

- is a [playground](https://garyb432.github.io/wikibase-console/) for [GitHub Pages](https://pages.github.com/) (`gh-pages` branch) and [Jekyll](https://jekyllrb.com/) should I ever get to that.

# Non-Goals

- Duplicate functionality of official Wikibase tools
- Be a real tool that people will actually use

# Common development commands

- pnpm dlx prettier . -w
- pnpm exec eslint
- pnpm run build
- pnpm run lint
- pnpm run test
- tsx src/main.ts

# References

[maxlath/wikibase-sdk](https://github.com/maxlath/wikibase-sdk): JS utils functions to query a Wikibase instance and simplify its results

[Wikibase/API - MediaWiki](https://www.mediawiki.org/wiki/Wikibase/API)

[wikidata.org/w/api.php?action=wbgetentities&ids=Q33725&format=json&languages=en&props=info%7Clabels](https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q33725&format=json&languages=en&props=info%7Clabels)

[wikidata.org/w/api.php?action=wbgetentities&ids=Q125121451&format=json&languages=en&props=info%7Clabels](https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q125121451&format=json&languages=en&props=info%7Clabels)

# Wikidata and the Semantic Web

```mermaid
graph TD
  subgraph ClaimStructure
    Claim -- has one --> MainSnak
    Claim -- can have many --> Qualifier
    Claim -- can have many --> Reference
    Claim[Claim]
    MainSnak["Snak (Main)"]
    Qualifier[Qualifier]
    Reference[Reference]
  end

  subgraph SnakDetails
    MainSnak -- has one --> Property
    MainSnak -- has one --> DataValue
    Property[Property]
  end

  subgraph ValueTypes
    DataValue[DataValue]
    DataValue -- is a --> String
    DataValue -- is a --> WikipediaId
    String[String]
    WikipediaId[WikipediaId]
  end

```

> Albert Einstein was born at Ulm

```mermaid
graph TD
  subgraph ClaimStructure
    Claim["Claim"]
    Claim -- has one --> MainSnak
    Claim -- can have many --> Qualifier
    Claim -- can have many --> Reference
  end

  subgraph SnakDetails
    MainSnak["Snak (Main)"]
    MainSnak -- has one --> Property
    MainSnak -- has one --> DataValue
    Property["Property"]
  end

  subgraph ValueTypes
    DataValue["DataValue"]
    DataValue -- is a --> EntityId
  end

  subgraph ExampleClaim
    Claim -- refers to --> EinsteinEntity
    Claim -- describes property --> BornAtProperty
    MainSnak -- has value --> UlmEntity
    EinsteinEntity["Albert Einstein (Q937)"]
    BornAtProperty["P19: Born at"]
    UlmEntity["Ulm (Q20440)"]
  end
  %%Styling
  style Claim fill:#bbf,stroke:#555,stroke-width:2px
  style MainSnak fill:#ffb,stroke:#555,stroke-width:2px
  style Property fill:#bbf,stroke:#555,stroke-width:2px
  style DataValue fill:#bbf,stroke:#555,stroke-width:2px
  style Qualifier fill:#bbf,stroke:#555,stroke-width:2px
  style Reference fill:#bbf,stroke:#555,stroke-width:2px
  style String fill:#eee,stroke:#555,stroke-width:2px
  style WikipediaId fill:#eee,stroke:#555,stroke-width:2px
  style EntityId fill:#eee,stroke:#555,stroke-width:2px
  style EinsteinEntity fill:#eee,stroke:#000,stroke-width:2px
  style BornAtProperty fill:#eee,stroke:#000,stroke-width:2px
  style UlmEntity fill:#eee,stroke:#000,stroke-width:2px

```
