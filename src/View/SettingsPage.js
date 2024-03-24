import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const settingsList = [
  { id: "purchases", label: "Purchases", type: "link", icon: "save", color: "#ff1493" },
  { id: "reportBug", label: "Report Bug", type: "link", icon: "flag", color: "#ff1493" },
  { id: "contactUs", label: "Contact Us", type: "link", icon: "mail", color: "#ff1493" },
];

const SettingsPage = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    darkMode: true,
    showCollaborators: true,
  });

  const handleToggle = (id, value) => {
    setForm({ ...form, [id]: value });
  };

  const handleLinkPress = (id) => {
    console.log(`Link pressed for id: ${id}`);
    if(id == "purchases"){
      navigation.navigate('PurchasePage');
    }
    if(id === 'contactUs'){
      navigation.navigate('ContactUsPage');
    }
  };

  const handlePress = (id) =>{
    if(id === 'contactUs'){
      navigation.navigate('ContactUsPage');
    }
  };

  const NeuMorph = ({ children, size, style}) =>{
    return(
      <View style = {styles.topShadow}>
        <View style = {styles.bottomShadow}>
          <View 
            style={[
              styles.inner,
              {width: size || 40, height: size || 40, borderRadius: size/2 || 40/2},
              style
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.background} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        {settingsList.map(({ id, label, type, icon, color }) => (
          <TouchableOpacity key={id} onPress={() => (type === "link" ? handleLinkPress(id) : null)}>
            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: color || "#ff1493" }]}>
              </View>
              <Text style={styles.rowLabel}>{label}</Text>
              {type === "toggle" && (
                <Switch
                  key={id}
                  value={form[id]}
                  onValueChange={(value) => handleToggle(id, value)}
                  trackColor={{ false: "#9e9e9e", true: "#ff1493" }}
                  thumbColor={form[id] ? "#fff" : "#fff"}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", // Dark background color
  },
  scrollViewContent: {
    paddingVertical: 20,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.9,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    marginTop: 40,
    color: "#ff1493",
  },
  section: {
    paddingHorizontal: 24,
  },
  row: {
    marginLeft:30,
    marginRight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    elevation: 2,
  },
  rowLabel: {
    flex: 1,
    fontSize: 17,
    color: "#333",
    marginLeft: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  inner: {
    backgroundColor: "#00235B",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#00235B",
    borderWidth: 1,
    elevation: 15, 
  },
  topShadow: {
    shadowOffset: {
      width: -12,
      height: -12
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowColor: "#211951",
  },
  bottomShadow: {
    shadowOffset:{
      width: 12,
      height: 12
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowColor: "#211951"
  },
});

export default SettingsPage;
