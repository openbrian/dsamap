DSA Chapter Map
===

A proof of concept map of DSA chapters.

# Data

I saved the airtable data as a csv and converted it to json.

I grabbed cities.json from somewhere, probably Wikipedia, and copied the coordinates for some cities into dsa.json.  The location of some are hard to say because they are not in a city per se.

If I understand correctly, the airtable API will return data in the data.json format.  So the script will need to be adapted slightly.

# Start up like this

python3 -m http.server 8000

Python is not required, but we need to run some web server to support CORS, and it's an easy 1 liner.

# API

I don't have access to the airtable API, so I mock it out with dsa.json.

You'll need to authenticate of course.
