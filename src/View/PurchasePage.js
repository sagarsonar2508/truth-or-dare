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

const PurchaseList = [
    { id: "purchase1", label: `Open Pack "Spicy"`, icon: "save", color: "#ff1493", price: 20 },
    { id: "purchase2", label: `Open Pack "Crazy"`, icon: "save", color: "#ff1493", price: 50 },
    { id: "purchase3", label: `Open Pack "Extreme"`, icon: "moon", color: "#ff1493", price: 100 },
    { id: "purchase4", label: `Open "All"`, icon: "users", color: "#ff1493", price: 300 },
];

const PurchasePage = () => {
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
      navigation.navigate('SubPage');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.background} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Purchases</Text>
        </View>
        {PurchaseList.map(({ id, label, type, icon, color, price }) => (
          <TouchableOpacity key={id} onPress={() => (handleLinkPress(id))}>
            <View style={styles.row}>
              {/* <View style={[styles.rowIcon, { backgroundColor: color || "#ff1493" }]}>
                <FeatherIcon name={icon} color="#fff" size={18} />
              </View> */}
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
                <View style={styles.rowIcon}>
                <Text>${price}</Text>
              </View>
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
});

export default PurchasePage;
