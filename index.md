---
layout: default
title: Main
---

## Wikidata Links

[Wikidata Introduction](https://www.wikidata.org/wiki/Wikidata:Introduction)

[Working with Wikidata](https://www.wikidata.org/wiki/Wikidata:Introduction#Working_with_Wikidata)

[Wikidata Query Builder](https://query.wikidata.org/querybuilder/?uselang=en)

https://www.wikidata.org/w/api.php?action=wbsearchentities&search=einstein&language=en&limit=20&continue=0&format=json&uselang=en&type=item

[Q937 - Wikidata](https://www.wikidata.org/wiki/Q937)

## Wikidata Help Links

[Help:Properties - Wikidata](https://www.wikidata.org/wiki/Help:Properties)

[Help:Properties - Wikidata](https://www.wikidata.org/wiki/Help:Properties#Search)

[Wikidata:List of properties - Wikidata](https://www.wikidata.org/wiki/Wikidata:List_of_properties)

[Wikidata:Glossary - Wikidata - `Statement`](https://www.wikidata.org/wiki/Wikidata:Glossary#Statement)

[Wikidata:Glossary - Wikidata - `Property`](https://www.wikidata.org/wiki/Wikidata:Glossary#Property)

[Wikidata Property Explorer](https://prop-explorer.toolforge.org/)

[Help:Properties - Wikidata - `Lists`](https://www.wikidata.org/wiki/Help:Properties#Lists)

[Help:Properties - Wikidata - `Using Properties`](https://www.wikidata.org/wiki/Help:Properties#Using_properties)

## Query API Example

https://query.wikidata.org/#SELECT%20%3Fitem%20%3FitemLabel%0AWHERE%20%7B%0A%20%20SERVICE%20wikibase%3Amwapi%20%7B%0A%20%20%20%20bd%3AserviceParam%20wikibase%3Aendpoint%20%22www.wikidata.org%22%20.%0A%20%20%20%20bd%3AserviceParam%20wikibase%3Aapi%20%22EntitySearch%22%20.%0A%20%20%20%20bd%3AserviceParam%20mwapi%3Asearch%20%22churchill%22%20.%0A%20%20%20%20bd%3AserviceParam%20mwapi%3Alimit%20%2210%22%20.%0A%20%20%20%20%3Fitem%20wikibase%3AapiOutput%20mwapi%3Aitem%20.%0A%20%20%7D%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22.%20%7D%0A%7D%0ALIMIT%2010

You can find more information about Albert Einstein's birthplace and wikidata [here](/src/wikibase/structure.md).

