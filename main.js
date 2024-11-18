const foodRecipes = [
    {
      id: 1,
      title: "Hummus",
      imageSrc: "https://www.themediterraneandish.com/wp-content/uploads/2015/01/How-to-make-hummus-recipe-3.jpg",
      rate: "Newfolder/5s.png",
      ingredients: ["1 can chickpeas", "1/4 cup tahini", "1 clove garlic", "2 tbsp olive oil", "1/2 lemon (juiced)", "Salt to taste"],
      howToPrepare: [`
      In a food processor, combine the drained chickpeas, tahini, minced garlic, lemon juice, and a pinch of salt. Process until smooth.`,
      `Slowly drizzle in olive oil while continuing to process, adjusting to your desired consistency.`,
      `Taste and adjust seasoning with more lemon juice or salt as desired.`,
      `Serve in a bowl, drizzle with a bit of olive oil and garnish with paprika.`,
      `5. Enjoy with pita bread or fresh vegetables.`],
      difficulty: "Easy",
      duration: "10 mins",
      Num: 10,
      Rate: "5 star",
    },
    {
      id: 2,
      title: "Falafel",
      imageSrc: "https://planetarianlife.com/wp-content/uploads/2022/01/Falafel-Base-2-920x610.jpg",
      rate: "Newfolder/4s.png",
      ingredients: ["1 cup chickpeas", "1 onion", "1 clove garlic", "1/4 cup parsley", "1 tsp cumin", "1 tsp coriander", "Salt and pepper", "Oil for frying"],
      howToPrepare: [`
      Drain the soaked chickpeas and place them in a food processor. Add the chopped onion, garlic, parsley, cumin, coriander, salt, and pepper.`
      ,`Process the mixture until it's well combined and forms a coarse, dough-like texture. Be careful not to over-blend.`
      ,`Transfer to a bowl, cover, and refrigerate for at least 30 minutes.`
      ,`Heat oil in a deep pan to 350°F (175°C).`
      ,`Shape the mixture into small balls or patties.`
      ,`Fry the falafel balls in batches until golden brown and crisp, about 3-4 minutes per side.`
      ,`Remove and drain on paper towels. Serve with tahini sauce, pita bread, and salad.`],
      difficulty: "Medium",
      duration: "45 mins",
      Num: 45,
      Rate: "4 star"
    },
    {
      id: 3,
      title: "Shawarma",
      imageSrc: "https://libshop.fr/wp-content/uploads/2020/03/shawarma-lebanon.jpg",
      rate: "Newfolder/5s.png",
      ingredients: ["500g chicken breast", "2 tbsp olive oil", "1 tsp paprika", "1 tsp cumin", "1/2 tsp turmeric", "Salt and pepper", "Pita bread", "Tahini sauce"],
      howToPrepare: [
        , `In a large bowl, combine olive oil, paprika, cumin, turmeric, cinnamon, salt, and pepper. Add the sliced chicken and toss to coat evenly.`
        , `Cover and marinate for at least 30 minutes, or up to 24 hours in the refrigerator for a stronger flavor.`
        ,`Heat a large skillet or grill pan over medium-high heat and add a bit of oil. Cook the chicken in batches for 6-8 minutes until browned and cooked through.`
        ,`Remove the chicken from heat and let rest for a few minutes before slicing thinly.`
        ,`Warm the pita bread in a pan or in the oven. Place some chicken slices on each pita, add chopped vegetables, and drizzle with tahini sauce.`
        ,`Roll or fold the pita and enjoy your homemade shawarma.`],
      difficulty: "Medium",
      duration: "60 mins",
      Num: 60,
      Rate: "5 star"
    },
    {
      id: 4,
      title: "Baba-Ghanoush",
      imageSrc: "https://feelgoodfoodie.net/wp-content/uploads/2023/03/Lebanese-Baba-Ghanoush-09.jpg",
      rate: "Newfolder/4s.png",
      ingredients: ["1 eggplant", "1 clove garlic", "2 tbsp tahini", "1 lemon (juiced)", "Salt", "Olive oil"],
      howToPrepare: [
      `Preheat the oven to 400°F (200°C). Pierce the eggplant with a fork in several places and place it on a baking sheet.`
      ,`Roast for 30-40 minutes until the eggplant is soft and the skin is charred. Allow it to cool slightly.`
      ,`Once cooled, peel off the skin and discard. Place the eggplant flesh in a food processor.`
      ,`Add garlic, tahini, lemon juice, and a pinch of salt. Process until smooth.`
      ,`Taste and adjust seasoning if necessary.`
      ,`Serve in a bowl, drizzling olive oil and sprinkling chopped parsley on top. Enjoy with pita bread.`],
      difficulty: "Easy",
      duration: "30 mins",
      Num: 30,
      Rate: "4 star"
    },
    {
      id: 5,
      title: "Tabbouleh",
      imageSrc: "https://cdn.loveandlemons.com/wp-content/uploads/2022/08/tabbouleh-1-580x808.jpg",
      rate: "Newfolder/5s.png",
      ingredients: ["1 cup parsley", "1/4 cup mint", "1/4 cup bulgur", "2 tomatoes", "1/2 cucumber", "1 lemon (juiced)", "Olive oil", "Salt"],
      howToPrepare: [`
      Place bulgur in a bowl and cover it with boiling water. Let it soak for 10-15 minutes until tender. Drain and squeeze out any excess water`
      ,`In a large mixing bowl, combine the chopped parsley, mint, tomatoes, cucumber, and prepared bulgur`
      ,`Add lemon juice, olive oil, and salt. Toss everything together until well mixed`
      ,`Taste and adjust seasoning as desired. Serve immediately for the freshest flavor`],
      difficulty: "Easy",
      duration: "20 mins",
      Num: 20,
      Rate: "5 star"
    },
    {
      id: 6,
      title: "Fattoush",
      imageSrc: "https://i0.wp.com/walkingthroughlavenderfields.com/wp-content/uploads/2022/10/fattoush-01.jpeg?resize=1024%2C683&ssl=1",
      rate: "Newfolder/4s.png",
      ingredients: ["Lettuce", "Cucumber", "Tomato", "Radishes", "Mint", "Parsley", "Pita bread", "Lemon juice", "Olive oil", "Sumac", "Salt"],
      howToPrepare:[`In a large mixing bowl, combine the chopped lettuce, cucumber, tomatoes, radishes, mint, and parsley.`
      ,` In a separate bowl, whisk together the lemon juice, olive oil, sumac, salt, and pepper to make the dressing.`
      ,` Pour the dressing over the salad and toss until evenly coated.`
      , `Add the toasted pita pieces just before serving to retain their crunch.`
      , `Serve immediately and enjoy the fresh, tangy flavor.`],
      difficulty: "Easy",
      duration: "15 mins",
      Num: 15,
      Rate: "4 star"
    },
    {
      id: 7,
      title: "Manakish",
      imageSrc: "https://palestineinadish.com/wp-content/uploads/2024/04/Manakeesh-featured-photo.jpg",
      rate: "Newfolder/4s.png",
      ingredients: ["Pizza dough", "Olive oil", "Za'atar spice blend"],
      howToPrepare: [
     `Preheat your oven to 450°F (230°C).`
      ,` Roll out the pizza dough on a floured surface into a round or rectangular shape about 1/4 inch thick.`
      , `In a small bowl, mix the olive oil with the za'atar spice blend to create a paste.`
      , `Spread the za'atar mixture evenly over the dough.`
      ,` Transfer the dough onto a baking sheet and bake for 10-12 minutes, until the edges are golden brown and the dough is cooked through.`
     , `Remove from the oven and let it cool slightly before slicing. Enjoy as a snack or appetizer.`],
      difficulty: "Medium",
      duration: "30 mins",
      Num: 30,
      Rate: "4 star"
    },
    {
      id: 8,
      title: "Mujadara",
      imageSrc: "https://www.hungrypaprikas.com/wp-content/uploads/2023/02/Mujaddara-6.jpg",
      rate: "Newfolder/5s.png",
      ingredients: ["1 cup lentils", "1 cup rice", "2 onions", "Olive oil", "Salt"],
      howToPrepare: [
      `Rinse the lentils and place them in a pot with 3 cups of water. Bring to a boil, then simmer for 15-20 minutes until tender. Drain and set aside.`
      ,`Meanwhile, cook the rice according to package instructions and set aside.`
      ,`In a large skillet, heat the olive oil over medium heat and add the sliced onions. Cook, stirring frequently, until they are caramelized and golden brown, about 15 minutes.`
      ,`Once the onions are caramelized, add the cooked lentils, rice, salt, and pepper to the skillet. Mix everything together until well combined and heated through.`
      ,`Serve warm, garnished with extra caramelized onions if desired.`],
      difficulty: "Medium",
      duration: "45 mins",
      Num: 45,
      Rate: "5 star"
    },
    {
      id: 9,
      title: "Shakshuka",
      imageSrc: "https://www.sandravalvassori.com/wp-content/uploads/2020/05/Photos-35129.jpg",
      rate: "Newfolder/5s.png",
      ingredients: ["2 tomatoes", "1 onion", "1 bell pepper", "2 eggs", "Olive oil", "Paprika", "Cumin", "Salt"],
      howToPrepare: [
      `Heat olive oil in a large skillet over medium heat. Add the chopped onion and bell pepper and cook until softened, about 5 minutes.`
      ,`Add the minced garlic, paprika, and cumin, and cook for another 1-2 minutes until fragrant.`
      ,`Stir in the diced tomatoes and season with salt and pepper. Simmer for 10-15 minutes until the sauce thickens.`
      ,`Make small wells in the sauce and crack an egg into each well.`
      ,`Cover the skillet and cook for 5-7 minutes, or until the eggs are set to your liking.`
      ,`Garnish with chopped cilantro and serve with warm bread for dipping.`],
      difficulty: "Easy",
      duration: "20 mins",
      Num: 20,
      Rate: "5 star"
    },
    {
      id: 10,
      title: "Kebab",
      imageSrc: "https://clubfoody.com/wp-content/uploads/2020/05/Turkish-Kebabs_Fotor-scaled.jpg",
      rate: "Newfolder/5s.png",
      ingredients: ["500g ground lamb", "1 onion", "Parsley", "Salt", "Pepper", "Skewers"],
      howToPrepare: [`
      In a large bowl, combine the ground meat, grated onion, chopped parsley, salt, and pepper. Mix thoroughly with your hands until well combined.`
      , `Shape the meat mixture onto wooden skewers, forming long, sausage-like shapes.`
      , `Preheat a grill or grill pan over medium-high heat.`
      , `Grill the kebabs for 4-5 minutes on each side, until the meat is cooked through and nicely browned.`
     ,`Serve hot with flatbread, yogurt sauce, and fresh vegetables.`],
      difficulty: "Medium",
      duration: "30 mins",
      Num: 30,
      Rate: "5 star"
    },
    {
      id: 11,
      title: "Dolma",
      imageSrc: "https://irp.cdn-website.com/31e168cd/dms3rep/multi/IMG_6483-6f4f9cf6.jpeg",
      rate: "Newfolder/4s.png",
      ingredients: ["Grape leaves", "Rice", "Ground meat", "Onion", "Spices", "Lemon juice"],
      howToPrepare: [
      `Rinse the grape leaves thoroughly. If using jarred leaves, blanch them in hot water to remove excess salt. Drain and set aside.`
      ,`In a bowl, mix the rice, ground meat, chopped onion, parsley, salt, and pepper.`
     ,`Lay each grape leaf shiny-side down and place a small spoonful of the rice mixture near the stem end. Fold the sides over and roll tightly to form a small, cigar-shaped roll.`
      ,` In a large pot, layer a few unused grape leaves on the bottom to prevent sticking. Arrange the dolmas seam-side down in tight rows.`
      ,` Drizzle olive oil and lemon juice over the dolmas. Add enough water to cover, and place a plate on top to keep them from moving while cooking.`
      ,` Cover and simmer on low heat for 40-50 minutes until the rice and meat are fully cooked.`
      ,` Serve warm or at room temperature with extra lemon wedges.`],
      difficulty: "Hard",
      duration: "90 mins",
      Num: 90,
      Rate: "4 star"
    },
    {
      id: 12,
      title: "Baklava",
      imageSrc: "https://cleobuttera.com/wp-content/uploads/2018/03/lifted-baklava-720x540.jpg",
      rate: "Newfolder/5s.png",
      ingredients: ["Phyllo dough", "Butter", "Chopped nuts", "Honey", "Cinnamon"],
      howToPrepare: [
      ,`Preheat oven to 350°F (175°C). Grease a 9x13-inch baking dish.`
      ,`Layer 10 sheets of phyllo dough in the dish, brushing each layer with melted butter.`
      ,`Spread a layer of chopped nuts mixed with cinnamon. Repeat layers, ending with 10 sheets of phyllo on top.`
      ,`Cut baklava into diamond or square shapes before baking.`
      ,`Bake for 45-50 minutes until golden brown.`
      ,`In a saucepan, combine sugar, honey, and water. Bring to a boil, then simmer for 10 minutes.`
      ,`Pour syrup over the baked baklava while still hot. Let it cool before serving.`],
      difficulty: "Hard",
      duration: "60 mins",
      Num: 60,
      Rate: "5 star"
    },
    {
      id: 13,
      title: "Kunafa",
      imageSrc: "https://turkishmart.ca/cdn/shop/articles/Kunafa-near-me_1024x1024.jpg?v=1657133918",
      rate: "Newfolder/5s.png",
      ingredients: ["Kataifi pastry", "Butter", "Cheese", "Sugar syrup", "Pistachios"],
      howToPrepare: [
      ,`Preheat oven to 350°F (175°C).`
      ,`In a large bowl, mix the kataifi pastry with melted butter until evenly coated.`
      ,`In a baking dish, layer half of the pastry, followed by the cheese, and then the remaining pastry.`
      ,`Bake for 25-30 minutes until golden brown.`
      ,`Drizzle sugar syrup over the kunafa while hot, then sprinkle with crushed pistachios. Serve warm.`],
      difficulty: "Hard",
      duration: "60 mins",
      Num: 60,
      Rate: "5 star"
    },
    {
      id: 14,
      title: "Labneh",
      imageSrc: "https://cdn.loveandlemons.com/wp-content/uploads/2020/05/labneh.jpg",
      rate: "Newfolder/5s.png",
      ingredients: ["Yogurt", "Salt", "Olive oil"],
      howToPrepare: [      ` In a bowl, mix the yogurt with salt.`
      ,`Line a strainer with a cheesecloth and place it over a bowl. Pour the yogurt into the cheesecloth.`
      ,`Tie the cloth and refrigerate for 12-24 hours to drain.`
      ,`Transfer labneh to a bowl and drizzle with olive oil. Serve with pita bread.`],
      difficulty: "Easy",
      duration: "60 mins",
      Num: 60,
      Rate: "5 star"
    },
    {
      id: 15,
      title: "Kibbeh",
      imageSrc: "https://media.istockphoto.com/id/1354924668/photo/fried-kibble-with-lemon.jpg?s=612x612&w=0&k=20&c=0mzVaxtFvRUx3aRfTrCjw1t6BcrtoHFydULN_RviovY=",
      rate: "Newfolder/5s.png",
      ingredients: ["Bulgur", "Ground meat", "Onion", "Spices"],
      howToPrepare: [
      `Soak bulgur in water for 15 minutes, then drain well.`
      ,` Mix bulgur with ground meat, onion, salt, and pepper.`
    , ` Shape into oval balls and press a thumb indent.`
      ,` Fry kibbeh until golden brown and cooked through. Serve warm.`],
      difficulty: "Medium",
      duration: "60 mins",
      Num: 60,
      Rate: "5 star"
    },
    {
      id: 16,
      title: "Fatayer",
      imageSrc: "https://cdn-rdb.arla.com/lurpak-mea-en/cheese-fatayer/248007093.jpg?mode=crop&w=1200&h=630&ak=64bfe437&hm=77b5a492",
      rate: "Newfolder/5s.png",
      ingredients: ["Dough", "Spinach", "Onion", "Lemon juice", "Olive oil"],
      howToPrepare:  [
      `Prepare dough and let rise.`
      ,`Saute spinach and onion in olive oil, add lemon juice.`
      ,`Roll dough into circles, fill with spinach, fold, bake until golden.`],
      difficulty: "Medium",
      duration: "40 mins",
      Num: 40,
      Rate: "5 star"
    },
    {
      id: 17,
      title: "Fesenjan",
      imageSrc: "https://www.themediterraneandish.com/wp-content/uploads/2023/01/Fesenjan-recipe-FINAL-7-500x375.jpg",
      rate: "Newfolder/5s.png",
      ingredients: ["Chicken", "Pomegranate molasses", "Walnuts", "Onion", "Spices"],
      howToPrepare: [` Saute onions until caramelized.`
      , `Add ground walnuts and pomegranate, simmer until thick.`
      ,` Add chicken, cook until tender.`],
      difficulty: "Hard",
      duration: "60 mins",
      Num: 90,
      Rate: "5 star"
    },
    {
      id: 18,
      title: "Maqluba",
      imageSrc: "https://falasteenifoodie.com/wp-content/uploads/2023/01/DSC00046-500x500.jpg",
      rate: "Newfolder/5s.png",
      ingredients: ["Rice", "Chicken", "Eggplant", "Cauliflower", "Spices"],
      howToPrepare: [
      `Brown chicken, then layer with rice, vegetables.`
      , `Cook until tender, flip pot to serve.`],
      difficulty: "Medium",
      duration: "90 mins",
      Rate: "5 star"
    }
]
const users = JSON.parse(localStorage.getItem("users")) || [];
let user;
let num;
let favA = JSON.parse(localStorage.getItem("favorite")) || [];
const body = $("body")
const mainImg = $("#mainImg")
const recipes = $("#recipes")
const main = $("#main")
const home = $("#home")
const Home = $("#Home")
const search = $("#search")
const searchB =$("#searchB")
const button = $("button")
const FAVOURITE = $("#FAVOURITE")
const filterC = $("#filterC")
const filterB = $("#filterB")
const show = $("#show")
const log = $("#log")
const modal = $("#modal")
const modal2 = $("#modal2")
const x = $("#x")
const x1 = $(".x1")
const regp = $("#regp")
const su = $(".su")
const uR = $("#uR")
const passR = $("#passR")
const regp2 = $("#regp2")
const p2 = $("#p2")
const sub = $(".sub")
const uL = $("#uL")
const passL = $("#passL")
const p3 = $("#p3")
const out = $("#out")
const p1 = $("<p id = p1 >Welcome to The World of Middle Easten FOOOOD!!!!</p>")
let count = false
const recipePage1 = $("#recipePage")
let NewFoodRecipes = foodRecipes
let favR = favA
const render = () => {
  if (user != undefined) {
    favA = user.fav
  }
  filterB.show()
    searchB.show()
    search.show()
    recipePage1.html("")
    mainImg.html("")
    recipes.html("")
    filterC.html("")
    let random = Math.floor(Math.random() * (foodRecipes.length -1))
    const imgselct = foodRecipes[random].imageSrc
    const img1 = $(`<img id = "mainImg1" src = "${imgselct}">`)
    mainImg.append(p1, img1)
    //filter  
    const filterD = $(`<dev id=Diff><p>Difficulty</p><dev id= diff1 ><button class = f >All</button><button class = f >Easy</button><button class = f >Medium</button><button class = f>Hard</button></dev></dev>`)
    const filterR = $(`<dev id=Rate><p>Rate</p><dev id=rate1 ><button class = r >All</button><button class = r >1 star</button><button class = r >2 star</button><button class = r >3 star</button><button class = r >4 star</button><button class = r >5 star</button></dev></dev>`)
    const filterT = $(`<dev id=T><p>Duration (between 0 and 90 mins)</p><dev id= t1 ><input class = t type="submit" value="Apply"><input type="range" id="vol" name="vol" min="0" max="90"><p id = p6></p><button class = t id = t >All</button>`)
    filterC.append(filterD,filterR,filterT)
    const SV = $("#vol")
    const p6 = $("#p6")
    p6.html(SV.val())
    SV.on('input', function() {
      p6.html($(this).val());
    })
    // recipes
    NewFoodRecipes.forEach((e,i) => {
    const title1 = e.title
    const devrecipes = $(`<dev id = "devrecipes"></dev>`)
    const dev = $(`<dev id = ${title1}></dev>`)
    const all = $(`<dev id = "all"></dev>`)
    const devRecipes = $(`<dev id = ${title1}></dev>`)
    recipes.append(devrecipes)
    devrecipes.append(dev, devRecipes)
    const imgselct2 = e.imageSrc
    const sss = $(`<img id = "img2" src = "${imgselct2}">`)
    const title2 = $(`<dev><p id = title>${title1}</p></dev>`)
    const difficulty1 = e.difficulty
    const difficulty2 = $(`<dev><p  id="mid">${difficulty1}</p></dev>`)
    const duration1 = e.duration
    const duration2 = $(`<dev><p id="mid">${duration1}</p></dev>`)
    let fav2 = $(`<img class = ${title1} id = img3 src = "Newfolder/Untitled-1.png">`)
    favA.forEach(e1 => {
      if (e1.id == e.id) {
        fav2 = $(`<img class = ${title1} id = img3 src = "Newfolder/Untitled-1-Recovered.png">`)
      }
    });
    const favB = $(`${i}`)    
    const rate1 = e.rate
    const rate2 = $(`<dev><img id = "img4" src = ${e.rate} ></dev>`)
    all.append(difficulty2,duration2,fav2)
    dev.append(sss, title2)
    devRecipes.append(all, rate2)
    
    dev.on("click", recipePage)

    fav2.on("click",function () {
        
    newFoodRecipes1 = NewFoodRecipes.filter((e,i) => {
            return e.title == $(this).attr('class')
     })

     favA.forEach((e1,i) => {
         if (e1.title.includes(newFoodRecipes1[0].title)){
        favA.splice(i,1)
        newFoodRecipes1.splice(0,1)
        $(this).attr("src", "Newfolder/Untitled-1.png")
    }
    })
    newFoodRecipes1.forEach((e,i) => {
    favA.push(e)    
    $(this).attr("src", "Newfolder/Untitled-1-Recovered.png")
    });
    if (user != undefined){
    users[num] = user
    localStorage.setItem("users", JSON.stringify(users))
    }else{localStorage.setItem("favorite", JSON.stringify(favA))}

})
})
$(".f").on("click", function () {
  if ($(this).html().toUpperCase() == "ALL") {
    NewFoodRecipes = foodRecipes
  }else{
  
  NewFoodRecipes = foodRecipes.filter((e,i) => {        
  return $(this).html().toUpperCase() == e.difficulty.toUpperCase()
  })
}
  render()
})
$(".r").on("click", function () {
  if ($(this).html().toUpperCase() == "ALL") {
    NewFoodRecipes = foodRecipes
  }else{
  NewFoodRecipes = foodRecipes.filter((e,i) => {        
  return $(this).html().toUpperCase() == e.Rate.toUpperCase()
  })
}
  render()
})
$(".t").on("click", function () {
  if ($(this).html().toUpperCase() == "ALL") {
    NewFoodRecipes = foodRecipes
  }else{
  NewFoodRecipes = foodRecipes.filter((e,i) => {
    
  return $("#vol").val() > e.Num
  })
}
  render()
})
favR = favA

if (user != undefined){
  users[num] = user
  localStorage.setItem("users", JSON.stringify(users))
  }else{localStorage.setItem("favorite", JSON.stringify(favA))}
}



const Fav = function () {
  filterB.show()
  searchB.show()
  search.show()
  recipePage1.hide()
  mainImg.html("")
  recipes.html("")
  filterC.html("")
  let random = Math.floor(Math.random() * (NewFoodRecipes.length -1))
  const imgselct = NewFoodRecipes[random].imageSrc
  const p1 = $("<p id = p1 >Your Favourite Recipes is HERE!!!</p>")
  const img1 = $(`<img id = "mainImg1" src = "${imgselct}">`)
  mainImg.append(p1, img1)
  //filter  
  const filterD = $(`<dev id=Diff><p>Difficulty</p><dev id= diff1 ><button class = f >All</button><button class = f >Easy</button><button class = f >Medium</button><button class = f>Hard</button></dev></dev>`)
    const filterR = $(`<dev id=Rate><p>Rate</p><dev id=rate1 ><button class = r >All</button><button class = r >1 star</button><button class = r >2 star</button><button class = r >3 star</button><button class = r >4 star</button><button class = r >5 star</button></dev></dev>`)
    const filterT = $(`<dev id=T><p>Duration (between 0 and 90 mins)</p><dev id= t1 ><input class = t type="submit" value="Apply"><input type="range" id="vol" name="vol" min="0" max="90"><p id = p6></p><button class = t id = t >All</button>`)
    filterC.append(filterD,filterR,filterT)
    const SV = $("#vol")
    const p6 = $("#p6")
    p6.html(SV.val())
    SV.on('input', function() {
      p6.html($(this).val());
    })
  // recipes
  favR.forEach((e,i) => {
  const title1 = e.title
  const devrecipes = $(`<dev id = "devrecipes"></dev>`)
  const dev = $(`<dev id = ${title1}></dev>`)
  const all = $(`<dev id = "all"></dev>`)
  const devRecipes = $(`<dev id = ${title1}></dev>`)
  recipes.append(devrecipes)
  devrecipes.append(dev, devRecipes)
  const imgselct2 = e.imageSrc
  const sss = $(`<img id = "img2" src = "${imgselct2}">`)
  const title2 = $(`<dev><p id = title>${title1}</p></dev>`)
  const difficulty1 = e.difficulty
  const difficulty2 = $(`<dev><p  id="mid">${difficulty1}</p></dev>`)
  const duration1 = e.duration
  const duration2 = $(`<dev><p id="mid">${duration1}</p></dev>`)
  const fav2 = $(`<img class = ${title1} id = img3 src = "Newfolder/Untitled-1-Recovered.png">`)
  const favB = $(`${i}`)    
  const rate1 = e.rate
  const rate2 = $(`<dev><img id = "img4" src = ${e.rate} ></dev>`)
  all.append(difficulty2,duration2,fav2)
  dev.append(sss, title2)
  devRecipes.append(all, rate2)
  
  dev.on("click", recipePage)

  fav2.on("click",function () {
      
  newFoodRecipes1 = NewFoodRecipes.filter((e,i) => {
          return e.title == $(this).attr('class')
   })

   favA.forEach((e1,i) => {
       if (e1.title.includes(newFoodRecipes1[0].title)){
      favA.splice(i,1)
      newFoodRecipes1.splice(0,1)
      $(this).attr("src", "Newfolder/Untitled-1.png")
  }
  })
  newFoodRecipes1.forEach((e,i) => {
  favA.push(e)    
  $(this).attr("src", "Newfolder/Untitled-1-Recovered.png")
  });
  if (user != undefined){
    users[num] = user
    localStorage.setItem("users", JSON.stringify(users))
    }else{localStorage.setItem("favorite", JSON.stringify(favA))}
})
})
$(".f").on("click", function () {
  if ($(this).html().toUpperCase() == "ALL") {
    favR = favA
  }else{
  favR = favA.filter((e,i) => {        
  return $(this).html().toUpperCase() == e.difficulty.toUpperCase()
  })
}
  Fav()
})
$(".r").on("click", function () {
  if ($(this).html().toUpperCase() == "ALL") {
    favR = favA
  }else{
  favR = favA.filter((e,i) => {        
  return $(this).html().toUpperCase() == e.Rate.toUpperCase()
  })
}
  Fav()
})
$(".t").on("click", function () {
  if ($(this).html().toUpperCase() == "ALL") {
    favR = favA
  }else{
    favR = favA.filter((e,i) => {
    
  return $("#vol").val() > e.Num
  })
}
  Fav()
})

if (user != undefined){
  users[num] = user
  localStorage.setItem("users", JSON.stringify(users))
  }else{localStorage.setItem("favorite", JSON.stringify(favA))}}
    

const recipePage = function () {
  recipePage1.show()
    filterB.hide()
    show.hide()
    searchB.hide()
    search.hide()
    mainImg.html("")
    recipes.html("")
    newFoodRecipes = NewFoodRecipes.filter((e,i) => {
       return e.title == $(this).attr('id')
    })
    recipePage2 = $(`
        <dev id = "headerRP"><h1>${newFoodRecipes[0].title}</h1></dev>
        <img id = "recipesIMG" src=${newFoodRecipes[0].imageSrc}>
        <dev id = "all" class = "all">
        <dev id = "recipesD"><dev><p>${newFoodRecipes[0].difficulty}</p></dev>
        <dev><p>${newFoodRecipes[0].duration}</p></dev>
        <dev><img src = ${newFoodRecipes[0].rate} ></dev></dev>
        </dev>
`)
        q = $(`<dev></dev>`)
        h2in = $(`<h2>Ingredients:</h2>`)
        ol1 = $(`<ol id = ol1></ol>`)
        q.append(h2in,ol1)
        newFoodRecipes[0].ingredients.forEach(e => {
          ne = $(`<li>${e}</li>`)
          
          ol1.append(ne)
        });

        w = $(`<dev></dev>`)
        h2ho = $(`<h2>How to Prepare:</h2>`)
        ol2 = $(`<ol id = ol1></ol>`)
        w.append(h2ho,ol2)
        newFoodRecipes[0].howToPrepare.forEach(e => {
          ne = $(`<li>${e}</li>`)          
          ol2.append(ne)
        });
rp = $("#recipePage")
rp.append(recipePage2,q,w)
}  


render()
search.on("change", () => {
    if (search.val() === undefined)
        {NewFoodRecipes = foodRecipes}
    else{
    NewFoodRecipes = foodRecipes.filter((e,i) => {       
    return e.title.toUpperCase().includes(search.val().toUpperCase())
    })}
    render()
})
filterB.on("click", function () {
  
  if (show.css("display") === "none") {
    show.css("display","block")
  } else {
    show.css("display","none")
  }
})
Home.on("click", render)
FAVOURITE.on("click", Fav)
log.on("click", () => {
  p3.text("Don't have an account, please")
  modal.css("display", "block")
})
x.on("click", () => {
  modal.css("display", "none")
})
x1.on("click", () => {
  modal2.css("display", "none")
})
regp.on("click", () => {
  modal.css("display", "none")
  modal2.css("display", "block")
})
su.on("click", () => {
  p2.text("")
  regp2.text("")
  let c=0
  
  users.forEach(e => {
    
  if (e.username == uR.val()) {
    c=1
  }
})
if (c == 1){
    p2.text("User already exist, please try another username..")
    regp2.text("")
  }else{ 
    users.push({ username: uR.val(),
    password: passR.val(),
    fav: []
    })
    p2.text("Now you can login on ")
    regp2.text("login page")
    regp2.on("click", () => {
      modal.css("display", "block")
      modal2.css("display", "none")
    })
}

if (user != undefined){
  users[num] = user
  localStorage.setItem("users", JSON.stringify(users))
  }else{localStorage.setItem("favorite", JSON.stringify(favA))}
})

sub.on("click", () => {
  let c = 0
  users.forEach((e,i) => {
    if (e.username == uL.val() && e.password == passL.val()) {
      c=1
      num = i
      user = e;
      render()
    }
})
if (c==1) {
  modal.css("display", "none")
  out.css("display", "block")
  log.css("display", "none")
  alert(`login successfully!!!`)
  p1.text(`Welcome back ${user.username}`)
  }else{
    p3.text("Wrong username or password please try again or ");
  }
  
})
out.on("click",() => {
  out.css("display", "none")
  log.css("display", "block")
  alert(`sign out successfully!!!`)
  p1.text(`Welcome to The World of Middle Easten FOOOOD!!!!`)
  user = undefined
  num = undefined
})