import chef1 from "../chefAssets/1.png";
import chef2 from "../chefAssets/2.png";
import chef3 from "../chefAssets/3.png";
import chef4 from "../chefAssets/4.png";

/////////////////////////////Single Chef

import nancy1 from "../chefAssets/nancyIMG/nancy1.png";
import nancy2 from "../chefAssets/nancyIMG/nancy2.png";
import nancy3 from "../chefAssets/nancyIMG/nancy3.png";
import nancy4 from "../chefAssets/nancyIMG/nancy4.png";
import nancy5 from "../chefAssets/nancyIMG/nancy5.png";

import albert1 from "../chefAssets/albertIMG/albert1.png";
import albert2 from "../chefAssets/albertIMG/albert2.png";
import albert3 from "../chefAssets/albertIMG/albert3.png";
import albert4 from "../chefAssets/albertIMG/albert4.png";
import albert5 from "../chefAssets/albertIMG/albert5.png";

import allessio1 from "../chefAssets/allessioIMG/allessio1.png";
import allessio2 from "../chefAssets/allessioIMG/allessio2.png";
import allessio3 from "../chefAssets/allessioIMG/allessio3.png";
import allessio4 from "../chefAssets/allessioIMG/allessio4.png";
import allessio5 from "../chefAssets/allessioIMG/allessio5.png";

// import prinak1 from "../chefAssets/allessioIMG/allessio1.png";
import prinak2 from "../chefAssets/PrinakIMG/prinak2.png";
import prinak3 from "../chefAssets/PrinakIMG/prinak3.png";
import prinak4 from "../chefAssets/PrinakIMG/prinak4.png";
import prinak5 from "../chefAssets/PrinakIMG/prinak5.png";

export const ChefCardData = [
    {
        id: 1,
        title: "Nancy",
        subTitle: "Croydon",
        discription: "Expert in making traditional Croydon dishes.",
        image: chef1,

        profileimage: nancy1,

        Dietaries: [
            {
                id: "1",
                text: "Halal",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Kosher",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Plant based",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "Gluten free",
                textColor: "#1E293B",
                textBackColor: "#FFFACE",
                badgeRadius: "20px"
            },
            {
                id: "5",
                text: "Nut free",
                textColor: "#1E293B",
                textBackColor: "#FFECFC",
                badgeRadius: "20px"
            },
            {
                id: "6",
                text: "Dairy free",
                textColor: "#1E293B",
                textBackColor: "#FFF0F2",
                badgeRadius: "20px"
            }
        ],

        cuisines: [
            {
                id: "1",
                text: "Pan Asian",
                textColor: "#1E293B",
                textBackColor: "#FBF8E2",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Canapé Party",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Indian",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "British",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            }
        ],

        album: [
            {
                albumImage: nancy2,
            },
            {
                albumImage: nancy3,
            },
            {
                albumImage: nancy4,
            },
            {
                albumImage: nancy5,
            }
        ]
    },

    {
        id: 2,
        title: "Albert",
        subTitle: "Croydon",
        discription: "Expert in making traditional Crispi Pork Belly.",
        image: chef2,

        profileimage: albert1,

        Dietaries: [
            {
                id: "1",
                text: "Halal",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Dairy free",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Plant based",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "Gluten free",
                textColor: "#1E293B",
                textBackColor: "#FFFACE",
                badgeRadius: "20px"
            },
            {
                id: "5",
                text: "Kosher",
                textColor: "#1E293B",
                textBackColor: "#F4FFA8",
                badgeRadius: "20px"
            },
            {
                id: "6",
                text: "Nut free",
                textColor: "#1E293B",
                textBackColor: "#FFEFE8",
                badgeRadius: "20px"
            },
            {
                id: "7",
                text: "Dairy free",
                textColor: "#1E293B",
                textBackColor: "#ADB5C22B",
                badgeRadius: "20px"
            }
        ],

        cuisines: [
            {
                id: "1",
                text: "Pan Asian",
                textColor: "#1E293B",
                textBackColor: "#FBF8E2",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Canapé Party",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Indian",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "British",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            }
        ],

        album: [
            {
                albumImage: albert2,
            },
            {
                albumImage: albert3,
            },
            {
                albumImage: albert4,
            },
            {
                albumImage: albert5,
            }
        ]

    },

    {
        id: 3,
        title: "Allessio",
        subTitle: "Holland",
        discription: "Expert in making traditional Sushi Food.",
        image: chef3,

      
        profileimage: allessio1,

        Dietaries: [
            {
                id: "1",
                text: "Nut free",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Dairy free",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Plant based",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "Gluten free",
                textColor: "#1E293B",
                textBackColor: "#FFFACE",
                badgeRadius: "20px"
            }
        ],

        cuisines: [
            {
                id: "1",
                text: "Canapé Party",
                textColor: "#1E293B",
                textBackColor: "#FBF8E2",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Mexican",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "BBQ",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "Italian",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            },
            {
                id: "5",
                text: "Modern European",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "6",
                text: "French",
                textColor: "#1E293B",
                textBackColor: "#FFF0F2",
                badgeRadius: "20px"
            },
            {
                id: "7",
                text: "Mediterranean",
                textColor: "#1E293B",
                textBackColor: "#FFFAF1",
                badgeRadius: "20px"
            },
            {
                id: "8",
                text: "British",
                textColor: "#1E293B",
                textBackColor: "#ECFDFB",
                badgeRadius: "20px"
            },
            {
                id: "9",
                text: "Gluten free",
                textColor: "#1E293B",
                textBackColor: "#FFECFC",
                badgeRadius: "20px"
            }
        ],

        album: [
            {
                albumImage: allessio2,
            },
            {
                albumImage: allessio3,
            },
            {
                albumImage: allessio4,
            },
            {
                albumImage: allessio5,
            }
        ]

    },

    {
        id: 4,
        title: "Prina K",
        subTitle: "Warwick",
        discription: "Expert in making traditional South Indian food.",
        image: chef4,

        profileImage: allessio1,

        Dietaries: [
            {
                id: "1",
                text: "Nut free",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Dairy free",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            }
        ],

        cuisines: [
            {
                id: "1",
                text: "Indian",
                textColor: "#1E293B",
                textBackColor: "#FBF8E2",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Mexican",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Modern European",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "French",
                textColor: "#1E293B",
                textBackColor: "#FFF0F2",
                badgeRadius: "20px"
            },
            {
                id: "5",
                text: "Mediterranean",
                textColor: "#1E293B",
                textBackColor: "#FFFAF1",
                badgeRadius: "20px"
            },
            {
                id: "6",
                text: "Middle Eastern",
                textColor: "#1E293B",
                textBackColor: "#ECFDFB",
                badgeRadius: "20px"
            }
        ],

        album: [
            {
                albumImage: prinak2,
            },
            {
                albumImage: prinak3,
            },
            {
                albumImage: prinak4,
            },
            {
                albumImage: prinak5,
            }
        ]

    },

    {
        id: 5,
        title: "Albert",
        subTitle: "Croydon",
        discription: "Expert in making traditional Crispi Pork Belly.",
        image: chef2,

        profileimage: albert1,

        Dietaries: [
            {
                id: "1",
                text: "Halal",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Dairy free",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Plant based",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "Gluten free",
                textColor: "#1E293B",
                textBackColor: "#FFFACE",
                badgeRadius: "20px"
            },
            {
                id: "5",
                text: "Kosher",
                textColor: "#1E293B",
                textBackColor: "#F4FFA8",
                badgeRadius: "20px"
            },
            {
                id: "6",
                text: "Nut free",
                textColor: "#1E293B",
                textBackColor: "#FFEFE8",
                badgeRadius: "20px"
            },
            {
                id: "7",
                text: "Dairy free",
                textColor: "#1E293B",
                textBackColor: "#ADB5C22B",
                badgeRadius: "20px"
            }
        ],

        cuisines: [
            {
                id: "1",
                text: "Pan Asian",
                textColor: "#1E293B",
                textBackColor: "#FBF8E2",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Canapé Party",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Indian",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "British",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            }
        ],

        album: [
            {
                albumImage: albert2,
            },
            {
                albumImage: albert3,
            },
            {
                albumImage: albert4,
            },
            {
                albumImage: albert5,
            }
        ]

    },

    {
        id: 6,
        title: "Nancy",
        subTitle: "Croydon",
        discription: "Expert in making traditional Croydon dishes.",
        image: chef1,

        profileimage: nancy1,

        Dietaries: [
            {
                id: "1",
                text: "Halal",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Kosher",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Plant based",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "Gluten free",
                textColor: "#1E293B",
                textBackColor: "#FFFACE",
                badgeRadius: "20px"
            },
            {
                id: "5",
                text: "Nut free",
                textColor: "#1E293B",
                textBackColor: "#FFECFC",
                badgeRadius: "20px"
            },
            {
                id: "6",
                text: "Dairy free",
                textColor: "#1E293B",
                textBackColor: "#FFF0F2",
                badgeRadius: "20px"
            }
        ],

        cuisines: [
            {
                id: "1",
                text: "Pan Asian",
                textColor: "#1E293B",
                textBackColor: "#FBF8E2",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Canapé Party",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Indian",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "British",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            }
        ],

        album: [
            {
                albumImage: nancy2,
            },
            {
                albumImage: nancy3,
            },
            {
                albumImage: nancy4,
            },
            {
                albumImage: nancy5,
            }
        ]
    },

    {
        id: 7,
        title: "Allessio",
        subTitle: "Holland",
        discription: "Expert in making traditional Sushi Food.",
        image: chef3,

        profileimage: allessio1,

        Dietaries: [
            {
                id: "1",
                text: "Nut free",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Dairy free",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "Plant based",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "Gluten free",
                textColor: "#1E293B",
                textBackColor: "#FFFACE",
                badgeRadius: "20px"
            }
        ],

        cuisines: [
            {
                id: "1",
                text: "Canapé Party",
                textColor: "#1E293B",
                textBackColor: "#FBF8E2",
                badgeRadius: "20px"
            },
            {
                id: "2",
                text: "Mexican",
                textColor: "#1E293B",
                textBackColor: "#EEFEFF",
                badgeRadius: "20px"
            },
            {
                id: "3",
                text: "BBQ",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "4",
                text: "Italian",
                textColor: "#1E293B",
                textBackColor: "#E9FFE1",
                badgeRadius: "20px"
            },
            {
                id: "5",
                text: "Modern European",
                textColor: "#1E293B",
                textBackColor: "#F2ECFF",
                badgeRadius: "20px"
            },
            {
                id: "6",
                text: "French",
                textColor: "#1E293B",
                textBackColor: "#FFF0F2",
                badgeRadius: "20px"
            },
            {
                id: "7",
                text: "Mediterranean",
                textColor: "#1E293B",
                textBackColor: "#FFFAF1",
                badgeRadius: "20px"
            },
            {
                id: "8",
                text: "British",
                textColor: "#1E293B",
                textBackColor: "#ECFDFB",
                badgeRadius: "20px"
            },
            {
                id: "9",
                text: "Gluten free",
                textColor: "#1E293B",
                textBackColor: "#FFECFC",
                badgeRadius: "20px"
            }
        ],

        album: [
            {
                albumImage: allessio2,
            },
            {
                albumImage: allessio3,
            },
            {
                albumImage: allessio4,
            },
            {
                albumImage: allessio5,
            }
        ]

    },
];