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
import uuid from 'react-native-uuid';
import { PageTitle } from "../../components/styles";
import {Picker} from '@react-native-picker/picker';
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(''); 
  const [gender, setGender] = useState(''); 
  const genders = ['Mujer', 'Hombre', 'Niño', 'Niña'];
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const navigation = useNavigation();
  const [id, setId] = useState("");

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
    setId(uuid.v4());
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function uploadProduct() {
    // Validar que se haya seleccionado una imagen antes de intentar cargarla
    if (!name || !price || !image || !description || !gender) {
      console.warn("Completa todos los campos antes de subir el producto");
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
          setId("");
          setDescription("");
          setGender("");
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
        id,
        description,
        gender,
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
      <ImageBackground
          source={require('./../../assets/img/Logo.png')}
          style={{flex: 1, position: 'absolute', top: 0,left: 0,right: 0,bottom: 0, zIndex: 1,  }}
          resizeMode="contain"
      >
        <KeyboardAvoidingWrapper>
      <StyledContainer>
        <InnerContainer>
        <PageTitle>Agregar Producto</PageTitle>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              placeholder="Product Name"
              value={name}
              onChangeText={(text) => setName(text)}
              style={{ margin: 10, padding: 10,width:250, borderWidth: 2, backgroundColor: "#FFF", }}
            />
            <TextInput
              placeholder="Product Price"
              value={price}
              onChangeText={(text) => setPrice(text)}
              keyboardType="numeric"
              style={{ margin: 10, padding: 10,width:250, borderWidth: 2, backgroundColor: "#FFF", }}
            />
            <TextInput
               style={{ margin: 10, padding: 10,width:250, borderWidth: 2, backgroundColor: "#FFF", }}
              value={description}
              onChangeText={text => setDescription(text)}
            />
            <Picker
               style={{ margin: 10, padding: 10,width:250, borderWidth: 2, backgroundColor: "#FFF", }}
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) =>
                setGender(itemValue)
              }
            >
              <Picker.Item label="Seleccionar Género" value="" />
              {genders.map((item, index) => {
                return <Picker.Item label={item} value={item} key={index} />
              })}
            </Picker>
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
      </KeyboardAvoidingWrapper>
      </ImageBackground>
    </ImageBackground>
    
  );
};

export default AddProduct;
