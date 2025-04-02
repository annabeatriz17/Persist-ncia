import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

export default function PerfilScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Welcome to My Profile!</Text>
            <Text style={styles.texto}>I am Anna Beatriz.</Text>
            <Text style={styles.texto0}>Me chamo Anna Beatriz, tenho 17 anos e hoje estou estudando na Rede Sesi e Senai em Valinhos - SP. NA rede Sesi estou no 3° ano do Ensino Médio, no meu último ano. Na Rede Senai estou no técnino de Desenvolvimento de Sistemas.</Text>
            <image source={require("../assets/img/eu.jpg")} style={styles.imagem} />
            
            <View style={styles.cardContainer}>
                <Card containerStyle={styles.card1}>
                    <Image source={require("../assets/img/iconhtml.png")} style={styles.imagem0} />
                    <Image source={require("../assets/img/iconcss.png")} style={styles.imagem0} />
                    <Image source={require("../assets/img/iconjs.png")} style={styles.imagem0} />
                    <Image source={require("../assets/img/iconvsco.png")} style={styles.imagem0} />
                </Card>
                <Card containerStyle={styles.card2}>
                    <Image source={require("../assets/img/icongithub.png")} style={styles.imagem1} />
                    <Image source={require("../assets/img/iconfigma.png")} style={styles.imagem1} />
                    <Image source={require("../assets/img/iconreact.png")} style={styles.imagem1} />
                    <Image source={require("../assets/img/iconmiro.png")} style={styles.imagem1} />
                </Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100,
        paddingHorizontal: 25,
        gap: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    texto: {
        fontSize: 18,
        textAlign: "center",
    },
    texto0: {
        fontSize: 16,
        textAlign: "center",
    },
    imagem: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
    },
    card1: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    card2: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    imagem0: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    imagem1: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
});