import React from "react";
import { StyleSheet, Modal, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  visible,
  onClose,
  onLogout,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Ionicons name="log-out-outline" size={24} color="#FF4444" />
            <Text style={styles.logoutText}>Выйти</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    minWidth: 200,
    alignSelf: "flex-end",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
  },
  logoutText: {
    color: "#FF4444",
    fontSize: 16,
    fontWeight: "500",
  },
});
