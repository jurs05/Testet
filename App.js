import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function App() {
  const estudante = {
    nome: "Julia Resende",
    idade: 18,
    universidade: "Universidade CTOP.",
    metas: "Tornar-me bem-sucedida.",
    hobbies: "Jogar, ler livros e ouvir música.",
    religiao: "Não tenho.",
    estadoCivil: "Solteira.",
    pets: 1,
    links: [
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "GitHub", url: "https://github.com" },
    ],
    avatar: require("./src/assets/jungkook2.png"), // Substitua pelo arquivo de imagem padrão apropriado
    historia:
      "Estou aprendendo programação, na linguagem JavaScript. Tenho conhecimento básico em francês e inglês.",
  };

  const paletaCores = {
    primaria: "#333333", // Cor primária
    secundaria: "#FFFFFF", // Cor secundária
    texto: "#333333", // Cor do texto
    subtitulo: "#444444", // Cor do subtítulo
    link: "#0066CC", // Cor do link
  };

  const abrirLink = (url) => {
    // Lógica para abrir a URL, você pode usar Linking do react-native
    console.log("Abrindo URL:", url);
  };

  const estilos = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F3F3F3",
      padding: 20,
    },
    perfil: {
      backgroundColor: "#e5ceed",
      borderRadius: 10,
      padding: 20,
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      width: 150,
      height: 150,
      borderColor: paletaCores.primaria,
      borderWidth: 2,
      borderRadius: 75,
      marginRight: 20,
    },
    descricao: {
      flex: 1,
    },
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
      color: paletaCores.texto,
    },
    subtitulo: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
      color: paletaCores.subtitulo,
    },
    texto: {
      fontSize: 16,
      marginBottom: 15,
      color: paletaCores.texto,
    },
    link: {
      fontSize: 16,
      marginBottom: 5,
    },
    rotuloLink: {
      fontWeight: "bold",
      color: paletaCores.link,
    },
    textoLink: {
      color: paletaCores.link,
      textDecorationLine: "underline",
    },
  });

  return (
    <View style={estilos.container}>
      <View style={estilos.perfil}>
        <Image source={estudante.avatar} style={estilos.avatar} />
        <View style={estilos.descricao}>
          <Text style={estilos.titulo}>Olá, eu sou a {estudante.nome}!</Text>
          <Text style={estilos.subtitulo}>Informações pessoais:</Text>
          <Text style={estilos.texto}>Idade: {estudante.idade}</Text>
          <Text style={estilos.texto}>
            Universidade: {estudante.universidade}
          </Text>
          <Text style={estilos.texto}>Religião: {estudante.religiao}</Text>
          <Text style={estilos.texto}>
            Estado Civil: {estudante.estadoCivil}
          </Text>
          <Text style={estilos.texto}>Pets: {estudante.pets}</Text>
          <Text style={estilos.subtitulo}>Metas:</Text>
          <Text style={estilos.texto}>{estudante.metas}</Text>
          <Text style={estilos.subtitulo}>Hobbies:</Text>
          <Text style={estilos.texto}>{estudante.hobbies}</Text>
          <Text style={estilos.subtitulo}>Links:</Text>
          {estudante.links.map((link, index) => (
            <Text key={index} style={estilos.link}>
              <Text style={estilos.rotuloLink}>{link.label}:</Text>{" "}
              <Text
                style={estilos.textoLink}
                onPress={() => abrirLink(link.url)}
              >
                {link.url}
              </Text>
            </Text>
          ))}
          <Text style={estilos.subtitulo}>História:</Text>
          <Text style={estilos.texto}>{estudante.historia}</Text>
        </View>
      </View>
    </View>
  );
}
