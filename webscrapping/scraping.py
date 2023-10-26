# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    scraping.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: damachad <damachad@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/10/24 16:40:21 by damachad          #+#    #+#              #
#    Updated: 2023/10/25 10:54:14 by damachad         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

import requests
import pandas
from bs4 import BeautifulSoup
from datetime import date
from fake_useragent import UserAgent

MAT_ROSE = "5601012011500"
MAT_SPARK = "5601012001310"
BOLOTAS = "5601012004427"
PAPA_FIGOS = "5601012011920"

LANCERS = "5601142192636"
ESPORAO = "5601989981820"
DIALOGO = "5603977006423"

CONTINENTE = "Continente"
GAR_SOARES = "Garrafeira Soares"
EL_CORTE = "Supermercado El Corte Inglés"
LOCATION = "Portugal"

url_cont = "https://www.continente.pt/pesquisa/"
url_gar_soares = "https://www.garrafeirasoares.pt/pt/resultado-da-pesquisa_36.html"
url_el_corte = "https://www.elcorteingles.pt/supermercado/pesquisar/"

terms = [MAT_ROSE, MAT_SPARK, BOLOTAS, PAPA_FIGOS]
terms_extra = [LANCERS, ESPORAO]
today_date = date.today().strftime("%d/%m/%Y")
headers = {"user-agent": UserAgent(browsers=["firefox", "chrome", "safari"]).random}
data = []


def set_original_name_ct(name):
    """Uniformize product names"""

    if name == "Mateus Vinho Rosé":
        return "Mateus Rosé Original"
    elif name == "Mateus Sparkling Espumante Rosé Bruto":
        return "Mateus Sparkling Brut Rosé"
    elif name == "Trinca Bolotas Regional Alentejano Vinho Tinto":
        return "Trinca Bolotas Tinto"
    elif name == "Papa Figos DOC Douro Vinho Branco":
        return "Papa Figos Branco"
    elif name == "Lancers Vinho Rosé":
        return "Lancers Vinho Rosé"
    elif name == "Defesa do Esporão Regional Alentejano Vinho Tinto":
        return "Defesa do Esporão Tinto"
    else:
        return name


def get_data_ct(url_search, ean):
    """Get data from url: wine name, capacity, price, discount, currency, date of scraping"""

    params = {"q": ean, "start": 0, "srule": "Continente", "pmin": 0.01}
    response = requests.get(url=url_search, params=params, headers=headers)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    product_link = soup.find(name="a", class_="pwc-tile--description col-tile--description")

    response = requests.get(url=product_link["href"], headers=headers)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    name = soup.find(name="h1", class_="pwc-h3 col-h3 product-name pwc-font--primary-extrabold mb-0").text.strip()
    name = set_original_name_ct(name)
    capacity = soup.find(name="span", class_="ct-pdp--unit col-pdp--unit").text.strip()
    capacity = " ".join(capacity.split(" ")[-2:])
    if capacity[-2:] == "cl":
        capacity = int(capacity[:-3] + "0")
    discount = "No"
    if soup.find(name="div",
                 class_="ct-product-tile-badge-value-wrapper col-product-tile-badge-value-wrapper "
                        "ct-product-tile-badge-value-wrapper--pvpr col-product-tile-badge-value-wrapper--pvpr   "):
        discount = "Yes"
    price_full = soup.find(name="span", class_="ct-price-formatted").text.strip()
    price = float(price_full[1:].replace(",", "."))
    currency = price_full[0]

    return [CONTINENTE, name, capacity, price, discount, currency, today_date, LOCATION]


def set_original_name_gs(name):
    """Uniformize product names"""

    if name == "Vinho Rosé Mateus":
        return "Mateus Rosé Original"
    elif name == "Espumante Mateus Rosé":
        return "Mateus Sparkling Brut Rosé"
    elif name == "Vinho Tinto Trinca Bolotas":
        return "Trinca Bolotas Tinto"
    elif name == "Vinho Branco Douro Papa Figos":
        return "Papa Figos Branco"
    elif name == "Vinho Rosé Lancers":
        return "Lancers Vinho Rosé"
    elif name == "Vinho Tinto Esporão Vinha Da Defesa":
        return "Defesa do Esporão Tinto"
    elif name == "Vinho Branco Douro Dialogo":
        return "Diálogo DOC Douro Vinho Branco"
    else:
        return name


def get_data_gs(url, ean):
    """Get data from url: wine name, capacity, price, discount, currency, date of scraping"""

    response = requests.get(url=url, params={"term": ean})
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    content = soup.find('script').string
    url_start = content.find("'") + 1
    url_end = content.rfind("'")
    location_value = content[url_start:url_end]

    response = requests.get(url=location_value)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    full_name = soup.find(name="div", class_="name clearfix").text.strip()
    name = " ".join(full_name.split(" ")[:-2])
    name = set_original_name_gs(name)
    capacity = " ".join(full_name.split(" ")[-2:])
    if capacity[-2:] == "Cl":
        capacity = int(capacity[:-3] + "0")
    discount = "No"
    if soup.find(name="span", class_="discount"):
        discount = "Yes"
    price_full = soup.find(name="span", class_="current").text.strip()
    price = float(price_full[:-1].replace(",", "."))
    currency = price_full[-1]

    return [GAR_SOARES, name, capacity, price, discount, currency, today_date, LOCATION]


def set_original_name_eci(name):
    """Uniformize product names"""

    if name == "Mateus Vinho Rosé":
        return "Mateus Rosé Original"
    elif name == "Mateus Espumante Sparkling Rosé Bruto":
        return "Mateus Sparkling Brut Rosé"
    elif name == "Trinca Bolotas Vinho Tinto Regional do Alentejo":
        return "Trinca Bolotas Tinto"
    elif name == "Papa Figos Vinho Branco do Douro":
        return "Papa Figos Branco"
    elif name == "Lancers Vinho Rosé":
        return "Lancers Vinho Rosé"
    elif name == "Defesa do Esporão Vinho Tinto do Alentejo":
        return "Defesa do Esporão Tinto"
    elif name == "Diálogo Vinho Branco do Douro":
        return "Diálogo DOC Douro Vinho Branco"
    else:
        return name


def get_data_eci(url_search, ean):
    """Get data from url: wine name, capacity, price, discount, currency, date of scraping"""

    params = {"term": ean, "search": "search", "type_ahead_tab": "panel_all"}
    response = requests.get(url=url_search, params=params, headers=headers)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    product_link = soup.find(name="a", class_="link event js-product-link")
    full_link = "https://www.elcorteingles.pt" + product_link["href"]

    response = requests.get(url=full_link, headers=headers)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    full_name = soup.find(name="div", class_="pdp-title mb").text.replace("\n", " ").strip()
    name = " ".join(full_name.split(" ")[:-3])
    name = set_original_name_eci(name)
    capacity = " ".join(full_name.split(" ")[-2:])
    if capacity[-2:] == "cl":
        capacity = int(capacity[:-3] + "0")
    if soup.find(name="div", class_="prices-price _current"):
        price_full = soup.find(name="div", class_="prices-price _current").text
        price = float(price_full[:-1].replace(",", "."))
        discount = "No"
    else:
        price_full = soup.find(name="div", class_="prices-price _offer").text
        price = float(price_full[:-1].replace(",", "."))
        discount = "Yes"
    currency = price_full[-1]

    return [EL_CORTE, name, capacity, price, discount, currency, today_date, LOCATION]


for term in terms:
    data.append(get_data_ct(url_cont, term))
    data.append(get_data_gs(url_gar_soares, term))
    data.append(get_data_eci(url_el_corte, term))

for term in terms_extra:
    data.append(get_data_ct(url_cont, term))
    data.append(get_data_gs(url_gar_soares, term))
    data.append(get_data_eci(url_el_corte, term))

df = pandas.DataFrame(data,
                      columns=["Store Name", "Wine Name", "Capacity", "Price", "Discount", "Currency",
                               "Date of scraping", "Location"])
df.to_csv("data_all.csv")
print(df.to_string())
