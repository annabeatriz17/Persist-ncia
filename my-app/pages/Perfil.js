import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-web";

export default function PerfilScreen({ }) {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.titulo}>Welcome to My Profile!</Text>
            <Text style={styles.texto}>I am Anna Beatriz.</Text>
            <Text style={styles.texto0}>Tenho 17 anos e hoje estou estudando na Rede Sesi e Senai em Valinhos - SP. NA rede Sesi estou no 3° ano do Ensino Médio, no meu último ano. Na Rede Senai estou no técnino de Desenvolvimento de Sistemas.</Text>
            <Image source={require("../assets/img/eu.jpg")} style={styles.eu} />
            
            <View style={styles.cardContainer}>
                <View style={styles.cards}>
                    <Image source={require("../assets/img/iconhtml.png")} style={styles.icone} />
                    <Image source={require("../assets/img/iconcss.png")} style={styles.icone} />
                    <Image source={require("../assets/img/iconjs.png")} style={styles.icone} />
                    <Image source={require("../assets/img/iconvsco.png")} style={styles.icone} />
                </View>
                <View style={styles.cards}>
                    <Image source={require("../assets/img/icongithub.png")} style={styles.icone} />
                    <Image source={require("../assets/img/iconfigma.png")} style={styles.icone} />
                    <Image source={require("../assets/img/iconreact.png")} style={styles.icone} />
                    <Image source={require("../assets/img/iconmiro.png")} style={styles.icone} />
                </View>
            </View>
        </View>
        </ScrollView>
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
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    texto: {
        fontSize: 15,
        textAlign: "center",
    },
    texto0: {
        fontSize: 16,
        textAlign: "justify",
    },
    eu: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        alignSelf: "center",
        marginTop: 20,
    },
    cardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 15,
        marginTop: 20,
        backgroundColor: "#F5F5F5",
    },
    icone: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    cards: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        padding: 10,
        borderRadius: 15,
        shadowRadius: 5,
    },
});