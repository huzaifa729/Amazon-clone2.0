import React from 'react'
import styled from 'styled-components'

function Product() {
  return (
    <Container>
       <Title>
         Ipad Pro
       </Title>
       <Price>
          ₹12547
       </Price>

       <Rating>
          ★★★★
       </Rating>
       <Image src="https://images-eu.ssl-images-amazon.com/images/I/41JMIe2FHuL._SX300_SY300_QL70_FMwebp_.jpg" alt="/im" />
       <ActionSection>
       <AddToCartButton>
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
  margin: 10px;
max-height: 300px;
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
    margin-top: 12px;
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