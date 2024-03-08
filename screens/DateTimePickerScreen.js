import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const DateTimePickerScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDateTimeItems, setSelectedDateTimeItems] = useState([]);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowDatePicker(Platform.OS === "ios");
    setSelectedDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || selectedTime;
    setShowTimePicker(Platform.OS === "ios");
    setSelectedTime(currentTime);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const addDateTimeItem = () => {
    const newItem = {
      id: Date.now(),
      date: selectedDate.toLocaleDateString(),
      time: selectedTime.toLocaleTimeString(),
    };

    setSelectedDateTimeItems([...selectedDateTimeItems, newItem]);
  };
  const handleDelete = (item) => {
    const updatedDateTimeItems = selectedDateTimeItems.filter(
      (dateTimeItem) => dateTimeItem.id !== item.id
    );

    setSelectedDateTimeItems(updatedDateTimeItems);
  };
  return (
    <View style={styles.container}>
      <AppText>Select date and hour:</AppText>
      <TouchableOpacity style={styles.button} onPress={showDatepicker}>
        <Text style={styles.buttonText}>
          Select Date: {selectedDate.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="datePicker"
          value={selectedDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={showTimepicker}>
        <Text style={styles.buttonText}>
          Select Time: {selectedTime.toLocaleTimeString()}
        </Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={selectedTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}
      <AppButton title="Add" onPress={addDateTimeItem} color="danger" />
      <View>
        {selectedDateTimeItems.map((item) => (
          <ListItem
            key={item.id}
            style={styles.dateTimeItem}
            title={`Mergi la sala pe data de ${item.date}`}
            subTitle={`la ora ${item.time}`}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "top",
    alignItems: "left",
    padding: 20,
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
  },
});

export default DateTimePickerScreen;
