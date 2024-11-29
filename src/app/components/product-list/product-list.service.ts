import { Injectable } from '@angular/core';
import { Product } from './product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    products: Product[] = [
        {
          name: 'Floral Romper ',
          description: 'Cute Newborn Baby Girl Outfits | Floral Romper Shorts Set for Summer',
          price: 1621,
          image: 'https://m.media-amazon.com/images/I/71XorvtAnoL._AC_SL1500_.jpg'
        },
        {
          name: 'Travel Steamer',
          description: 'Travel Steamer For Clothes Portable Mini, 1470w Handheld Clothes Steamer With 120ml Tank, 30s Fast Heat-up, Garment Steamer & Steam Iron, Horizontal & Vertical, For Home Office Travel, Fabric Steamer',
          price: 4722,
          image: 'https://m.media-amazon.com/images/I/61cx-AydRkL._AC_SL1500_.jpg'
        },
        {
          name: 'Sleeved Clothe',
          description: 'Sleeved Clothes Winter Bathrobe Shawl Lengthened Plush Robe Coat Mens Home Long Womens Lightweight Casual Top',
          price: 2389,
          image: 'https://m.media-amazon.com/images/I/61vygE1FXJL._AC_SL1500_.jpg'
        },
        {
          name: 'Long Sleeved',
          description: '2024 Mens Casual Fashion Long Sleeved Shirt Workout Shirts Loose',
          price: 2385,
          image: 'https://m.media-amazon.com/images/I/61eMYTyUu-L._AC_SL1500_.jpg'
        },
        {
          name: ' Sneakers Air',
          description: 'Womens Casual Stylish Sneakers Air Cushioned Soft Comfortable Breathable Walking Shoes Lace-Up Sneakers for Workout Tennis',
          price: 2235,
          image: 'https://m.media-amazon.com/images/I/61JViWxHCmL._AC_SL1500_.jpg'
        },   
        {
            name: 'Polarized Sunglasses',
            description: 'retro classic HD real glass lens stylish polarized sunglasses',
            price: 1699,
            image: 'https://m.media-amazon.com/images/I/41Zr6dBHLWL._AC_SL1080_.jpg'
          },
          {
            name: '10 Mil Nitrile-Gloves',
            description: '10 Mil Nitrile-Gloves Disposable Gloves,Heavy Duty Rubber Gloves Latex Free, Chemical-Resistance, Diamond Grip Gloves.',
            price: 999,
            image: 'https://m.media-amazon.com/images/I/71n9kNUk92L._AC_SL1500_.jpg'
          },
          {
            name: 'Printed Handbags',
            description: 'Tote Bag For Women Letter Printed Handbags Shoulder Bags Lightweight Purse Fashion Large Capacity Bags For Shopping Essential',
            price: 1655,
            image: 'https://m.media-amazon.com/images/I/61VbrZFeqBL._AC_SL1500_.jpg'
          },
          {
            name: 'Shoes',
            description: 'Mens Lightweight Running Shoes | Non-Slip Sports Sneakers for Workout & Casual Athletic.',
            price: 2675,
            image: 'https://m.media-amazon.com/images/I/71hEx43hesL._AC_SL1500_.jpg'
          },
          {
            name: 'Dress',
            description: 'aihihe Womens Cotton Linen Dress Floral Print Short Sleeve Buttoned Spread Collar Midi Dress 2024 Spring Summer Trendy Dress.',
            price: 1855,
            image: 'https://m.media-amazon.com/images/I/61U4G9q0UtL._AC_SL1500_.jpg'
          },    
   

    
  ];

  getProducts(): Product[] {
    return this.products;
  }
}