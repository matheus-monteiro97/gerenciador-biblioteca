const ShoppingList = require('./shoppingList');
const User = require('./userTable');

//Sincronização para as tabelas serem criadas no database
(async () => {

    const database = require('./dbConnection');
    const User = require('./userTable');
    const Book = require('./bookTable');
    const ShoppingList = require('./shoppingList');
    await database.sync();

  /*  const newUser = await User.create({
        name: "Matheus",
        email: "financa@binance.com",
        password: "dbd4567456", 
    });*/

   /* const newBook = await Book.create({
        title: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        genre: "Fábula",
        publishCompany: "Nova Fronteira",
        comment: "Muito bom! Indico!",
        userId: newUser.id
    });*/

   /* const newShoppingList = await ShoppingList.create({
        title: "Pai rico, Pai pobre.",
        author: "Robert Kiyosaki",
        linkShop: "https://www.amazon.com.br/Pai-rico-pobre-para-jovens/dp/8550801224/ref=asc_df_8550801224/?tag=googleshopp00-20&linkCode=df0&hvadid=379787439353&hvpos=&hvnetw=g&hvrand=1410628331552585523&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001625&hvtargid=pla-394932371907&psc=1",
        userId: newUser.id
    });*/
    
})();