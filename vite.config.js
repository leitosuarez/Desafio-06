import {resolve} from 'path'
export default{

    css: {
        devSourcemap: true
    },

    build : {
        rollupOptions : {
            input :{
                main : resolve(__dirname, 'index.html'),
                mariopage : resolve(__dirname, 'pages/mariopage/index.html'),
                mortalpage : resolve(__dirname, 'pages/mortalpage/index.html')
            } 
        }
    }
    
}


/* Con este comando/objeto vamos a poder visaulizar a traves del inspeccionar de la pagina que estemos creando, el style css en que line exacta de codigo esta cada estilo */