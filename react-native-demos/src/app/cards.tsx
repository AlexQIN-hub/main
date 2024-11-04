import { Link } from 'expo-router';
import {View,Text,Image,Button,StyleSheet} from 'react-native';

const Card = () => {
    return(
        <View style={styles.container}>
            <Image 
            source={require("../assets/image/1.jpg")} 
            style = {styles.imageStyle}
            />

            <Text style={styles.heading}>Alex Mercer</Text>
            <Text style={styles.text}>My name is alex and i lvoe coding.</Text>
            <Button title='press me'></Button>
            <Link href="/Index">Index</Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        padding : 10,
        paddingTop : 50,
        paddingBottom : 40,
        margin : 20,
        alignItems : 'center',
        shadowColor : '#000',
        shadowOffset : {width : 0,height : 2},
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5,
    },

    imageStyle : {
        width : 200,
        height : 200,
        borderRadius : 100,
        marginBottom : 20,
    },

    heading : {
        fontSize : 20,
        marginBottom : 10,

    },

    text : {
        marginBottom : 20,
    },
})

export default Card;