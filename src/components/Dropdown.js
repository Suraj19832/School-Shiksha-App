import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const DropdownInput = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3']; // Your dropdown options

  const handleOptionSelect = (option) => {
    setSelectedValue(option);
    setInputValue(option);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Select an option"
        onFocus={() => setShowDropdown(true)}
      />
      <TouchableOpacity style={styles.dropdownArrow} onPress={() => setShowDropdown(!showDropdown)}>
        {/* Your dropdown arrow icon */}
        <Text>▼</Text>
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropdown}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.option}
              onPress={() => handleOptionSelect(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  dropdownArrow: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    maxHeight: 150,
    overflow: 'auto',
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  optionText: {
    textAlign: 'center',
  },
});

export default DropdownInput;
