import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Login_Page from "../src/screens/Login_Page";
import Dashboard from "../src/screens/Dashboard";
import VerifyEmail from "../src/screens/VerifyEmail";
import VerifyOTP from "../src/screens/VerifyOTP";
import ForgetPassword from "../src/screens/ForgetPassword";
import Registration from "../src/screens/Registration";
import FreeCollegeList from "../src/screens/FreeCollegeList";
import HowtoApply from "../src/screens/HowtoApply";
import GetInTouch from "../src/screens/GetInTouch";
import ContactUs from "../src/screens/ContactUs";
import Notification from "../src/screens/Notification";
import PaymentHistory from "../src/screens/PaymentHistory";
import Deatails from "../src/screens/Deatails";
import AdmissionForm from "../src/screens/AdmissionForm";
import PaidCollegeList from "../src/screens/PaidCollegeList";
import paidCollegeRegForm from "../src/screens/PaidCollegeRegForm";
import Header from "./Header";
import FreeGovermentCertificate from "../src/screens/FreeGovermentCertificate";
import OnlineCourseList from "../src/screens/OnlineCourseList";
import EditProfile from "../src/screens/EditProfile";
import ComputerCourseAdmissForm from "../src/screens/ComputerCourseAdmissForm";
import ComputerCollegeList from "../src/screens/ComputerCollegeList";
import OnlineAdmissionForm from "../src/screens/OnlineAdmissionForm";
import FreeGovCertiAdmissionForm from "../src/screens/FreeGovCertiAdmissionForm";
import GraduateBenefits from "../src/screens/GraduateBenefits";
import HSBenefits from "../src/screens/HSBenefits";
import MPBenefits from "../src/screens/MPBenefits";
import OtherBenefits from "../src/screens/OtherBenefits";
import PaidCertificationList from "../src/screens/PaidCertificationList";
import PaidCerti_Regis_Form from "../src/screens/PaidCerti_Regis_Form";
import MembershipPlan from "../src/screens/MembershipPlan";
import ChangePassword from "../src/screens/ChangePassword";
import { AuthContext, AuthProvider } from "../Utils/context/AuthContext";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import OnlineCourseDetails from "../src/screens/OnlineCourseDetails";
import FreeGovtCertiDetails from "../src/screens/FreeGovtCertiDetails";
import PaidCollegeDetails from "../src/screens/PaidCollegeDetails";
import PaymentQR from "../src/screens/PaymentQR";
import ComputerCourseDetails from "../src/screens/ComputerCourseDetails";
import PaidCertiDetails from "../src/screens/PaidCertiDetails";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { myLoading, userToken } = useContext(AuthContext);

  if (myLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <>
      {userToken !== null ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="header"
              component={Header}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="freeCollege"
              component={FreeCollegeList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="howToApply"
              component={HowtoApply}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="getInTouch"
              component={GetInTouch}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="contactUs"
              component={ContactUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="notification"
              component={Notification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="paymentHistory"
              component={PaymentHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="details"
              component={Deatails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="freeAdmissionForm"
              component={AdmissionForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="paidCollegeList"
              component={PaidCollegeList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="paidCollegeDetails"
              component={PaidCollegeDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="paidCollgeAdmForm"
              component={paidCollegeRegForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="freeGovCertificate"
              component={FreeGovermentCertificate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="freeGovAdmissionForm"
              component={FreeGovCertiAdmissionForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="freeGovtDetails"
              component={FreeGovtCertiDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="onlineCourses"
              component={OnlineCourseList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="onlineAdmissionForm"
              component={OnlineAdmissionForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="editProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="computerAdmissionForm"
              component={ComputerCourseAdmissForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="computerCollegeList"
              component={ComputerCollegeList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="computerCourseDetails"
              component={ComputerCourseDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="graduateBenefits"
              component={GraduateBenefits}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="hsBenefits"
              component={HSBenefits}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="mpBenefits"
              component={MPBenefits}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="otherBenefits"
              component={OtherBenefits}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="paidcertificateList"
              component={PaidCertificationList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="paidcertificateForm"
              component={PaidCerti_Regis_Form}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="paidCertificateDetails"
              component={PaidCertiDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="membershipPlan"
              component={MembershipPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="paymentQR"
              component={PaymentQR}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="onlineCourseDetails"
              component={OnlineCourseDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="resetPassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login_Page}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyEmail"
              component={VerifyEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyOtp"
              component={VerifyOTP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Navigation;
