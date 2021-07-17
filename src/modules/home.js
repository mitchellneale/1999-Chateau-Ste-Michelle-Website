


  const renderMainPage = () => {
  const container = document.getElementById('content');
  const heading = document.getElementById('heading');

/* Heading Functions */
  function createH1() {
      const headOne = document.createElement('h1');
      heading.appendChild(headOne);
  }
  function createH2() {
      const headTwo = document.createElement('h2');
      heading.appendChild(headTwo);
  }
  function createH3() {
      const headThree = document.createElement('h3');
      heading.appendChild(headThree);
  } 
 
/* Body Section: Contains functions to render the main body
  of page and index of hyperlinks.
  
  There are 5 table elements, each containing 3 sections with
  an image, a title, and text. The tables are created starting
  at the top left "About Our Winery" and continue top to bottom,
  then left to right, ending with "A Palate of Flavors." 
  
  Note that each 'table' is actually a 'div' for ease of formatting,
  as the 1999 source code relied heavily on table and center tags. */


  
/* About Our Winery (Winery) Section Functions */
  function createMainTableOne() {
      const mainTableOne = document.createElement('div');
      mainTableOne.setAttribute('id', 'mainTableOne')
      container.appendChild(mainTableOne);
  }

  function createTable1() {
      const tableOne = document.createElement('div');
      tableOne.classList.add('tableOne');
      mainTableOne.appendChild(tableOne);
  }
  function createTable2() {
      const tableTwo = document.createElement('div');
      tableTwo.textContent = "About Our Winery";
      tableTwo.classList.add('tableTwo');
      mainTableOne.appendChild(tableTwo);
  }
  function createTable3() {
      const tableThree = document.createElement('div');
      tableThree.textContent = 'The Chateau Ste. Michelle story begins ' +
      'in the 1930s and takes off in the 1950s when its first vineyards ' +
      'were planted. Visiting the winery today means touring historic grounds, ' +
      'sampling award-winning wines and attending classes and concerts publicized ' +
      'in the calendar of events.';
      tableThree.classList.add('tableThree');
      mainTableOne.appendChild(tableThree);
  }

/* What's New (Pressed) Section Functions */
  function createMainTableTwo() {
      const mainTableTwo = document.createElement('div');
      mainTableTwo.setAttribute('id', 'mainTableTwo')
      container.appendChild(mainTableTwo);
  }

  function createTable4() {
      const tableFour = document.createElement('div');
      tableFour.classList.add('tableFour');
      mainTableTwo.appendChild(tableFour);
  }
  function createTable5() {
      const tableFive = document.createElement('div');
      tableFive.textContent = "What\'s New";
      tableFive.classList.add('tableFive');
      mainTableTwo.appendChild(tableFive);
  }
  function createTable6() {
      const tableSix = document.createElement('div');
      tableSix.textContent = `Each month we feature the latest wine releases, 
      news from the winery, wine critics' acclaim and web site updates.`;
      tableSix.classList.add('tableSix');
      mainTableTwo.appendChild(tableSix);
  }

/* Grapevine (CSMBook) Section Functions */
  function createMainTableThree() {
      const mainTableThree = document.createElement('div');
      mainTableThree.setAttribute('id', 'mainTableThree')
      container.appendChild(mainTableThree);
  }

  function createTable7() {
      const tableSeven = document.createElement('div');
      tableSeven.classList.add('tableSeven');
      mainTableThree.appendChild(tableSeven);
  }
  function createTable8() {
      const tableEight = document.createElement('div');
      tableEight.textContent = "Grapevine";
      tableEight.classList.add('tableEight');
      mainTableThree.appendChild(tableEight);
  }
  function createTable9() {
      const tableNine = document.createElement('div');
      tableNine.textContent = `A perplexing question? 
      Send us a message through our guest book.
      Interested in more information? Sign up for our newsletter.`;
      tableNine.classList.add('tableNine');
      mainTableThree.appendChild(tableNine);
  }

/* Central Line Element Function */
  const line = document.getElementById('line');
  function createLineElement() {
      const lineElement = document.createElement('img');
      lineElement.setAttribute('id', 'lineElement')
      line.appendChild(lineElement);
  } 

/* About Our Wines (Vineyards) Section Functions */
  function createMainTableFour() {
      const mainTableFour = document.createElement('div');
      mainTableFour.setAttribute('id', 'mainTableFour')
      container.appendChild(mainTableFour);
  }

  function createTable10() {
      const tableTen = document.createElement('div');
      tableTen.classList.add('tableTen');
      mainTableFour.appendChild(tableTen);
  }
  function createTable11() {
      const tableEleven = document.createElement('div');
      tableEleven.textContent = "About Our Wines";
      tableEleven.classList.add('tableEleven');
      mainTableFour.appendChild(tableEleven);
  }
  function createTable12() {
      const tableTwelve = document.createElement('div');
      tableTwelve.textContent = `The Chateau's resident artist
       is winemaker Mike Januik who transforms the grapes born
      in the Columbia Valley into award-winning wines. Our wines, 
      vineyards and wine appreciation tips offer insight into this 
      craft. Looking for a particular wine? The Chateau's wine shop 
      carries our wines as well as assorted logo merchandise. Or if 
      you collect rare and limited release wines, consider a 
      Vintage Reserve Club membership.`;
      tableTwelve.classList.add('tableTwelve');
      mainTableFour.appendChild(tableTwelve);
  }

/* A Palate of Flavors (Flavors) Section Functions */
  function createMainTableFive() {
      const mainTableFive = document.createElement('div');
      mainTableFive.setAttribute('id', 'mainTableFive')
      container.appendChild(mainTableFive);
  }

  function createTable13() {
      const tableThirteen = document.createElement('div');
      tableThirteen.classList.add('tableThirteen');
      mainTableFive.appendChild(tableThirteen);
  }
  function createTable14() {
      const tableFourteen = document.createElement('div');
      tableFourteen.textContent = "A Palate of Flavors";
      tableFourteen.classList.add('tableFourteen');
      mainTableFive.appendChild(tableFourteen);
  }
  function createTable15() {
      const tableFifteen = document.createElement('div');
      tableFifteen.textContent = `Culinary director John 
      Sarich is a chef, author and an expert at pairing 
      wine with food. John is renowned for crafting Pacific 
      Northwest-inspired recipes. Join him at the Chateau 
      for a cooking class or intimate gourmet dinner.`;
      tableFifteen.classList.add('tableFifteen');
      mainTableFive.appendChild(tableFifteen);
  }
  function createFooter() {
      const footer = document.getElementById('footer');
      const footerElement = document.createElement('div');
      footerElement.classList.add('footerElement');
      footerElement.textContent = `Copyright © 1997 Chateau Ste. Michelle Vineyards & Winery
      Information managed by InCommand Interactive.`
      footer.appendChild(footerElement);
  }
   function citeSource() {
      const sourceCited = document.createElement('div');
      sourceCited.classList.add('sourceCited');
      sourceCited.textContent = 'Developed by Mitchell Neale'
      footer.appendChild(sourceCited);
  }
/* Function Calls */
  createH1();createH2();createH3();createMainTableOne();
  createMainTableTwo();createMainTableThree();createMainTableFour();createMainTableFive();
  createTable1();createTable2();createTable3();createTable4();createTable5();
  createTable6();createTable7();createTable8();createTable9();createLineElement();
  createTable10();createTable11();createTable12();createTable13();createTable14();
  createTable15();createFooter();citeSource();
};

export {renderMainPage}