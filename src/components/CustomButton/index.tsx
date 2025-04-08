//importa os componentes da biblioteca do react native
import { TouchableOpacity, TouchableOpacityProps/*pega todas as propriedades do touchableOpacity */, Text} from "react-native"
import React from "react"
//importa a estilização
import { styles } from "./styles"

/*tipagem da propriedade com typeScript */
type Props = TouchableOpacityProps & {
    title: string;
}

export function CustomButton({ title,  ...rest}: Props/* informa que o title tem a tipagem string */){
    return (
        <TouchableOpacity
          activeOpacity={0.6} // controla a opacidade no toque
          style={styles.button} // aplica o estilo customizado

          {...rest} // espalha as props herdadas (onPress, disabled, etc.)
        >
          <Text style={styles.title}>{title}</Text> {/* Exibe o texto do botão */}
        </TouchableOpacity>
      );
}