import Post from '../post/post'

const colorText = (color, textUpercase)=>{
    console.log(color, textUpercase)
}
const Posts = () => {
    return (
        <div>
            <div className='titulo'>
                <h1>Frases Curtas</h1>
            </div>
            <Post colorText= {colorText}>
                <h1>Confucio</h1>

                <p>Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade.</p>
            </Post>
        </div>
    )
}

export default Posts