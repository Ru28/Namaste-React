import React from "react";
import ReactDOM from "react-dom/client";

/*
  Header
  - Logo
  - Nav Items
  Body
  - Search
  - RestaurantContainer
    - RestaurantCard 
       -Img
       -Name of Res, star rating, cuisine, delivery time
  Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo,sla } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  )
}

const resList = [
  {
    "info": {
      "id": "47589",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "City Gold Complex",
      "areaName": "Navrangpura",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-09 05:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-city-gold-complex-navrangpura-ahmedabad-47589",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "636894",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Mouje Chagispur",
      "areaName": "CG Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "61955",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-09 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-wok-mouje-chagispur-cg-road-ahmedabad-636894",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "668681",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/7eda3965-087e-4f82-8419-5b6fbf1eea0a_668681.jpg",
      "locality": "Shahibag",
      "areaName": "Reliance Mall",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-shahibag-reliance-mall-ahmedabad-668681",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "81814",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "3rd Eye II,CG Road",
      "areaName": "Ellisbridge",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American",
        "Salads",
        "Beverages",
        "Chaat"
      ],
      "avgRating": 4.3,
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-09 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-3rd-eye-ii-cg-road-ellisbridge-ahmedabad-81814",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "395939",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_395939.JPG",
      "locality": "Panchwati Cross",
      "areaName": "Paldi & Ambawadi",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-09 04:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-panchwati-cross-paldi-and-ambawadi-ahmedabad-395939",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "558454",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "gdhhiq7vsj1qquasmumi",
      "locality": "Opp. City Gold Cinema",
      "areaName": "Ashram Road",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "4961",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-opp-city-gold-cinema-ashram-road-ahmedabad-558454",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "40831",
      "name": "Subway",
      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
      "locality": "Mithakali",
      "areaName": "Navrangpura",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "2",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 23:59:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-mithakali-navrangpura-ahmedabad-40831",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "327847",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
      "locality": "Sampanna Complex",
      "areaName": "Navrangpura",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "6249",
      "avgRatingString": "4.7",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-09 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-sampanna-complex-navrangpura-ahmedabad-327847",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "556511",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "cloudinaryImageId": "jneiu2aurb0tw0gzunrl",
      "locality": "Rakhial",
      "areaName": "Bapunagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-rakhial-bapunagar-ahmedabad-556511",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "68001",
      "name": "Gwalia Sweets & Fast Food",
      "cloudinaryImageId": "a038867676057ae9aebe1b84221f138a",
      "locality": "Shahibaug",
      "areaName": "Shahibaug",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Sweets",
        "North Indian",
        "Chaat",
        "Snacks",
        "Bakery",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.5,
      "parentId": "92340",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Mithai.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/gwalia-sweets-and-fast-food-shahibaug-ahmedabad-68001",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "50934",
      "name": "Choice Snack Bar",
      "cloudinaryImageId": "sj8eh6dtxlplwc5a5vl3",
      "locality": "C G Road",
      "areaName": "Navrangpura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Chinese",
        "South Indian",
        "Fast Food",
        "Street Food",
        "American",
        "Italian",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "4866",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/choice-snack-bar-c-g-road-navrangpura-ahmedabad-50934",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "668683",
      "name": "McDonald's Gourmet Burger Collection",
      "cloudinaryImageId": "97324ac91a0732497c52d37b9df563a1",
      "locality": "Shahibag",
      "areaName": "Reliance Mall",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "10761",
      "avgRatingString": "4.4",
      "totalRatingsString": "8",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 23:59:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-shahibag-reliance-mall-ahmedabad-668683",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65400",
      "name": "New Freeze Land",
      "cloudinaryImageId": "vvscudt4hnlffogfphbo",
      "locality": "Law garden",
      "areaName": "Ellisbridge",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Cafe",
        "American",
        "Chinese",
        "Street Food",
        "Italian",
        "Pizzas",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "146514",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/new-freeze-land-law-garden-ellisbridge-ahmedabad-65400",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "84569",
      "name": "The Shake Maker",
      "cloudinaryImageId": "tbomle993dla5dx0vjvh",
      "locality": "Shahibaug",
      "areaName": "Shahibaug",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Beverages"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "5303",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 23:59:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-shake-maker-shahibaug-ahmedabad-84569",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "861437",
      "name": "Pastas By Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/6c04d487-04e8-4937-9fb3-67e49318ce61_861437.jpg",
      "locality": "City Gold Complex",
      "areaName": "Navrangpura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pastas"
      ],
      "avgRating": 4.2,
      "parentId": "306806",
      "avgRatingString": "4.2",
      "totalRatingsString": "7",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-09 05:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-city-gold-complex-navrangpura-ahmedabad-861437",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "506112",
      "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
      "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
      "locality": "Shree Krishna Complex",
      "areaName": "Navrangpura",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Ice Cream Cakes",
        "Desserts",
        "Ice Cream",
        "Bakery"
      ],
      "avgRating": 4.9,
      "veg": true,
      "parentId": "21932",
      "avgRatingString": "4.9",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-15 00:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/gourmet-ice-cream-cakes-by-baskin-robbins-shree-krishna-complex-navrangpura-ahmedabad-506112",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "194422",
      "name": "McCafe by McDonald's",
      "cloudinaryImageId": "exgltsfy4xepoz5hz0mf",
      "locality": "Mani Nagar",
      "areaName": "Kankaria",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "American",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "8263",
      "avgRatingString": "4.6",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 23:59:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mccafe-by-mcdonalds-mani-nagar-kankaria-ahmedabad-194422",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "41111",
      "name": "Hocco Eatery",
      "cloudinaryImageId": "lvt1tbxlaq4ow4zabboz",
      "locality": "Navrangpura",
      "areaName": "Navrangpura",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "North Indian",
        "Pizzas"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "96292",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-08 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pav%20Bhaji.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pav%20Bhaji.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hocco-eatery-navrangpura-ahmedabad-41111",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "636896",
      "name": "The Momo Co.",
      "cloudinaryImageId": "9668a5819fcba35364dcff30d5f5cfbb",
      "locality": "Mouje Chagispur",
      "areaName": "CG Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "11442",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-09 01:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-momo-co-mouje-chagispur-cg-road-ahmedabad-636896",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "636895",
      "name": "Big Bowl",
      "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
      "locality": "Mouje Chagispur",
      "areaName": "CG Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "434792",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-09 01:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/big-bowl-mouje-chagispur-cg-road-ahmedabad-636895",
      "type": "WEBLINK"
    }
  }
];


// not using keys (not acceptable) <<<< index as key <<<<<<<<<< unique id (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
            resList.map((restaurant)=> 
              (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
        }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
