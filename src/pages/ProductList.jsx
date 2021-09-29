import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    margin: 20px;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display:"flex", flexDirection:"column"})}
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({margin: "0px"})}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}
`;
const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar />
            <Title>Roupas</Title>
            <FilterContainer>
                <Filter><FilterText>Produtos Filtrados:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option >Branco</Option>
                    <Option >Preto</Option>
                    <Option >Vermelho</Option>
                    <Option >Azul</Option>
                    <Option >Amarelo</Option>
                    <Option >Verde</Option>
                </Select>
                <Select>
                    <Option disabled selected>Tamanho</Option>
                    <Option >P</Option>
                    <Option >M</Option>
                    <Option >G</Option>
                    <Option >GG</Option>
                    <Option >XG</Option>
                   
                </Select>
                </Filter>
                <Filter><FilterText>Ordenar:</FilterText>
                <Select>
                    <Option selected>Novidades</Option>
                    <Option >Mais Barato</Option>
                    <Option >Mais Caro</Option>
                    
                </Select>
                
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
