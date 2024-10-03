import styled from "styled-components";

const Container = styled.footer`
  margin-top: 32px;
  border-top: 1px solid ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  padding: 16px;
  text-align: center;
  width: 100%;
`;

const Text = styled.p`
  font-size: 1.8rem;
  margin: 0;

  > a {
    font-size: 1.8rem;

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Text>
        Developed with 🧡 by{" "}
        <a href="https://rafaelgomes.netlify.app?utm_source=moovie&utm_medium=projects&utm_campaign=moovie_footer">
          Rafael Gomes
        </a>
      </Text>
    </Container>
  );
};

export default Footer;
