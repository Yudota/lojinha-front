import PageWrapper from "../../components/PageWrapper";
import { Button } from "../../components/ui/button";

function Home() {
  return <PageWrapper title="Página Inicial">
    Bem-vindo à loja!
    <Button onClick={()=>window.alert('Clique')} >Teste</Button>
  </PageWrapper>
}


export default Home;