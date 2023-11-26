import{Container, Link, Text} from'@chakra-ui/react'
import{motion}from'framer-motion'


const Footer=()=>{

    return(				
<Container as='footer' h="6vh" maxW="100vw" display="flex" flexDirection="row" 
            justifyContent={"space-around"} bg={'rgb(56, 77, 170)'} alignItems={'center'} fontSize={{base:'10',sm:'12',md:'14',lg:'16'}}>
            <Container fontFamily={'Raleway'} display="flex" minW={{base:'180', sm:'200' , md:'250'}} maxW={{base:'200', sm:'250', md:'300'}} gap={{base:'1', md:'3'}} color={'whitesmoke'}>
                <Text>{}</Text><Text><motion.div whileHover={{ scale: 1.15 }}><Link _hover={{color:'rgba(253, 240, 123, 0.986)', textDecoration:'none'}}>{<strong> A.M. Desarrollos e Inversiones </strong>}</Link></motion.div></Text>{}

            </Container>
            <Container display="flex" flexDirection="row" justifyContent={'center'} 
            alignItems={'center'} maxW={'100'}>
                <motion.div whileHover={{ scale: 1.1 }}><Link p='2' color={'whitesmoke'}>
                    </Link> </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}><Link p='2' color={'whitesmoke'} >
                    </Link> </motion.div>
                </Container>
    </Container>    );    
}

export {Footer};