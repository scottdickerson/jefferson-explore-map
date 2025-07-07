export interface Site {
    site: string // Site name, matches text under centered image
    name: string // Icon type (e.g. 'Historic Homes', 'Church', etc.)
    iconSrc: string
    x: number
    y: number
    address?: string
    walking?: string
    description?: string
    colorPhotoSrc?: string
    popupPhotoSrc?: string
    sepiaPhotoSrc?: string
}

export const Sites: Site[] = [
    {
        site: 'Alley-Carlson House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 460,
        y: 704,
        address: '501 East Walker Street',
        walking: '10 min.  |  0.4 mile  |  This is a moderate walk',
        description: `This house was built by one of Jefferson’s co-founders, Daniel N. Alley, in 1849. Alley likely used it as an office. The first community members to use the building as a primary residence are believed to be a steamboat captain, Augustus Bosworthy, and his brother. Daniel N. Alley gifted the home to his son, Daniel Jr., and his wife Mary Hannah (Rembert) Alley, in 1861. Four generations of the Alley family owned the home until 1991.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Alley-Carlson-House_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Alley-Carlson-House_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Alley-Carlson-House_Sepia.png',
    },
    {
        site: 'Benefield House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1112,
        y: 813,
        address: '1009 South Line Street',
        walking: '6 min.  |  0.3 mile  |  This is a moderate walk',
        description: `The Benefield House, also known as the “Gay 90s House,” is a recorded Texas Historical Landmark. Constructed in the 1890s, this Queen Anne style Victorian home showcases ornate architectural features, including a turret!  According to local lore, the home played an important  role as a social hub where Jefferson’s prominent families gathered.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Benefield-House_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Benefield-House_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Benefield-House_Sepia.png',
    },
    {
        site: 'Birge-Beard House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 777,
        y: 955,
        address: '212 North Vale Street',
        walking: '4 min.  |  0.2 mile  |  This is a short walk',
        description: `In 1860, Noble A. Birge and his wife, Ana Sophia Birge, built this home. It features remarkable architectural details such as the Greek Revival style trim and porch columns. Mr. Birge served in the Confederacy and was a prominent businessman in Jefferson. Anna Beard purchased the home in 1878, followed by M.E. Goetzman who owned the building from 1899 to 1955 . In 1955, it was purchased by Estella May Fonville Peters, who enclosed the covered porch and restored the building to its original charm. In 1961, Dr. Jesse M. DeWare III and Virginia Battle DeWare, purchased the home and continued restoration efforts. Though the Birge-Beard house was occupied by different residents of Jefferson over the years, it is named after the families who called it home in the 19th century.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Birge-Beard-House_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Birge-Beard-House_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Birge-Beard-House_Sepia.png',
    },
    {
        site: 'Captain William Perry’s Home',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 843,
        y: 1831,
        address: '203 Clarksville Street',
        walking: '11 min.  |  0.5 mile  |  This is a moderate walk',
        description: `Captain William Perry, the first person to bring a steamboat to Jefferson, built this house in the 1850s for his family. It was originally constructed on the corner of Polk and Clarksville Street. It was later moved to its current location where it was combined with an existing structure. This impressive two story residence was designed with Greek Revival features including double hung windows, square columns with molded capitals, and a side-hall plan.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Captain-William-Perry-Home_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Captain-William-Perry-Home_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Captain-William-Perry-Home_Sepia.png',
    },
    {
        site: 'Christ Episcopal Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 1105,
        y: 2118,
        address: '703 South Main Street',
        walking: '13 min.  |  0.6 mile  |  This is a moderate walk',
        description: `Christ Episcopal Church, built in 1870, is one of the oldest Episcopal churches in Texas still in use. The church features beautiful stained glass windows and original woodwork. It has served as a place of worship and community gathering for generations of Jefferson residents. The building is a Recorded Texas Historic Landmark and is known for its Gothic Revival architecture and peaceful setting.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Christ-Episcopal-Church_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Christ-Episcopal-Church_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Christ-Episcopal-Church_Sepia.png',
    },
    {
        site: 'Cumberland Presbyterian Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 1149,
        y: 1289,
        address: '501 North Walnut Street',
        walking: '7 min.  |  0.3 mile  |  This is a moderate walk',
        description: `The Cumberland Presbyterian Church, built in 1872, is a fine example of Gothic Revival architecture in Jefferson. The church is known for its pointed arch windows and original bell tower. It has been a center for worship and community events for over a century, reflecting the town’s rich religious heritage. The building is a Recorded Texas Historic Landmark and continues to serve its congregation today.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Cumberland-Presbyterian-Church_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Cumberland-Presbyterian-Church_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Cumberland-Presbyterian-Church_Sepia.png',
    },
    {
        site: 'The Excelsior House Hotel',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1018,
        y: 1354,
        address: '211 West Austin Street',
        walking: '3 min.  |  0.1 mile  |  This is a short walk',
        description: `The Excelsior House Hotel, established in the 1850s, is the oldest hotel in East Texas still in operation. The hotel has hosted many notable guests, including Ulysses S. Grant and Oscar Wilde. Its elegant parlors, period furnishings, and charming courtyard garden offer a glimpse into Jefferson’s storied past. The Excelsior is a Recorded Texas Historic Landmark and remains a beloved destination for visitors to Jefferson.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Excelsior-Hotel_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Excelsior-Hotel_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Excelsior-Hotel_Sepia.png',
    },

    {
        site: 'First Baptist Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 942,
        y: 1286,
        address: '523 North Walnut Street',
        walking: '7 min.  |  0.3 mile  |  This is a moderate walk',
        description: `First Baptist Church, founded in 1849, is one of the oldest Baptist congregations in Texas. The current sanctuary, built in 1872, features classic Greek Revival architecture and original stained glass windows. The church has played a significant role in the spiritual and civic life of Jefferson, hosting services, weddings, and community events for generations.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/First-Baptist-Church_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/First-Baptist-Church_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/First-Baptist-Church_Sepia.png',
    },
    {
        site: 'First Methodist Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 709,
        y: 1483,
        address: '305 West Henderson Street',
        walking: '8 min.  |  0.4 mile  |  This is a moderate walk',
        description: `First Methodist Church, organized in 1844, is the oldest Protestant congregation in Jefferson. The present sanctuary, completed in 1872, is a beautiful example of Gothic Revival architecture, featuring pointed arch windows and a soaring steeple. The church has been a cornerstone of faith and service in the community for over 175 years.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/First-Methodist-Church_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/First-Methodist-Church_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/First-Methodist-Church_Sepia.png',
    },

    {
        site: 'The Grove',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 900,
        y: 1100,
        address: '405 Moseley Street',
        walking: '5 min.  |  0.2 mile  |  This is a short walk',
        description: `The Grove, built in 1861, is one of the most famous historic homes in Jefferson. Known for its beautiful Greek Revival architecture and lush gardens, The Grove has been featured in numerous books and television programs for its rich history and reported hauntings. The home has been meticulously restored and is open for tours, offering visitors a glimpse into Jefferson’s past and its enduring legends.`,
        colorPhotoSrc: '/Location Photos/Color Photos/The-Grove_Color.png',
        popupPhotoSrc: '/Location Photos/Pop-Ups Photos/The-Grove_Pop-Up.png',
        sepiaPhotoSrc: '/Location Photos/Sepia Photos/The-Grove_Sepia.png',
    },
    {
        site: 'Historic Kahn Hotel',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 950,
        y: 1200,
        address: '123 West Austin Street',
        walking: '4 min.  |  0.2 mile  |  This is a short walk',
        description: `The Historic Kahn Hotel, built in the 1860s, is one of Jefferson’s most storied landmarks. Originally a boarding house, it later became a hotel and has hosted countless travelers over the years. The building is known for its distinctive brick façade and has been the subject of many local legends and ghost stories. Today, the Kahn Hotel stands as a testament to Jefferson’s vibrant past and enduring hospitality.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Historic-Kahn-Hotel_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Historic-Kahn-Hotel_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Historic-Kahn-Hotel_Sepia.png',
    },
    {
        site: 'House Of The Seasons',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 570,
        y: 1205,
        address: '409 South Alley Street',
        walking: '9 min.  |  0.4 mile  |  This is a moderate walk',
        description: `House Of The Seasons, built in 1872, is a stunning example of Italianate architecture. The home is named for its unique cupola, which displays stained glass colors representing each season as the sun moves throughout the year. Lavishly restored, the house features period furnishings, beautiful gardens, and is open for tours, offering a glimpse into Jefferson’s Gilded Age.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/House-Of-Seasons_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/House-Of-Seasons_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/House-Of-Seasons_Sepia.png',
    },
    {
        site: 'Immaculate Conception Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 788,
        y: 1335,
        address: '201 North Vale Street',
        walking: '5 min.  |  0.2 mile  |  This is a short walk',
        description: `Immaculate Conception Church, established in 1869, is one of the oldest Catholic churches in East Texas. The church is known for its beautiful stained glass windows, original altar, and peaceful setting. It has served as a spiritual home for generations of Jefferson’s Catholic community and is a Recorded Texas Historic Landmark.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Immaculate-Conception-Church_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Immaculate-Conception-Church_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Immaculate-Conception-Church_Sepia.png',
    },
    {
        site: 'Jay Gould Railway Car',
        name: 'Train Car',
        iconSrc: '/Icons/Map/Train Car Icon',
        x: 1279,
        y: 1480,
        address: '400 East Austin Street',
        walking: '2 min.  |  0.1 mile  |  This is a short walk',
        description: `The Jay Gould Railway Car, also known as the "Atalanta," was built in 1888 for the railroad tycoon Jay Gould. This luxurious private railcar is preserved as a museum piece in Jefferson, offering a rare glimpse into the opulent travel accommodations of the Gilded Age. The car features original woodwork, brass fittings, and period furnishings, and is a must-see for railroad enthusiasts and history buffs alike.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Jay-Gould-Railway-Car_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Jay-Gould-Railway-Car_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Jay-Gould-Railway-Car_Sepia.png',
    },
    {
        site: 'Jefferson Carnegie Library',
        name: 'Library',
        iconSrc: '/Icons/Map/Libary Icon',
        x: 1025,
        y: 1425,
        address: '301 West Lafayette Street',
        walking: '6 min.  |  0.3 mile  |  This is a moderate walk',
        description: `The Jefferson Carnegie Library, built in 1907 with a grant from Andrew Carnegie, is a beautiful example of Classical Revival architecture. The library has served as a center for learning and community events for over a century. Its historic reading rooms, original woodwork, and period details make it a beloved landmark in Jefferson.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Jefferson-Carnegie-Library_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Jefferson-Carnegie-Library_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Jefferson-Carnegie-Library_Sepia.png',
    },
    {
        site: 'Jefferson Playhouse',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1031,
        y: 1272,
        address: '124 West Austin Street',
        walking: '4 min.  |  0.2 mile  |  This is a short walk',
        description: `The Jefferson Playhouse, originally built as a German opera house in 1868, is one of the oldest continuously operating theaters in Texas. The building has hosted countless performances, community events, and celebrations over the years. Its historic stage, original architectural details, and vibrant programming make it a cultural gem in Jefferson.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Jefferson-Playhouse_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Jefferson-Playhouse_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Jefferson-Playhouse_Sepia.png',
    },
    {
        site: 'The Magnolias',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1184,
        y: 1208,
        address: '403 North Walnut Street',
        walking: '6 min.  |  0.3 mile  |  This is a moderate walk',
        description: `Magnolias, built in the late 19th century, is a charming Victorian home known for its wraparound porch and beautiful magnolia trees. The house has been lovingly maintained and is a favorite stop for visitors interested in Jefferson’s residential architecture and Southern hospitality.`,
        colorPhotoSrc: '/Location Photos/Color Photos/Magnolias_Color.png',
        popupPhotoSrc: '/Location Photos/Pop-Ups Photos/Magnolias_Pop-Up.png',
        sepiaPhotoSrc: '/Location Photos/Sepia Photos/Magnolias_Sepia.png',
    },
    {
        site: 'The Manse',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1317,
        y: 1336,
        address: '401 North Walnut Street',
        walking: '7 min.  |  0.3 mile  |  This is a moderate walk',
        description: `The Manse, built in 1872, served as the residence for the pastors of the Cumberland Presbyterian Church. This stately home features classic Victorian architecture and has been lovingly restored. The Manse is a testament to Jefferson’s religious and architectural heritage, offering visitors a glimpse into the town’s storied past.`,
        colorPhotoSrc: '/Location Photos/Color Photos/Manse_Color.png',
        popupPhotoSrc: '/Location Photos/Pop-Ups Photos/Manse_Pop-Up.png',
        sepiaPhotoSrc: '/Location Photos/Sepia Photos/Manse_Sepia.png',
    },
    {
        site: 'Perry M. Woods Home',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 765,
        y: 2517,
        address: '203 Clarksville Street',
        walking: '11 min.  |  0.5 mile  |  This is a moderate walk',
        description: `This historic home is renowned for its architectural detailing—it features neoclassic front doors and twelve floor to ceiling windows, all of which were imported from France. The gable eaves boast a crown and teardrop trim.  The house changed ownership frequently until 1932, when Perry M. Woods bought it. The building was named after Woods because he has maintained the longest period of ownership. Today, the house retains its historic charm.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Perry-Woods-Home_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Perry-Woods-Home_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Perry-Woods-Home_Sepia.png',
    },
    {
        site: 'Planters Bank Building',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Bank Icon',
        x: 477,
        y: 1205,
        address: '124 Austin Street',
        walking: '4 min.  |  0.2 mile  |  This is a short walk',
        description: `John Speake, a local contractor and realtor, built this building as a riverfront warehouse in 1852. Within a few years it became the headquarters for a firm with offices all over the country. In the 1870s, it became a bank with W.M. Harrison serving as the first banker. In 1899, it became the National Bank of Jefferson. In 1946, the building was in need of repair and many of its original features were restored. Today, you can visit this relic of the past, one of Jefferson’s only 19th century warehouses.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Planters-Bank-Building_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Planters-Bank-Building_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Planters-Bank-Building_Sepia.png',
    },
    {
        site: 'Sedberry House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1243,
        y: 884,
        address: '211 North Market Street',
        walking: '4 min.  |  0.2 mile  |  This is a short walk',
        description: `This house was built in 1853 for John and Mary Morgan who sold it to W.F. Smith just two years after it was built. It was locally referred to as the “Smith Premises,” for the next eight years. J.A. Carpenter, editor of the Confederate News, purchased the home next. The house changed hands several times, until 1884 when William Jones Sedberry and his wife, Mrs. Lelia Shortridge George purchased it. In 1892, W.J. Sedberry deeded the home to his son, Hervey Hart Sedberry, who in turn deeded it to his daughter, Ruth Sedberry, in 1924.`,
        colorPhotoSrc: '/Location Photos/Color Photos/Sedberry-House_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Sedberry-House_Pop-Up.png',
        sepiaPhotoSrc: '/Location Photos/Sepia Photos/Sedberry-House_Sepia.png',
    },
    {
        site: 'Singleton’s Virginia Cross House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 765,
        y: 2506,
        address: '401 North Soda Street',
        walking: '10 min.  |  0.5 mile  |  This is a moderate walk',
        description: `This house has been in the Singleton family since 1885! It features Texas Greek Revival architecture with its “cross plan.” The home is constructed of regional materials: cypress lumber and clapboards and heart pine flooring. The decor, furnishings, and objects in the home are all period appropriate dating between 1860 and 1885.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Singletons-Virginia-Cross-House_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Singletons-Virginia-Cross-House_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Singletons-Virginia-Cross-House_Sepia.png',
    },

    {
        site: 'Sterne Fountain',
        name: 'Fountain',
        iconSrc: '/Icons/Map/Fountain Icon',
        x: 1107,
        y: 1399,
        address: '301 West Lafayette Street',
        walking: '2 min.  |  456 feet  |  This is a short walk',
        description: `The Sterne fountain was a gift given to the city by Jacob and Ernestine Sterne’s children. The Sterne family was heavily involved in civic and cultural engagements in early Jefferson, including helping run the first post office. The fountain was sculpted by Guiseppe Moretti and features a statue of Hebe, the Greek Goddess of Youth.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Sterne-Fountain_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Sterne-Fountain_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Sterne-Fountain_Sepia.png',
    },
    {
        site: 'Union Missionary Baptist Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 946,
        y: 903,
        address: '501-569 Houston Street',
        walking: '12 min.  |  0.5 miles  |  This is a moderate walk',
        description: `In 1842, Captain William Perry transferred property to local enslaved people to create a church. After the Civil War, it became a meeting place for Loyal League, Radical Republican, and Freedman’s Bureau. During reconstruction, there was sustained violence against black members of Jefferson’s community and the church was burned down. In 1883, the church was rebuilt and the Reverend J. H. Patterson rededicated the church with the installation of a cornerstone. Restoration efforts saved the building from deterioration in 2003. Today, the Union Missionary Baptist church stands as a symbol of African American identity and resilience.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Union-Missionary-Baptist-Church_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/Union-Missionary-Baptist-Church_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Union-Missionary-Baptist-Church_Sepia.png',
    },
    {
        site: 'W.P. Schluter House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 764,
        y: 2531,
        address: '602 East Taylor Street',
        walking: '6 min.  |  0.3 miles  |  This is a short walk',
        description: `This colonial home was built in 1856 by one of the first settlers in Jefferson, F.A. Schluter. Schluter chose this site to build his impressive three story home because it was the highest point in Jefferson, rendering it safe from flooding. The house remained in the Schluter family until 1948, when Mr. and Mrs. G.E. Blain purchased it. Later, the home was acquired by Mr. and Mrs. Mouton who lived there until 1994. Donald Whitaker purchased the home and made restoration efforts. You can still take in its grand appearance today as several original features have been maintained including the marble fireplaces, two story portico, and ornate staircases.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/WP-Schluter-House_Color.png',
        popupPhotoSrc:
            '/Location Photos/Pop-Ups Photos/WP-Schluter-House_Pop-Up.png',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/WP-Schluter-House_Sepia.png',
    },
]
export const mapBg = '/Blank Map Background.png'
