import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet from './BottomSheet';
import { Link } from 'expo-router';

const CustomFooter = () => {
  const BottomSheetRef = useRef<BottomSheetModal>(null);
  const [send,setSend] = useState<string>("");
  function openModal(message: string) {
    
    setSend(message);
    BottomSheetRef.current?.present();
  }

  return (
    <View style={styles.container}>
      <BottomSheet sender={send} ref={BottomSheetRef} />
      <TouchableOpacity onPress={() => openModal('Cart')}>
        <Ionicons style={styles.cartIcon} name="cart-outline" size={30} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openModal('Person')}>
        <Ionicons style={styles.bookIcon} name="person-add-outline" size={27} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 100,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 20,
  },
  cartIcon: {
    marginBottom: 3,
    paddingBottom: 10,
  },
  bookIcon: {
    paddingBottom: 10,
  },
});

export default CustomFooter;
