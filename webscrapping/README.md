# Web scarping of wine products' data
This Python program collects price and discount information for specific wines from three different online stores in Portugal: Continente, Garrafeira Soares, and Supermercado El Corte Inglés. 
It scrapes the product data for each wine using the EAN (European Article Number) code, and then saves the information to a CSV file for easy analysis.

## Prerequisites
Before running the program, make sure you have the required Python libraries installed. You can install them using pip:
```
pip install requests
pip install pandas
pip install beautifulsoup4
pip install fake_useragent
```
## Usage
Update the EAN codes in the script for the wines you want to track. The script currently includes six wines, but you can add or remove wines as needed.
```
MAT_ROSE = "5601012011500"
MAT_SPARK = "5601012001310"
BOLOTAS = "5601012004427"
PAPA_FIGOS = "5601012011920"
LANCERS = "5601142192636"
ESPORAO = "5601989981820"
```
Run python *scraping.py*   

The program will scrape data from the three online stores for each wine and save the results to a CSV file named "data_all.csv" in the same directory.
The program will also print the collected data to the console.

## Data Columns
The program collects the following information for each wine:

- Store Name: The name of the online store where the product was found.
- Wine Name: The name of the wine, standardized for consistency.
- Capacity: The capacity of the wine bottle (in milliliters).
- Price: The current price of the wine.
- Discount: Whether the wine is currently on discount ("Yes" or "No").
- Currency: The currency in which the price is listed.
- Date of scraping: The date when the data was collected.
- Location: The location for which the data is collected (in this case, "Portugal").
  
## Disclaimer
Please note that web scraping may violate the terms of service of some websites, and the accuracy of the data collected may vary. Make sure to use this program responsibly and in compliance with the terms of the websites you are scraping.

**Note**: The program is set up to work with the specific website structures mentioned in the script. If the structure of the websites changes, the script may need to be updated to reflect those changes.
