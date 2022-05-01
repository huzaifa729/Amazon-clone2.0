import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

function Product({title, price, rating, image, id}) {

  const addToCart = () => {
    console.log(id);
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get()
    .then((doc)=>{
        console.log(doc);
        if(doc.exists){
            cartItem.update({
                quantity: doc.data().quantity + 1
            })
        } else {
            db.collection("cartItems").doc(id).set({
                name: title,
                image: image,
                price: price,
                quantity: 1
            })
        }
    })
}

  return (
    <Container>
       <Title>
         {title}
       </Title>
       <Price>
       ₹{price}
       </Price>

       <Rating>
            {
              Array(rating)
              .fill()
              .map(rating=> <p>★</p>)
            }
       </Rating>
       <Image src={image} alt="img" />
       <ActionSection>
       <AddToCartButton    onClick={addToCart}>
           Add To Cart
       </AddToCartButton>
       </ActionSection>
    </Container>
  )
}

export default Product

const Container = styled.div`
  background-color: white;
  z-index: 100;
   flex: 1; 
  padding: 20px;
  margin: 20px;
max-height: 560px;
 display: flex;
flex-direction: column; 
`;


const Title = styled.span`
    font-family: Arial,  sans-serif;
    font-size: 20px;
`;
const Price = styled.span`
   font-weight: 500;
   margin-top: 3px;
   font-size: 18px;
`;

const Rating = styled.div`
 display: flex;
 color:orange;
 font-size:20px;
`

const Image = styled.img`
  max-height: 250px;
  object-fit: contain;
`;
const ActionSection = styled.div`
    margin-top: 9px;
    display: grid;
    place-items: center;
`;

const AddToCartButton = styled.button`
width: 100px;
height: 30px;
background-color: #f0c14b;
border: 2px solid #a88734;
border-radius: 2px;
cursor: pointer;
`;












// import React from 'react'
// import styled from 'styled-components'

// function Product({title,price,rating,image,id}) {
//   return (
//     <Container>
//        <Title>
//          Ipad Pro
//        </Title>
//        <Price>
//           ₹12547
//        </Price>

//        <Rating>
//           ★★★★
//        </Rating>
//        <Image src="https://images-eu.ssl-images-amazon.com/images/I/41JMIe2FHuL._SX300_SY300_QL70_FMwebp_.jpg" alt="/im" />
//        <ActionSection>
//        <AddToCartButton>
//            Add To Cart
//        </AddToCartButton>
//        </ActionSection>
//     </Container>
//   )
// }

// export default Product

// const Container = styled.div`
//   background-color: white;
//   z-index: 100;
//    flex: 1; 
//   padding: 20px;
//   margin: 20px;
// max-height: 360px;
//  display: flex;
// flex-direction: column; 
// `;


// const Title = styled.span`
//     font-family: Arial,  sans-serif;
//     font-size: 20px;
// `;
// const Price = styled.span`
//    font-weight: 500;
//    margin-top: 3px;
//    font-size: 18px;
// `;

// const Rating = styled.div`
//  display: flex;
//  color:orange;
//  font-size:20px;
// `

// const Image = styled.img`
//   max-height: 250px;
//   object-fit: contain;
// `;
// const ActionSection = styled.div`
//     margin-top: 5px;
//     display: grid;
//     place-items: center;
// `;

// const AddToCartButton = styled.button`
// width: 100px;
// height: 30px;
// background-color: #f0c14b;
// border: 2px solid #a88734;
// border-radius: 2px;
// cursor: pointer;
// `;