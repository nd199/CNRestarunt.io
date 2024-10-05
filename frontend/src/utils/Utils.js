import { useMemo } from "react";

export const useMenuItems = () => {
  const items = useMemo(
    () => [
      {
        id: 1,
        name: "Paneer Butter Masala",
        price: "₹200",
        imageName: "pbm.jpeg",
        category: ["vegetarian"],
        type: "Main Dish",
        desc: "A classic Indian dish made with locally sourced paneer, butter, and spices. Pair it with naan or roti for a quick and easy meal.",
        cookingWay: `
        1. Paneer is cut into cubes and lightly fried for texture.
        2. A base of onions and tomatoes is cooked with oil and butter.
        3. Spices like garam masala, red chili powder, and turmeric are added.
        4. The mixture is blended into a smooth paste.
        5. Paneer cubes are simmered in this gravy.
        6. Fresh cream is added to give a rich, creamy texture.
        7. Cashew paste is sometimes used for extra richness.
        8. Butter is added to enhance flavor.
        9. Garnished with coriander leaves before serving.
        10. Best served with naan or rice.
      `,
      },
      {
        id: 2,
        name: "Chocolate Cake",
        price: "₹150",
        imageName: "ChocolateCake.jpeg",
        category: ["vegetarian"],
        type: "Desserts",
        desc: "A classic Indian dessert made with locally sourced milk, sugar, and cocoa powder. Pair it with brownies or cheesecakes for a healthy and delicious treat.",
        cookingWay: `
        1. All-purpose flour is sifted with baking powder.
        2. Cocoa powder is mixed in for rich chocolate flavor.
        3. Milk and eggs are added to form the batter.
        4. The batter is whisked until smooth.
        5. Sugar and vanilla extract are blended in.
        6. Butter or oil is used to make it moist.
        7. The mixture is poured into a baking tin.
        8. Baked at 180°C for 30-35 minutes.
        9. Cooled down before icing or serving.
        10. Topped with chocolate ganache or dusted with powdered sugar.
      `,
      },
      {
        id: 3,
        name: "Ice Cream",
        price: "₹100",
        imageName: "iceCream.jpeg",
        category: ["vegetarian", "vegan"],
        type: "Desserts",
        desc: "A classic Indian ice cream made with locally sourced milk, sugar, and vanilla extract.",
        cookingWay: `
        1. Milk is heated until it starts to simmer.
        2. Cream is added to make it rich and creamy.
        3. Sugar is dissolved into the milk mixture.
        4. Vanilla extract is stirred in for flavor.
        5. The mixture is cooled completely.
        6. It is churned in an ice cream maker.
        7. Churning ensures the creamy texture without ice crystals.
        8. The churned ice cream is frozen until firm.
        9. Served with a scoop or garnished with fruits/nuts.
        10. Stored in airtight containers to maintain freshness.
      `,
      },
      {
        id: 4,
        name: "Paneer Tikka",
        price: "₹200",
        imageName: "pannertikka.jpg",
        category: ["vegetarian"],
        type: "Snacks",
        desc: "A classic Indian dish made with locally sourced paneer, spices, and yogurt. Pair it with naan or roti for a quick and easy meal.",
        cookingWay: `
        1. Paneer is cut into cubes and marinated in yogurt and spices.
        2. Bell peppers and onions are added to the marinade.
        3. The mixture is allowed to marinate for at least 1 hour.
        4. Skewers are used to thread the marinated paneer and veggies.
        5. Grilled over an open flame or in a tandoor for smokiness.
        6. Brush with oil or butter during grilling for added flavor.
        7. Cook until the edges are charred and crispy.
        8. Served with mint chutney and lemon wedges.
        9. Optional: Add a sprinkle of chaat masala before serving.
        10. Best enjoyed hot as a snack or appetizer.
      `,
      },
      {
        id: 5,
        name: "Samosa",
        price: "₹50",
        imageName: "samosa.jpeg",
        category: ["vegetarian", "vegan"],
        type: "Snacks",
        desc: "A classic Indian snack made with locally sourced potatoes, spices, and flour. Perfect as a quick bite.",
        cookingWay: `
        1. Dough is prepared using all-purpose flour and water.
        2. Potatoes are boiled, mashed, and mixed with spices.
        3. The filling is seasoned with cumin, coriander, and garam masala.
        4. The dough is rolled out and cut into circles.
        5. Each circle is filled with the potato mixture.
        6. Edges are folded and sealed tightly to prevent leakage.
        7. Deep-fried in hot oil until golden brown.
        8. Drain on paper towels to remove excess oil.
        9. Served with tamarind chutney or mint chutney.
        10. Can be enjoyed as a snack or appetizer at any time.
      `,
      },
      {
        id: 6,
        name: "Masala Dosa",
        price: "₹100",
        imageName: "masalaDosa.jpg",
        category: ["vegetarian", "vegan"],
        type: "Breakfast",
        desc: "A rice crepe stuffed with spiced potatoes, served with sambar and chutney.",
        cookingWay: `
        1. Rice and urad dal are soaked overnight and ground to a batter.
        2. The batter is fermented to develop flavor and fluffiness.
        3. A portion of the batter is spread thinly on a hot griddle.
        4. Cooked until the edges turn golden and crispy.
        5. A spiced potato filling is placed in the center.
        6. Dosa is folded over the filling and served hot.
        7. Accompanied by coconut chutney and sambar.
        8. Optionally garnished with coriander for freshness.
        9. Best enjoyed immediately for maximum crispiness.
        10. Versatile: can be made plain or stuffed with various fillings.
      `,
      },
      {
        id: 7,
        name: "Idli Sambar",
        price: "₹100",
        imageName: "IdliSambar.jpg",
        category: ["vegetarian", "vegan"],
        type: "Breakfast",
        desc: "A traditional South Indian breakfast dish of steamed rice cakes served with sambar.",
        cookingWay: `
        1. Rice and urad dal are soaked and ground into a smooth batter.
        2. The batter is fermented overnight to enhance flavor.
        3. Idli molds are greased and filled with the batter.
        4. Steamed until fluffy and cooked through.
        5. Sambar is prepared with lentils, vegetables, and spices.
        6. The mixture is simmered to combine flavors.
        7. Idlis are served warm with sambar and coconut chutney.
        8. Optional: garnish sambar with coriander and a dash of ghee.
        9. Enjoyed as a wholesome and nutritious breakfast.
        10. Can be made in bulk and stored for quick meals.
      `,
      },
      {
        id: 8,
        name: "Chole Bhature",
        price: "₹150",
        imageName: "chole_bhature.jpg",
        category: ["vegetarian"],
        type: "Main Dish",
        desc: "A popular North Indian dish made with spicy chickpeas and fluffy fried bread.",
        cookingWay: `
        1. Chickpeas are soaked overnight for easy cooking.
        2. Boiled chickpeas are mixed with onions, tomatoes, and spices.
        3. A spice blend including cumin, coriander, and garam masala is added.
        4. Cooked until the mixture thickens and flavors meld.
        5. Dough for bhature is prepared using flour and yogurt.
        6. The dough is rested for several hours.
        7. Rolled out and deep-fried until puffed and golden.
        8. Chole is served hot with bhature.
        9. Garnished with fresh coriander and onions.
        10. Often served with pickles and yogurt for balance.
      `,
      },
      {
        id: 9,
        name: "Pav Bhaji",
        price: "₹80",
        imageName: "pav_bhaji.jpg",
        category: ["vegetarian"],
        type: "Snacks",
        desc: "A spicy vegetable mash served with buttered bread rolls.",
        cookingWay: `
        1. Mixed vegetables (potatoes, peas, carrots) are boiled and mashed.
        2. Onions, tomatoes, and spices are sautéed together.
        3. The mashed vegetables are added to the sautéed mixture.
        4. Cooked on low heat to blend flavors.
        5. Butter is added for richness.
        6. Pav (bread rolls) are buttered and toasted on the griddle.
        7. Bhaji is served with chopped onions and lemon wedges.
        8. Optionally garnished with fresh coriander.
        9. Served hot for best flavor and texture.
        10. Often enjoyed as a street food snack.
      `,
      },
      {
        id: 10,
        name: "Biryani",
        price: "₹250",
        imageName: "biryani.jpg",
        category: ["vegetarian", "non-vegetarian"],
        type: "Main Dish",
        desc: "A fragrant rice dish made with spices and layered with marinated meat or vegetables.",
        cookingWay: `
        1. Rice is soaked and parboiled with spices for flavor.
        2. Meat or vegetables are marinated with yogurt and spices.
        3. The marinated mixture is sautéed until cooked.
        4. Layers of rice and meat/vegetables are formed in a pot.
        5. Saffron or food color is added for richness.
        6. The pot is sealed for slow cooking (dum).
        7. Cooked until the flavors meld and rice is fluffy.
        8. Served with raita (yogurt dip) or salad.
        9. Garnished with fried onions and boiled eggs (optional).
        10. Enjoyed as a festive or special occasion meal.
      `,
      },
      {
        id: 11,
        imageName: "lemonrice.jpg",
        name: "Lemon Rice",
        price: "₹90",
        category: ["vegetarian", "vegan"],
        type: "Main Dish",
        desc: "A tangy rice dish infused with lemon juice and spices. Great as a light meal.",
        cookingWay: `
        1. Rice is cooked until fluffy and cooled.
        2. Mustard seeds are heated in oil until they pop.
        3. Chopped green chilies, turmeric, and peanuts are added to the oil.
        4. Cooked rice is added to the pan and mixed well.
        5. Fresh lemon juice and salt are stirred in for tanginess.
        6. Garnished with chopped coriander leaves.
        7. Served warm or at room temperature.
        8. Often enjoyed as a light meal or side dish.
      `,
      },
      {
        id: 12,
        imageName: "Noodles.jpeg",
        name: "Noodles",
        price: "₹90",
        category: ["vegetarian"],
        type: "Snacks",
        desc: "A bowl of flavorful and tasty stir-fried noodles, perfect as a snack or meal.",
        cookingWay: `
        1. Noodles are boiled until al dente and drained.
        2. Oil is heated in a pan and vegetables are sautéed until tender.
        3. Cooked noodles are added to the pan with soy sauce and spices.
        4. Mixed well to combine all ingredients.
        5. Cooked for a few minutes until heated through.
        6. Garnished with spring onions and sesame seeds.
        7. Served hot as a snack or meal.
      `,
      },
      {
        id: 13,
        imageName: "Puttu.jpg",
        name: "Puttu",
        price: "₹90",
        category: ["vegetarian", "vegan"],
        type: "Breakfast",
        desc: "A traditional steamed rice cake, often served with curries or chutney.",
        cookingWay: `
        1. Rice flour is mixed with water to form a crumbly dough.
        2. Grated coconut is layered with the rice flour in a puttu maker.
        3. The mixture is steamed until cooked through.
        4. Puttu is gently removed from the mold.
        5. Served with curries, chutney, or banana.
        6. Often enjoyed as a breakfast or snack.
      `,
      },
      {
        id: 14,
        imageName: "pizzaStar.jpg",
        name: "PizzaStar",
        price: "₹200",
        category: ["vegetarian"],
        type: "Main Dish",
        desc: "A pizza topped with fresh vegetables and cheese. Perfect for sharing.",
        cookingWay: `
        1. Pizza dough is prepared and rolled out into a round shape.
        2. Tomato sauce is spread evenly on the dough.
        3. Fresh vegetables (bell peppers, onions, olives) are arranged on top.
        4. Grated cheese is sprinkled generously over the toppings.
        5. Pizza is baked in a preheated oven until the crust is golden and cheese is bubbly.
        6. Sliced and served hot, often with chili flakes or oregano.
      `,
      },
      {
        id: 15,
        imageName: "mutton.jpeg",
        name: "Mutton Chukka",
        price: "₹200",
        category: ["non-vegetarian"],
        type: "Main Dish",
        desc: "A spicy, flavorful mutton dish cooked with Indian spices. Great with rice or bread.",
        cookingWay: `
        1. Mutton pieces are marinated with spices and yogurt for flavor.
        2. In a pan, oil is heated and chopped onions are sautéed until golden.
        3. Marinated mutton is added and cooked until browned.
        4. Water is added and simmered until the mutton is tender.
        5. Dry spices (cumin, coriander, garam masala) are added for flavor.
        6. Cooked until the moisture evaporates, resulting in a dry dish.
        7. Garnished with fresh coriander and served with rice or bread.
      `,
      },
      {
        id: 16,
        imageName: "chai.jpg",
        name: "Chai",
        price: "₹20",
        category: ["vegetarian"],
        type: "Drinks",
        desc: "A refreshing drink made with tea leaves and milk, perfect for mornings and evenings.",
        cookingWay: `
        1. Water is boiled in a pot with crushed ginger and cardamom.
        2. Tea leaves are added and simmered for a few minutes.
        3. Milk is poured in, and the mixture is brought to a boil.
        4. Sugar is added to taste and stirred well.
        5. The chai is strained into cups and served hot.
        6. Often enjoyed with snacks or biscuits.
      `,
      },
      {
        id: 17,
        imageName: "mangoJuice.jpg",
        name: "Mango Juice",
        price: "₹20",
        category: ["vegetarian"],
        type: "Drinks",
        desc: "A refreshing drink made with mangoes, perfect for a morning or evening.",
        cookingWay: `
        1. Ripe mangoes are peeled and chopped.
        2. The mango pieces are blended with water and sugar until smooth.
        3. Strained to remove any fiber for a smooth texture (optional).
        4. Chilled in the refrigerator or served over ice.
        5. Garnished with mint leaves for freshness.
        6. Served cold as a refreshing drink.
      `,
      },
      {
        id: 18,
        imageName: "guavaJuice.jpg",
        name: "Guava Juice",
        price: "₹20",
        category: ["vegetarian"],
        type: "Drinks",
        desc: "A refreshing drink made with guavas, perfect for a morning or evening.",
        cookingWay: `
        1. Ripe guavas are washed and chopped.
        2. The guava pieces are blended with water and sugar until smooth.
        3. Strained to remove any seeds or pulp for a smoother juice (optional).
        4. Chilled in the refrigerator or served over ice.
        5. Garnished with a slice of guava or mint leaves.
        6. Served cold as a refreshing drink.
      `,
      },
      {
        id: 19,
        imageName: "chickenSoup.jpg",
        name: "Chicken Soup",
        price: "₹320",
        category: ["non-vegetarian"],
        type: "Drinks",
        desc: "A hearty soup made with chicken, perfect before a hearty meal.",
        cookingWay: `
        1. Chicken pieces are boiled with water and vegetables until tender.
        2. The broth is strained and seasoned with salt and pepper.
        3. Chopped vegetables (carrots, celery) are added to the broth.
        4. Simmered until vegetables are cooked through.
        5. Served hot, often garnished with fresh herbs.
        6. Enjoyed as a starter or a comforting meal.
      `,
      },
      {
        id: 20,
        imageName: "muttonbone.jpg",
        name: "Mutton Bone Soup",
        price: "₹400",
        category: ["non-vegetarian"],
        type: "Drinks",
        desc: "A hearty soup made with mutton, perfect before a hearty meal.",
        cookingWay: `
        1. Mutton bones are boiled with water and aromatic spices.
        2. The broth is simmered for hours to extract flavor.
        3. Strained to remove bones and impurities.
        4. Chopped vegetables (onions, carrots) are added to the broth.
        5. Simmered until the vegetables are tender.
        6. Seasoned with salt and pepper, served hot.
        7. Enjoyed as a warming soup before meals.
      `,
      },
    ],
    []
  );

  return items;
};

export const articles = [
  {
    id: 1,
    title: "How to Cook Delicious Aloo Gobi",
    date: "January 3, 2023",
    Desc: "A traditional Indian dish made with potatoes and cauliflower, spiced with turmeric, cumin, and other flavorful ingredients. Perfect as a side or main dish.",
    imgSrc: "AlooGobi.jpg",
    preparation: [
      "1. Heat oil in a pan, add cumin seeds.",
      "2. Sauté onions until golden brown.",
      "3. Add ginger-garlic paste and cook for a minute.",
      "4. Stir in chopped tomatoes and spices (turmeric, red chili powder, salt).",
      "5. Add cauliflower and potatoes, mix well.",
      "6. Cover and cook until vegetables are tender.",
      "7. Stir occasionally to prevent sticking.",
      "8. Adjust salt and spice levels as needed.",
      "9. Garnish with chopped cilantro before serving.",
      "10. Serve hot with roti or rice.",
    ],
  },
  {
    id: 2,
    title: "Making the Perfect Bhel Puri at Home",
    date: "February 10, 2023",
    Desc: "A popular Indian street food, Bhel Puri is a delightful mixture of puffed rice, vegetables, and tamarind sauce. It's light, crunchy, and tangy.",
    imgSrc: "BhelPuri.jpg",
    preparation: [
      "1. In a large bowl, combine puffed rice, chopped onions, tomatoes, and boiled potatoes.",
      "2. Add finely chopped green chilies and fresh coriander.",
      "3. Include sev for crunchiness.",
      "4. Drizzle tamarind sauce and mint chutney to taste.",
      "5. Mix all ingredients gently to combine.",
      "6. Taste and adjust seasoning with salt and spices.",
      "7. Serve immediately to retain crispiness.",
      "8. Optionally, add pomegranate seeds for extra flavor.",
      "9. You can include diced cucumbers for freshness.",
      "10. Serve with lemon wedges for an added zing.",
    ],
  },
  {
    id: 3,
    title: "How to Prepare Creamy Butter Chicken",
    date: "March 15, 2023",
    Desc: "A rich and creamy chicken dish cooked in a tomato-based sauce, flavored with butter, cream, and a blend of traditional Indian spices.",
    imgSrc: "ButterChicken.jpg",
    preparation: [
      "1. Marinate chicken pieces in yogurt, lemon juice, and spices for at least 30 minutes.",
      "2. Heat oil and butter in a pan over medium heat.",
      "3. Add finely chopped onions and sauté until golden.",
      "4. Stir in ginger-garlic paste and cook for a minute.",
      "5. Add tomato puree and cook until oil separates.",
      "6. Add marinated chicken and cook until browned.",
      "7. Pour in cream and simmer on low heat.",
      "8. Adjust seasoning with salt and garam masala.",
      "9. Garnish with chopped cilantro and additional cream.",
      "10. Serve with naan or rice.",
    ],
  },
  {
    id: 4,
    title: "Refreshing Buttermilk: The Perfect Drink for Summers",
    date: "April 22, 2023",
    Desc: "A refreshing and tangy drink made from churned yogurt, commonly enjoyed to cool down on a hot day. Seasoned with cumin and herbs.",
    imgSrc: "Buttermilk.jpg",
    preparation: [
      "1. In a blender, combine yogurt and water.",
      "2. Blend until smooth and creamy.",
      "3. Add roasted cumin powder and salt to taste.",
      "4. Incorporate chopped mint and coriander leaves.",
      "5. Blend again briefly to mix herbs.",
      "6. Taste and adjust seasoning if needed.",
      "7. Chill in the refrigerator for 30 minutes.",
      "8. Serve in glasses with ice cubes.",
      "9. Garnish with a sprinkle of cumin on top.",
      "10. Optionally, add a dash of lemon juice for extra tang.",
    ],
  },
  {
    id: 5,
    title: "Chole Bhature: A Hearty Meal for Every Occasion",
    date: "May 30, 2023",
    Desc: "A North Indian classic dish consisting of spicy chickpeas (chole) served with deep-fried bread (bhature). It's a hearty and filling meal.",
    imgSrc: "CholeBhature.jpg",
    preparation: [
      "1. Soak chickpeas overnight and boil them until soft.",
      "2. In a pan, heat oil and sauté finely chopped onions until golden.",
      "3. Add ginger-garlic paste and cook until fragrant.",
      "4. Stir in chopped tomatoes and spices (chole masala, salt, red chili powder).",
      "5. Add boiled chickpeas and mix well.",
      "6. Pour in water to achieve desired consistency.",
      "7. Simmer on low heat for 20-30 minutes.",
      "8. For bhature, mix flour, yogurt, and baking powder to form a dough.",
      "9. Roll out dough into circles and deep-fry until golden.",
      "10. Serve hot chole with bhature, garnished with onions and pickles.",
    ],
  },
  {
    id: 6,
    title: "How to Make Traditional Dosa and Sambar",
    date: "June 18, 2023",
    Desc: "A crispy fermented rice pancake served with a side of spicy lentil soup (sambar), a favorite breakfast dish from South India.",
    imgSrc: "DosaSambar.jpg",
    preparation: [
      "1. Soak rice and urad dal for 4-6 hours, then drain.",
      "2. Grind soaked ingredients into a smooth batter with water.",
      "3. Ferment the batter overnight in a warm place.",
      "4. Heat a non-stick pan and grease lightly.",
      "5. Pour a ladle of batter, spreading it into a thin circle.",
      "6. Drizzle oil around the edges and cook until crispy.",
      "7. Flip and cook for another minute until golden.",
      "8. For sambar, boil lentils and mash them well.",
      "9. Add mixed vegetables, tamarind water, and spices, and simmer.",
      "10. Serve crispy dosas with hot sambar and coconut chutney.",
    ],
  },
  {
    id: 7,
    title: "Gourmet Burger: A Fusion of Indian and Western Flavors",
    date: "July 8, 2023",
    Desc: "A delicious fusion burger with a blend of Indian spices and traditional burger ingredients, offering the best of both worlds.",
    imgSrc: "GourmetBurger.jpg",
    preparation: [
      "1. In a bowl, mix ground meat with finely chopped onions, garlic, and ginger.",
      "2. Add spices (cumin, coriander, garam masala) and mix thoroughly.",
      "3. Form the mixture into patties and chill in the refrigerator.",
      "4. Heat oil in a skillet and cook patties until browned on both sides.",
      "5. Toast burger buns on the skillet until golden.",
      "6. Assemble burgers with lettuce, tomato, and onion.",
      "7. Add spicy mayonnaise or chutney as a spread.",
      "8. Top with sliced cheese and cover with the bun.",
      "9. Serve with fries or salad on the side.",
      "10. Enjoy the fusion of flavors!",
    ],
  },
  {
    id: 8,
    title: "Savoring Gulab Jamun: An Indian Dessert Delight",
    date: "August 5, 2023",
    Desc: "Soft, deep-fried dough balls soaked in sweet syrup, Gulab Jamun is a must-have dessert for any festive occasion.",
    imgSrc: "GulabJamun.jpg",
    preparation: [
      "1. In a bowl, mix khoya with flour, baking powder, and a pinch of salt.",
      "2. Add milk gradually to form a soft dough.",
      "3. Divide the dough into small balls and set aside.",
      "4. Heat ghee in a deep pan for frying.",
      "5. Fry the dough balls on low heat until golden brown.",
      "6. Prepare sugar syrup by boiling sugar and water with cardamom.",
      "7. Soak fried balls in warm syrup for at least 30 minutes.",
      "8. Serve warm or at room temperature.",
      "9. Garnish with chopped nuts and serve.",
      "10. Enjoy the delightful sweetness!",
    ],
  },
  {
    id: 9,
    title: "Homemade Ice Cream: A Cool, Creamy Treat",
    date: "September 12, 2023",
    Desc: "A simple, homemade ice cream recipe made with natural ingredients. Creamy and delicious, it's a perfect dessert for all seasons.",
    imgSrc: "HomemadeIceCream.jpg",
    preparation: [
      "1. In a bowl, whisk heavy cream and condensed milk until smooth.",
      "2. Add vanilla extract for flavor.",
      "3. Mix in any desired add-ins (chocolate chips, fruits, nuts).",
      "4. Pour the mixture into a freezer-safe container.",
      "5. Cover and freeze for at least 4-6 hours or overnight.",
      "6. Before serving, let it sit for a few minutes to soften.",
      "7. Scoop into bowls and serve.",
      "8. Optionally, drizzle with chocolate syrup or caramel.",
      "9. Enjoy the rich, creamy texture of your homemade ice cream.",
      "10. Experiment with different flavors and toppings!",
    ],
  },
  {
    id: 10,
    title: "Making Vegetable Pulao: A One-Pot Rice Dish",
    date: "October 1, 2023",
    Desc: "A fragrant rice dish made with assorted vegetables and aromatic spices, ideal for a quick and satisfying meal.",
    imgSrc: "VegetablePulao.jpg",
    preparation: [
      "1. Rinse basmati rice under cold water until clear.",
      "2. In a pot, heat oil and add whole spices (cinnamon, cardamom, cloves).",
      "3. Add chopped onions and sauté until golden.",
      "4. Stir in mixed vegetables and cook for a few minutes.",
      "5. Add rinsed rice and sauté gently for a minute.",
      "6. Pour in water and season with salt.",
      "7. Bring to a boil, then cover and simmer on low heat.",
      "8. Cook until rice is fluffy and water is absorbed.",
      "9. Fluff the rice with a fork and garnish with cilantro.",
      "10. Serve hot with raita or salad.",
    ],
  },
  {
    id: 11,
    title: "The Best Indian Biryani Recipe",
    date: "November 14, 2023",
    Desc: "A fragrant rice dish made with basmati rice, spices, and meat or vegetables. Biryani is known for its rich aroma and delicious taste.",
    imgSrc: "IndianBiryani.jpg",
    preparation: [
      "1. Soak basmati rice for 30 minutes and drain.",
      "2. Heat oil in a pot, add whole spices (bay leaf, cloves, cardamom).",
      "3. Sauté sliced onions until golden brown.",
      "4. Add marinated meat (or vegetables) and cook until browned.",
      "5. Stir in ginger-garlic paste and sauté for a minute.",
      "6. Add chopped tomatoes and spices (biryani masala, turmeric, salt).",
      "7. Layer the soaked rice over the meat mixture.",
      "8. Pour water and bring to a boil, then reduce heat and cover.",
      "9. Cook on low heat until rice is tender and water is absorbed.",
      "10. Garnish with fried onions and fresh cilantro before serving.",
    ],
  },
  {
    id: 12,
    title: "A Guide to Traditional Indian Meals",
    date: "December 1, 2023",
    Desc: "A wholesome Indian thali with a variety of dishes including curries, rice, and bread, representing the rich culinary diversity of India.",
    imgSrc: "IndianMeals.jpeg",
    preparation: [
      "1. Choose a variety of dishes (curries, dal, vegetables).",
      "2. Prepare rice and chapatis (or naan) as staples.",
      "3. Cook each dish separately with appropriate spices.",
      "4. Serve dal with ghee on top for flavor.",
      "5. Include pickles and raita for added taste.",
      "6. Arrange dishes in small bowls on a thali.",
      "7. Ensure each dish is served hot.",
      "8. Garnish dishes with fresh herbs as needed.",
      "9. Serve with a side of salad for freshness.",
      "10. Enjoy the meal with family or friends.",
    ],
  },
  {
    id: 13,
    title: "Making Soft and Delicious Indian Parathas",
    date: "January 3, 2024",
    Desc: "A flatbread that's a staple in Indian households, parathas can be stuffed with various fillings like potatoes or paneer for extra flavor.",
    imgSrc: "IndianParathas.jpg",
    preparation: [
      "1. Prepare the dough by mixing wheat flour, salt, and water.",
      "2. Knead until smooth and let it rest for 30 minutes.",
      "3. For stuffing, mash boiled potatoes or paneer with spices.",
      "4. Divide the dough into small balls.",
      "5. Roll out each ball into a small circle.",
      "6. Place the stuffing in the center and fold the edges.",
      "7. Roll out again gently to flatten.",
      "8. Heat a tawa or skillet and cook parathas with ghee.",
      "9. Flip until golden brown on both sides.",
      "10. Serve hot with yogurt or pickle.",
    ],
  },
  {
    id: 14,
    title: "Indian Pulao: A Simple and Flavorful Rice Dish",
    date: "February 10, 2024",
    Desc: "A one-pot rice dish cooked with vegetables, aromatic spices, and herbs, Pulao is a lighter version of biryani but equally delicious.",
    imgSrc: "IndianPulao.jpg",
    preparation: [
      "1. Heat oil or ghee in a pot, add cumin seeds.",
      "2. Sauté chopped onions until translucent.",
      "3. Add mixed vegetables (carrots, peas, beans).",
      "4. Stir in soaked basmati rice and sauté briefly.",
      "5. Pour water and add salt and spices (bay leaf, cloves).",
      "6. Bring to a boil, then cover and simmer on low heat.",
      "7. Cook until rice absorbs water and is fluffy.",
      "8. Fluff the rice gently with a fork.",
      "9. Garnish with fresh cilantro and fried onions.",
      "10. Serve hot with raita or salad.",
    ],
  },
  {
    id: 15,
    title: "Comforting Kichdi: A Simple and Nutritious Meal",
    date: "March 18, 2024",
    Desc: "A traditional Indian comfort food made with rice and lentils, cooked together with minimal spices for a simple and wholesome dish.",
    imgSrc: "Kichdi.jpeg",
    preparation: [
      "1. Wash and soak rice and lentils for 30 minutes.",
      "2. Heat ghee in a pressure cooker, add cumin seeds.",
      "3. Sauté chopped onions and ginger until golden.",
      "4. Add soaked rice and lentils, mix well.",
      "5. Pour in water and add salt and turmeric.",
      "6. Pressure cook for 2-3 whistles until soft.",
      "7. Release pressure and stir the mixture gently.",
      "8. Adjust consistency by adding more water if needed.",
      "9. Garnish with fresh cilantro or ghee.",
      "10. Serve hot with pickle or yogurt.",
    ],
  },
  {
    id: 16,
    title: "How to Make Fresh Mango Lassi",
    date: "April 25, 2024",
    Desc: "A refreshing mango and yogurt-based drink that combines the sweetness of ripe mangoes with the tanginess of yogurt.",
    imgSrc: "MangoLassi.jpg",
    preparation: [
      "1. Peel and chop ripe mangoes into pieces.",
      "2. In a blender, combine mango pieces, yogurt, and sugar.",
      "3. Add a pinch of cardamom for flavor.",
      "4. Blend until smooth and creamy.",
      "5. Adjust sweetness to taste by adding more sugar.",
      "6. If desired, add ice cubes for a chilled drink.",
      "7. Blend again to combine well.",
      "8. Pour into glasses and garnish with mint leaves.",
      "9. Serve immediately for freshness.",
      "10. Enjoy as a refreshing drink during summer.",
    ],
  },
  {
    id: 17,
    title: "Creamy and Savory Meat Stroganoff Recipe",
    date: "May 7, 2024",
    Desc: "A rich and creamy meat dish made with sautéed pieces of beef, mushrooms, and sour cream. Perfect for a comforting meal.",
    imgSrc: "MeatStroganoff.jpg",
    preparation: [
      "1. Slice beef into thin strips and season with salt.",
      "2. Heat oil in a pan and sauté beef until browned.",
      "3. Remove beef and set aside; add sliced mushrooms to the pan.",
      "4. Sauté mushrooms until soft and golden.",
      "5. Stir in chopped onions and garlic, cooking until fragrant.",
      "6. Return beef to the pan and add beef broth.",
      "7. Simmer until sauce thickens slightly.",
      "8. Stir in sour cream and mix well.",
      "9. Adjust seasoning with salt and pepper.",
      "10. Serve over egg noodles or rice.",
    ],
  },
  {
    id: 18,
    title: "Classic Paneer Butter Masala Recipe",
    date: "June 15, 2024",
    Desc: "Paneer Butter Masala is a rich and creamy curry made with paneer, tomato gravy, and butter. It's a popular vegetarian dish.",
    imgSrc: "PaneerButterMasala.jpg",
    preparation: [
      "1. Heat butter in a pan and add chopped onions.",
      "2. Sauté until onions are golden brown.",
      "3. Add ginger-garlic paste and cook for a minute.",
      "4. Stir in chopped tomatoes and spices (red chili, garam masala).",
      "5. Cook until tomatoes soften and oil separates.",
      "6. Blend the mixture to a smooth puree.",
      "7. Return puree to the pan and add cream and paneer cubes.",
      "8. Simmer for 5-10 minutes, stirring gently.",
      "9. Adjust seasoning with salt and sugar.",
      "10. Garnish with fresh coriander and serve with naan.",
    ],
  },
  {
    id: 19,
    title: "The Perfect Pizza Dough Recipe",
    date: "July 22, 2024",
    Desc: "Learn how to make soft, elastic pizza dough from scratch, perfect for making your favorite homemade pizza.",
    imgSrc: "PizzaDough.jpg",
    preparation: [
      "1. In a bowl, mix flour, yeast, sugar, and salt.",
      "2. Gradually add warm water and olive oil.",
      "3. Knead the dough until smooth and elastic.",
      "4. Cover and let it rise for 1-2 hours in a warm place.",
      "5. Punch down the dough and knead again briefly.",
      "6. Roll out the dough to desired thickness.",
      "7. Place on a pizza stone or baking sheet.",
      "8. Preheat the oven to 475°F (245°C).",
      "9. Top with sauce, cheese, and toppings of your choice.",
      "10. Bake for 12-15 minutes until crust is golden.",
    ],
  },
  {
    id: 20,
    title: "How to Make Delicious Hummus at Home",
    date: "August 9, 2024",
    Desc: "A creamy Middle Eastern dip made from chickpeas, tahini, and olive oil. Perfect for spreading on bread or as a veggie dip.",
    imgSrc: "Hummus.jpg",
    preparation: [
      "1. Rinse and drain canned chickpeas.",
      "2. In a food processor, combine chickpeas, tahini, and garlic.",
      "3. Blend until smooth, adding lemon juice and water.",
      "4. Drizzle in olive oil while blending for creaminess.",
      "5. Season with salt and cumin to taste.",
      "6. Adjust consistency by adding more water if needed.",
      "7. Serve in a bowl, drizzled with olive oil.",
      "8. Garnish with paprika and parsley.",
      "9. Enjoy with pita bread or vegetable sticks.",
      "10. Store leftovers in the refrigerator.",
    ],
  },
  {
    id: 21,
    title: "Delicious Chicken Tikka Masala Recipe",
    date: "September 16, 2024",
    Desc: "A popular Indian dish made with marinated chicken pieces cooked in a creamy tomato sauce. Perfect with naan or rice.",
    imgSrc: "ChickenTikkaMasala.jpg",
    preparation: [
      "1. Marinate chicken pieces with yogurt and spices (cumin, coriander).",
      "2. Grill or bake marinated chicken until cooked through.",
      "3. In a pan, heat oil and sauté onions until golden.",
      "4. Add ginger-garlic paste and cook for a minute.",
      "5. Stir in chopped tomatoes and spices (garam masala, chili powder).",
      "6. Cook until tomatoes soften and oil separates.",
      "7. Add cooked chicken to the sauce.",
      "8. Pour in cream and simmer for 5-10 minutes.",
      "9. Adjust seasoning with salt and sugar.",
      "10. Serve hot with naan or basmati rice.",
    ],
  },
  {
    id: 22,
    title: "Traditional South Indian Sambar Recipe",
    date: "October 30, 2024",
    Desc: "A lentil-based vegetable stew seasoned with tamarind and spices, Sambar is a staple in South Indian cuisine.",
    imgSrc: "Sambar.jpg",
    preparation: [
      "1. Cook toor dal until soft and mushy.",
      "2. In a separate pot, boil vegetables (carrots, potatoes).",
      "3. Add tamarind extract and sambar powder to vegetables.",
      "4. Stir in cooked dal and mix well.",
      "5. Adjust seasoning with salt and water for consistency.",
      "6. In a small pan, heat oil and add mustard seeds.",
      "7. Once they crackle, add dried red chilies and curry leaves.",
      "8. Pour the tempering over the sambar.",
      "9. Simmer for a few minutes to blend flavors.",
      "10. Serve hot with rice or idli.",
    ],
  },
  {
    id: 23,
    title: "How to Make Chaat at Home: A Delicious Indian Snack",
    date: "November 12, 2024",
    Desc: "Chaat is a popular Indian street food made with a mix of spicy, tangy, and sweet flavors. Customize it with your favorite ingredients.",
    imgSrc: "Chaat.jpg",
    preparation: [
      "1. Prepare boiled potatoes and chickpeas.",
      "2. In a bowl, mix potatoes, chickpeas, onions, and tomatoes.",
      "3. Add green chutney and tamarind sauce to taste.",
      "4. Sprinkle chaat masala and salt for flavor.",
      "5. Top with sev for crunch.",
      "6. Drizzle yogurt for creaminess.",
      "7. Garnish with coriander leaves.",
      "8. Serve immediately for the best taste.",
      "9. Enjoy as a snack or appetizer.",
      "10. Customize with your choice of ingredients.",
    ],
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const years = ["2023", "2024"];
