import { View, StyleSheet, RefreshControl, ScrollView } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { getrequestwithtoken } from "../../Helper/Helper";
import { AuthContext } from "../../Utils/context/AuthContext";
import { Image } from "react-native";
import Header from "../../components/Header";
import { Animated } from "react-native";

const ID_card = ({ navigation }) => {
  const [idfront, setidfront] = useState("");
  const [idback, setidback] = useState("");
  const [pageloading, setpageloading] = useState(true);
  const { userToken } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setpageloading(true);
    getrequestwithtoken("student/profile", userToken)
      .then((res) => {
        if (res?.status) {
          setidfront(res?.data?.id_card_front);
          setidback(res?.data?.id_card_back);
          setpageloading(false);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, [userToken]);

  const handleRefresh = () => {
    setRefreshing(true);
    getrequestwithtoken("student/profile", userToken)
      .then((res) => {
        if (res?.status) {
          setidfront(res?.data?.id_card_front);
          setidback(res?.data?.id_card_back);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      })
      .finally(() => {
        setRefreshing(false);
      });
  };

  const CardSkeleton = () => {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, [opacity]);

    return (
      <>
        <Header title="ID Card" navigateTo={navigation.goBack} />
        <View style={styles.container12}>
          {[...Array(2)].map((_, index) => (
            <Animated.View
              key={index}
              style={[styles.placeholder, { opacity }]}
            />
          ))}
        </View>
      </>
    );
  };

  if (pageloading) {
    return <CardSkeleton />;
  }
  return (
    <>
      <Header title="ID Card" navigateTo={navigation.goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {idfront && (
          <Image
            style={{ width: "100%", height: "40%" }}
            source={{ uri: idfront }}
            resizeMode="contain"
          />
        )}

        {idback && (
          <Image
            style={{ width: "100%", height: "40%" }}
            source={{ uri: idback }}
            resizeMode="contain"
          />
        )}
      </ScrollView>
    </>
  );
};

export default ID_card;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  container12: {
    backgroundColor: "#F6F6F6",
    borderRadius: 13,
    marginBottom: 16,
    height: "80%",
    gap: 10,
    justifyContent: "center",
  },
  placeholder: {
    backgroundColor: "#ccc",
    height: "40%",
    borderRadius: 0,
  },
});
