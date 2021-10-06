import {element} from 'prop-types';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {Input} from 'react-native-elements/dist/input/Input';
import {fetchRecipeDetails, fetchRecipeImage} from '../../../api/recipeService';

const Home = props => {
  const [details, setDetailsState] = useState([]);
  const [spinner, setSpinnerState] = useState(false);
  const [image, setImageState] = useState([]);

  useEffect(() => {
    fetchImage();
  }, []);

  //fn () to fetch Image
  const fetchImage = () => {
    setSpinnerState(true);
    fetchRecipeImage()
      .then(response => {
        if (response.data != null) {
          setTimeout(() => {
            var data = response.data.map((e, id) => (e = e.Image));
            setImageState(data);
            loadList(data);
          }, 300);
        }
      })
      .catch(err => setSpinnerState(false));
  };

  // fn() to load List
  const loadList = image => {
    setSpinnerState(true);
    fetchRecipeDetails()
      .then(response => {
        setSpinnerState(false);
        var data = [];
        if (response.data != null) {
          data = response.data.map((element, index) => {
            element.Stars = element.Stars == 'NaN' ? 0 : element.Stars;
            element.id = index;
            element.img =
              image.length == null
                ? require('../../../assets/recipe.jpg')
                : {
                    uri: image[
                      Math.floor(Math.random() * image.length - 1 + 1)
                    ],
                  };
            return element;
          });
        }
        setDetailsState(data);
      })
      .catch(err => setSpinnerState(false));
  };

  //fn() to search Array
  const handleSearch = item => {
    if (item == undefined || item == '') {
      loadList(image);
    } else {
      var data = details.filter(e => e['Brand'].startsWith(item));

      setDetailsState(data);
    }
  };

  //fn() to sort Rating
  const handleSort = () => {
    var sortedList = details.sort((a, b) => b.Stars - a.Stars);
    setDetailsState([]);

    setTimeout(() => {
      setDetailsState(sortedList);
    }, 1000);
  };
  const RenderItem = ({item, navigator}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Details', {data: item});
        }}>
        <ListItem bottomDivider>
          <Avatar rounded source={item.img} />
          <ListItem.Content>
            <ListItem.Title>{item.Brand}</ListItem.Title>
            <ListItem.Subtitle>
              Rating: <Text style={{fontWeight: 'bold'}}>{item.Stars}</Text>
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={style.root}>
      {spinner ? (
        <View style={style.spinner_container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={style.spinner_container}>
          <View style={style.input_container}>
            <Input
              placeholder="Search"
              leftIcon={{
                type: 'font-awesome',
                name: 'search',
                color: '#B2BEB5',
                size: 15,
              }}
              inputContainerStyle={style.input_container_style}
              onChangeText={item => handleSearch(item)}
            />
          </View>
          <TouchableOpacity
            style={style.star_rating_container}
            onPress={() => handleSort()}>
            <Text style={{color: 'white'}}> sort by Rating</Text>
          </TouchableOpacity>
          <FlatList
            keyExtractor={e => e.id}
            data={details}
            renderItem={item => RenderItem(item)}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    height: 20,
  },
  spinner_container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input_container: {flexDirection: 'row', paddingHorizontal: 5},
  input_container_style: {
    borderColor: '#B2BEB5',
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  star_rating_container: {
    alignSelf: 'flex-end',
    borderRadius: 5,
    backgroundColor: 'black',
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
});

export default Home;
