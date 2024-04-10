import {useState} from "react";
import {Alert, Image, View, StatusBar} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, Redirect } from 'expo-router'

import { colors } from "@/styles/colors"
import { Input } from "@/components/input";
import Button from "@/components/button";
import { api } from '@/server/api';
import { useBadgeStore } from '@/store/badge-store'

export default function Home(){
    const [code, setCode] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const badgeStore = useBadgeStore();

    const handleAccessCredential = async()  => {
        try {
            if (!code.trim()) {
              return Alert.alert("Ingresso", "Informe o código do ingresso!")
            }
      
            setIsLoading(true)
      
            const { data } = await api.get(`/attendees/${code}/badge`)
            badgeStore.save(data.badge)
            console.log("DATA: " + data.badge);
        } catch (error) {
            console.log(error)
            setIsLoading(false)
      
            Alert.alert("Ingresso", "Ingresso não encontrado!")
        }
    }

    if (badgeStore.data?.checkInURL) {
        return <Redirect href="/ticket" />
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
                    <Input.Field placeholder="Código do ingresso" onChangeText={setCode}/>
                    <MaterialCommunityIcons
                        name="ticket-confirmation-outline"
                        size={20}
                        color={colors.green[200]}
                    />
                </Input>
                
                <Button 
                    title="Acessar credencial" 
                    onPress={handleAccessCredential}
                    isLoading={isLoading}
                />
                
                <Link href="/register" className="text-gray-100 text-base font-bold text-center mt-8">
                    Ainda não possui ingresso?
                </Link>
            </View>
        </View>
    )
}
