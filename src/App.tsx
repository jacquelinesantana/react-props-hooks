
import './App.css'
import Contador from './paginas/contador/Contador'
import Home from './paginas/home/Home'


function App() {
  
/* conceito props no home - torna nosso componente reutilizavel,
 vamos mudar o seus valores passados e reaproveitar a estrutura já criada

 <Home titulo="Esse é um componente com props" 
      texto="agora já estamos trabalhando com props - componente chamado com sucesso" />
*/
/*
  conceito de hooks - mudar o estado de algo diante de um contexto 
  (contexto é o evento que afeta esse valor inicial) esse gatilho pode 
  -exibir algo novo na tela 
  -remover algo que estava na tela
  -alterar alguma informação na tela ...
  Componente contador tem um evento que é iniciado através de um hook
  esse evento realiza uma alteração de um atributo valorx através do setValorx
*/

  return (
    <>
      <Home titulo="Esse é um componente com props" 
      texto="agora já estamos trabalhando com props - componente chamado com sucesso" />

      <Home titulo="Agora estamos testando" 
            texto="esse é um texto para comprovar a teoria do props" />
          
      <Contador />
    </>
  )
}

export default App
