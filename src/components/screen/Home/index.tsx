import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface HomeProps {
  // route:any,
  navigation:any,
}

const Home = ({
  navigation,
}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button 
        title="퀴즈 풀기"
        onPress={()=>{
            // console.log("퀴즈 풀기 버튼 클릭");
            navigation.navigate('Quiz');
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {}
});
