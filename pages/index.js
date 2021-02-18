import Footer from '../src/components/commons/Footer'
import Menu from '../src/components/commons/Menu';
import Text from '../src/components/foundation/text';
import { Button } from '../src/components/commons/Button';
import { Grid} from '../src/components/foundation/layout/grid';


export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu />
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={{ xs:0, md:1}}  //desclocando uma coluna
            value={{ xs:12, md:5}} //ocupando a quantidade informada em colunas no grid ( xs mobile)
          
          >
            Textos

          </Grid.Col>
          <Grid.Col
            value={{ 
              xs:12, 
              md: 6 // é a soma do grid anterior (1+5)
            }}
          
          >
            <img src="https://placehold.it/400x400"/>.
            
          </Grid.Col>

        </Grid.Row>

      </Grid.Container>

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
        >
          Cadastrar
        </Button>
      </div>

      <Footer />
    </div>
  )
}

