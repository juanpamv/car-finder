const cars = [
    {
        name: "A1",
        brand: "Audi",
        description:
            "Named a 2018 Top Safety Pick when equipped with available LED headlights by the Insurance Institute for Highway Safety (IIHS), and receiving a 5-Star Overall Safety Rating from the National Highway Traffic Safety Association's (NHTSA) New Car Assessment Program (NCAP), the 2018 Audi A3 is proof that safer driving is possible for all of us.",
        priceRange: 25000,
        colors: ["#951614", "#3480d0", "#515151", "#FFFFFF", "#000000"],
        motor: {
            motor: "3000",
            hp: "350",
            acceleration: "3.5"
        },
        type: "Hatchback",
        extras: [
            "Virtual Cockpit",
            "Android Auto & Apple Car Play",
            "12 inches screen",
            "head up display"
        ],
        gridImage: "audi_a1@2x.jpg",
        heroImage: "audi_a1_exterior@2x.jpg",
        interiorImage: "audi_a1_inside@2x.jpg"
    },
    {
        name: "A3",
        brand: "Audi",
        description:
            "Named a 2018 Top Safety Pick when equipped with available LED headlights by the Insurance Institute for Highway Safety (IIHS), and receiving a 5-Star Overall Safety Rating from the National Highway Traffic Safety Association's (NHTSA) New Car Assessment Program (NCAP), the 2018 Audi A3 is proof that safer driving is possible for all of us.",
        priceRange: 35000,
        colors: ["#951614", "#3480d0", "#515151", "#FFFFFF", "#000000"],
        motor: {
            motor: "3000",
            hp: "350",
            acceleration: "3.5"
        },
        type: "Hatchback",
        extras: [
            "Virtual Cockpit",
            "Android Auto & Apple Car Play",
            "12 inches screen",
            "head up display"
        ],
        gridImage: "audi_a1@2x.jpg",
        heroImage: "audi_a1_exterior@2x.jpg",
        interiorImage: "audi_a1_inside@2x.jpg"
    },
    {
        name: "1 Series",
        brand: "BMW",
        description:
            "Awaken a sporty daredevil overflowing with enticing power, alluring style, and thrilling dynamics. The BMW 2 Series Coupe and Convertible continue the distinguished lineage of motorsport – while adding something uniquely unmatchable.",
        priceRange: 20000,
        colors: ["#951614", "#3480d0", "#515151", "#FFFFFF", "#000000"],
        motor: {
            motor: "3000",
            hp: "350",
            acceleration: "4"
        },
        type: "Hatchback",
        extras: [
            "Android Auto & Apple Car Play",
            "12 inches screen",
            "head up display"
        ],
        gridImage: "bwm_1_series@2x.jpg",
        heroImage: "1_series_exterior@2x.jpg",
        interiorImage: "1_series_inside@2x.jpg"
    },
    {
        name: "3 Series",
        brand: "BMW",
        description:
            "Awaken a sporty daredevil overflowing with enticing power, alluring style, and thrilling dynamics. The BMW 2 Series Coupe and Convertible continue the distinguished lineage of motorsport – while adding something uniquely unmatchable.",
        priceRange: 45000,
        colors: ["#951614", "#3480d0", "#515151", "#FFFFFF"],
        motor: {
            motor: "3000",
            hp: "350",
            acceleration: "4"
        },
        type: "Hatchback",
        extras: [
            "Android Auto & Apple Car Play",
            "12 inches screen",
            "head up display"
        ],
        gridImage: "bwm_1_series@2x.jpg",
        heroImage: "1_series_exterior@2x.jpg",
        interiorImage: "1_series_inside@2x.jpg"
    },
    {
        name: "5 Series",
        brand: "BMW",
        description:
            "Awaken a sporty daredevil overflowing with enticing power, alluring style, and thrilling dynamics. The BMW 2 Series Coupe and Convertible continue the distinguished lineage of motorsport – while adding something uniquely unmatchable.",
        priceRange: 50000,
        colors: ["#951614", "#3480d0", "#515151", "#FFFFFF"],
        motor: {
            motor: "3000",
            hp: "350",
            acceleration: "4"
        },
        type: "Hatchback",
        extras: [
            "Android Auto & Apple Car Play",
            "12 inches screen",
            "head up display"
        ],
        gridImage: "bwm_1_series@2x.jpg",
        heroImage: "1_series_exterior@2x.jpg",
        interiorImage: "1_series_inside@2x.jpg"
    },
    {
        name: "7 Series",
        brand: "BMW",
        description:
            "Awaken a sporty daredevil overflowing with enticing power, alluring style, and thrilling dynamics. The BMW 2 Series Coupe and Convertible continue the distinguished lineage of motorsport – while adding something uniquely unmatchable.",
        priceRange: 60000,
        colors: ["#951614", "#3480d0", "#515151", "#FFFFFF"],
        motor: {
            motor: "3000",
            hp: "350",
            acceleration: "4"
        },
        type: "Sedan",
        extras: [
            "Android Auto & Apple Car Play",
            "12 inches screen",
            "head up display"
        ],
        gridImage: "bwm_1_series@2x.jpg",
        heroImage: "1_series_exterior@2x.jpg",
        interiorImage: "1_series_inside@2x.jpg"
    },
    {
        name: "9 Series",
        brand: "BMW",
        description:
            "Awaken a sporty daredevil overflowing with enticing power, alluring style, and thrilling dynamics. The BMW 2 Series Coupe and Convertible continue the distinguished lineage of motorsport – while adding something uniquely unmatchable.",
        priceRange: 100000,
        colors: ["#951614", "#3480d0", "#515151", "#FFFFFF"],
        motor: {
            motor: "3000",
            hp: "350",
            acceleration: "4"
        },
        type: "Sedan",
        extras: [
            "Android Auto & Apple Car Play",
            "12 inches screen",
            "head up display"
        ],
        gridImage: "bwm_1_series@2x.jpg",
        heroImage: "1_series_exterior@2x.jpg",
        interiorImage: "1_series_inside@2x.jpg"
    },
    {
        name: "C Class",
        brand: "Mercedez-Benz",
        description:
            "Awaken a sporty daredevil overflowing with enticing power, alluring style, and thrilling dynamics. The BMW 2 Series Coupe and Convertible continue the distinguished lineage of motorsport – while adding something uniquely unmatchable.",
        priceRange: 22500,
        colors: ["#951614", "#3480d0", "#515151", "#FFFFFF", "#000000"],
        motor: {
            motor: "3000",
            hp: "350",
            acceleration: "4"
        },
        type: "Sedan",
        extras: [
            "Android Auto & Apple Car Play",
            "12 inches screen",
            "head up display"
        ],
        gridImage: "c_class@2x.jpg",
        heroImage: "c_class_exterior@2x.jpg",
        interiorImage: "c_class_inside@2x.jpg"
    }
];

export default cars;
