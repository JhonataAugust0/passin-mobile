import {Alert, Image, View} from 'react-native'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import {Link, router} from 'expo-router'

import { colors } from "@/styles/colors"
import { Input } from "@/components/input";
import Button from "@/components/button";
import {StatusBar} from "react-native";
import {useState} from "react";


export default function Home(){
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleRegister = ()  => {
        if (!name.trim() || !email.trim()) {
            return Alert.alert('Inscrição', 'Preencha todos os campos');
        }
        router.push('/ticket');
    }

    return (
        <View className="flex-1 bg-green-500 items-center justify-center p-8">
            <StatusBar barStyle="light-content"/>
            <Image
                source={require("@/assets/logo.png")}
                className="h-16"
                resizeMode="contain"
            />
            <View className="w-full mt-12 gap-3">
                <Input>
                    <Input.Field
                        placeholder="Nome completo"
                        onChangeText={setName}
                    />
                    <FontAwesome6
                        name="user-circle"
                        size={20}
                        color={colors.green[200]}
                    />
                </Input>

                <Input>
                    <Input.Field
                        placeholder="Código do ingresso"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name="alternate-email"
                        size={20}
                        color={colors.green[200]}
                    />
                </Input>

                <Button title="Realizar inscrição" onPress={handleRegister}/>
                <Link href="/" className="text-gray-100 text-base font-bold text-center mt-8">
                    Já possui ingresso?
                </Link>
            </View>
        </View>
    )
}
