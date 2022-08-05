export default function Messages({message}){
    return (
        <div>
            {
                (typeof String(message) === 'string' && message !== '' ) ?
                    <div className='mh-shadow2 bg-message p-2'>
                        <p>{message}</p>
                    </div>
                :
                    <div className='mh-shadow2 bg-message p-2'>
                        <p>Nada foi encontrado.</p>
                    </div>
            }
        </div>
    )
}