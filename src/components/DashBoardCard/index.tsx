import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./style"; // importa o style externo

// Tipagem das props, herdando de TouchableOpacityProps
type Props = TouchableOpacityProps & {
  title: string;
  link: string;
};

export function DashboardCard({ title, link, ...rest }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.card}
      onPress={() => router.push(link as any)} // navega ao clicar
      {...rest}
    >
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );
}
