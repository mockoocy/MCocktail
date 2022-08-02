import styled from "styled-components";

const StyledGenerator = styled.section`
  padding: 0 10%;
  .info-cards {
    padding: 2.5% 10%;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    gap: 2rem;

    @media (max-width:820px){
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  }
`

export default StyledGenerator;