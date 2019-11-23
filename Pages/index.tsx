import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
export default () => {
  return (
    <Container>
      <Head>
        <title>About me</title>
      </Head>
      <p>
        Ahoy, I'm Nela,
        <br />
        I'm half labrador half swiss shepard.
      </p>
      <p>
        I love watter (anytime, anywhere, dirty is better than clean), mud,
        mountines and play fetch.
      </p>
      <p>
        I was born 26th of May 2015 close to Hradec Kralove. Now, I live in
        Prague with my best owners Ondrej and Zuzka.
      </p>
    </Container>
  );
};
