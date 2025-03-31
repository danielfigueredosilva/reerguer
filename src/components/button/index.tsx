//importa os componentes da biblioteca do react native
import { TouchableOpacity, TouchableOpacityProps/*pega todas as propriedades do touchableOpacity */, Text} from "react-native"

//importa a estilização
import { styles } from "./styles"

/*tipagem da propriedade com typeScript */
type Props = TouchableOpacityProps & {
    title: string
}

export function Button({ title, ...rest}: Props/* informa que o title tem a tipagem string */){
    return (
        <TouchableOpacity activeOpacity={0.6}/*controlador de opacidade*/ style={styles.button} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}