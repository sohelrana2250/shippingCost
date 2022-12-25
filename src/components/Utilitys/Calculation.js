

const setItemLocalStote = (id) => {


    let shoppingCard = {}


    const storedCard = localStorage.getItem('shopping-Card');
    if (storedCard) {
        shoppingCard = JSON.parse(storedCard);
    }
    else {
        shoppingCard = {}
    }

    const quantity = shoppingCard[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCard[id] = newQuantity;
    }
    else {

        shoppingCard[id] = 1;
    }
    localStorage.setItem('shopping-Card', JSON.stringify(shoppingCard));



}

const RemoveDataItem = (id) => {

    const storedCard = localStorage.getItem('shopping-Card');

    if (storedCard) {
        const converObj = JSON.parse(storedCard);

        if (id in converObj) {
            delete converObj[id];
            localStorage.setItem('shopping-Card', JSON.stringify(converObj));

        }


    }
    else {

        console.log('Remove Data Does Not Exist')
    }



}
export { setItemLocalStote, RemoveDataItem };