## Intro

In response to the pressing challenge posed to Sogrape's Markets and Distribution teams, we, a dedicated group of 42 Porto students, are presented with an exciting opportunity to develop an innovative solution for tracking wine prices across various online stores. Our collaborative efforts seek to address the specific needs of the wine industry, enhancing the company's market competitiveness and distribution efficiency.

This challenge is multifaceted, encompassing two key dimensions: the Technical Dimension and the Visualization and Interaction Dimension. It requires a range of skills, including web scraping, data management, and interface design. Our ultimate goal is to create a comprehensive solution that is user-friendly, even for professionals without technical expertise, while also paving the way for the global expansion of this program to track and harvest data from wine markets worldwide.

For this beta version or minimum viable product (MVP), our task involves tracking data from three prominent websites: Continente Online, Garrafeira Soares, and Supermercado El Corte Inglés. The selected products for initial monitoring include Mateus Rose Original, Mateus Sparkling Rose, Herdade do Peso Trinca Bolotas Tinto, and Casa Ferreirinha Papa Figos Branco.

## Approach to the Challenge

### Team Responsibilities

To tackle this multifaceted challenge effectively, we've carefully distributed responsibilities within our team:

- **Ana Sousa (asousa-n) and Matheus Alves (malves-b)** are responsible for designing a user-friendly dashboard.
- **David Machado (damachad), David Caetano (dacaetano) and Gabriel Amado (gamado-x)** lead the web scraping efforts, with David Caetano also overseeing database management.

### Choice of Technology

Our choice of technology reflects a robust and efficient approach to web scraping and data management:

- **Programming Language:** We have selected Python as our primary programming language, well-suited for web scraping. Python's versatility and libraries make it an ideal choice.
- **HTML Parsing:** To parse HTML documents effectively, we use the Request library and the Beautiful Soup library for web scraping. These tools enable us to navigate and extract data from the structure of web pages.
- **Data Management:** For efficient data organization and management, we leverage Pandas, which offers powerful data manipulation capabilities.

### Web Development Stack

Our web development stack includes:

- **Database Server:** We rely on MariaDB, an open-source RDBMS compatible with MySQL, for secure and efficient data storage and management;
- **Web Server:** Apache serves as our web server, responsible for delivering web content and handling HTTP requests from clients;
- **Database Client Library:** The libmysql library acts as a client library for MariaDB, facilitating seamless communication between our web application and the database server;
- **PHP Environment:** We use PHP with the MySQL Improved extension (mysqli) to enable secure and functional database connectivity for our web application. This combination offers improved security and performance.

In addition to these components, for the dashboard creation, we utilize a blend of web technologies:

- **Dashboard Technologies:**
    
    **HTML (Hypertext Markup Language)** is the foundation of web content. It was used to structure and organize the elements on our page. HTML provides the framework for text, images, links, forms, and other types of media.
    
    **CSS  (Cascading Style Sheets)** is responsible for the visual presentation of web content. Through it, we define the style, layout, and design of HTML elements. CSS controls everything from colors and fonts to positioning and responsive design, helping to create a visually appealing web page.
    
    **JavaScript** is a versatile programming language that adds interactivity and dynamic functionality to websites. It allows actions such as user input validation, database connections, and real-time updates. JavaScript runs in the browser and can interact with HTML and CSS, creating engaging and interactive web experiences.
    

In summary, our structured approach encompasses a comprehensive solution for addressing the challenge at hand. Our team's diverse skill set, combined with the selected technology stack, equips us to navigate the complexities of web scraping, data processing, and database management effectively. This, in turn, ensures a solid foundation for our solution's success.

### Problems Faced During the Development

Our journey in developing this solution wasn't without its challenges. Initially, we attempted to scrape data from continente.pt using a method we found on the internet, which involved harvesting data through the classes associated with the products on the website. However, we quickly realized that this approach was limited, as it only worked effectively for the initial products on the site.

Recognizing the need for a more robust solution, we transitioned to scraping data through URLs, which proved to be a more effective approach to extract the information we required.

Additionally, when dealing with the El Corte Inglés website, we encountered a situation where our scraping activities were at risk of being detected and blocked. To overcome this challenge, we implemented the use of fake-useragent. This Python library allows us to generate random user-agent strings, mimicking different web browsers and devices. By doing so, we can avoid detection by websites that attempt to block or limit web scraping activities.

During the creation of the dashboard, we faced some challenges, as none of the group members had prior experience in this field. The most significant difficulties arose when designing the charts, as they needed to be dynamic, utilizing data from a database. We also had some uncertainties regarding the content to include in the dashboard because we were unsure about which data would be most relevant to the company.

This adjustment demonstrates our team's flexibility and adaptability in overcoming obstacles encountered during the development process.
