import { useEffect, useState } from "react";
import { Container, ContainerProduto, ContainerSearch, FlatContainer, FlatContainerHome } from "../../components/container/style"
import { HeaderComponent } from "../../components/header/header"
import { InputSearch } from "../../components/input/style"
import { FontAwesome } from '@expo/vector-icons';
import { CardHome } from "../../components/cards/cardHome/cardHome";
import api from "../../services/services";
import { Logout, tokenClean, userDecodeToken } from "../../utils/auth";
import { ModalCarrinho } from "../../components/modalEncomenda/ModalCarrinho";
import { Text, TouchableOpacity } from "react-native";

export const Home = ({ navigation }) => {

    const [produto, setProduto] = useState([]);
    const [produtosP, setProdutosPesquisados] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const [showModalCarrinho, setShowModalCarrinho] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState();
    const [idUsuario, setIdUsuario] = useState();


    async function ListarProdutos() {
        await api.get(`/Produto/ListarTodos`).then(response => {
            console.log(123);
            setProduto(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    async function PesquisarProdutos(nome) {

        try {
            if (nome.trim() === "") {
                setProdutosPesquisados([]); // Limpa os produtos pesquisados se a pesquisa estiver vazia
            } else {
                const response = await api.get(`/Produto/BuscaPorNome?nome=${nome}`);
                setProdutosPesquisados(response.data);
                console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }

    };

    const [tokenClear, setTokenClear] = useState('')

    const [profile, setProfile] = useState({})

    async function ProfileLoad() {
        const tokenClear = await tokenClean()
        setTokenClear(tokenClear)
        const token = await userDecodeToken();
        if (token != null) {
            setProfile(token)
            setIdUsuario(token.user)
            // console.log(token);
        }
    }
    
    function MostrarModal(modal, produto) {

        setProdutoSelecionado(produto)

        if (modal == 'carrinho') {
            setShowModalCarrinho(true)
        }
    }

        //passar o idProduto pelo modal
       


    useEffect(() => {
        ProfileLoad()
    }, [profile])
    // const handlePesquisa = (nome) => {
    //     PesquisarProdutos(nome);
    // };


    useEffect(() => {
        ListarProdutos()
    }, [])

    useEffect(() => {
        PesquisarProdutos(pesquisa)
    }, [pesquisa])

    return (
        <Container>
            <HeaderComponent navigation={navigation}/>

            <TouchableOpacity style={{width: 20, height: 20}} onPress={() => Logout()}>
                        <Text>Logout</Text>
            </TouchableOpacity>
            <ContainerSearch>
                <InputSearch
                    onChangeText={(txt) => setPesquisa(txt)}
                />
                <FontAwesome name="search" size={22} color="#B83B5E" style={{ position: 'absolute', right: 10, bottom: 15 }} />
            </ContainerSearch>

            <ContainerProduto>
                <FlatContainerHome
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={pesquisa ? produtosP : produto}
                    numColumns={3}
                    // horizontal={true}
                    renderItem={({ item }) => (
                        <CardHome
                        onpressProduct={() => MostrarModal('carrinho', item)}
                            imagem={item.foto}
                            nome={item.nome}
                            preco={item.preco}
                        />


                    )}

                />
            </ContainerProduto>

            

            <ModalCarrinho
            navigation={navigation}
            visible={showModalCarrinho}
            produto={produtoSelecionado}
            setShowModalCarrinho={setShowModalCarrinho}
            profile={profile}
            />

        </Container>
    )
} 