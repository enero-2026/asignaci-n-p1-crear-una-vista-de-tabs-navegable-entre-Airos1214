import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  
  const [activeTab, setActiveTab] = useState("Inicio")

  const renderContent = () => {
    switch (activeTab) {
      case "Inicio":
        return <Text style={styles.contentText}>Pantalla de Inicio</Text>;
      case "Perfil":
        return <Text style={styles.contentText}>Pantalla de Perfil</Text>;
      case "Buscar":
        return <Text style={styles.contentText}>Pantalla de Buscar</Text>;
      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        {renderContent()}
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.button, activeTab === "Inicio" && styles.activeButton]}
          onPress={() => setActiveTab("Inicio")}
        >
          <Text style={styles.textBar}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, activeTab === "Perfil" && styles.activeButton]}
          onPress={() => setActiveTab("Perfil")}
        >
          <Text style={styles.textBar}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, activeTab === "Buscar" && styles.activeButton]}
          onPress={() => setActiveTab("Buscar")}
        >
          <Text style={styles.textBar}>Buscar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c9bd6e"
  },

  contentText: {
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: "bold"
  },

  textBar: {
    fontWeight: "bold",
    color: "#e8e5dc"
  },

  tabBar: {
    flexDirection: "row",
    height: 60,
    borderTopWidth: 1,
    borderColor: "#c9bd6e",
    backgroundColor: "#6b390a"
    
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    
  },

  activeButton: {
    backgroundColor: "#ef7b0e6e"
  }
});