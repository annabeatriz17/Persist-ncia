import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SecureStore } from 'expo';

const TextoExibido = ({ titulo, texto, cor }) => (
    <Text style={[styles.texto, { color: cor }]}>
        {titulo}: {texto || "Nenhum texto salvo"}
    </Text>
);

export default function HomeScreen({ navigation }) {
    const [texto, setTexto] = useState("");
    const [textoPersistido, setTextoPersistido] = useState(""); 
    const [textoSalvoSemPersistencia, setTextoSalvoSemPersistencia] = useState(""); 

    useEffect(() => {
        const carregarTextoPersistido = async () => {
            const textoSalvo = await SecureStore.getItemAsync("meuTexto"); 
            if (textoSalvo) {
                setTextoPersistido(textoSalvo); 
            }
        };
        carregarTextoPersistido(); 
    }, []);
    const salvarTexto = async () => {
        if (!texto.trim()) {
            alert("Por favor, insira algo.");
            return;
        }
        await SecureStore.setItemAsync("meuTexto", texto);
        setTextoPersistido(texto); 
        setTextoSalvoSemPersistencia(texto); 
        setTexto(""); 
    };

    const limparTexto = async () => {
        await SecureStore.deleteItemAsync("meuTexto"); 
        setTextoPersistido(""); 
        setTextoSalvoSemPersistencia(""); 
        alert("Texto apagado da persistência!"); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Persistência e Navegação</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite algo"
                value={texto}
                onChangeText={setTexto}
            />

            <TextoExibido titulo="Sem persistência" texto={textoSalvoSemPersistencia} cor="red" />
            <TextoExibido titulo="Texto persistido" texto={textoPersistido} cor="green" />

            <TouchableOpacity style={styles.botao} onPress={salvarTexto}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={limparTexto}>
                <Text style={styles.textoBotao}>Limpar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("Detalhes", { textoNaoPersistido: textoSalvoSemPersistencia })}
            >
                <Text style={styles.textoBotao}>Detalhes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("Perfil", { textoPersistido })}
            >
                <Text style={styles.textoBotao}>Perfil</Text>
            </TouchableOpacity>
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
        textAlign: "center",
    },
    input: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        fontSize: 18,
    },
    texto: {
        fontSize: 18,
        textAlign: "center",
    },
    botao: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    textoBotao: {
        color: "white",
        fontSize: 18,
    },
});