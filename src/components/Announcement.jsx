import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;

const Announcement = () => {
    return (
        <Container>
            Super Desconto! Frete Grátis para compras acima de R$100,00
        </Container>
    )
}

export default Announcement
