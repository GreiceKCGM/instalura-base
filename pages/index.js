import React from 'react';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Text from '../src/components/foundation/text';
import Button from '../src/components/commons/Button';
import Grid from '../src/components/foundation/layout/grid';
import Box from '../src/components/foundation/layout/Box';
import Modal from '../src/components/commons/Modal';


export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"

    >
      {/*
      Solid
      S = Single Responsability
      0 = Open Closed 
      (pode acrescentar funcionalidades, mas está fechado pra modificar o que já tem)
      */}
      {/* {isModalOpen && <Modal />} */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        Nosso conteúdo pro modal
      </Modal>

      <Menu />
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',

        }}
      >
        <Grid.Row>
          <Grid.Col
          // value={4}
          // value={{xs: 12, md: 5}}
            offset={{ xs: 0, md: 1 }} // desclocando uma coluna
            // eslint-disable-next-line max-len
            value={{ xs: 12, md: 5 }} // ocupando a quantidade informada em colunas no grid ( xs mobile)
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <div>
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
              </Text>

              <Button
                variant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
                onClick={() => {
                  // isModalOpen = true;
                  setModalState(!isModalOpen);// novo state sendo atribuido.
                }}
              >
                Cadastrar
              </Button>
            </div>
          </Grid.Col>

          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <img
              alt="Imagem de celular com páginas internas do projeto com o perfil do Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>

        </Grid.Row>

      </Grid.Container>
      <Footer />
    </Box>
  );
}
