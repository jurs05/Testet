import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function App() {
  const estudante = {
    nome: "Marina Silva",
    idade: 32,
    universidade: "Universidade ABC",
    metas: "Tornar-me uma engenheira de software bem-sucedida",
    hobbies: "Tocar violão, ler livros e fazer trilhas",
    religiao: "Católica",
    estadoCivil: "Casada",
    filhos: 2,
    links: [
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "GitHub", url: "https://github.com" },
    ],
    avatar: require("./src/assets/profile.jpg"), // Substitua pelo arquivo de imagem padrão apropriado
    historia:
      "Tenho trabalhado como engenheira de software nos últimos 5 anos. Comecei minha carreira na Empresa XYZ, onde trabalhei em diversos projetos e adquiri experiência em desenvolvimento web. Depois disso, ingressei na Corporação ABC, onde me especializei em desenvolvimento de aplicativos móveis. Atualmente, trabalho como freelancer, assumindo projetos de diferentes clientes e expandindo meu conjunto de habilidades. No meu tempo livre, gosto de aprender novas tecnologias e contribuir para projetos de código aberto.",
  };

  const paletaCores = {
    primaria: "#FF6B6B", // Cor primária
    secundaria: "#70C1B3", // Cor secundária
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
      backgroundColor: "#FFFFFF",
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
          <Text style={estilos.texto}>Filhos: {estudante.filhos}</Text>
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
