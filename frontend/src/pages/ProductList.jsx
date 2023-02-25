import styled from 'styled-components';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { categories } from '../data';
import { Link } from 'react-router-dom';
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option``;

const Category = styled.div`
  display: flex;
  padding: 20px 10px;
  justify-content: space-evenly;
  text-decoration: none;
  background-color: antiquewhite;
  border-radius: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  ${mobile({ padding: '0px' })}
`;

const LinkCategory = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1%;
  width: 20rem;
  height: 5rem;
  margin: 0 1%;

  background-size: 100% 100%;
  background-image: url(//cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/newyear2023/Background/bg-danh-muc-desktop.png);
  ${mobile({ width: '8rem', height: '4rem', gap: '10px' })}
`;
const CategoryTitle = styled.h3`
  ${mobile({ fontSize: '13px' })}
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  const search = location.search;

  const handlerTitle = (value) => {
    switch (value) {
      case 'laptop':
        return 'Laptop';
      case 'watch':
        return 'Smartwatch';
      case 'smartphone':
        return 'Smartphone';
      case 'tablet':
        return 'Tablet';
      case undefined: {
        if (search) {
          return 'Search';
        } else {
          return 'All Products';
        }
      }
    }
  };
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <Title>{handlerTitle(cat)}</Title>
      {cat ? null : (
        <Category>
          {categories.map((item) => (
            <LinkCategory key={item.id} to={`/products/${item.cat}`}>
              <CategoryTitle>{item.title}</CategoryTitle>
            </LinkCategory>
          ))}
        </Category>
      )}
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} search={search} />
      <Newsletter />
    </>
  );
};

export default ProductList;
