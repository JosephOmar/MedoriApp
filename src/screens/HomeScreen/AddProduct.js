import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, TouchableOpacity, Image, TextInput,Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db, storage } from "../../../firebaseConfig";
import { InnerContainer, StyledContainer } from "../../components/styles";
import { StyledButton, ButtonText } from "../../components/styles";
import { useNavigation } from "@react-navigation/native";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  },[]);


  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "files"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setFiles((prevFiles) => [...prevFiles, change.doc.data()]);
        }
      });
    });
    return () => unsubscribe();
  }, []);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [3, 4],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function uploadProduct() {
    // Validar que se haya seleccionado una imagen antes de intentar cargarla
    if (!image) {
      console.warn("Selecciona una imagen antes de intentar cargarla");
      return;
    }

    // Subir la imagen y luego enviar los datos
    await uploadFile(image, "image");
  }

  async function uploadFile(uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, "Stuff/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
        console.error("Error uploading file: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          setImage("");
          setName("");
          setPrice("");
        });
      }
    );
  }

  async function saveRecord(fileType, url, createdAt) {
    try {
      const docRef = await addDoc(collection(db, "files"), {
        fileType,
        url,
        createdAt,
        name,
        price,
      });
    } catch (e) {
      console.error("Error saving document: ", e);
    }
  }

  return (
    <ImageBackground
      source={require('./../../assets/img/bgAddProduct.jpg')}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
    <StyledContainer

    >
      <InnerContainer>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Product Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={{ margin: 10, padding: 10, borderWidth: 2, backgroundColor: "#FFF", }}
          />
          <TextInput
            placeholder="Product Price"
            value={price}
            onChangeText={(text) => setPrice(text)}
            keyboardType="numeric"
            style={{ margin: 10, padding: 10, borderWidth: 2, backgroundColor: "#FFF", }}
          />
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: 200 }}
            />
          ) : null}

          <StyledButton
            onPress={pickImage}
            style={{
              width: 200,
            }}
          >
            <ButtonText
                style={{
                    width: 200,
                }}
            >Selecciona imagen</ButtonText>
          </StyledButton>
          <Text style={{ marginTop: 10 }}>{image.split("/").pop()}</Text>
          <StyledButton
            onPress={uploadProduct}
            style={{
              width: 200,
              marginTop: 200
            }}
          >
            <ButtonText
                style={{
                    width: 200   
                }}
            >Subir Producto</ButtonText>
          </StyledButton>
        </View>
      </InnerContainer>
    </StyledContainer>
    </ImageBackground>
  );
};

export default AddProduct;
/*import {React} from 'react'
import { Text, View } from "react-native"
import { StyledContainer,
    InnerContainer
} from '../../components/styles'

const AddProduct = () => {


    return(
        <StyledContainer>
            <InnerContainer>
                <Text>Producto</Text>
            </InnerContainer>
        </StyledContainer>
    )
}

export default AddProduct; */