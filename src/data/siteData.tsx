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
        x: 910,
        y: 1157,
        address: '501 East Walker Street',
        walking: '10 min.  ┃  0.4 miles  ┃  This is a moderate walk',
        description: `This house was built by one of Jefferson’s co-founders, Daniel N. Alley, in 1849. Alley likely used it as an office. The first community members to use the building as a primary residence are believed to be a steamboat captain, Augustus Bosworthy, and his brother. Daniel N. Alley gifted the home to his son, Daniel Jr., and his wife Mary Hannah (Rembert) Alley, in 1861. Four generations of the Alley family owned the home until 1991.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Alley-Carlson-House_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Alley-Carlson-House_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Alley-Carlson-House_Sepia.webp',
    },
    {
        site: 'Benefield House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 988,
        y: 2219,
        address: '1009 South Line Street',
        walking: '6 min.  ┃  0.3 miles  ┃  This is a moderate walk',
        description: `The Benefield House, also known as the “Gay 90s House,” is a recorded Texas Historical Landmark. Constructed in the 1890s, this Queen Anne style Victorian home showcases ornate architectural features, including a turret!  According to local lore, the home played an important role as a social hub where Jefferson’s prominent families gathered.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Benefield-House_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Benefield-House_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Benefield-House_Sepia.webp',
    },
    {
        site: 'Birge-Beard House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1388,
        y: 1465,
        address: '212 North Vale Street',
        walking: '4 min.  ┃  0.2 miles  ┃  This is a short walk',
        description: `In 1860, Noble A. Birge and his wife, Ana Sophia Birge, built this home. It features remarkable architectural details such as the Greek Revival style trim and porch columns. Mr. Birge served in the Confederacy and was a prominent businessman in Jefferson. Anna Beard purchased the home in 1878, followed by M.E. Goetzman who owned the building from 1899 to 1955 . In 1955, it was purchased by Estella May Fonville Peters, who enclosed the covered porch and restored the building to its original charm. In 1961, Dr. Jesse M. DeWare III and Virginia Battle DeWare, purchased the home and continued restoration efforts. Though the Birge-Beard house was occupied by different residents of Jefferson over the years, it is named after the families who called it home in the 19th century.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Birge-Beard-House_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Birge-Beard-House_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Birge-Beard-House_Sepia.webp',
    },
    {
        site: 'Captain William Perry’s Home',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1302,
        y: 974,
        address: '203 Clarksville Street',
        walking: '11 min.  ┃  0.5 miles  ┃  This is a moderate walk',
        description: `Captain William Perry, the first person to bring a steamboat to Jefferson, built this house in the 1850s for his family. It was originally constructed on the corner of Polk and Clarksville Street. It was later moved to its current location where it was combined with an existing structure. This impressive two story residence was designed with Greek Revival features including double hung windows, square columns with molded capitals, and a side-hall plan.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Captain-William-Perry-Home_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Captain-William-Perry-Home_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Captain-William-Perry-Home_Sepia.webp',
    },
    {
        site: 'Christ Episcopal Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 831,
        y: 1798,
        address: '703 South Main Street',
        walking: '9 min.  ┃  0.4 miles  ┃  This is a moderate walk',
        description: `The Christ Episcopal parish, founded in 1860, erected a church on this site in 1868. Reverend E.G. Benners was the first resident clergyman, serving his community for 25 years. The original church was damaged in a storm, the replacement, the church we see today, is made of brick and features elements of gothic architecture.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Christ-Episcopal-Church_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Christ-Episcopal-Church_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Christ-Episcopal-Church_Sepia.webp',
    },
    {
        site: 'Cumberland Presbyterian Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 924,
        y: 1617,
        address: '501 East Jefferson Street',
        walking: '7 min.  ┃  0.3 miles  ┃  This is a moderate walk',
        description: `The Cumberland Presbyterian Church was first led by minister Reverend Soloman Awalt and met in a wooden frame church. In 1873, Mr. John Ligon constructed this brick church for the congregation. Originally, the building had four clocks painted on each side of the steeple, marking the time for services like Sunday school, morning worship, and evening worship. In 1981, the clock faces were painted over during a remodel however several elements of the original church were maintained including the organ, alter, and lectern. `,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Cumberland-Presbyterian-Church_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Cumberland-Presbyterian-Church_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Cumberland-Presbyterian-Church_Sepia.webp',
    },
    {
        site: 'The Excelsior House Hotel',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1462,
        y: 1702,
        address: '211 West Austin Street',
        walking: '1 min.  ┃  148 feet  ┃  This is a short walk',
        description: `Built in 1858, this is the oldest continuously operating hotel in Texas! The hotel was originally owned and operated by steamboat captain William Perry. The hotel has been restored with its original New Orleans flair, offering a view into the past for its visitors, many of whom are famous: Steven Spielberg, Lady Bird Johnson, U.S. Grant, Rutherford B. Hayes, and Oscar Wilde are just a few. `,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Excelsior-Hotel_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Excelsior-Hotel_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Excelsior-Hotel_Sepia.webp',
    },

    {
        site: 'First Baptist Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 1109,
        y: 1094,
        address: '523 North Polk Street',
        walking: '10 min.  ┃  0.5 miles  ┃  This is a moderate walk',
        description: `The First Baptist Church’s congregation was organized in 1855 and led by Reverend George B Tucker. The second paster was Reverend D. B. Culberson. The congregation built a two-story brick church in 1869 on this site. It was the site of the 1877 revival led by William E Penn, a well known Texas evangelist. In 1898, the fellowship split in two and only half continued to worship in the brick church. In 1924, the two groups reunited and became the First Baptist Church. The original structure burned in 1944 and was rebuilt.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/First-Baptist-Church_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/First-Baptist-Church_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/First-Baptist-Church_Sepia.webp',
    },
    {
        site: 'First Methodist Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 1113,
        y: 1552,
        address: '305 West Henderson Street',
        walking: '5 min.  ┃  0.2 miles  ┃  This is a moderate walk',
        description: `The First Methodist Church was established in 1844, making it one of the earliest churches in Jefferson. A log cabin served as the first place of worship and was replaced by a brick church featuring a bell tower. In 1858, the congregation collected over 1,000 Mexican silver dollars and sent them to a foundry in New York to have a bell made. Over time, the brick building developed structural problems and was reconstructed in 1884. The building you see today shares the foundation with the original.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/First-Methodist-Church_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/First-Methodist-Church_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/First-Methodist-Church_Sepia.webp',
    },

    {
        site: 'The Grove',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 784,
        y: 1918,
        address: '405 Moseley Street',
        walking: '9 min.  ┃  0.4 miles  ┃  This is a moderate walk',
        description: `The Grove is a historic home that was built in 1861. It features elements of Greek Revival and French Creole architecture. It is speculated that the home exhibits Creole influence because the original owner, Frank Stilley, was from Louisiana. The Grove was home to many prominent Jefferson residents including the Stilley, Rock, Burks, and Young families.`,
        colorPhotoSrc: '/Location Photos/Color Photos/The-Grove_Color.webp',
        popupPhotoSrc: '/Location Photos/Pop-Up Photos/The-Grove_Pop-Up.webp',
        sepiaPhotoSrc: '/Location Photos/Sepia Photos/The-Grove_Sepia.webp',
    },
    {
        site: 'Historic Kahn Hotel',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1544,
        y: 1620,
        address: '123 West Austin Street',
        walking: '1 min.  ┃  354 feet  ┃  This is a short walk',
        description: `This historic building was constructed in the early 1800s and was first used as a boarding house and then a mercantile. In about 1900, the Kahn Saloon took up  residence and became a gathering place for Jefferson locals. In 1907, the saloon was shut down by prohibitionists. The building continued to develop a storied past, being occupied by a newspaper office, a lodge, a furniture building, and a funeral home. Today, as a hotel, it functions like it did in the 1800s as a boarding house—providing a place to rest for travelers.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Historic-Kahn-Hotel_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Historic-Kahn-Hotel_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Historic-Kahn-Hotel_Sepia.webp',
    },
    {
        site: 'House Of The Seasons',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 559,
        y: 1460,
        address: '409 South Alley Street',
        walking: '10 min.  ┃  0.4 miles  ┃  This is a moderate walk',
        description: `This home was built in 1872 for Benjamin H. Epperson and features a cupola with stained glass windows that represent each of the seasons. Epperson was considered one of the wealthiest men in Texas at the time the home was built and was influential in Texas politics. The house features a melding of Greek, Victorian, and Italianate architecture styles. The house was mainly used as a residence but it has also served as a boarding house and a building of Jefferson College.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/House-Of-Seasons_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/House-Of-Seasons_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/House-Of-Seasons_Sepia.webp',
    },
    {
        site: 'Immaculate Conception Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 1352,
        y: 1561,
        address: '201 North Vale Street',
        walking: '3 min.  ┃  0.2 miles  ┃  This is a short walk',
        description: `The first mass in Jefferson’s history is said to have been held at Father Jean Marie Giraud’s home in 1863. Father Giraud later completed a church building for Immaculate Conception with money sent from France in 1867. Though the original burnt down in 1992, the church was rebuilt to match the original’s character.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Immaculate-Conception-Church_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Immaculate-Conception-Church_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Immaculate-Conception-Church_Sepia.webp',
    },
    {
        site: 'Jay Gould Railway Car',
        name: 'Train Car',
        iconSrc: '/Icons/Map/Train Car Icon',
        x: 1499,
        y: 1794,
        address: '210 West Austin Street',
        walking: '1 min.  ┃  201 feet  ┃  This is a short walk',
        description: `Built in 1888, this railway car once belonged to railroad tycoon, Jay Gould. Named the Atalanta, the railroad car boasts a luxurious interior, featuring mahogany woodwork, silver bathroom fixtures, stained glass, and crystal light fixtures. In 1953, the Jessie Allen Wise Garden Club purchased the car, making it a highlight of Jefferson’s heritage tourism.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Jay-Gould-Railway-Car_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Jay-Gould-Railway-Car_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Jay-Gould-Railway-Car_Sepia.webp',
    },
    {
        site: 'Jefferson Carnegie Library',
        name: 'Library',
        iconSrc: '/Icons/Map/Libary Icon',
        x: 1201,
        y: 1727,
        address: '301 West Lafayette Street',
        walking: '2 min.  ┃  0.1 miles  ┃  This is a short walk',
        description: `This library was constructed in 1907 and funded by Andrew Carnegie, a philanthropist whose main interest was in expanding public access to information through libraries. In his lifetime, Carnegie built 2,811 free libraries. There are only five Carnegie libraries still operating in Texas today and Jefferson’s is one of them!`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Jefferson-Carnegie-Library_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Jefferson-Carnegie-Library_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Jefferson-Carnegie-Library_Sepia.webp',
    },
    {
        site: 'Jefferson Playhouse',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1208,
        y: 1542,
        address: '1860 North Market Street',
        walking: '4 min.  ┃  0.2 miles  ┃  This is a short walk',
        description: `Over the years, this historic venue has filled multiple roles. It was built around 1860 by Robert W. Nesmith as a house. In 1869, it was purchased by the Sisters of Charity who used it as a convent, hospital, and school. The Sinai Hebrew Congregation of Jefferson purchased the building in 1875, making it a local synagogue. In 1961, The Jessie Allen Wise Garden Club purchased it. Today, the playhouse is owned by the Excelsior foundation and has been renovated so it can once again be used for cultural and education events.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Jefferson-Playhouse_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Jefferson-Playhouse_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Jefferson-Playhouse_Sepia.webp',
    },
    {
        site: 'The Magnolias',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 536,
        y: 854,
        address: '209 East Broadway',
        walking: '17 min.  ┃  0.7 miles  ┃  This is a long walk',
        description: `Jefferson co-founder, Daniel Nelson Alley, built this home in 1867 for his daughter Victoria. In 1873, Victoria married local attorney and Confederate veteran M.L. Crawford and the home was deeded to them. Victoria Alley Crawford died in 1874 and her widower sold the home to local bank president W.B. Ward. Though the home changed ownership throughout the next several years it consistently served as a civic and social center. In 1881, the oldest chartered women’s club in Texas, “The 1881 Club,” was organized in the home. In 1955, the Martha McCraw Chapter of the Daughters of the American Revolution was organized here.`,
        colorPhotoSrc: '/Location Photos/Color Photos/Magnolias_Color.webp',
        popupPhotoSrc: '/Location Photos/Pop-Up Photos/Magnolias_Pop-Up.webp',
        sepiaPhotoSrc: '/Location Photos/Sepia Photos/Magnolias_Sepia.webp',
    },
    {
        site: 'The Manse',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 668,
        y: 1460,
        address: '221 East Delta Street',
        walking: '11 min.  ┃  0.5 miles  ┃  This is a moderate walk',
        description: `This building is considered to be the oldest house in Jefferson with the first two rooms having been built in 1839! The additional rooms were added in the 1850s, forming the house we see today. The home was erected by General James Harrison Rogers, a local lawyer. In 1903, the house was bought by the Cumberland Presbyterian Church to be used as a manse. Like many homes in Jefferson, The Manse reflects a Greek Revival style with porticos supported by fluted, Doric columns. This particular home is situated on the corner and is “double-faced” meaning each side of the home facing the street has a porch. It was once owned by Martin Jurow.`,
        colorPhotoSrc: '/Location Photos/Color Photos/Manse_Color.webp',
        popupPhotoSrc: '/Location Photos/Pop-Up Photos/Manse_Pop-Up.webp',
        sepiaPhotoSrc: '/Location Photos/Sepia Photos/Manse_Sepia.webp',
    },
    {
        site: 'Perry M. Woods Home',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 910,
        y: 1279,
        address: '502 East Walker Street',
        walking: '9 min.  ┃  0.4 miles  ┃  This is a moderate walk',
        description: `This historic home is renowned for its architectural detailing—it features neoclassic front doors and twelve floor to ceiling windows, all of which were imported from France. The gable eaves boast a crown and teardrop trim.  The house changed ownership frequently until 1932, when Perry M. Woods bought it. The building was named after Woods because he has maintained the longest period of ownership. Today, the house retains its historic charm.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Perry-Woods-Home_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Perry-Woods-Home_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Perry-Woods-Home_Sepia.webp',
    },
    {
        site: 'Planters Bank Building',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Bank Icon',
        x: 1708,
        y: 1608,
        address: '124 Austin Street',
        walking: '4 min.  ┃  0.2 miles  ┃  This is a short walk',
        description: `John Speake, a local contractor and realtor, built this building as a riverfront warehouse in 1852. Within a few years it became the headquarters for a firm with offices all over the country. In the 1870s, it became a bank with W.M. Harrison serving as the first banker. In 1899, it became the National Bank of Jefferson. In 1946, the building was in need of repair and many of its original features were restored. Today, you can visit this relic of the past, one of Jefferson’s only 19th century warehouses.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Planters-Bank-Building_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Planters-Bank-Building_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Planters-Bank-Building_Sepia.webp',
    },
    {
        site: 'Sedberry House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1196,
        y: 1638,
        address: '211 North Market Street',
        walking: '4 min.  ┃  0.2 miles  ┃  This is a short walk',
        description: `This house was built in 1853 for John and Mary Morgan who sold it to W.F. Smith just two years after it was built. It was locally referred to as the “Smith Premises,” for the next eight years. J.A. Carpenter, editor of the Confederate News, purchased the home next. The house changed hands several times, until 1884 when William Jones Sedberry and his wife, Mrs. Lelia Shortridge George purchased it. In 1892, W.J. Sedberry deeded the home to his son, Hervey Hart Sedberry, who in turn deeded it to his daughter, Ruth Sedberry, in 1924.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Sedberry-House_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Sedberry-House_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Sedberry-House_Sepia.webp',
    },
    {
        site: 'Singleton’s Virginia Cross House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1453,
        y: 1067,
        address: '401 North Soda Street',
        walking: '10 min.  ┃  0.5 miles  ┃  This is a moderate walk',
        description: `This house has been in the Singleton family since 1885! It features Texas Greek Revival architecture with its “cross plan.” The home is constructed of regional materials: cypress lumber and clapboards and heart pine flooring. The decor, furnishings, and objects in the home are all period appropriate dating between 1860 and 1885.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Singletons-Virginia-Cross-House_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Singletons-Virginia-Cross-House_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Singletons-Virginia-Cross-House_Sepia.webp',
    },

    {
        site: 'Sterne Fountain',
        name: 'Fountain',
        iconSrc: '/Icons/Map/Fountain Icon',
        x: 1297,
        y: 1696,
        address: '301 West Lafayette Street',
        walking: '2 min.  ┃  456 feet  ┃  This is a short walk',
        description: `The Sterne fountain was a gift given to the city by Jacob and Ernestine Sterne’s children. The Sterne family was heavily involved in civic and cultural engagements in early Jefferson, including helping run the first post office. The fountain was sculpted by Guiseppe Moretti and features a statue of Hebe, the Greek Goddess of Youth.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Sterne-Fountain_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Sterne-Fountain_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Sterne-Fountain_Sepia.webp',
    },
    {
        site: 'Union Missionary Baptist Church',
        name: 'Church',
        iconSrc: '/Icons/Map/Church Icon',
        x: 1304,
        y: 2571,
        address: '501-569 Houston Street',
        walking: '12 min.  ┃  0.5 miles  ┃  This is a moderate walk',
        description: `In 1842, Captain William Perry transferred property to local enslaved people to create a church. After the Civil War, it became a meeting place for Loyal League, Radical Republican, and Freedman’s Bureau. During reconstruction, there was sustained violence against black members of Jefferson’s community and the church was burned down. In 1883, the church was rebuilt and the Reverend J. H. Patterson rededicated the church with the installation of a cornerstone. Restoration efforts saved the building from deterioration in 2003. Today, the Union Missionary Baptist church stands as a symbol of African American identity and resilience.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/Union-Missionary-Baptist-Church_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/Union-Missionary-Baptist-Church_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/Union-Missionary-Baptist-Church_Sepia.webp',
    },
    {
        site: 'W.P. Schluter House',
        name: 'Historic Homes',
        iconSrc: '/Icons/Map/Historic Homes Icon',
        x: 1009,
        y: 1855,
        address: '602 East Taylor Street',
        walking: '6 min.  ┃  0.3 miles  ┃  This is a short walk',
        description: `This colonial home was built in 1856 by one of the first settlers in Jefferson, F.A. Schluter. Schluter chose this site to build his impressive three story home because it was the highest point in Jefferson, rendering it safe from flooding. The house remained in the Schluter family until 1948, when Mr. and Mrs. G.E. Blain purchased it. Later, the home was acquired by Mr. and Mrs. Mouton who lived there until 1994. Donald Whitaker purchased the home and made restoration efforts. You can still take in its grand appearance today as several original features have been maintained including the marble fireplaces, two story portico, and ornate staircases.`,
        colorPhotoSrc:
            '/Location Photos/Color Photos/WP-Schluter-House_Color.webp',
        popupPhotoSrc:
            '/Location Photos/Pop-Up Photos/WP-Schluter-House_Pop-Up.webp',
        sepiaPhotoSrc:
            '/Location Photos/Sepia Photos/WP-Schluter-House_Sepia.webp',
    },
]
export const mapBg = '/Blank Map Background.webp'
