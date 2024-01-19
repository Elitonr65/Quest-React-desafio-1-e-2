import React from 'react'
import './post.css'

const Post = ({children, color, textUpercase, colorText}) => {
    return (
        <div className='card' 
        style={{
            color: color,
            textTransform: textUpercase 
            
        }} 
        onClick={()=>colorText(color, textUpercase)}>
            {children}
        </div>
    )
}

Post.defaultProps = {
    color: '#8B0000',
    textUpercase: 'uppercase'
}

export default Post