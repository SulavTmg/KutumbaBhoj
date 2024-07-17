import assets from "../assets/assets";

const {
  imgs: { AnmolSweets, DajuBhai, BhungroThakali, FalchaEatry, FalchaEatryImg },
  logos: {
    FalchaEatryLogo2,
    FalchaEatryLogo,
    BhungroThakaliLogo,
    DajuBhaiLogo,
    Anmol,
  },
} = assets;

export const restaurants = [
  {
    id: 1,
    path: "/menu-anmol-sweets",
    img: AnmolSweets,
    logo: Anmol,
    location: "TCN Road",
    name: "Anmol Sweets",
    menu: [],
  },
  {
    id: 2,
    path: "/dajubhai",
    img: DajuBhai,
    logo: DajuBhaiLogo,
    location: "School Road",
    name: "Daju Bhai",
    menu: [],
  },
  {
    id: 3,
    path: "/bhungro-thakali",
    img: BhungroThakali,
    logo: BhungroThakaliLogo,
    location: "Huprachaur",
    name: "Bhungro Thakali",
    menu: [],
  },
  {
    id: 4,
    path: "/falcha-eatry",
    img: FalchaEatry,
    photo: FalchaEatryImg,
    logo: FalchaEatryLogo,
    logo2: FalchaEatryLogo2,
    location: "Lamsure, Hetauda",
    name: "Falcha Eatry",
    contact: "057-521045",
    menu: [
      {
        item: "Sushi (Japnese)",
        types: [
          {
            name: "Dragon Roll",
            price: 450,
          },
          {
            name: "California Roll",
            price: 300,
          },
          {
            name: "Salmon Roll",
            price: 250,
          },
          {
            name: "Spicy Salmon Roll",
            price: 300,
          },
          {
            name: "Tempura Roll",
            price: 350,
          },
          {
            name: "Avacado Maki",
            price: 250,
          },
          {
            name: "Spicy Tempura Roll",
            price: 300,
          },
          {
            name: "Plain Sushi Roll",
            price: 300,
          },
        ],
      },
      {
        item: "MO:MO",
        types: [
          {
            name: "Buff MOMO",
            price: 120,
          },
          {
            name: "Chicken MOMO",
            price: 130,
          },
          {
            name: "Pork MOMO",
            price: 140,
          },
          {
            name: "Veg MOMO",
            price: 100,
          },
        ],
      },
    ],
  },
];
