# prepare_data.py
# --------------------------------

import pandas as pd
import requests
import json

print("Fetching data from Conseil Constitutionnel...")

# Download file from Conseil Constitutionnel (https://presidentielle2022.conseil-constitutionnel.fr/telechargement/parrainagestotal.csv)
url = 'https://presidentielle2022.conseil-constitutionnel.fr/telechargement/parrainagestotal.csv'
r = requests.get(url, allow_redirects=True)
open('data.csv', 'wb').write(r.content)

print("Processing data...")

# Imports dataframe from csv file and returns a dataframe
data = pd.read_csv('data.csv', sep=';')

print("Counting number of 'parrainages' by candidates...")

# Count the number of rows for each 'Candidat' value
count = data['Candidat'].value_counts()
print(count)

print("Exporting data...")

count.to_json('public/stats.json')

print("Done")