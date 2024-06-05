import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView ,RefreshControl,ActivityIndicator} from "react-native";
import { WebView } from "react-native-webview";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { getdata } from "../../Helper/Helper";

export default function HowtoApply({ navigation }) {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    videosData()
  },[])

  const videosData = () =>{
    setLoading(true)
    getdata("master/how-to-apply").then((res)=>{
      setData(res?.data)
setLoading(false)
    }).catch((err)=>{
      console.log(err,"error from how to apply")
      setLoading(false)
    })
  }

  const handleRefresh = () => {
    setRefreshing(true);
    videosData();
    setRefreshing(false)
  }

  if(loading){
    return(
      <View>
        <Header title="How to Apply" navigateTo={navigation.goBack} />
        <ActivityIndicator
          size={"large"}
          color={"#00367E"}
          style={styles.loader}
        />
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <Header
        title="How to Apply "
        navigateTo={() => navigation.navigate("Dashboard")}
      />
      <ScrollView style={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}>
        <View style={styles.content_box}>
          {
            data.map((item,index)=>{
              console.log(item.video_url,"{{{{{{{{{{{{{{{{{{{[")
              return (
                <View style={styles.box} key={index}>
                <Text style={styles.text}>
                  {item?.title}
                </Text>
                <WebView
                  containerStyle={{ borderRadius: 15 }}
                  style={styles.video}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  allowsFullscreenVideo={true}
                  source={{
                    uri: item?.video_url
                  }}
                />
              </View>
              )
            })
          }
         
          {/* <View style={styles.box}>
            <Text style={styles.text}>
              Free College admission form fill up tutorial
            </Text>
            <WebView
              containerStyle={{ borderRadius: 15 }}
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
              source={{
                uri: "https://www.youtube.com/embed/OMBEtL6-mnU?rel=0",
              }}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              Free College admission form fill up tutorial
            </Text>
            <WebView
              containerStyle={{ borderRadius: 15 }}
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
              source={{
                uri: "https://www.youtube.com/embed/OMBEtL6-mnU?rel=0",
              }}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>
              Free College admission form fill up tutorial
            </Text>
            <WebView
              containerStyle={{ borderRadius: 15 }}
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsFullscreenVideo={true}
              source={{
                uri: "https://www.youtube.com/embed/fWTpBBXx7DM?rel=0",
              }}
            />
          </View> */}
        </View>
        {/* <View style={styles.button}>
          <TouchableOpacity
            style={{ alignItems: "center", flexDirection: "row" }}
          >
            <Text style={{ color: "#435354", fontWeight: "500", fontSize: 14 }}>
              Show More
            </Text>
            <Entypo name="chevron-small-down" size={24} color="#435354" />
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // top: 53,
    // marginBottom: 48,
  },
  loader: {
    height: "90%",
    // width: Dimensions.get("window").width * 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
    marginBottom:20
  },
  content_box: {
    marginHorizontal: 20,
  },
  video: {
    flex: 1,
    height: 196,
    width: "100%",
    borderRadius: 10,
    marginTop: 8,
    // zIndex: 100,
    marginTop: -1,
  },
  box: {
    marginTop: 15,
  },
  text: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
    color: "#00367E",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FFFAE7",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
    width: 130,
    marginVertical: 14,
    alignSelf: "center",
  },
});
