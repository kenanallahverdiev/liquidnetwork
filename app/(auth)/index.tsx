import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LogoIcon from "@/assets/icons/LogoIcon";
import AppleIcon from "@/assets/icons/AppleIcon";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { router } from "expo-router";

export const AUTH_TOKEN = "auth_token";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    AsyncStorage.setItem(AUTH_TOKEN, "1234567890");
    router.push("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoPlaceholder}>
          <LogoIcon />
        </View>
        <Text style={styles.welcomeText}>Welcome to Liquid</Text>
        <Text style={styles.subtitle}>Please sign in with your account</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email ID"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#666"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or login with</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <AppleIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <InstagramIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.createAccountContainer}>
          <Text style={styles.noAccountText}>Don't Have an Account yet? </Text>
          <TouchableOpacity>
            <Text style={styles.createNewText}>Create New</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  logoPlaceholder: {
    marginBottom: 20,
  },
  logoText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "System",
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "600",
    marginBottom: 8,
    fontFamily: "System",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    fontFamily: "System",
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
    fontFamily: "System",
  },
  input: {
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    fontFamily: "System",
    backgroundColor: "white",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#666",
    fontSize: 14,
    fontFamily: "System",
  },
  signInButton: {
    backgroundColor: "#E8EEF4",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  signInButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "System",
  },
  orText: {
    textAlign: "center",
    color: "#666",
    marginVertical: 20,
    fontFamily: "System",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  createAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  noAccountText: {
    color: "#666",
    fontSize: 14,
    fontFamily: "System",
  },
  createNewText: {
    color: "#0066CC",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "System",
    textDecorationLine: "underline",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    height: "100%",
    justifyContent: "center",
  },
});

export default AuthScreen;
