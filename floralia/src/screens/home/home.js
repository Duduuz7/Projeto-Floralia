import { useEffect, useState } from "react";
import { Container, ContainerProduto, ContainerSearch, FlatContainer, FlatContainerHome } from "../../components/container/style"
import { HeaderComponent } from "../../components/header/header"
import { InputSearch } from "../../components/input/style"
import { FontAwesome } from '@expo/vector-icons';
import { CardHome } from "../../components/cards/cardHome/cardHome";
import api from "../../services/services";

export const Home = () => {

    const [produto, setProduto] = useState([]);

    async function ListarProdutos() {
        await api.get(`/Produto/ListarTodos`).then(response => {
            console.log(123);
            setProduto(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        ListarProdutos()
    }, [])

    return (
        <Container>
            <HeaderComponent />

            <ContainerSearch>
                <InputSearch />
                <FontAwesome name="search" size={22} color="#B83B5E" style={{ position: 'absolute', right: 10, bottom: 15 }} />
            </ContainerSearch>

            <ContainerProduto>
                <FlatContainerHome
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={produto}
                    numColumns={3}
                    // horizontal={true}
                    renderItem={({ item }) => (
                        <CardHome
                            imagem={item.foto}
                            nome={item.nome}
                            preco={item.preco}
                        />


                    )}

                />
            </ContainerProduto>

        </Container>
    )
} 