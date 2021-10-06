import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import {Avatar} from 'react-native-elements';

const RecipeDetails = ({route}) => {
  const [details, setDetailsState] = useState([]);
  useEffect(() => {
    setDetailsState(route.params.data);
  }, [route.params.data]);

  return (
    <SafeAreaView style={style.root}>
      <View style={style.avatar}>
        <Avatar rounded source={details.img} containerStyle={style.avatar} />
      </View>
      <View style={style.container}>
        <Text style={style.title}>Brand : </Text>
        <Text style={style.subTitle}>{details.Brand}</Text>
      </View>
      <View style={style.container}>
        <Text style={style.title}>Variety : </Text>
        <Text style={style.subTitle}>{details?.Variety}</Text>
      </View>
      <View style={style.container}>
        <Text style={style.title}>Country : </Text>
        <Text style={style.subTitle}>{details.Country}</Text>
      </View>
      <View style={style.container}>
        <Text style={style.title}>Stars : </Text>
        <Text style={style.subTitle}>{details?.Stars}</Text>
      </View>
      <View style={style.container}>
        <Text style={style.title}>Top Ten : </Text>
        <Text style={style.subTitle}>{details.Country}</Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  avatar: {
    alignSelf: 'center',
    height: 250,
    width: 250,
    borderRadius: 150,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
  },
});

export default RecipeDetails;
