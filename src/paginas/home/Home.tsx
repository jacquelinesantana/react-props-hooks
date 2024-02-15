interface homeProps{
    titulo: string;
    texto: string;
}
/*
a props esta criando quais são os atributos que vamos transitar nos componentes filhos
no caso o componente filho é o home e ele vai ter seus atributos 
populados diretamente pelo app.tsx

*/
function Home(props : homeProps){
    return(
        <>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </>
    )
}
export default Home;