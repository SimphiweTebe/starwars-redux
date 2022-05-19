import styled from "styled-components";

const StyledHero = styled.header`
    
    height: 40vh;
    width: 95%;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        font-size: 8rem;
        line-height: 1;
    }

    @media screen and (max-width: 720px){
        height: 30vh;

        h1{
            font-size: 5rem;
        }
    }
`;

function HeroItem() {
  return (
    <StyledHero>
        <div className="content">
            <h1>Explore<br/> the Galaxy</h1>
        </div>
    </StyledHero>
  )
}

export default HeroItem