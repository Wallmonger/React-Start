const Welcome = () => {


    const bonjour = () => console.log('bonjour');
    const bonsoir = param => console.log(param);
    


    return (
        <div>
            <button onClick={bonjour}>Invoquer une fonction</button>
            <button onClick={() => bonsoir('bonsoir')}>Invoquer une fonction avec arg "Bonsoir"</button>
            <button onClick={() => console.log('bonne nuit')}>Console log sur le bouton</button>
        </div>
    )
}

export default Welcome;