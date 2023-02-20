import React from "react";


const RegisterScreen = () => {


  return (
    <SafeAreaView style={container}>
      {isLoading && <LoadingComponent />}
      {/* {!isLoading && ( */}
      <Root style={[container, { flexDirection: "column" }]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <View style={styles.headerView}>
            <Icon type="FontAwesome" name="whatsapp" style={styles.logoStyle} />
            <_Text style={styles.logoTextStyle}>{constants.APP_NAME}</_Text>
          </View>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <View style={styles.contentView}>
              <_Text description style={[poppinsRegular, styles.inputStyle]}>
                Country
              </_Text>
              <View style={{ flexDirection: "column" }}>
                {/* <_TextInput editable={true} style={{width:'20%'}} /> */}
                <CountryPicker
                  containerButtonStyle={{
                    height: 40,
                    marginTop: 5,
                    justifyContent: "center",
                  }}
                  countryCode={countryCode}
                  withCountryNameButton={true}
                  visible={false}
                  withFlag={true}
                  withCloseButton={true}
                  withAlphaFilter={true}
                  withCallingCode={true}
                  //   withCurrency={true}
                  withEmoji={true}
                  withCountryNameButton={true}
                  //   withCurrencyButton={true}
                  //   withCallingCodeButton={true}
                  withFilter={true}
                  withModal={true}
                  onSelect={onSelect}
                />
                <View style={{ height: "3%", backgroundColor: GREEN }} />
              </View>

              <View style={{ flexDirection: "column", marginTop: "-4%" }}>
                <_Text description style={[poppinsRegular, styles.labelStyle]}>
                  Enter Name
                </_Text>

                <_TextInput
                  value={userName}
                  inputStyle={[poppinsMedium, styles.inputStyle]}
                  floatingLabel={false}
                  keyboardType={"default"}
                  containerStyle={{ width: "100%", marginLeft: 0 }}
                  onChangeText={(data) => {
                    setUserName(data.value);
                  }}
                />

                <_Text description style={[poppinsRegular, styles.labelStyle]}>
                  Mobile Number
                </_Text>

                <_TextInput
                  value={mobile}
                  inputStyle={[poppinsMedium, styles.inputStyle]}
                  floatingLabel={false}
                  keyboardType={"numeric"}
                  containerStyle={{ width: "100%", marginLeft: 0 }}
                  onChangeText={(data) => {
                    setMobile(data.value);
                  }}
                />
              </View>

              <View style={styles.buttonLoginView}>
                <Button onPress={() => onSignUpClick()} style={styles.login}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Sign Up
                  </Text>
                </Button>
                <BorderlessButton
                  onPress={() => onLoginClick()}
                  style={styles.buttonSignupView}
                >
                  <Text style={styles.signup}>Login</Text>
                </BorderlessButton>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Root>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: GREEN,
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  logoStyle: {
    fontSize: 50,
    color: WHITE,
    justifyContent: "center",
    alignSelf: "center",
  },
  logoTextStyle: {
    marginTop: "2%",
    color: WHITE,
    fontSize: 26,
  },
  contentView: {
    margin: "3%",
    flex: 1,
    flexDirection: "column",
    height: "55%",
    paddingTop: 20,
  },
  inputStyle: {
    justifyContent: "center",
    paddingBottom: "-1%",
    color: TEXT_SUBTITLE,
    marginTop: -10,
  },
  labelStyle: {
    marginTop: "8%",
    fontSize: 16,
    color: GRAY,
  },
  buttonLoginView: {
    alignSelf: "flex-end",
    bottom: 0,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonSignupView: {
    width: "100%",
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
  },
  login: {
    width: "100%",
    height: 60,
    backgroundColor: MID_GREEN,
    alignSelf: "center",
    justifyContent: "center",
  },
  signup: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    color: MID_GREEN,
  },
});
