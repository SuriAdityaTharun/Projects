export const navigation = {
    products: {
      id: 'products',
      name: 'products',
      featured: [
        {
          name: 'New Arrivals 1',
          href: '/new-arrivals-1',
          imageSrc: 'https://example.com/image1.jpg',
          imageAlt: 'Image 1 Alt Text',
        },
        {
          name: 'New Arrivals 2',
          href: '/new-arrivals-2',
          imageSrc: 'https://example.com/image2.jpg',
          imageAlt: 'Image 2 Alt Text',
        },
        {
          name: 'New Arrivals 3',
          href: '/new-arrivals-3',
          imageSrc: 'https://example.com/image3.jpg',
          imageAlt: 'Image 3 Alt Text',
        },
      ],
      sections: [
        {
          id: 'GymEquipments',
          name: 'Gym Equipments',
          items: [
            { name: 'Treadmill', id: 'treadmill', href: '/products/treadmill' },
            { name: 'Weights', id: 'weights', href: '/products/weights' },
            // Add more items for Gym Equipments
          ],
        },
        {
          id: 'yogaEquipments',
          name: 'Yoga Equipments',
          items: [
            { name: 'Yoga Mat', id: 'yoga-mat', href: '/products/yoga-mat' },
            { name: 'Blocks', id: 'blocks', href: '/products/blocks' },
            // Add more items for Yoga Equipments
          ],
        },
        {
          id: 'DietFood',
          name: 'Diet Food',
          items: [
            { name: 'Protein Bars', id: 'protein-bars', href: '/products/protein-bars' },
            { name: 'Meal Replacement Shakes', id: 'meal-replacement-shakes', href: '/products/meal-replacement-shakes' },
            // Add more items for Diet Food
          ],
        },
      ],
    },
  };
  