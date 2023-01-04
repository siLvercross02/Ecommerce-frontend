import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
// import { popularProducts } from '../data'
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category 
          ? `http://localhost:5000/api/product?category=${category}`
          : "http://localhost:5000/api/product"
        );
        setProducts(res.data);
      } catch (error) {
        
      }
    }

    getProducts();
  }, [category]);

  useEffect(() => {
    category && setFilteredProducts(
      products.filter(item => Object.entries(filter).every(([key, value]) => 
        item[key].includes(value)
      ))
    );
  }, [products,category,filter]);

  useEffect(() => {
    if(sort === 'newest') {
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
      )
    } else if ((sort === 'asc')) {
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => new Date(a.price) - new Date(b.price))
      )
    } else {
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => new Date(b.price) - new Date(a.price))
      )
    }
    
  }, [sort]);

  return (
    <Container>
      {category ? filteredProducts.map((item) => ( <Product key={item._id} item={item} /> ))
        : products
            .slice(0, 8)
            .map((item) => ( <Product key={item._id} item={item} /> ))
      }
    </Container>
  )
}

export default Products