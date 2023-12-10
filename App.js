import React from "react";
import { Text, Button, View, TextInput, Alert, Image, SafeAreaView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FFBA01', '#D0A819', '#99872B', '#666D41', '#335456']} style={{ flex: 1 }}>
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 50, fontStyle: "italic", color: 'black', marginTop: 22 }}>Argo</Text>

          <Image
            style={{ width: 300, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 8, marginBottom: 8 }}
            source={{ uri: "https://natysbookshelf.files.wordpress.com/2018/11/46e37-summerreading_gif_blog.gif" }}>
          </Image>

          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18, fontStyle: "italic", color: '#335456' }}>"A Reader Lives A Thousand Lives{'\n'} Before He Dies"</Text>

          <Text style={{ textAlign: 'center', paddingBottom: 7, marginTop: 10, fontWeight: 'bold' }}>User Name :-</Text>
          <TextInput style={{ height: 35, width: 250, borderColor: 'black', borderWidth: 2, marginBottom: 10, padding: 10, borderRadius: 5, marginLeft: 'auto', marginRight: 'auto' }} />

          <Text style={{ textAlign: 'center', paddingBottom: 7, fontWeight: 'bold' }}>Password :-</Text>
          <TextInput secureTextEntry={true} style={{ height: 35, width: 250, borderColor: 'black', borderWidth: 2, marginBottom: 10, padding: 10, borderRadius: 5, marginLeft: 'auto', marginRight: 'auto' }} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ padding: 10, width: 130, marginLeft: 'auto', marginRight: 'auto' }}>
              <Button color="black" title="Log in" onPress={() => navigation.navigate('End')} />
            </View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 15 }}>OR</Text>
            <View style={{ padding: 10, width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
              <Button color="black" title="Register" onPress={() => navigation.navigate('Register')} />
            </View>
          </View>
          <View style={{ padding: 10, width: 200, marginLeft: 'auto', marginRight: 'auto' }}>
            <Button color="black" title="Forgot Password?" onPress={() => navigation.navigate('Reset')} />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </View>
  );
};
const RegisterScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FFBA01', '#D0A819', '#99872B', '#666D41', '#335456']} style={{ flex: 1 }}>
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 50, fontStyle: "italic", color: 'black', marginTop: 22 }}>Argo</Text>

          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginTop: 5 }}>Registration</Text>

          <Image 
                style={{ width: 170, height: 150, marginLeft: 'auto', marginRight: 'auto' }} 
                source={{ uri: "https://cdn.dribbble.com/users/2213143/screenshots/7971141/media/184cdea9758c029d9feef05432222403.gif" }}>
          </Image>

          <Text style={{ textAlign: 'center', paddingBottom: 7, fontWeight: 'bold', marginTop: 20 }}>Email :-</Text>
          <TextInput style={{ height: 35, width: 300, borderColor: 'black', borderWidth: 2, marginBottom: 30, padding: 10, marginLeft: 'auto', marginRight: 'auto' }} />

          <Text style={{ textAlign: 'center', paddingBottom: 7, marginTop: -20, fontWeight: 'bold' }}>User Name :-</Text>
          <TextInput style={{ height: 35, width: 300, borderColor: 'black', borderWidth: 2, marginBottom: 30, padding: 10, marginLeft: 'auto', marginRight: 'auto' }} />

          <Text style={{ textAlign: 'center', paddingBottom: 7, marginTop: -20, fontWeight: 'bold' }}>Password :-</Text>
          <TextInput secureTextEntry={true} style={{ height: 35, width: 300, borderColor: 'black', borderWidth: 2, marginBottom: 30, padding: 10, marginLeft: 'auto', marginRight: 'auto' }} />

          <View style={{ padding: 10, width: 150, marginLeft: 'auto', marginRight: 'auto' }}>
            <Button color="black" title="Register" onPress={() => Alert.alert('You have been successfully registered!', 'Go back to home page to log in')} />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </View>
  );
};
const ResetScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FFBA01', '#D0A819', '#99872B', '#666D41', '#335456']} style={{ flex: 1 }}>
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 50, fontStyle: "italic", color: 'black', marginTop: 22 }}>Argo</Text>

          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', padding: 15 }}>Reset Password</Text>

          <Image 
                style={{ width: 250, height: 200, marginLeft: 'auto', marginRight: 'auto' }} 
                source={{ uri: "https://cdn.dribbble.com/users/1741026/screenshots/6549026/nest_forgot_password_dribbble.gif" }}>
          </Image>

          <Text style={{ textAlign: 'center', paddingBottom: 10, fontWeight: 'bold', paddingTop: 30, fontSize: 18 }}>Email :-</Text>
          <TextInput style={{ height: 40, width: 300, borderColor: 'black', borderWidth: 2, marginBottom: 30, marginLeft: 'auto', marginRight: 'auto', padding: 10 }} />

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button color="black" title="Send Verification Code" onPress={() => Alert.alert('Check your email to reset your password!')} />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </View>
  );
};
const Categories = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FFBA01', '#D0A819', '#99872B', '#666D41', '#335456']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 50, fontStyle: "italic", color: 'black', marginTop: 22 }}>Argo</Text>

        <View style={{ padding: 10, width: 170, marginLeft: 'auto', marginRight: 'auto', marginTop: 30 }}>
          <Button color="black" title="Fiction" onPress={() => navigation.navigate('Fiction')} />
        </View>
        <View style={{ padding: 10, width: 170, marginLeft: 'auto', marginRight: 'auto' }}>
          <Button color="black" title="Nonfiction" onPress={() => navigation.navigate('Nonfiction')} />
        </View>
        <View style={{ padding: 10, width: 170, marginLeft: 'auto', marginRight: 'auto' }}>
          <Button color="black" title="Drama" onPress={() => navigation.navigate('Drama')} />
        </View>
        <View style={{ padding: 10, width: 170, marginLeft: 'auto', marginRight: 'auto' }}>
          <Button color="black" title="Poetry" onPress={() => navigation.navigate('Poetry')} />
        </View>
        <View style={{ padding: 10, width: 170, marginLeft: 'auto', marginRight: 'auto' }}>
          <Button color="black" title="Folktale" onPress={() => navigation.navigate('Folktale')} />
        </View>
        <Image style={{ width: 220, height: 220, marginLeft: 'auto', marginRight: 'auto' }} source={{ uri: "https://media3.giphy.com/media/UQ84N6dIWObZWILqsE/giphy.gif" }}></Image>
      </LinearGradient>
    </View>
  )
};
const FictionScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FFBA01', '#D0A819', '#99872B', '#666D41', '#335456']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, fontStyle: "italic", color: 'black', marginTop: 22, textDecorationLine: 'underline' }}>FICTION</Text>
        <TextInput placeholder={'Search'} style={{ paddingHorizontal: 10, margin: 5, height: 40, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5 }} />

        <SafeAreaView style={{ marginBottom: 120 }}>
          <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images4.penguinrandomhouse.com/cover/9780593086865" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Blue Flowers{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Carola Saavedra{'\n\n'}</Text>
                Blue Flowers alternates between letters detailing the dissolution of a relationship, and is a dark portrait of desire, undermining accepted truths about love and sex, violence and fear, men and women.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $16.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images1.penguinrandomhouse.com/cover/9780307947727" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>The Sense of an Ending{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By,  Julian Barnes{'\n\n'}</Text>
                A novel so compelling that it begs to be read in a single setting, The Sense of an Ending has the psychological and emotional depth and sophistication of Henry James at his best, and is a stunning achievement in Julian Barnes’s oeuvre.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $17.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images4.penguinrandomhouse.com/cover/9780735218765" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Tin Man{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By,  Sarah Winman{'\n\n'}</Text>
                From internationally bestselling author Sarah Winman comes an unforgettable and heartbreaking novel celebrating love in all its forms, and the little moments that make up the life of one man.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $14.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images3.penguinrandomhouse.com/cover/9781101971727" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Mothering Sunday{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Graham Swift {'\n\n'}</Text>
                On an unseasonably warm spring day in 1924, twenty-two-year-old Jane Fairchild, a maid at an English country house, meets with her secret lover, the young heir of a neighboring estate. He is about to be married to a woman more befitting his social status, and the time has come to end the affair—but events unfold in ways Jane could never have predicted.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $15.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images1.penguinrandomhouse.com/cover/9781524749149" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>This Is Pleasure{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By,  Mary Gaitskill{'\n\n'}</Text>
                Starting with Bad Behavior in the 1980s, Mary Gaitskill has been writing about gender relations with searing, even prophetic honesty. In This Is Pleasure, she considers our present moment through the lens of a particular #MeToo incident.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $16.00</Text>
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>

      </LinearGradient>
    </View>
  )
};
const NonfictionScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FFBA01', '#D0A819', '#99872B', '#666D41', '#335456']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, fontStyle: "italic", color: 'black', marginTop: 22, textDecorationLine: 'underline' }}>NON-FICTION</Text>
        <TextInput placeholder={'Search'} style={{ paddingHorizontal: 10, margin: 5, height: 40, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5 }} />

        <SafeAreaView style={{ marginBottom: 120 }}>
          <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images.randomhouse.com/cover/9780525555414" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Flowers in the Gutter{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, K. R. Gaddy{'\n\n'}</Text>
                The tale of the Edelweiss Pirates reads like the most thrilling of war fiction, yet it’s the result of historian K. R. Gaddy’s meticulous research. These weren’t your typical pirates — rather, they were working-class German teenagers risking their lives to resist the Nazis during World War II. Their refusal of complacency, even as the Gestapo pursued and arrested them, is something we could all learn from.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $20.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images.randomhouse.com/cover/9780763687557" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Honor Girl{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Maggie Thrash{'\n\n'}</Text>
                The best memoirs are those that make you feel like the writer is a potential friend, even if their story is one that’s unfamiliar. In the case of Thrash’s graphic novel — a romantic, honest, and funny account of her falling hard for her female summer-camp counselor — the story does more than make you want to be one of Thrash’s friends. It makes you want to have under-the-stars big conversations with the ones you already have.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $18.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images.randomhouse.com/cover/9780553498080" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>The Borden Murders{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Sarah Miller{'\n\n'}</Text>
                There’s a reason why true crime is a genre that’s always popular: It’s addictive and thought-provoking. Miller does her homework, and tries to separate fact from fiction (news stories on Borden’s 1892 double murder trial were highly sensationalized). Readers won’t feel like they’re just gawking at a crime scene; they’ll actually learn something about the legal process in this fascinating account of an unsolved crime that’s hard to put down.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $21.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images.randomhouse.com/cover/9781101911761" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>We Should All Be Feminists{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Chimamanda Ngozi Adichie{'\n\n'}</Text>
                In December 2015, it was announced that every 16-year-old in Sweden would be given a copy of this book. Adapted from Adichie’s award-winning TEDx Talk of the same name (which blew up after Beyoncé sampled it), the book is a great stepping stone for discussions on gender roles and equity. Drawing from Adichie’s own experiences, it’s a key read for young women and men as they navigate the future together.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $13.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images.randomhouse.com/cover/9780525555414" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Flowers in the Gutter{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, K. R. Gaddy{'\n\n'}</Text>
                The tale of the Edelweiss Pirates reads like the most thrilling of war fiction, yet it’s the result of historian K. R. Gaddy’s meticulous research. These weren’t your typical pirates — rather, they were working-class German teenagers risking their lives to resist the Nazis during World War II. Their refusal of complacency, even as the Gestapo pursued and arrested them, is something we could all learn from.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $15.00</Text>
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>

      </LinearGradient>
    </View>
  )
};
const DramaScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FFBA01', '#D0A819', '#99872B', '#666D41', '#335456']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, fontStyle: "italic", color: 'black', marginTop: 22, textDecorationLine: 'underline' }}>DRAMA</Text>
        <TextInput placeholder={'Search'} style={{ paddingHorizontal: 10, margin: 5, height: 40, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5 }} />

        <SafeAreaView style={{ marginBottom: 120 }}>
          <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://www.adazing.com/wp-content/uploads/2019/03/51ompznRZKL._SX320_BO1204203200_.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Then She Was Gone{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Lisa Jewell{'\n\n'}</Text>
                Ellie Mack was the perfect daughter. She was fifteen, the youngest of three. She was beloved by her parents, friends, and teachers. She and her boyfriend made a teenaged golden couple. She was days away from an idyllic post-exams summer vacation, with her whole life ahead of her.And then she was gone.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $16.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://www.adazing.com/wp-content/uploads/2019/03/51iAx7x3HLL.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Before We Were Yours{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Lisa Wingate{'\n\n'}</Text>
                Memphis, 1939. Twelve-year-old Rill Foss and her four younger siblings live a magical life aboard their family’s Mississippi River shantyboat. But when their father must rush their mother to the hospital one stormy night, Rill is left in charge—until strangers arrive in force. Wrenched from all that is familiar and thrown into a Tennessee Children’s Home Society orphanage, the Foss children are assu#ae0000 that they will soon be returned to their parents—but they quickly realize the dark truth. At the mercy of the facility’s cruel director, Rill fights to keep her sisters and brother together in a world of danger and uncertainty.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $12.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://www.adazing.com/wp-content/uploads/2019/03/51j5p18mJNL._SX330_BO1204203200_.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Where the Crawdads Sing{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Delia Owens{'\n\n'}</Text>
                For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life–until the unthinkable happens.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $19.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://www.adazing.com/wp-content/uploads/2019/03/51NQbpTu0uL.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>The Silent Wife{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Kerry Fisher{'\n\n'}</Text>
                Lara’s life looks perfect on the surface. Gorgeous doting husband Massimo, sweet little son Sandro and the perfect home. Lara knows something about Massimo. Something she can’t tell anyone else or everything he has worked so hard for will be destroyed: his job, their reputation, their son. This secret is keeping Lara a prisoner in her marriage.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $18.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://www.adazing.com/wp-content/uploads/2019/03/51SO6dloswL.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Small Great Things{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, odi Picoult{'\n\n'}</Text>
                Ruth Jefferson is a labor and delivery nurse at a Connecticut hospital with more than twenty years’ experience. During her shift, Ruth begins a routine checkup on a newborn, only to be told a few minutes later that she’s been reassigned to another patient. The parents are white supremacists and don’t want Ruth, who is African American, to touch their child. The hospital complies with their request, but the next day, the baby goes into cardiac distress while Ruth is alone in the nursery. Does she obey orders or does she intervene?{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $15.00</Text>
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>

      </LinearGradient>
    </View>
  )
};
const PoetryScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FFBA01', '#D0A819', '#99872B', '#666D41', '#335456']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, fontStyle: "italic", color: 'black', marginTop: 22, textDecorationLine: 'underline' }}>POETRY</Text>
        <TextInput placeholder={'Search'} style={{ paddingHorizontal: 10, margin: 5, height: 40, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5 }} />

        <SafeAreaView style={{ marginBottom: 120 }}>
          <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://worldofwanderlust.com/wp-content/uploads/2018/09/The-Chaos-of-Longing.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>The Chaos of Longing{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, K.Y.Robinson{'\n\n'}</Text>
                There are poems for breakups and then there are K.Y. Robinson poems for breakups. From love to heartbreak and every emotion in between, The Chaos of Longing ticks all the boxes. This poetry book is one of the most highly rated modern-day poetry books of our time. And for good reason! It would make a great contribution to your bookshelf.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $14.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://worldofwanderlust.com/wp-content/uploads/2018/09/dirty-pretty-things.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Dirty Pretty Things{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Michael Faudet{'\n\n'}</Text>
                Through the themes of love, loss, relationships and sex, Michael Faudet explores short story narratives in his work Dirty Pretty Things. He is also the boyfriend of Lang Leav, who has written great poetry books herself and is also recommended on this list.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $15.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://worldofwanderlust.com/wp-content/uploads/2018/09/wow-book-club.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>The Sun and Her Flowers{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Rupi Kaur{'\n\n'}</Text>
                If you loved Milk and Honey then there’s no denying yourself a copy of Rupi Kaur’s second collection of work in The Sun and her Flowers. This book is another must-have for any modern-day aspiring poet or lover of poetry and if you ask me, it is every bit as perfect as her first.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $18.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://worldofwanderlust.com/wp-content/uploads/2018/09/Sea-of-strangers.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Sea of Strangers{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Lang Leav{'\n\n'}</Text>
                With multiple bestsellers to her name, Lang Leav came out with Sea of Strangers and yet again provided another must-have poetry book for your collection. This book explores more of the self beyond love and loss and is a more empowering take on the popular subjects.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $16.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://worldofwanderlust.com/wp-content/uploads/2018/09/bloom.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Bloom{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Beau Taplin{'\n\n'}</Text>
                Aussie author Beau Taplin first made waves on Instagram before his published body of work finally arrived to soothe our souls in the form of Bloom. This collection of poetry and prose is one of my favourites thanks to the versatility of subjects that get you thinking and help you realise how small a place you occupy in the world.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $17.00</Text>
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>

      </LinearGradient>
    </View>
  )
};
const FolktaleScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#FFBA01', '#D0A819', '#99872B', '#666D41', '#335456']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, fontStyle: "italic", color: 'black', marginTop: 22, textDecorationLine: 'underline' }}>FOLKTALE</Text>
        <TextInput placeholder={'Search'} style={{ paddingHorizontal: 10, margin: 5, height: 40, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5 }} />

        <SafeAreaView style={{ marginBottom: 120 }}>
          <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://www.colorincolorado.org/sites/default/files/styles/book_thumbnail/public/books/Jack.jpg?itok=_oVS7CsG" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Jack and the Beanstalk{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Nina Crews{'\n\n'}</Text>
                The traditional tale of a boy who planted magic beans is reimagined as a city story of a spell broken. Illustrations are photographs that have been manipulated for good effect.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $13.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/51om6KmbRgL._SX431_BO1,204,203,200_.jpg" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Little Red Riding Hood{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Jerry Pinkney{'\n\n'}</Text>
                When the girl in the red cape goes to visit her grandmother who lives on the other side of the snow-filled forest, she is approached by a sly wolf who then precedes her to her destination. While the story is well known, this version is distinguished by opulent illustrations that depict a brown-skinned child.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $10.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://www.colorincolorado.org/sites/default/files/styles/book_thumbnail/public/books/the_lion_and_the_mouse.jpg?itok=X_gZc4KC" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>The Lion & the Mouse{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Jerry Pinkney{'\n\n'}</Text>
                The well-known fable about how the smallest creature — a mouse — saves the majestic lion is a tale of kindness returned. Here it is effectively recast as a wordless story in a new setting. Stunning illustrations are expressive and emotive, evoking Africa's Serengeti while retaining the tale's power.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $11.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://www.colorincolorado.org/sites/default/files/styles/book_thumbnail/public/books/dona_flor.jpg?itok=rtIJ44qU" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Doña Flor{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Pat Mora{'\n\n'}</Text>
                Dona Flor has gigantic proportions and unusual skills such as understanding the language of plants. Eventually, her talents are appreciated by the villagers in this attractively illustrated, richly told original tale. Winner of Pura Belpré Award for Illustration and the Pura Belpré Honor Award for narrative. Also available in Spanish.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $12.00</Text>
              </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
              <Image style={{ width: 120, height: 175, marginBottom: 'auto', marginTop: 'auto' }}
                source={{ uri: "https://www.colorincolorado.org/sites/default/files/styles/book_thumbnail/public/books/Gourd.jpg?itok=XI1JLo14" }}>
              </Image>
              <Text style={{ color: '#335456', width: 210, paddingLeft: 5, textAlign: 'center' }}>
                <Text style={{ color: '#FFBA01', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Grandma and the Great Gourd{'\n'}</Text>
                <Text style={{ color: '#666D41', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>By, Chitra Banerjee Divakaruni{'\n\n'}</Text>
                An old woman left her small village to visit her daughter and granddaughter, telling three hungry predators to wait to eat her until she is plumped up on her way back. How the women outwit the bear, fox and tiger is satisfyingly told and handsomely illustrated in saturated color illustrations in this Indian folktale that the author recalls from her childhood.{'\n\n'}
                <Text style={{ color: '#ae0000', width: 230, textAlign: 'center', fontWeight: 'bold', fontSize: 13, fontStyle: 'italic' }}>Price = $10.00</Text>
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>

      </LinearGradient>
    </View>
  )
};

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Start() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Reset" component={ResetScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
};
function End() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name="Fiction" component={FictionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Nonfiction" component={NonfictionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Drama" component={DramaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Poetry" component={PoetryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Folktale" component={FolktaleScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
};
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator shifting={false} inactiveColor="#335456" activeColor="#D0A819" barStyle={{ backgroundColor: 'black', borderColor: 'black', borderWidth: 1 }}>
        <Tab.Screen name="Start" component={Start} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />) }} />
        <Tab.Screen name="End" component={End} options={{ tabBarLabel: 'Library', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="library" color={color} size={26} />) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

