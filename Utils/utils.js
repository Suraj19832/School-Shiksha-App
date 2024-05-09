import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Stores data in async storage
 * @param {*} key
 * @param {*} value
 */

export const writeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw new Error(`Failed to write data in storage: ${e.message}`);
  }
};
