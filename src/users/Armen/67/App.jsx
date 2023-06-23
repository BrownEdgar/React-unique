import { useState } from 'react';

import './App.scss';

export default function App() {
  const [cakes, setCakes] = useState([
    {
      id: 1,
      category: "Cake",
      name: "Mikado",
      images: 'https://mananbakery.com/wp-content/uploads/2020/11/DSC08060.jpg',
      resept: "Крем для торта: 400 мл молока, 200 г сливочного масла, 150 г сахара, 2 яйца, 4 ст. л. какао-порошка, 2 ст. л. муки, 400 г вареного сгущенного молока.",
      description: "Торт «Микадо» представляет собой сборку из множества тончайших сметанных коржей в сочетании с заварным шоколадным кремом и вареной сгущенкой. "
    },
    {
        id: 2,
        category: "Cake",
        name: "Eskimo",
        imges: 'https://cdn.lifehacker.ru/wp-content/uploads/2021/11/Depositphotos_68838977_XL_1637256577-scaled-e1637256646604-1280x640.jpg',
        resept: "Крем для торта: 400 мл молока, 200 г сливочного масла, 150 г сахара, 2 яйца, 4 ст. л. какао-порошка, 2 ст. л. муки, 400 г вареного сгущенного молока.",
        description: "Насыщенные и хорошо пропитанные коржи, прослойка из воздушного сливочного крема и тонкий слой глазури — этот восхитительный торт вам захочется готовить на каждый праздник."
    },
    {
        id: 3,
        category: "Cake",
        name: "Napoleon",
        imges: 'https://hips.hearstapps.com/hmg-prod/images/220713-delish-seo-01-napoleon-cake-horizontal-v5-081-eb-1658416382.jpg?crop=0.981xw:0.967xh;0.0187xw,0.0326xh&resize=1200:*',
        resept: "Крем для торта: 400 мл молока, 200 г сливочного масла, 150 г сахара, 2 яйца, 4 ст. л. какао-порошка, 2 ст. л. муки, 400 г вареного сгущенного молока.",
        description: "Торт «Микадо» представляет собой сборку из множества тончайших сметанных коржей в сочетании с заварным шоколадным кремом и вареной сгущенкой. "
    },
    {
        id: 4,
        category: "Soft drinks",
        name: "Coca-Cola, Fanta, Sprite",
        imges: 'https://indiaindia.com.cy/wp-content/uploads/2022/05/india-india-restaurant-nicosia-cyprus-soft-drinks22aa.jpg',
        resept: " ",
        description: "Enjoy cool "
    },
    {
        id: 5,
        category: "Soft drinks",
        name: "Inclusive Mixed Drinks",
        imges: 'https://i6b9r5w9.rocketcdn.me/wp-content/uploads/2020/03/mixed-drinks.jpg.webp',
        resept: " ",
        description: "Enjoy your time"
    },
    {
        id: 6,
        category: "Soft drinks",
        name: "Coffee",
        imges: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYn7EkLAfYtrJ7hAgVre38WOUV11uVKUNSA&usqp=CAU',
        resept: "Instant Coffee, Latte, Cappuccino, Americano, Espresso, Mocha",
        description: "Have a good time"
    },
    {
        id: 7,
        category: "Alcohols",
        name: "Brendy",
        imges: 'https://www.shutterstock.com/image-photo/aged-brendy-cigar-old-distillery-260nw-1709782273.jpg',
        resept: "Ararat, Noy, Louis XIII, Hennessy",
        description: "Enjoy the history"
    },
    {
        id: 8,
        category: "Alcohols",
        name: "Beer",
        imges: 'https://aspirantum.com/content/blog_post_images/blog_post_image_77_1572443204.jpg',
        resept: "Ararat, Kilikia, Dargett, Heineken, Bud, Stella Artois, Corona",
        description: "You can chose 0.33L, 0.5L and 1L"
    },
    {
        id: 9,
        category: "Alcohols",
        name: "Whisky",
        imges: 'https://vinestore.ru/image/catalog/blog/burbon-wiski-scotch.jpg',
        resept: "Jameson, Jack Daniels, Chivas 12, Johnnie Walker (Red Label, Black Label, Blue Label, Duble Black, Green Lable, Gold Lable)",
        description: "Whisky or whiskey is a type of liquor made from fermented grain mash. Various grains (which may be malted) are used for different varieties, including barley, corn, rye, and wheat. Whisky is typically aged in wooden casks, which are typically made of charred white oak. Uncharred white oak casks previously used for the aging of port, rum or sherry are also sometimes used."
    },
    {
        id: 10,
        category: "Main Dishes",
        name: "Butter Chicken",
        imges: 'https://picturetherecipe.com/wp-content/uploads/2020/04/PictureTheRecipe-Butter-Chicken.jpg',
        resept: "Grilled chicken in a luscious tomato-based spiced curry sauce.",
        description: "There’s about a bazillion versions of this very popular Indian dish, which is why I haven’t gotten around with sharing my own version on here before. Also it’s one of those recipes that I usually make from memory and had never actually written down to be able to share even though almost every time I’ve made it for someone they’ve asked for the recipe."
    },
    {
        id: 11,
        category: "Main Dishes",
        name: "Palak Paneer",
        imges: 'https://picturetherecipe.com/wp-content/uploads/2019/10/Palak-Paneer-by-PictureTheRecipe.jpg',
        resept: "So here’s my version of Palak Paneer a classic north Indian dish of cottage cheese cubes in a spinach based sauce. If you don’t have access to Indian Paneer, you can try tofu or even mini mozzarella balls, just skip the pan frying if you are using mozzarella.",
        description: "Indian cottage cheese over a vibrant green spiced spinach sauce and finished with a splash of cashew cream."
    },
    {
        id: 12,
        category: "Main Dishes",
        name: "Grilled Tomahawk Steak",
        imges: 'https://www.allrecipes.com/thmb/KFsMHU1dhZHfrYGgaORJ98GvnHk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7508957_Grilled-Tomahawk-Steak_Ashley-Elizabeth_4x3-5b17eab73d154d6394829d47d6ff3365.jpg',
        resept: "To make this an easy meal, I like to serve the steak on a platter of baked rice, and a chopped wedge salad with Bob's Blue Cheese Dressing! You can make the baked rice the day before, then reheat it with your steak. And the wedge salad can be assembled in the morning, and kept in the fridge until you're ready to serve.",
        description: "This grilled tomahawk steak recipe is a showstopper, ideal for sharing with friends and family. This reverse-seared steak is cooked to perfection with an unctuous compound butter filled with shallots, garlic, and chives. I like to use a Bluetooth-enabled meat thermometer to help me achieve the perfect medium-rare internal temperature."
    },
]);

const [selectedCategory, setSelectedCategory] = useState("");

const handleChange = (e) => {
  const { value } = e.target;
  setSelectedCategory(value);
};

return (
  <div className="App">
    <div className="App__flex">
      <form>
        <div className="App__category">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            onChange={handleChange}
            value={selectedCategory}
          >
            <option value="">All</option>
            {Array.from(new Set(cakes.map((cake) => cake.category))).map(
              (category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </div>
      </form>
      <div className="App__lists">
        {cakes
          .filter((cake) =>
            selectedCategory ? cake.category === selectedCategory : true
          )
          .map((cake) => (
            <div className="App__cake" key={cake.id}>
              <div className="App__imageBox">
                <img src={cake.imges} alt="" />
              </div>
              <div className="App__content">
                <h2>{cake.name}</h2>
                <p>{cake.resept}</p>
                <p>{cake.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
);
}
