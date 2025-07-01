import cart_icon from "./cart_icon.png";

export const assets = {
  cart_icon,
};

const defaultImg = "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg";
const defaultHoverImg = "https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg";

export const CategoryData = [
  {
    id: 1,
    name: "electronics",
    image: "https://app.dropinblog.com/uploaded/blogs/34241141/files/Electronics.png",
    category: "Electronic gadgets and devices",
    subcategories: [
      {
        id:10,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "laptop stand",
        description: "product details",
        Pricecut: "5500",
        price: "4899",
      },
      {
        id:11,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "lan cable 5m d-link",
        description: "Durable LAN cable for stable connectivity",
        Pricecut: "250",
        price: "200",
      },
      {
        id:12,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "Electric Kettle",
        description: "1.5L electric kettle for quick boiling",
        Pricecut: "800",
        price: "600",
      },
      {
        id:13,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "eternet adapter",
        description: "USB ethernet adapter for wired connections",
        Pricecut: "1000",
        price: "800",
      },
      {
        id:14,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "extension board",
        description: "5-socket power extension board",
        Pricecut: "500",
        price: "400",
      },
    ],
  },
  {
    id: 2,
    name: "common essentials",
    image: "https://img.freepik.com/premium-vector/male-electrician-connects-chandelier-room-ceiling-vector-illustration_275655-813.jpg?semt=ais_items_boosted&w=740",
    category: "Daily use products",
    subcategories: [
      {
        id:15,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "Plastic Containers",
        description: "Set of 5 airtight containers",
        Pricecut: "200",
        price: "150",
      },
      {
        id:16,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "Coffee",
        description: "Instant coffee powder 200g",
        Pricecut: "299",
        price: "220",
      },
    ],
  },
  {
    id: 3,
    name: "skincare and beauty",
    image: "https://earthsbeauty.in/wp-content/uploads/2023/07/Summer-skincare-essentials-Kit.jpg",
    category: "Beauty and skincare products",
    subcategories: [
      {
        id:17,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "Handwash",
        description: "Antibacterial liquid handwash 500ml",
        Pricecut: "150",
        price: "100",
      },
      {
        id:18,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "perfume & deodorants",
        description: "Long-lasting fragrance combo pack",
        Pricecut: "300",
        price: "200",
      },
    ],
  },
  {
    id: 4,
    name: "grooming",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5byWIeAiVRKlaPAkcpd6xOWt2e7OSmNgcHA&s",
    category: "Personal grooming tools and kits",
    subcategories: [
      {
        id:19,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "Trimmer",
        description: "Rechargeable trimmer with adjustable blades",
        Pricecut: "1000",
        price: "700",
      },
      {
        id:20,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "Immersion Rod Heater",
        description: "1000W water heater rod",
        Pricecut: "600",
        price: "500",
      },
    ],
  },
  {
    id: 5,
    name: "sports",
    image: "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1545238540/1545238539.jpg",
    category: "Sporting goods and fitness equipment",
    subcategories: [
      {
        id:21,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "broom stick",
        description: "Lightweight broom stick for indoor/outdoor",
        Pricecut: "250",
        price: "200",
      },
      {
        id:22,
        img: defaultImg,
        hoverimg: defaultHoverImg,
        title: "water bottle",
        description: "1L insulated water bottle",
        Pricecut: "350",
        price: "300",
      },
    ],
  },
];
